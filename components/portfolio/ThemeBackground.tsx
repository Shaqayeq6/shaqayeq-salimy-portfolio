"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ThemeConfig } from "@/lib/types";

type ThemeBackgroundProps = {
  currentTheme: ThemeConfig;
  children: ReactNode;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  speed: number;
  lineWidth: number;
  isClick: boolean; // click ripples are larger + more opaque
};

function getRgb(color: string): string {
  const rgba = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgba) return `${rgba[1]},${rgba[2]},${rgba[3]}`;
  const hex = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex)
    return `${parseInt(hex[1], 16)},${parseInt(hex[2], 16)},${parseInt(hex[3], 16)}`;
  return "160,160,160";
}

export default function ThemeBackground({
  currentTheme,
  children,
}: ThemeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const rafRef = useRef<number | null>(null);
  const themeRgbRef = useRef(getRgb(currentTheme.particleB));
  const lastMouseRipple = useRef(0); // throttle mouse ripples

  // Update theme color ref on theme change
  useEffect(() => {
    themeRgbRef.current = getRgb(currentTheme.particleB);
  }, [currentTheme]);

  // Resize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Click → big ripple burst (3 concentric rings with slight delay feel)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const now = performance.now();
      // Spawn 3 rings with slightly different speeds for depth
      [0, 1, 2].forEach((i) => {
        ripplesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          radius: 4 + i * 6,
          maxRadius: 120 + i * 40,
          opacity: 0.7 - i * 0.12,
          speed: 1.8 + i * 0.5,
          lineWidth: 1.5 - i * 0.3,
          isClick: true,
        });
      });
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // Mouse move → small trailing ripples (throttled to every 80ms)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseRipple.current < 80) return;
      lastMouseRipple.current = now;
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2,
        maxRadius: 55,
        opacity: 0.35,
        speed: 1.1,
        lineWidth: 0.8,
        isClick: false,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const rgb = themeRgbRef.current;

      // Update + draw each ripple
      ripplesRef.current = ripplesRef.current.filter((r) => {
        r.radius += r.speed;
        // Fade opacity based on how far along the ripple is
        const progress = r.radius / r.maxRadius;
        const currentOpacity = r.opacity * (1 - progress);

        if (currentOpacity <= 0.005 || r.radius >= r.maxRadius) return false;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb},${currentOpacity})`;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();

        // For click ripples, add a very faint inner fill glow at birth
        if (r.isClick && progress < 0.15) {
          const fillOpacity = r.opacity * 0.06 * (1 - progress / 0.15);
          ctx.fillStyle = `rgba(${rgb},${fillOpacity})`;
          ctx.fill();
        }

        return true;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: currentTheme.sidePanel }}
    >
      {/* ── Ripple canvas — fixed, full viewport, behind everything ── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0"
        style={{ zIndex: 0, pointerEvents: "none" }}
      />

      {/* ── Soft vignette so ripples fade toward center / content panel edges ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: `radial-gradient(ellipse 52% 100% at 50% 50%, ${currentTheme.sidePanel}ee 0%, transparent 100%)`,
          transition: "background 0.5s",
        }}
      />

      {/* ── Content panel ── */}
      <main
        className="relative mx-auto min-h-screen max-w-[1000px] overflow-x-hidden shadow-[0_0_60px_rgba(0,0,0,0.2)] transition-colors duration-300"
        style={{
          background: currentTheme.background,
          color: currentTheme.text,
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{ background: currentTheme.overlay }}
          className="pointer-events-none absolute inset-0"
        />
        {children}
      </main>
    </div>
  );
}
