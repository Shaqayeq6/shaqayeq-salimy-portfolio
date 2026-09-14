"use client";

import { motion } from "framer-motion";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
  RevealRight,
} from "@/components/portfolio/SectionMotion";

type AboutSectionProps = {
  currentTheme: ThemeConfig;
};

export default function AboutSection({
  currentTheme,
}: AboutSectionProps) {
  return (
    <section
      id="about"
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
          About me
        </div>
      </div>

      <RevealUp>
        <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl">
          Building with clarity, structure, and purpose
        </h2>
      </RevealUp>

      <div className="mt-7 grid gap-7 lg:grid-cols-[1.1fr_0.7fr] lg:items-center">
        <RevealLeft delay={0.08}>
          <div
            className="space-y-4 text-sm leading-7 sm:text-base sm:leading-8"
            style={{ color: currentTheme.textSoft }}
          >
            <p>
              I am a Computer Science graduate from York University with
              interests across software engineering, backend systems, mobile
              development, and application design.
            </p>

            <p>
              My projects combine front-end design, backend logic, database
              integration, and mobile development. I enjoy taking an idea,
              experimenting with it, and turning it into something useful,
              polished, and real.
            </p>
          </div>
        </RevealLeft>

        <RevealRight delay={0.12}>
          <motion.div
            whileHover={{ y: -3 }}
            style={{
              borderColor: currentTheme.border,
              background: currentTheme.surface,
            }}
            className="overflow-hidden rounded-[1.6rem] border shadow-lg"
          >
            <img
              src="/images/about.png"
              alt="Shaqayeq Salimy graduation portrait"
              className="h-[20rem] w-full object-cover"
            />
          </motion.div>
        </RevealRight>
      </div>
    </section>
  );
}
