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
  const sectionTitle = "text-[10px] uppercase tracking-[0.28em]";
  const activeJoy = joys[joySlideIndex % joys.length];

  return (
    <section
      id="joy"
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
          Beyond the code
        </div>
      </div>

      <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr]">
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <RevealUp>
              <h2 className="text-2xl font-light leading-snug sm:text-3xl">
                Beyond Code
              </h2>
            </RevealUp>

            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous hobby"
                onClick={() =>
                  setJoySlideIndex(
                    (prev) => (prev - 1 + joys.length) % joys.length
                  )
                }
                style={{
                  borderColor: currentTheme.border,
                  background: currentTheme.surfaceSoft,
                }}
                className="rounded-full border px-3 py-1.5 text-sm"
              >
                ←
              </button>

              <button
                type="button"
                aria-label="Next hobby"
                onClick={() =>
                  setJoySlideIndex((prev) => (prev + 1) % joys.length)
                }
                style={{
                  borderColor: currentTheme.border,
                  background: currentTheme.surfaceSoft,
                }}
                className="rounded-full border px-3 py-1.5 text-sm"
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
              className="overflow-hidden rounded-[1.5rem] border"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJoy.title}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[18rem]"
                >
                  <motion.img
                    src={activeJoy.image}
                    alt={activeJoy.title}
                    className="h-full w-full object-cover"
                    animate={{ x: [0, -10, 0, 10, 0] }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </RevealLeft>
        </div>

        <div className="space-y-4">
          <div>
            <p
              className={sectionTitle}
              style={{ color: currentTheme.textMuted }}
            >
              Current slide
            </p>

            <h3 className="mt-2 text-2xl font-light">{activeJoy.title}</h3>

            <p
              className="mt-3 text-sm leading-7 sm:text-base"
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
              className="rounded-[1.5rem] border p-4"
            >
              <p
                className={sectionTitle}
                style={{ color: currentTheme.textMuted }}
              >
                A few things I enjoy
              </p>

              <div className="mt-3 grid gap-2">
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
                    className="rounded-xl border px-3 py-2.5 text-xs sm:text-sm"
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
          className="mt-6 rounded-[1.5rem] border p-5"
        >
          <p className={sectionTitle} style={{ color: currentTheme.textMuted }}>
            {activeJoy.poem ? "Farsi Poem" : "Favorite Quotes"}
          </p>

          {activeJoy.poem ? (
            <div className="mt-4 space-y-2 text-right">
              {activeJoy.poem.map((line) => (
                <p
                  key={line}
                  dir="rtl"
                  className="text-sm leading-6"
                  style={{ color: currentTheme.text }}
                >
                  {line}
                </p>
              ))}

              {activeJoy.poemAuthor && (
                <p
                  className="mt-4 text-left text-xs"
                  style={{ color: currentTheme.textMuted }}
                >
                  — {activeJoy.poemAuthor}
                </p>
              )}
            </div>
          ) : (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {favoriteQuotes.map((quote) => (
                <blockquote
                  key={quote}
                  style={{
                    borderColor: currentTheme.border,
                    color: currentTheme.text,
                  }}
                  className="border-l-2 pl-3 text-sm font-light leading-6"
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
