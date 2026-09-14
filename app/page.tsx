"use client";

import { useEffect, useState } from "react";
import { themes } from "@/data/portfolioData";
import { ThemeName } from "@/lib/types";
import ThemeBackground from "@/components/portfolio/ThemeBackground";
import Header from "@/components/portfolio/Header";
import NavigationMenu from "@/components/portfolio/NavigationMenu";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import HobbiesSection from "@/components/portfolio/HobbiesSection";
import ContactModal from "@/components/portfolio/ContactModal";
import FloatingContactButton from "@/components/portfolio/FloatingContactButton";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  const [theme, setTheme] = useState<ThemeName>("dark");
  const [profileOpen, setProfileOpen] = useState(false);

  // Sidebar is open by default.
  const [menuOpen, setMenuOpen] = useState(true);

  const [contactOpen, setContactOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState("01");
  const [joySlideIndex, setJoySlideIndex] = useState(0);

  const currentTheme = themes[theme];

  useEffect(() => {
    if (!profileOpen) return;

    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-profile-area]")) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [profileOpen]);

  return (
    <ThemeBackground currentTheme={currentTheme}>
      <Header
        theme={theme}
        setTheme={setTheme}
        currentTheme={currentTheme}
        profileOpen={profileOpen}
        setProfileOpen={setProfileOpen}
      />

      <NavigationMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        currentTheme={currentTheme}
      />

      <HeroSection currentTheme={currentTheme} />

      <AboutSection currentTheme={currentTheme} />

      <EducationSection currentTheme={currentTheme} />

      <ExperienceSection currentTheme={currentTheme} />

      <ProjectsSection
        currentTheme={currentTheme}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />

      <SkillsSection currentTheme={currentTheme} />

      <HobbiesSection
        currentTheme={currentTheme}
        joySlideIndex={joySlideIndex}
        setJoySlideIndex={setJoySlideIndex}
      />

      <ContactModal
        contactOpen={contactOpen}
        setContactOpen={setContactOpen}
        currentTheme={currentTheme}
      />

      <FloatingContactButton
        currentTheme={currentTheme}
        setContactOpen={setContactOpen}
      />

      <Footer currentTheme={currentTheme} />
    </ThemeBackground>
  );
}
