"use client";

import { experiences } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
  RevealRight,
} from "@/components/portfolio/SectionMotion";

type ExperienceSectionProps = {
  currentTheme: ThemeConfig;
};

export default function ExperienceSection({
  currentTheme,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
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
          Experience
        </div>
      </div>

      <RevealUp>
        <h2 className="text-2xl font-light leading-snug sm:text-3xl">
          Professional and academic experience
        </h2>
      </RevealUp>

      <div className="mt-7">
        {experiences.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            className="grid gap-3 border-b py-6 last:border-0 md:grid-cols-[8rem_1fr] md:gap-6"
            style={{ borderColor: currentTheme.border }}
          >
            <RevealLeft>
              <p
                className="text-sm font-medium"
                style={{ color: currentTheme.textMuted }}
              >
                {item.period}
              </p>
            </RevealLeft>

            <div>
              <RevealRight delay={0.04}>
                <h3 className="text-base font-semibold leading-6">
                  {item.title} · {item.organization}
                </h3>
              </RevealRight>

              <RevealRight delay={0.08}>
                <p
                  className="mt-2 max-w-3xl text-sm leading-7 sm:text-base"
                  style={{ color: currentTheme.textSoft }}
                >
                  {item.description}
                </p>
              </RevealRight>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: currentTheme.surfaceSoft,
                      color: currentTheme.text,
                      borderColor: currentTheme.border,
                    }}
                    className="rounded-full border px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
