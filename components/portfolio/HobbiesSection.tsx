"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { joys, favoriteQuotes } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";
import {
  RevealUp,
  RevealLeft,
  RevealCard,
} from "@/components/portfolio/SectionMotion";

type HobbiesSectionProps = {
  currentTheme: ThemeConfig;
  joySlideIndex: number;
  setJoySlideIndex: Dispatch<SetStateAction<number>>;
};

export default function HobbiesSection({
  currentTheme,
  joySlideIndex,
  setJoySlideIndex,
}: HobbiesSectionProps) {
  const sectionTitle = "text-sm uppercase tracking-[0.3em]";
  const activeJoy = joys[joySlideIndex % joys.length];

  return (
    <section
      id="joy"
      className="relative z-10 mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-24"
    >
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
          Hobbies 
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              
              <RevealUp>
               <h2 className="mt-3 text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
                  Byond Code
                </h2>
              </RevealUp>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setJoySlideIndex(
                    (prev) => (prev - 1 + joys.length) % joys.length
                  )
                }
                style={{
                  borderColor: currentTheme.border,
                  background: currentTheme.surfaceSoft,
                }}
                className="rounded-full border px-4 py-2"
              >
                ←
              </button>

              <button
                onClick={() =>
                  setJoySlideIndex((prev) => (prev + 1) % joys.length)
                }
                style={{
                  borderColor: currentTheme.border,
                  background: currentTheme.surfaceSoft,
                }}
                className="rounded-full border px-4 py-2"
              >
                →
              </button>
            </div>
          </div>

          <RevealLeft delay={0.08}>
            <div
              style={{
                borderColor: currentTheme.border,
                background: currentTheme.surfaceSoft,
              }}
              className="overflow-hidden rounded-[2rem] border"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJoy.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35 }}
                  className="relative h-[22rem]"
                >
                  <motion.img
                    src={activeJoy.image}
                    alt={activeJoy.title}
                    className="h-full w-full object-cover"
                    animate={{ x: [0, -18, 0, 18, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </RevealLeft>
        </div>

        <div className="space-y-6">
          <div>
            <p
              className={sectionTitle}
              style={{ color: currentTheme.textMuted }}
            >
              Current Slide
            </p>

            <h3 className="mt-3 text-3xl font-light">{activeJoy.title}</h3>

            <p
              className="mt-4 text-lg leading-9"
              style={{ color: currentTheme.textSoft }}
            >
              {activeJoy.description}
            </p>
          </div>

          <RevealCard delay={0.12}>
            <div
              style={{
                borderColor: currentTheme.border,
                background: currentTheme.surfaceSoft,
              }}
              className="rounded-[1.75rem] border p-5"
            >
              <p
                className={sectionTitle}
                style={{ color: currentTheme.textMuted }}
              >
                A few things I enjoy
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Biking during sunrise and sunset",
                  "Trail hikes with Friends",
                  "Reading Farsi books and poetry",
                  "Psychology and self-development books",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      borderColor: currentTheme.border,
                      background: currentTheme.surface,
                    }}
                    className="rounded-[1rem] border px-4 py-3 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>
        </div>
      </div>

      <RevealCard delay={0.18}>
        <div
          style={{
            borderColor: currentTheme.border,
            background: currentTheme.surfaceSoft,
          }}
          className="mt-10 rounded-[1.75rem] border p-8"
        >
          <p className={sectionTitle} style={{ color: currentTheme.textMuted }}>
            {activeJoy.poem ? "Farsi Poem" : "Favorite Quotes"}
          </p>

          {activeJoy.poem ? (
            <div className="mt-6 space-y-3 text-right">
              {activeJoy.poem.map((line) => (
                <p
                  key={line}
                  dir="rtl"
                  className="text-sm leading-7"
                  style={{ color: currentTheme.text }}
                >
                  {line}
                </p>
              ))}

              {activeJoy.poemAuthor && (
                <p
                  className="mt-5 text-left text-sm"
                  style={{ color: currentTheme.textMuted }}
                >
                  — {activeJoy.poemAuthor}
                </p>
              )}
            </div>
          ) : (
            <div className="mt-4 space-y-4">
              {favoriteQuotes.map((quote) => (
                <blockquote
                  key={quote}
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                 className="border-l-2 pl-4 text-sm font-light leading-7"
                >
                  “{quote}”
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </RevealCard>
    </section>
  );
}