"use client";

import { experiences } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import { RevealUp, RevealLeft, RevealRight } from "@/components/portfolio/SectionMotion";

type ExperienceSectionProps = {
  currentTheme: ThemeConfig;
};

export default function ExperienceSection({
  currentTheme,
}: ExperienceSectionProps) {
  const sectionTitle = "text-sm uppercase tracking-[0.3em]";

  return (
    <section id="experience" className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 md:px-10 lg:px-24">
      <div className="mb-10 flex items-center gap-4">
  
  {/* LINE */}
  <div
    className="h-[2px] flex-1 rounded-full relative"
    style={{
      background: currentTheme.border,
      boxShadow: `0 0 8px ${currentTheme.border}`,
      opacity: 0.8,
    }}
  />

  {/* LABEL AT THE END */}
  <div
    style={{
      background: currentTheme.surfaceSoft,
      color: currentTheme.textMuted,
      borderColor: currentTheme.border,
      boxShadow: `0 4px 12px rgba(0,0,0,0.15)`
    }}
    className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em]"
  >
    Experience
  </div>

</div>
      <div className="space-y-4">
        
        <RevealUp>
        <h2 className="text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
          Professional and academic experience
        </h2>
        </RevealUp>
      </div>

      <div className="mt-12 space-y-12">
        {experiences.map((item) => (
          <article
            key={`${item.period}-${item.title}`}
            // ADDED "last:border-0" TO REMOVE THE LINE FROM THE LAST ITEM
            className="space-y-5 border-b last:border-0 pb-10"
            style={{ borderColor: currentTheme.border }}
          >
            <RevealLeft>
            <p className="text-2xl" style={{ color: currentTheme.textMuted }}>
              {item.period}
            </p>
            </RevealLeft>

            <RevealRight delay={0.05}>
            <h3 className= "text-base font-semibold leading-7">
              {item.title} - {item.organization}
            </h3>
            </RevealRight>
            <RevealRight delay={0.1}>
            <p
              className="max-w-4xl text-base leading-9"
              style={{ color: currentTheme.textSoft }}
            >
              {item.description}
            </p>
            </RevealRight>

            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: currentTheme.surfaceSoft,
                    color: currentTheme.text,
                  }}
                  className="rounded-xl px-4 py-2 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}