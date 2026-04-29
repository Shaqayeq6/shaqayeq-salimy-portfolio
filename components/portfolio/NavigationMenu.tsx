"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { sections } from "@/data/portfolioData";
import { ThemeConfig } from "@/lib/types";

type NavigationMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  currentTheme: ThemeConfig;
};

export default function NavigationMenu({
  menuOpen,
  setMenuOpen,
  currentTheme,
}: NavigationMenuProps) {
  return (
    <>
      <motion.button
        type="button"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed right-4 top-[1.15rem] z-[65] flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          background: currentTheme.surface,
          border: `1px solid ${currentTheme.border}`,
          backdropFilter: "blur(20px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.24)",
        }}
      >
        <div className="grid grid-cols-3 gap-[4px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.span
              key={i}
              className="h-[5px] w-[5px] rounded-full"
              animate={{
                background: menuOpen
                  ? currentTheme.accent
                  : i % 2 === 0
                    ? currentTheme.dotPrimary
                    : currentTheme.dotSecondary,
                scale: menuOpen ? 1.25 : 1,
              }}
              transition={{ duration: 0.16, delay: i * 0.02 }}
            />
          ))}
        </div>
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/35"
            />

            <motion.aside
              initial={{ opacity: 0, scale: 0.92, x: 40, y: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: 40, y: -8 }}
              transition={{ duration: 0.25 }}
              style={{
                background: currentTheme.menuPanel,
                color: currentTheme.menuText,
              }}
           className="fixed right-6 top-24 z-[80] w-[min(20rem,calc(100vw-3rem))] rounded-[2rem] p-6 shadow-[0_24px_120px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] opacity-55">
                  Navigation
                </p>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm opacity-70"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 space-y-3 text-3xl font-light tracking-tight">
                {sections.map((section) => (
                  <a
                    key={section.label}
                    href={section.href}
                    onClick={() => setMenuOpen(false)}
                    className="block transition duration-300 hover:translate-x-2 hover:opacity-80"
                  >
                    {section.label}
                  </a>
                ))}
                <div
    style={{ borderColor: currentTheme.border }}
  className="my-6 border-t opacity-40"
/>
              </div>
              <div className="flex flex-col gap-2 text-sm opacity-70">
  <a
    
    href="https://www.linkedin.com/in/shaqayeqsalimy"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:translate-x-1 hover:opacity-100"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/Shaqayeq6"
    target="_blank"
    rel="noopener noreferrer"
    className="transition duration-300 hover:translate-x-1 hover:opacity-100"
  >
    GitHub
  </a>
</div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}