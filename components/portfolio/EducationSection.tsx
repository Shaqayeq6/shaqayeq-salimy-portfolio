"use client";

import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
} from "@/components/portfolio/SectionMotion";

type EducationSectionProps = {
  currentTheme: ThemeConfig;
};

function IconBadge({ symbol }: { symbol: string }) {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-medium">
      {symbol}
    </span>
  );
}

export default function EducationSection({
  currentTheme,
}: EducationSectionProps) {
  const education = [
    {
      symbol: "🎓",
      school: "York University",
      program: "BA (Honours) in Computer Science",
      location: "Toronto, Ontario",
    },
    {
      symbol: "💻",
      school: "Centennial College",
      program: "Advanced Diploma in Software Engineering Technology",
      location: "Toronto, Ontario",
    },
  ];

  return (
    <section
      id="education"
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
          Education
        </div>
      </div>

      <RevealUp>
        <h2 className="text-2xl font-light leading-snug sm:text-3xl">
          Academic background and foundation
        </h2>
      </RevealUp>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <RevealLeft key={item.school} delay={0.06 + index * 0.04}>
            <div
              style={{
                borderColor: currentTheme.border,
                background: currentTheme.surfaceSoft,
              }}
              className="h-full rounded-[1.5rem] border p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                  className="rounded-xl border p-1.5"
                >
                  <IconBadge symbol={item.symbol} />
                </div>

                <div className="space-y-1.5">
                  <p className="text-base font-medium">{item.school}</p>
                  <p
                    className="text-sm leading-6"
                    style={{ color: currentTheme.textSoft }}
                  >
                    {item.program}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: currentTheme.textMuted }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </RevealLeft>
        ))}
      </div>
    </section>
  );
}
