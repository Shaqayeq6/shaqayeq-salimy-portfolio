"use client";

import { skills } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealCard,
} from "@/components/portfolio/SectionMotion";

type SkillsSectionProps = {
  currentTheme: ThemeConfig;
};

export default function SkillsSection({
  currentTheme,
}: SkillsSectionProps) {
  return (
    <section
      id="skills"
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
          Skills
        </div>
      </div>

      <RevealUp>
        <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl">
          Technical skills across development, design, and data
        </h2>
      </RevealUp>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <RevealCard key={skill.name} delay={index * 0.03}>
            <div
              style={{
                borderColor: currentTheme.border,
                background: currentTheme.surfaceSoft,
              }}
              className="rounded-[1.25rem] border p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: skill.color
                      ? `${skill.color}22`
                      : currentTheme.surface,
                    border: `1px solid ${
                      skill.color ? `${skill.color}33` : currentTheme.border
                    }`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={18}
                    height={18}
                    className="object-contain"
                    style={{ display: "block" }}
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p
                    className="text-xs"
                    style={{ color: currentTheme.textMuted }}
                  >
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
