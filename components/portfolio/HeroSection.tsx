"use client";

import { ThemeConfig } from "@/lib/types";
import {
  RevealDown,
  RevealLeft,
} from "@/components/portfolio/SectionMotion";

type HeroSectionProps = {
  currentTheme: ThemeConfig;
};

export default function HeroSection({
  currentTheme,
}: HeroSectionProps) {
  return (
    <section className="relative z-10">
      <div className="mx-auto flex min-h-[56vh] max-w-4xl items-center justify-center px-6 py-14 text-center md:px-10 lg:px-16">
        <div className="w-full">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.32em]"
            style={{ color: currentTheme.textMuted }}
          >
            Computer Science Graduate · York University
          </p>

          <RevealDown>
            <h1 className="mt-6 text-5xl font-light leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Shaqayeq Salimy
            </h1>
          </RevealDown>

          <RevealLeft delay={0.08}>
            <p
              className="mx-auto mt-7 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8"
              style={{ color: currentTheme.textSoft }}
            >
              I design and build scalable software across web, mobile, and
              backend environments, with a focus on practical solutions,
              thoughtful structure, and intuitive user experiences.
            </p>
          </RevealLeft>

          <div
            className="mx-auto mt-9 h-px max-w-md"
            style={{ background: currentTheme.border }}
          />
        </div>
      </div>
    </section>
  );
}
