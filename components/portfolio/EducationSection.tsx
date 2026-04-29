"use client";

import { ThemeConfig } from "@/lib/types";
import { RevealUp, RevealLeft } from "@/components/portfolio/SectionMotion";

type EducationSectionProps = {
  currentTheme: ThemeConfig;
};

function IconBadge({ symbol }: { symbol: string }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-medium">
      {symbol}
    </span>
  );
}

export default function EducationSection({
  currentTheme,
}: EducationSectionProps) {
  const sectionTitle = "text-sm uppercase tracking-[0.3em]";

  return (
   <section id="education" className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-10 md:px-10 lg:px-24">
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
    Education
  </div>

</div>
      
      <div className="space-y-4">
       
        <RevealUp>
        <h2 className="text-2xl font-light leading-snug sm:text-3xl lg:text-4xl">
          Academic background and foundation
        </h2>
        </RevealUp>
      </div>

      <div
        style={{
          borderColor: currentTheme.border,
          background: currentTheme.surfaceSoft,
        }}
        className="mt-12 rounded-[2rem] border p-6"
      >
        <RevealLeft delay={0.08}>
        <div className="flex items-start gap-4">
          <div
            style={{
              borderColor: currentTheme.border,
              color: currentTheme.text,
            }}
            className="rounded-2xl border p-2"
          >
            <IconBadge symbol="🎓" />
          </div>

          <div className="space-y-2">
            <p className="text-base font-medium">York University</p>
            <p style={{ color: currentTheme.textSoft }}>
              BA (Honours) in Computer Science
            </p>
            <p style={{ color: currentTheme.textMuted }}>Toronto, Ontario</p>
          </div>
        </div>
        
        </RevealLeft> 
        
      </div>


      

      <div
  style={{ borderColor: currentTheme.border, background: currentTheme.surfaceSoft }}
  className="mt-6 rounded-[2rem] border p-6"
>
  <RevealLeft delay={0.08}>
  <div className="flex items-start gap-4">
    <div
      style={{ borderColor: currentTheme.border, color: currentTheme.text }}
      className="rounded-2xl border p-2"
    >
      <IconBadge symbol="💻" />
    </div>

    <div className="space-y-2">
      <p className="text-base font-medium">Centennial College</p>

      <p style={{ color: currentTheme.textSoft }}>
        Advanced Diploma in Software Engineering Technology
      </p>

      <p style={{ color: currentTheme.textMuted }}>
        Toronto, Ontario
      </p>
    </div>
  </div>
  </RevealLeft>
</div>
      
    </section>
  );
}