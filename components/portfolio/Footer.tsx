"use client";

import { ThemeConfig } from "@/lib/types";

type FooterProps = {
  currentTheme: ThemeConfig;
};

export default function Footer({ currentTheme }: FooterProps) {
  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-5xl px-6 py-10 md:px-10 lg:px-24"
    >
      <div
        className="flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between"
        style={{
          borderColor: currentTheme.border,
          color: currentTheme.textSoft,
        }}
      >
        <p>© 2026 Shaqayeq Salimy</p>

        <div className="flex flex-wrap gap-6">
        <a
          href="https://www.linkedin.com/in/shaqayeqsalimy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: currentTheme.text }}
        >
          LinkedIn
          </a>
                    <a
            href="https://github.com/Shaqayeq6"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: currentTheme.text }}
          >
            GitHub
          </a>
          <a href="mailto:Shaqayeq.salimy@gmail.com" style={{ color: currentTheme.text }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}