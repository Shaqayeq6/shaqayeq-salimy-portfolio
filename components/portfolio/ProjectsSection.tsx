"use client";

import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
  RevealCard,
  RevealButtonRow,
} from "@/components/portfolio/SectionMotion";

type ProjectsSectionProps = {
  currentTheme: ThemeConfig;
  activeProjectId: string;
  setActiveProjectId: Dispatch<SetStateAction<string>>;
};

export default function ProjectsSection({
  currentTheme,
  activeProjectId,
  setActiveProjectId,
}: ProjectsSectionProps) {
  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0];

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10 md:px-10 lg:px-24"
    >
      {/* Section header with line */}
      <div className="mb-10 flex items-center gap-4">
        <div
          className="h-[2px] flex-1 rounded-full relative"
          style={{
            background: currentTheme.border,
            boxShadow: `0 0 8px ${currentTheme.border}`,
            opacity: 0.8,
          }}
        />
        <div
          style={{
            background: currentTheme.surfaceSoft,
            color: currentTheme.textMuted,
            borderColor: currentTheme.border,
            boxShadow: `0 4px 12px rgba(0,0,0,0.15)`,
          }}
          className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
        >
          Projects
        </div>
      </div>

      <div className="space-y-4">
        <RevealUp>
          <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
            Selected projects with an interactive featured case-study reveal
          </h2>
        </RevealUp>

        <RevealLeft delay={0.08}>
          <p
            className="max-w-3xl text-base leading-8"
            style={{ color: currentTheme.textSoft }}
          >
            Select a project below to explore its case study and learn more about the design and development process
          </p>
        </RevealLeft>
      </div>

      {/* Project selector buttons */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <RevealCard key={project.id} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setActiveProjectId(project.id)}
              style={{
                borderColor:
                  activeProjectId === project.id
                    ? currentTheme.textMuted
                    : currentTheme.border,
                background:
                  activeProjectId === project.id
                    ? currentTheme.surface
                    : currentTheme.surfaceSoft,
              }}
              className="flex w-full items-center gap-4 rounded-full border px-5 py-5 text-left transition hover:scale-[1.01]"
            >
              <div
                className="h-16 w-16 overflow-hidden rounded-full border shrink-0"
                style={{ borderColor: currentTheme.border }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-[0.24em]"
                  style={{ color: currentTheme.textMuted }}
                >
                  {project.id}
                </p>
                <p className="mt-1 text-base">{project.title}</p>
              </div>
            </button>
          </RevealCard>
        ))}
      </div>

      {/* Active project detail panel */}
      <RevealUp delay={0.1}>
        <motion.div
          key={`detail-${activeProject.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            borderColor: currentTheme.border,
            background: currentTheme.surface,
          }}
          className="mt-10 overflow-hidden rounded-[2.25rem] border"
        >
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: project image */}
            <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[34rem]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.28em] text-white/65">
                  {activeProject.category}
                </p>
                <h3 className="mt-3 text-4xl font-light leading-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Right: project info */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div>
                {/* Project ID + year */}
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.24em]"
                    style={{ color: currentTheme.textMuted }}
                  >
                    Project {activeProject.id}
                  </p>
                  <p style={{ color: currentTheme.textMuted }}>
                    {activeProject.year}
                  </p>
                </div>

                {/* Divider line + project type label */}
                <div className="mt-3 flex items-center gap-3">
                  <div
                    className="h-px flex-1"
                    style={{ background: currentTheme.border }}
                  />
                  <span
                    className="text-[10px] uppercase tracking-[0.2em] rounded-full px-2.5 py-1 shrink-0"
                    style={{
                      color: currentTheme.textMuted,
                      background: currentTheme.surfaceSoft,
                      border: `1px solid ${currentTheme.border}`,
                    }}
                  >
                    {activeProject.type === "school"
                      ? "🎓 School Project"
                      : "✦ Personal Project"}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="mt-8 text-base leading-9"
                  style={{ color: currentTheme.textSoft }}
                >
                  {activeProject.description}
                </p>

                {/* Tech tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {activeProject.tech.map((item) => (
                    <span
                      key={item}
                      style={{
                        borderColor: currentTheme.border,
                        color: currentTheme.textSoft,
                      }}
                      className="rounded-full border px-3 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub only — Live Demo removed */}
              <RevealButtonRow delay={0.15} className="mt-10 flex gap-3">
                <>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: currentTheme.accent,
                      color: currentTheme.accentText,
                    }}
                    className="rounded-full px-5 py-3 text-sm font-medium"
                  >
                    GitHub
                  </a>
                </>
              </RevealButtonRow>
            </div>
          </div>
        </motion.div>
      </RevealUp>
    </section>
  );
}
