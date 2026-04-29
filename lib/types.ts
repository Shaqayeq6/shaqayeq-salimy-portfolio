export type ThemeName = "dark" | "light" | "pink" | "blue" | "purple";

export type ThemeConfig = {
  background: string;
  surface: string;
  surfaceSoft: string;
  border: string;
  text: string;
  textSoft: string;
  textMuted: string;
  accent: string;
  accentText: string;
  glow: string;
  dotPrimary: string;
  dotSecondary: string;
  overlay: string;
  menuPanel: string;
  menuText: string;
  sidePanel: string;
  shellGlowA: string;
  shellGlowB: string;
  shellLine: string;
  particleA: string;
  particleB: string;
};



export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  type: "personal" | "school";   // ← add this
  description: string;
  tech: string[];
  image: string;
  
  github: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

export type SkillItem = {
  name: string;
  icon: string;
  group: string;
  color: string;  // ← add this
};

export type JoyItem = {
  title: string;
  description: string;
  image: string;
  poem?: string[];
  poemAuthor?: string;
  
};
