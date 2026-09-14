"use client";

import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
  RevealCard,
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
  const toggleProject = (projectId: string) => {
    setActiveProjectId((current) => (current === projectId ? "" : projectId));
  };

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-6 py-10 md:px-10 lg:px-20"
    >
      <div className="mb-6 flex items-center gap-4">
        <div
          className="h-px flex-1 rounded-full"
          style={{
            background: currentTheme.border,
            boxShadow: `0 0 6px ${currentTheme.border}`,
            opacity: 0.75,
          }}
        />
        <div
          style={{
            background: currentTheme.surfaceSoft,
            color: currentTheme.textMuted,
            borderColor: currentTheme.border,
          }}
          className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
        >
          Projects
        </div>
      </div>

      <RevealUp>
        <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl">
          Selected projects
        </h2>
      </RevealUp>

      <RevealLeft delay={0.08}>
        <p
          className="mt-3 max-w-2xl text-sm leading-7 sm:text-base"
          style={{ color: currentTheme.textSoft }}
        >
          Select a project to expand its details, technologies, and development
          focus.
        </p>
      </RevealLeft>

      <div className="mt-7 space-y-3">
        {projects.map((project, index) => {
          const isOpen = activeProjectId === project.id;

          return (
            <RevealCard key={project.id} delay={index * 0.035}>
              <motion.article
                layout
                style={{
                  borderColor: isOpen
                    ? currentTheme.textMuted
                    : currentTheme.border,
                  background: isOpen
                    ? currentTheme.surface
                    : currentTheme.surfaceSoft,
                }}
                className="overflow-hidden rounded-[1.6rem] border"
              >
                <button
                  type="button"
                  onClick={() => toggleProject(project.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <div
                    className="h-12 w-12 shrink-0 overflow-hidden rounded-full border"
                    style={{ borderColor: currentTheme.border }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <p
                        className="text-[10px] uppercase tracking-[0.22em]"
                        style={{ color: currentTheme.textMuted }}
                      >
                        {project.id}
                      </p>
                      <span
                        className="text-[10px] uppercase tracking-[0.18em]"
                        style={{ color: currentTheme.textMuted }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <p className="mt-1 truncate text-sm font-medium sm:text-base">
                      {project.title}
                    </p>
                  </div>

                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-light"
                    style={{
                      borderColor: currentTheme.border,
                      color: currentTheme.textSoft,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`details-${project.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="border-t px-4 pb-5 pt-5 sm:px-5"
                        style={{ borderColor: currentTheme.border }}
                      >
                        <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
                          <div
                            className="overflow-hidden rounded-[1.2rem] border"
                            style={{ borderColor: currentTheme.border }}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-44 w-full object-cover md:h-full md:min-h-[13rem]"
                            />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]"
                                style={{
                                  borderColor: currentTheme.border,
                                  color: currentTheme.textMuted,
                                }}
                              >
                                {project.type === "school"
                                  ? "🎓 School Project"
                                  : "✦ Personal Project"}
                              </span>

                              <span
                                className="text-xs"
                                style={{ color: currentTheme.textMuted }}
                              >
                                {project.year}
                              </span>
                            </div>

                            <p
                              className="mt-4 text-sm leading-7 sm:text-base"
                              style={{ color: currentTheme.textSoft }}
                            >
                              {project.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tech.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border px-3 py-1 text-xs"
                                  style={{
                                    borderColor: currentTheme.border,
                                    color: currentTheme.textSoft,
                                  }}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            {project.github && project.github !== "#" && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex rounded-full px-4 py-2 text-sm font-medium"
                                style={{
                                  background: currentTheme.accent,
                                  color: currentTheme.accentText,
                                }}
                              >
                                View GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}
