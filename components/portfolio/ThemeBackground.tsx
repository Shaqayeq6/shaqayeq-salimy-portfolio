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
  isClick: boolean;
};

function getRgb(color: string): string {
  const rgba = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgba) return `${rgba[1]},${rgba[2]},${rgba[3]}`;

  const hex = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex) {
    return `${parseInt(hex[1], 16)},${parseInt(hex[2], 16)},${parseInt(
      hex[3],
      16
    )}`;
  }

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
  const lastMouseRipple = useRef(0);

  useEffect(() => {
    themeRgbRef.current = getRgb(currentTheme.particleB);
  }, [currentTheme]);

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

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const rgb = themeRgbRef.current;

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += ripple.speed;

        const progress = ripple.radius / ripple.maxRadius;
        const currentOpacity = ripple.opacity * (1 - progress);

        if (
          currentOpacity <= 0.005 ||
          ripple.radius >= ripple.maxRadius
        ) {
          return false;
        }

        ctx.beginPath();
        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.radius,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(${rgb},${currentOpacity})`;
        ctx.lineWidth = ripple.lineWidth;
        ctx.stroke();

        if (ripple.isClick && progress < 0.15) {
          const fillOpacity =
            ripple.opacity * 0.06 * (1 - progress / 0.15);

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
      <canvas
        ref={canvasRef}
        className="fixed inset-0"
        style={{ zIndex: 0, pointerEvents: "none" }}
      />

      <div
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 1,
          background: `radial-gradient(ellipse 58% 100% at 50% 50%, ${currentTheme.sidePanel}e8 0%, transparent 100%)`,
          transition: "background 0.5s",
        }}
      />

      <main
        className="relative mx-auto min-h-screen max-w-[1100px] overflow-x-hidden shadow-[0_0_60px_rgba(0,0,0,0.2)] transition-colors duration-300"
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
