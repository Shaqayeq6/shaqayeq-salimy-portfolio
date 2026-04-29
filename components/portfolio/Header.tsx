"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { themeSwatches } from "@/data/portfolioData";
import { ThemeConfig, ThemeName } from "@/lib/types";

type HeaderProps = {
  theme: ThemeName;
  setTheme: Dispatch<SetStateAction<ThemeName>>;
  currentTheme: ThemeConfig;
  profileOpen: boolean;
  setProfileOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Header({
  theme,
  setTheme,
  currentTheme,
  profileOpen,
  setProfileOpen,
}: HeaderProps) {
  return (
    <header
      style={{
        background: `${currentTheme.background}cc`,
        borderColor: currentTheme.border,
        backdropFilter: "blur(18px)",
      }}
      className="sticky top-0 z-50 border-b"
    >
      <div className="mx-auto flex h-24 max-w-5xl items-center justify-between px-6 md:px-10 lg:px-24">
        <div className="relative z-[80]" data-profile-area>
          <button
            type="button"
            aria-label="Open profile image"
            onClick={() => setProfileOpen((prev) => !prev)}
            style={{
              borderColor: currentTheme.border,
              background: currentTheme.surfaceSoft,
            }}
            className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border transition-transform hover:scale-[1.03]"
          >
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover object-center"
            />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.65, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.65, y: 6 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                }}
                className="absolute left-0 top-20 z-[90] h-44 w-44 overflow-hidden rounded-full shadow-[0_22px_80px_rgba(0,0,0,0.35)]"
                style={{ border: `2.5px solid ${currentTheme.accent}` }}
              >
                <button
                  type="button"
                  onClick={() => setProfileOpen(false)}
                  className="relative block h-full w-full overflow-hidden rounded-full"
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Expanded profile"
                    className="absolute inset-0 h-full w-full rounded-full object-cover [clip-path:circle(50%)]"
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-[80] mr-14 flex items-center gap-2">
          {(Object.keys(themeSwatches) as ThemeName[]).map((item) => (
            <button
              key={item}
              aria-label={`Switch to ${item} theme`}
              onClick={() => setTheme(item)}
              style={{
                background: themeSwatches[item],
                borderColor:
                  theme === item ? currentTheme.text : currentTheme.border,
                boxShadow:
                  theme === item
                    ? `0 0 0 2px ${currentTheme.border}`
                    : "none",
              }}
              className="h-6 w-6 rounded-full border transition hover:scale-110"
            />
          ))}
        </div>
      </div>
    </header>
  );
}