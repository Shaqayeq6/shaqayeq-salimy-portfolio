import {
  ExperienceItem,
  JoyItem,
  Project,
  SkillItem,
  ThemeConfig,
  ThemeName,
} from "@/lib/types";

export const themeSwatches: Record<ThemeName, string> = {
  dark: "#111111",
  light: "#f5f3ef",
  pink:  "#ec4899",
  blue: "#3b82f6",   
  purple: "#c4b5fd", 
};


export const themes: Record<ThemeName, ThemeConfig> = {
  dark: {
    background: "#0a0a0f",
    surface: "rgba(255,255,255,0.06)",
    surfaceSoft: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.12)",
    text: "#ffffff",
    textSoft: "rgba(255,255,255,0.78)",
    textMuted: "rgba(255,255,255,0.5)",
    accent: "#ffffff",
    accentText: "#0a0a0f",
    glow: "rgba(99,102,241,0.16)",
    dotPrimary: "#ffffff",
    dotSecondary: "rgba(255,255,255,0.55)",
    overlay:
      "radial-gradient(circle at 70% 20%, rgba(99,102,241,0.22), transparent 34%), radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08), transparent 26%)",
    menuPanel: "#f5f3ef",
    menuText: "#111111",
    sidePanel: "#06060b",
    particleA: "rgba(255,255,255,0.18)",
    particleB: "rgba(99,102,241,0.22)",
    shellGlowA: "rgba(99,102,241,0.12)",
    shellGlowB: "rgba(255,255,255,0.06)",
    shellLine: "rgba(255,255,255,0.035)",
  },
  light: {
    background: "#f6f2eb",
    surface: "rgba(0,0,0,0.05)",
    surfaceSoft: "rgba(0,0,0,0.03)",
    border: "rgba(0,0,0,0.12)",
    text: "#121212",
    textSoft: "rgba(18,18,18,0.76)",
    textMuted: "rgba(18,18,18,0.5)",
    accent: "#121212",
    accentText: "#ffffff",
    glow: "rgba(0,0,0,0.06)",
    dotPrimary: "#121212",
    dotSecondary: "rgba(18,18,18,0.55)",
    overlay:
      "radial-gradient(circle at 70% 20%, rgba(0,0,0,0.07), transparent 32%), radial-gradient(circle at 50% 0%, rgba(0,0,0,0.03), transparent 22%)",
    menuPanel: "#111111",
    menuText: "#ffffff",
    sidePanel: "#e4dfd7",
    particleA: "rgba(20,20,20,0.12)",
    particleB: "rgba(20,20,20,0.06)",
    shellGlowA: "rgba(255,255,255,0.55)",
    shellGlowB: "rgba(0,0,0,0.04)",
    shellLine: "rgba(0,0,0,0.045)",
  },
  pink: {
    background: "#170d13",
    surface: "rgba(255,214,234,0.07)",
    surfaceSoft: "rgba(255,214,234,0.04)",
    border: "rgba(255,180,210,0.18)",
    text: "#ffe7f2",
    textSoft: "rgba(255,231,242,0.8)",
    textMuted: "rgba(255,231,242,0.52)",
    accent: "#f472b6",
    accentText: "#2a0d1d",
    glow: "rgba(244,114,182,0.18)",
    dotPrimary: "#ffe7f2",
    dotSecondary: "rgba(244,114,182,0.8)",
    overlay:
      "radial-gradient(circle at 70% 20%, rgba(244,114,182,0.25), transparent 34%), radial-gradient(circle at 50% 0%, rgba(255,184,212,0.08), transparent 24%)",
    menuPanel: "#fff0f7",
    menuText: "#2a0d1d",
    sidePanel: "#0e070b",
    particleA: "rgba(255,213,232,0.16)",
    particleB: "rgba(244,114,182,0.18)",
    shellGlowA: "rgba(244,114,182,0.10)",
    shellGlowB: "rgba(255,213,232,0.06)",
    shellLine: "rgba(255,213,232,0.035)",
  },
  blue: {
    background: "#0b1220",
    surface: "rgba(219,234,254,0.07)",
    surfaceSoft: "rgba(219,234,254,0.04)",
    border: "rgba(147,197,253,0.18)",
    text: "#dbeafe",
    textSoft: "rgba(219,234,254,0.8)",
    textMuted: "rgba(219,234,254,0.52)",
    accent: "#60a5fa",
    accentText: "#08111f",
    glow: "rgba(59,130,246,0.18)",
    dotPrimary: "#dbeafe",
    dotSecondary: "rgba(96,165,250,0.82)",
    overlay:
      "radial-gradient(circle at 70% 20%, rgba(59,130,246,0.24), transparent 34%), radial-gradient(circle at 50% 0%, rgba(125,211,252,0.08), transparent 24%)",
    menuPanel: "#eef6ff",
    menuText: "#08111f",
    sidePanel: "#060c18",
    particleA: "rgba(219,234,254,0.16)",
    particleB: "rgba(59,130,246,0.18)",
    shellGlowA: "rgba(59,130,246,0.10)",
    shellGlowB: "rgba(219,234,254,0.04)",
    shellLine: "rgba(219,234,254,0.04)",
  },
  purple: {
    background: "#130f22",
    surface: "rgba(237,233,254,0.07)",
    surfaceSoft: "rgba(237,233,254,0.04)",
    border: "rgba(196,181,253,0.18)",
    text: "#ede9fe",
    textSoft: "rgba(237,233,254,0.8)",
    textMuted: "rgba(237,233,254,0.5)",
    accent: "#a78bfa",
    accentText: "#120b24",
    glow: "rgba(139,92,246,0.18)",
    dotPrimary: "#ede9fe",
    dotSecondary: "rgba(167,139,250,0.82)",
    overlay:
      "radial-gradient(circle at 70% 20%, rgba(139,92,246,0.24), transparent 34%), radial-gradient(circle at 50% 0%, rgba(196,181,253,0.08), transparent 24%)",
    menuPanel: "#f5f0ff",
    menuText: "#120b24",
    sidePanel: "#090714",
    particleA: "rgba(237,233,254,0.15)",
    particleB: "rgba(167,139,250,0.18)",
    shellGlowA: "rgba(167,139,250,0.10)",
    shellGlowB: "rgba(237,233,254,0.05)",
    shellLine: "rgba(237,233,254,0.04)",
  },
};

