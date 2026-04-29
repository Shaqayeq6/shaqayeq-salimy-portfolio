"use client";

import { Dispatch, SetStateAction } from "react";
import { ThemeConfig } from "@/lib/types";

type FloatingContactButtonProps = {
  currentTheme: ThemeConfig;
  setContactOpen: Dispatch<SetStateAction<boolean>>;
};

export default function FloatingContactButton({
  currentTheme,
  setContactOpen,
}: FloatingContactButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setContactOpen(true)}
      style={{
        borderColor: currentTheme.border,
        background: currentTheme.surface,
      }}
      className="fixed bottom-6 left-6 z-[60] flex items-center gap-4 rounded-full border px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition hover:scale-[1.01]"
    >
      <span className="grid grid-cols-3 gap-[3px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-[5px] w-[5px] rounded-full"
            style={{
              background:
                index % 2 === 0
                  ? currentTheme.dotPrimary
                  : currentTheme.dotSecondary,
            }}
          />
        ))}
      </span>

      <span style={{ color: currentTheme.textSoft }}>
        Ask me anything...
      </span>
    </button>
  );
}