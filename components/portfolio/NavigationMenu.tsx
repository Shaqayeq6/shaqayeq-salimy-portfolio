"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { ThemeConfig } from "@/lib/types";

type NavigationMenuProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  currentTheme: ThemeConfig;
};

const navigationItems = [
  { label: "About me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Beyond the code", href: "#joy" },
  { label: "Contact", href: "#contact" },
];

export default function NavigationMenu({
  menuOpen,
  setMenuOpen,
  currentTheme,
}: NavigationMenuProps) {
  return (
    <motion.aside
      initial={false}
      animate={{ width: menuOpen ? 250 : 56 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className="fixed right-0 top-0 z-[80] h-screen overflow-hidden border-l backdrop-blur-2xl"
      style={{
        background: `linear-gradient(
          180deg,
          ${currentTheme.background}F2 0%,
          ${currentTheme.sidePanel}F4 100%
        )`,
        color: currentTheme.text,
        borderColor: currentTheme.border,
        boxShadow: menuOpen
          ? "-16px 0 50px rgba(0,0,0,0.18)"
          : "-6px 0 24px rgba(0,0,0,0.10)",
      }}
    >
      <div className="flex h-full flex-col">
        {/* Collapse / expand control */}
        <div
          className={`flex h-20 shrink-0 items-center ${
            menuOpen ? "justify-end px-4" : "justify-center"
          }`}
        >
          <motion.button
            type="button"
            aria-label={menuOpen ? "Collapse navigation" : "Expand navigation"}
            onClick={() => setMenuOpen((prev) => !prev)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="group flex h-10 w-10 items-center justify-center rounded-full border"
            style={{
              borderColor: currentTheme.border,
              background: currentTheme.surface,
              color: currentTheme.textSoft,
              boxShadow: `0 0 0 1px ${currentTheme.surfaceSoft}, 0 8px 24px rgba(0,0,0,0.14)`,
            }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: menuOpen ? 0 : 180 }}
              transition={{ duration: 0.25 }}
            >
              <path d="M15 6l-6 6 6 6" />
            </motion.svg>
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          {menuOpen && (
            <motion.div
              key="expanded-navigation"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.18 }}
              className="flex min-h-0 flex-1 flex-col px-5 pb-6"
            >
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: currentTheme.textMuted }}
                >
                  Navigation
                </p>

                <nav className="mt-6 flex flex-col gap-1">
                  {navigationItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group relative rounded-xl px-3 py-2.5 text-base font-light transition duration-200"
                      style={{ color: currentTheme.text }}
                    >
                      <span
                        className="absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100"
                        style={{ background: currentTheme.surface }}
                      />
                      <span className="relative block transition-transform duration-200 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div
                className="mt-auto border-t pt-5"
                style={{ borderColor: currentTheme.border }}
              >
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="https://www.linkedin.com/in/shaqayeqsalimy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-200 hover:translate-x-1"
                    style={{ color: currentTheme.textMuted }}
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Shaqayeq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-200 hover:translate-x-1"
                    style={{ color: currentTheme.textMuted }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!menuOpen && (
          <div className="flex flex-1 items-center justify-center">
            <span
              className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[0.32em]"
              style={{ color: currentTheme.textMuted }}
            >
              Menu
            </span>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
