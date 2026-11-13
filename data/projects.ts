export interface ProjectGalleryItem {
  src: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  type: string;
  tag: string;
  description: string;
  year: string;
  tone: string;
  url: string;
  services: string[];
  detail: string;
  line: string;
  note: string;
  // Enhanced proof-of-work fields
  coverImage?: string;
  stack?: string[];
  deliverables?: string[];
  gallery?: ProjectGalleryItem[];
}

export const projects: Project[] = [
  {
    slug: "tej-institute",
    name: "Tej Institute",
    type: "EdTech Platform / Full-Stack Web App",
    tag: "Live production platform",
    description:
      "A complete digital learning and admissions ecosystem—featuring a JEE/NEET/MHT-CET computer-based test engine, student & staff dashboards, career aptitude portal, and interactive brain games.",
    year: "2026",
    tone: "tej",
    url: "https://tejinstitute.in",
    // Drop a screenshot at public/work/tej-institute-cover.png and uncomment below:
    // coverImage: "/work/tej-institute-cover.png",
    services: [
      "Product architecture",
      "UI/UX design",
      "Full-stack engineering",
      "Database & auth",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Resend",
    ],
    deliverables: [
      "Custom Computer-Based Test (CBT) engine for JEE Main, NEET UG, and MHT-CET mock exams",
      "Role-based Student & Staff dashboards with real-time enquiry tracking and performance analytics",
      "TEJ Disha Class 10 career guidance & stream-selection aptitude assessment portal",
      "OTP-verified student registration pipeline with automated transactional emails",
      "Interactive educational web games (Speed Math Sprint & PCMB Mystery Sprint) with live leaderboards",
    ],
    detail:
      "Built end-to-end for TEJ Institute's Virar and Vasai branches, this platform replaces fragmented admissions and testing workflows with a unified web application. Students can register via OTP, take timed competitive entrance mock tests, discover career streams through TEJ Disha, and compete on live leaderboards—while staff manage enquiries and student progress from a dedicated admin portal.",
    line: "Your next chapter\nstarts here.",
    note: "LEARN · PREPARE · PROGRESS",
    // Add inner screenshots later like this:
    // gallery: [
    //   { src: "/work/tej-dashboard.png", caption: "Student test series & analytics dashboard" },
    //   { src: "/work/tej-disha.png", caption: "TEJ Disha Class 10 career aptitude portal" },
    // ],
  },
  {
    slug: "shello",
    name: "Shello",
    type: "E-commerce / Brand experience",
    tag: "Concept storefront",
    description:
      "A coastal-inspired storefront for jewellery made with real seashells.",
    year: "2026",
    tone: "shell",
    url: "https://gorgeous-sundae-8df737.netlify.app/",
    services: ["Art direction", "Web design", "Development"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    deliverables: [
      "Editorial product storytelling & tactile visual system",
      "Responsive storefront layout & collection browsing UX",
    ],
    detail:
      "A product-first digital home for a sea-shell jewellery brand. The visual direction borrows from the shoreline: warm sand, soft ocean tones, tactile imagery and a shopping journey that keeps the craft in focus.",
    line: "Made by the sea.\nMade to be kept.",
    note: "REAL SHELLS · HAND-FINISHED",
  },
  {
    slug: "riyanshi-glow",
    name: "Riyanshi Glow",
    type: "E-commerce / Beauty",
    tag: "Concept storefront",
    description:
      "A polished online shopping concept for a modern beauty label.",
    year: "2026",
    tone: "glow",
    url: "https://riyanshi-glow.vercel.app/",
    services: ["Visual direction", "E-commerce UI", "Development"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    deliverables: [
      "Clean skincare product discovery & routine-builder UI",
      "Conversion-focused product detail architecture",
    ],
    detail:
      "A modern beauty storefront concept built around clear product discovery, a calm editorial feel and an easy path from browsing to buying.",
    line: "A little ritual.\nA lot of glow.",
    note: "CARE THAT FEELS LIKE YOU",
  },
  {
    slug: "fit-form",
    name: "Fit & Form",
    type: "Fitness / Business website",
    tag: "Concept project",
    description:
      "A high-energy digital presence for a neighbourhood fitness brand.",
    year: "2026",
    tone: "fit",
    url: "https://ironforge-fitness-seven.vercel.app/",
    services: ["Brand direction", "Web design", "Development"],
    stack: ["Next.js", "React", "Tailwind CSS"],
    deliverables: [
      "High-contrast typographic identity & class schedule layout",
      "Membership tier comparison & trial booking flow",
    ],
    detail:
      "A self-initiated concept showing how a fitness business can communicate its energy, services and membership offer with a bold, conversion-focused website.",
    line: "Earn your\nstrong.",
    note: "TRAIN · RECOVER · REPEAT",
  },
];