export const sections = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Hobbies", href: "#joy" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Feature Request Prioritization Tool",
    category: "Full-Stack Web App",
    year: "2026",
    description:
      "A product-focused platform for scoring, sorting, and prioritizing feature requests using the RICE framework with editable inputs, filtering, and a clean decision-making workflow.",
    tech: ["React", "Node.js", "Express", "SQLite"],
    image:
      "/images/projects/RICE2.jpg",
    type: "personal",
    github: "https://github.com/Shaqayeq6/rice-feature-prioritizer.git",
  },
  {
    id: "02",
    title: "YorkU Campus Navigator",
    category: "Mobile App",
    year: "2025",
    description:
      "A campus navigation app that helps students search buildings, explore locations, and launch directions in Google Maps with a streamlined mobile-first experience.",
    tech: ["Flutter", "Dart", "SQLite", "Google Maps"],
    image:
      "/images/projects/YorkU.jpg",
      type: "personal",
    github: "https://github.com/Shaqayeq6/yorku-campus-navigator.git",
  },
  {
    id: "03",
    title: "E-Commerce Store",
    category: "Full-Stack E-Commerce",
    year: "2026",
    description:
      "A group project, shopping platform with product browsing, wishlist, cart, checkout, order history, admin controls, and a polished full-stack flow from UI to database.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    image:
      "/images/projects/Shoe.jpg",
      type: "school",
    github: "https://github.com/Shaqayeq6/e-commerce-project.git",
  },
  {
    id: "04",
    title: "Wellness Tracker",
    category: "Mobile App",
    year: "2025",
    description:
      "A team-developed mobile application for tracking wellness habits and daily routines, emphasizing user-friendly design, structured data management, and smooth interaction.",
    tech: ["React", "TypeScript", "UI Design"],
    image:
      "/images/projects/Wellness.jpg",
      type: "school",
    github: "https://github.com/ashal-iman/Project-Wellness-Tracker",
  },
  {
    id: "05",
    title: "Smart Job Tracker",
    category: "Job Application Tracking System",
    year: "2026",
    description:
      "Currently in development, building a smart job tracking system.",
    tech: ["Next.js", "TypeScript","FastAPI", "PostgreSQL"],
    image:
      "/images/projects/ComingSoon1.png",
      type: "personal",
   
    github: "#"
  },
  {
    id: "06",
    title: "Portfolio Redesign System",
    category: "Frontend System",
    year: "2026",
    description:
      "I designed and built this modular portfolio to bring together my personal and school projects, from full-stack applications to mobile development, focused on clean design, interaction, and real-world problem solving.",
    tech: ["Next.js 15", "Framer Motion", "Vercel"],
    image:
      "/images/projects/Portfolio.png",
      type: "personal",
    github: "#",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2020 - 2021",
    title: "Credential Examiner",
    organization: "World Education Services",
    description:
      "Verified and processed academic credentials, ensuring accuracy and adherence to policies. Linked document images to appropriate institutions and credentials, both digitally and manually, while supporting accurate evaluations based on WES procedures.",
    tags: ["Document Management Systems", "Document Imaging Software"],
  },
  {
    period: "2019 - 2020",
    title: "Academic Record Specialist",
    organization: "World Education Services",
    description:
      "Processed and matched incoming application-related mail, entered records into the tracking system, cleared scanned non-original documents, and supported the safe handling and return of original documents across departments.",
    tags: ["Tracking Systems", "Mail Management Software"],
  },
  {
    period: "2025 - Present",
    title: "Teaching Assistant Support / Project Consultant",
    organization: "York University · Mobile User Interface Course",
    description:
      "Supported students through project consulting, feasibility guidance, and feedback on interface and implementation decisions. Helped review work, identify improvements, and guide students toward clearer and more practical design choices.",
    tags: ["UI Feedback", "Project Guidance", "Student Support"],
  },
];

