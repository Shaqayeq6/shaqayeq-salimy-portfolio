"use client";

import { skills } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import { RevealUp, RevealCard } from "@/components/portfolio/SectionMotion";

type SkillsSectionProps = {
  currentTheme: ThemeConfig;
};

export default function SkillsSection({ currentTheme }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 md:px-10 lg:px-24">
      
      {/* Section header with line */}
      <div className="mb-10 flex items-center gap-4">
        <div
          className="h-[2px] flex-1 rounded-full"
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
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
          className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
        >
          Skills
        </div>
      </div>

      <RevealUp>
        <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
          Technical skills across development, design, and data
        </h2>
      </RevealUp>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <RevealCard key={skill.name} delay={index * 0.04}>
            <div
              style={{
                borderColor: currentTheme.border,
                background: currentTheme.surfaceSoft,
              }}
              className="rounded-[1.5rem] border p-5"
            >
              <div className="flex items-center gap-4">
                {/* Icon container with brand color tint */}
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    background: skill.color ? `${skill.color}22` : currentTheme.surface,
                    border: `1px solid ${skill.color ? `${skill.color}33` : currentTheme.border}`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={22}
                    height={22}
                    className="object-contain"
                    style={{ display: "block" }}
                  />
                </div>

                <div>
                  <p className="text-base font-medium">{skill.name}</p>
                  <p className="text-sm" style={{ color: currentTheme.textMuted }}>
                    {skill.group}
                  </p>
                </div>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
