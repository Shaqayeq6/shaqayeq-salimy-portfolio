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
    <div className="floating-contact-wrapper">
      <button
        type="button"
        onClick={() => setContactOpen(true)}
        style={{
          borderColor: currentTheme.border,
          background: currentTheme.surface,
        }}
        className="
          floating-contact-button
          flex
          min-w-0
          items-center
          rounded-full
          border
          shadow-[0_12px_40px_rgba(0,0,0,0.28)]
          transition
          hover:scale-[1.01]
        "
      >
        <span className="floating-contact-dots grid shrink-0 grid-cols-3 gap-[3px]">
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

        <span
          className="floating-contact-text min-w-0 truncate whitespace-nowrap"
          style={{
            color: currentTheme.textSoft,
          }}
        >
          Ask me anything...
        </span>
      </button>
    </div>
  );
}