export const skills: SkillItem[] = [
  { name: "Java",       icon: "https://cdn.simpleicons.org/openjdk/ffffff",    group: "Languages", color: "#f89820" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/ffffff", group: "Languages", color: "#F7DF1E" },
   { name: "C",          icon: "https://cdn.simpleicons.org/c/ffffff",          group: "Languages", color: "#A8B9CC" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/ffffff", group: "Languages", color: "#3178C6" },
  { name: "Python",     icon: "https://cdn.simpleicons.org/python/ffffff",     group: "Languages", color: "#3776AB" },
  { name: "React",      icon: "https://cdn.simpleicons.org/react/ffffff",      group: "Frontend",  color: "#61DAFB" },
  { name: "Next.js",    icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",  group: "Frontend",  color: "#aaaaaa" },
  { name: "Flutter",    icon: "https://cdn.simpleicons.org/flutter/ffffff",    group: "Mobile",    color: "#02569B" },
  { name: "Node.js",    icon: "https://cdn.simpleicons.org/nodedotjs/ffffff",  group: "Backend",   color: "#339933" },
  { name: "Express",    icon: "https://cdn.simpleicons.org/express/ffffff",    group: "Backend",   color: "#aaaaaa" },
   { name: "MySQL",      icon: "https://cdn.simpleicons.org/mysql/ffffff",      group: "Database",  color: "#4479A1" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/ffffff", group: "Database",  color: "#4169E1" },
  { name: "SQLite",     icon: "https://cdn.simpleicons.org/sqlite/ffffff",     group: "Database",  color: "#44a8dc" },
  { name: "Figma",      icon: "https://cdn.simpleicons.org/figma/ffffff",      group: "Design",    color: "#F24E1E" },
];

export const joys: JoyItem[] = [
  {
    title: "Sunrise & Sunset Bike Rides",
    description:
      "Biking during sunrise and sunset hours gives me peace, movement, and a chance to reset.",
    image:
      "/images/biking.JPG",
  },
  {
    title: " Trail Hikes with Friends",
    description:
      "I enjoy hiking on trails with friends, fresh air, long walks and the kind of energy that only comes from being out in nature.",
    image:
      "/images/hiking2.JPG",
  },
  {
  title: "Farsi Books & Poetry",
  description:
    "Reading Farsi literature and getting lost in the poetry is a soothing experience, it feels like an escape in itself, bringing a kind of depth and feeling that’s hard to find anywhere else.",
  image: "/images/farsi-books.JPG",
  poem: [
    "این یک دو سه روز نوبت عمر گذشت",
    "چون آب به جویبار و چون باد گذشت",
    "هرگز غم دو روز مرا یاد نگشت",
    "روزی که نیامده‌ست و روزی که گذشت",
  ],
  poemAuthor: "Omar Khayyam",
},
  {
    title: "Psychology & Self-Development",
    description:
      "I also enjoy reading English books about self-development, mindset, and psychology.",
    image:
      "/images/books.PNG",
  },
];

export const favoriteQuotes = [
  "Grounded, yet reaching for the sky.",
  "Let the beauty of what you love be what you do.",
];