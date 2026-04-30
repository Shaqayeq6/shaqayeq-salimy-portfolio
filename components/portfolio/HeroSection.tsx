"use client";

import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import { RevealDown, RevealLeft, RevealButtonRow } from "@/components/portfolio/SectionMotion";

type HeroSectionProps = {
  currentTheme: ThemeConfig;
  activeProjectId: string;
  setActiveProjectId: Dispatch<SetStateAction<string>>;
  scrollY: number;
  setContactOpen: Dispatch<SetStateAction<boolean>>;
};

const ORBIT_RADIUS = 160;
const CONTAINER_SIZE = 420;
const CENTER = CONTAINER_SIZE / 2;
const CIRCLE_SIZE = 88;

export default function HeroSection({
  currentTheme,
  activeProjectId,
  setActiveProjectId,
  setContactOpen,
}: HeroSectionProps) {
  const activeProject =
    projects.find((p) => p.id === activeProjectId) ?? projects[0];

  const [orbitAngle, setOrbitAngle] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let lastY = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastY;
      lastY = current;
      setOrbitAngle((prev) => prev + delta * 0.12);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const orbitItems = useMemo(() => {
    return projects.map((project, index) => {
      const baseAngle = (index / projects.length) * 2 * Math.PI;
      const angle = baseAngle + (orbitAngle * Math.PI) / 180;

      const rawX =
        CENTER + ORBIT_RADIUS * Math.cos(angle) - CIRCLE_SIZE / 2;
      const rawY =
        CENTER + ORBIT_RADIUS * Math.sin(angle) - CIRCLE_SIZE / 2;

      const x = Math.round(rawX * 1000) / 1000;
      const y = Math.round(rawY * 1000) / 1000;

      return { project, x, y };
    });
  }, [orbitAngle]);

  const sectionTitle = "text-xs uppercase tracking-[0.3em] font-medium";

  return (
    <section className="relative z-10 pt-16">
      <div className="mx-auto grid min-h-[78vh] max-w-5xl items-center gap-14 px-6 pt-16 pb-8 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-24">
        <div className="space-y-8">
          <p className={sectionTitle} style={{ color: currentTheme.textMuted }}>
            Computer Science Graduate - York University
          </p>
          <RevealDown>
          <h1 className="text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
            Shaqayeq
            <br />
            Salimy
          </h1>
          </RevealDown>
          <RevealLeft delay={0.08}> 
          <p
            className="max-w-2xl text-base leading-9"
            style={{ color: currentTheme.textSoft }}
          >
            I design and build scalable software systems across web, mobile, and backend environments, with a strong focus on clean architecture, practical solutions, and intuitive user experiences.
          </p>
          </RevealLeft>

          <RevealButtonRow delay={0.15} className="flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-4">
            <a
    href="#projects"
    style={{
      background: currentTheme.accent,
      color: currentTheme.accentText,
    }}
    className="rounded-full px-5 py-3 text-sm font-medium"
  >
    Projects
  </a>

  {[
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Hobbies", href: "#joy" },
  ].map((item) => (
    <a
      key={item.label}
      href={item.href}
      style={{
        borderColor: currentTheme.border,
        color: currentTheme.text,
      }}
      className="rounded-full border px-5 py-3 text-sm font-medium"
    >
      {item.label}
    </a>
  ))}

  <button
    type="button"
    onClick={() => setContactOpen(true)}
    style={{
      borderColor: currentTheme.border,
      color: currentTheme.text,
    }}
    className="rounded-full border px-5 py-3 text-sm font-medium"
  >
    Contact
  </button>
                    </div>
          </RevealButtonRow>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute blur-3xl"
            style={{
              width: `${ORBIT_RADIUS * 2.5}px`,
              height: `${ORBIT_RADIUS * 2.5}px`,
              background: currentTheme.glow,
              borderRadius: "999px",
            }}
          />

          <div
            className="relative"
            style={{
              width: `${CONTAINER_SIZE}px`,
              height: `${CONTAINER_SIZE}px`,
            }}
          >
            <div
              className="pointer-events-none absolute rounded-full"
              style={{
                width: `${ORBIT_RADIUS * 2}px`,
                height: `${ORBIT_RADIUS * 2}px`,
                top: `${CENTER - ORBIT_RADIUS}px`,
                left: `${CENTER - ORBIT_RADIUS}px`,
                border: `1px dashed ${currentTheme.border}`,
                opacity: 0.25,
              }}
            />

            {orbitItems.map(({ project, x, y }) => {
              const isActive = activeProjectId === project.id;

              return (
                <button
                  key={`orbit-${project.id}`}
                  type="button"
                  onClick={() => setActiveProjectId(project.id)}
                  aria-label={`Select ${project.title}`}
                  className="absolute overflow-hidden rounded-full transition duration-300 hover:scale-110"
                  style={{
                    width: `${CIRCLE_SIZE}px`,
                    height: `${CIRCLE_SIZE}px`,
                    left: `${x}px`,
                    top: `${y}px`,
                    border: `${isActive ? 3 : 2}px solid ${
                      isActive ? currentTheme.accent : currentTheme.border
                    }`,
                    boxShadow: isActive
                      ? `0 0 0 4px ${currentTheme.glow}, 0 8px 28px rgba(0,0,0,0.5)`
                      : "0 4px 14px rgba(0,0,0,0.3)",
                    backgroundColor: currentTheme.surface,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}

            <div
              className="pointer-events-none absolute flex flex-col items-center justify-center text-center"
              style={{
                width: "180px",
                top: `${CENTER - 70}px`,
                left: `${CENTER - 90}px`,
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.28em]"
                style={{ color: currentTheme.textMuted }}
              >
                Selected Project
              </p>

              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeProject.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3 text-xl font-light leading-tight"
                >
                  {activeProject.title}
                </motion.h2>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeProject.category}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 text-sm"
                  style={{ color: currentTheme.textSoft }}
                >
                  {activeProject.category}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}