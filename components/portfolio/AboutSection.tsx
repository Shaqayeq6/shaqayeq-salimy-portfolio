"use client";

import { motion } from "framer-motion";
import { ThemeConfig } from "@/lib/types";
import { RevealUp, RevealLeft, RevealRight } from "@/components/portfolio/SectionMotion";

type AboutSectionProps = {
  currentTheme: ThemeConfig;
};

export default function AboutSection({
  currentTheme,
}: AboutSectionProps) {
  const sectionTitle = "text-sm uppercase tracking-[0.3em]";

  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 md:px-10 lg:px-24">
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
    About me
  </div>

</div>
      <div className="space-y-4">
       
        <RevealUp>
       <h2 className="max-w-3xl text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
          Building with clarity, structure, and purpose
        </h2>
        </RevealUp>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
        <RevealLeft delay={0.08}>
        <div
          className="max-w-4xl space-y-7 text-base leading-10"
          style={{ color: currentTheme.textSoft }}
        >
          <p>
         I am a Computer Science graduate from York University with interests in software engineering, backend systems, and application design. 
          </p>

          <p>
           My projects reflect a mix of front-end design, backend logic, database integration, and mobile development. I enjoy turning ideas into polished, usable products while continuously
         improving both my technical and problem-solving skills. 
          </p>
        </div>
        </RevealLeft>
        <RevealRight delay={0.12}>
        <motion.div
          whileHover={{ y: -4 }}
          style={{
            borderColor: currentTheme.border,
            background: currentTheme.surface,
          }}
          className="overflow-hidden rounded-[2rem] border shadow-xl"
        >
          <img
            src="/images/about.png"
            alt="Graduation"
            className="h-[28rem] w-full object-cover"
          />
        </motion.div>
        </RevealRight>
      </div>
    </section>
  );
}