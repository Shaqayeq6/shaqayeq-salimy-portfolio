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
  { label: "Beyond code", href: "#joy" },
  { label: "Contact", href: "#contact" },
];

export default function NavigationMenu({
  menuOpen,
  setMenuOpen,
  currentTheme,
}: NavigationMenuProps) {
  return (
    <aside className="h-full w-full">
      {/*
        IMPORTANT:

        The parent grid column still exists and reserves
        space for the navigation.

        This inner panel is fixed so the actual navigation
        stays on screen while the portfolio scrolls.
      */}
      <div
        className="
          fixed
          right-0
          top-0
          z-[80]
          flex
          h-[100dvh]
          flex-col
          overflow-hidden
          border-l
          backdrop-blur-2xl
          transition-[width]
          duration-300
          ease-in-out
        "
        style={{
          width: menuOpen
            ? "var(--menu-open-width)"
            : "var(--menu-closed-width)",

          background: `linear-gradient(
            180deg,
            ${currentTheme.background} 0%,
            ${currentTheme.sidePanel} 100%
          )`,

          color: currentTheme.text,
          borderColor: currentTheme.border,

          boxShadow: menuOpen
            ? "-8px 0 28px rgba(0,0,0,0.14)"
            : "-4px 0 16px rgba(0,0,0,0.10)",
        }}
      >
        {/* =========================================
            TOGGLE
        ========================================= */}

        <div
          className={`
            flex
            h-16
            shrink-0
            items-center
            md:h-20

            ${
              menuOpen
                ? "justify-end px-2 md:px-4"
                : "justify-center"
            }
          `}
        >
          <motion.button
            type="button"
            aria-label={
              menuOpen
                ? "Collapse navigation"
                : "Expand navigation"
            }
            onClick={() => setMenuOpen((prev) => !prev)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              md:h-10
              md:w-10
            "
            style={{
              borderColor: currentTheme.border,
              background: currentTheme.surface,
              color: currentTheme.textSoft,
              boxShadow: "0 6px 18px rgba(0,0,0,0.13)",
            }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 md:h-4 md:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                rotate: menuOpen ? 0 : 180,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <path d="M15 6l-6 6 6 6" />
            </motion.svg>
          </motion.button>
        </div>

        {/* =========================================
            OPEN MENU
        ========================================= */}

        <AnimatePresence initial={false} mode="wait">
          {menuOpen && (
            <motion.div
              key="expanded-navigation"
              initial={{
                opacity: 0,
                x: 8,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 8,
              }}
              transition={{
                duration: 0.18,
              }}
              className="
                flex
                min-h-0
                flex-1
                flex-col
                px-3
                pb-4
                md:px-5
                md:pb-6
              "
            >
              {/* Navigation label */}

              <p
                className="
                  whitespace-nowrap
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  md:text-[10px]
                  md:tracking-[0.28em]
                "
                style={{
                  color: currentTheme.textMuted,
                }}
              >
                Navigation
              </p>

              {/* Navigation links */}

              <nav className="mt-4 flex flex-col gap-0.5 md:mt-6 md:gap-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      group
                      relative
                      block
                      min-w-0
                      rounded-lg
                      px-1
                      py-2
                      text-[11px]
                      font-light
                      leading-[1.3]
                      md:rounded-xl
                      md:px-3
                      md:py-2.5
                      md:text-base
                    "
                    style={{
                      color: currentTheme.text,
                    }}
                  >
                    <span
                      className="
                        absolute
                        inset-0
                        rounded-lg
                        opacity-0
                        transition
                        group-hover:opacity-100
                        md:rounded-xl
                      "
                      style={{
                        background: currentTheme.surface,
                      }}
                    />

                    <span className="relative block">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>

              {/* =====================================
                  BOTTOM SOCIAL LINKS
              ===================================== */}

              <div
                className="
                  mt-auto
                  shrink-0
                  border-t
                  pt-3
                  md:pt-5
                "
                style={{
                  borderColor: currentTheme.border,
                }}
              >
                <div className="flex flex-col gap-2 text-[9px] md:text-sm">
                  <a
                    href="https://www.linkedin.com/in/shaqayeqsalimy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-100"
                    style={{
                      color: currentTheme.textMuted,
                    }}
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/Shaqayeq6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-100"
                    style={{
                      color: currentTheme.textMuted,
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================
            COLLAPSED MENU
        ========================================= */}

        {!menuOpen && (
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <span
              className="
                [writing-mode:vertical-rl]
                rotate-180
                whitespace-nowrap
                text-[7px]
                uppercase
                tracking-[0.28em]
                md:text-[9px]
              "
              style={{
                color: currentTheme.textMuted,
              }}
            >
              Menu
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}