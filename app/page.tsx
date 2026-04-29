"use client";

import { useEffect, useState } from "react";
import { themes } from "@/data/portfolioData";
import { ThemeName } from "@/lib/types";
import ThemeBackground from "@/components/portfolio/ThemeBackground";
import Header from "@/components/portfolio/Header";
import NavigationMenu from "@/components/portfolio/NavigationMenu";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import HobbiesSection from "@/components/portfolio/HobbiesSection";
import ContactModal from "@/components/portfolio/ContactModal";
import FloatingContactButton from "@/components/portfolio/FloatingContactButton";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  const [theme, setTheme] = useState<ThemeName>("dark");
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState("01");
  const [joySlideIndex, setJoySlideIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const currentTheme = themes[theme];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      <HeroSection
        currentTheme={currentTheme}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
        scrollY={scrollY}
        setContactOpen={setContactOpen}
      />

      <ProjectsSection
        currentTheme={currentTheme}
        activeProjectId={activeProjectId}
        setActiveProjectId={setActiveProjectId}
      />

      <ExperienceSection currentTheme={currentTheme} />
      <SkillsSection currentTheme={currentTheme} />
      <AboutSection currentTheme={currentTheme} />
      <EducationSection currentTheme={currentTheme} />

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