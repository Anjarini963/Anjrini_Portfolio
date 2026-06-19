/**
 * Single source of truth for all site copy and links.
 *
 * Everything the page renders flows from this file. Keeping content here (rather
 * than hard-coded inside components) means a future Arabic (RTL) translation can
 * be added by introducing a parallel `content.ar.ts` and a locale switch — no
 * component rewrites, no layout surgery. Layout components use logical CSS
 * (start/end, ms/me) so they already mirror correctly under `dir="rtl"`.
 *
 * PLACEHOLDERS — fill these in:
 *   - links.github / links.linkedin       → real profile URLs
 *   - links.cv                            → path to the CV PDF in /public
 *   - hero.headshot                       → path to the headshot image in /public
 */

export const profile = {
  name: "Abdullah Anjrini",
  /** Monospace logo mark shown in the nav. */
  logo: "abdullah.anjrini",
  role: "Full-Stack Product Engineer",
  location: "Jeddah, Saudi Arabia",
};

export const links = {
  email: "abdullahanjarini@gmail.com",
  github: "https://github.com/anjarini963",
  linkedin:
    "https://www.linkedin.com/in/abdullah-ahmad-firas-aktam-anjrini-a41510251/",
  cv: "/0626-CV-AbdullahAnjrini.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  // The two words wrapped for the sage→teal gradient highlight.
  headlineLead: "I build practical",
  headlineHighlight: "AI products",
  headlineTail: "— and the backends behind them.",
  subtitle:
    "Full-Stack Product Engineer at Outriders. I ship products end to end — web, mobile, and backend — turning messy requirements into scalable, data-driven systems. CS (AI) graduate, currently pursuing an MSc in Finance.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Download CV (PDF)", href: links.cv },
  // TODO: drop the headshot into /public and point this at it.
  headshot: "/headshot.jpg",
  headshotAlt: "Portrait of Abdullah Anjrini",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science (AI) graduate with a backend and data focus. I like the unglamorous parts — modelling the data, designing the APIs, wiring up auth and business logic — because that's where products actually become reliable. Most of my work lives at the intersection of machine learning and the systems that put it to use.",
    "What sets my work apart is the combination of CS and finance. I'm pursuing an MSc in Finance alongside engineering, so I read a problem on two levels at once: the operational data model and the financial logic behind it. That makes me comfortable building analytics, financial and operational tooling, and dashboards that have to be correct, not just pretty.",
    "Above all I have a bias toward shipping. I'd rather have a working MVP in front of real users than a perfect plan — then iterate from there. I've taken products from a blank repo to something investors and hackathon judges paid attention to, and I care about doing that calmly and end to end.",
  ],
  meta: [
    { label: "Currently", value: "Building at Outriders" },
    { label: "Based in", value: "Jeddah, Saudi Arabia" },
    { label: "Status", value: "Open to opportunities" },
  ],
};

export type Project = {
  /**
   * Stable, URL-safe id. MUST match the folder name under
   * public/projects/<slug>/ — that folder is where this project's screenshots
   * live (see lib/shots.ts). Renaming a slug means renaming its folder too.
   */
  slug: string;
  title: string;
  year: string;
  summary: string;
  detail: string;
  tags: string[];
  /** Optional emphasised badge, e.g. for the hackathon win. */
  badge?: string;
  /** Featured projects get the sage→teal gradient hairline border. */
  featured?: boolean;
  /**
   * Screenshots shown as a carousel inside the detail modal. POPULATED
   * AUTOMATICALLY at build time from public/projects/<slug>/ — do not set this by
   * hand. When that folder is missing or empty, the modal opens text-only with no
   * image area. See lib/shots.ts and components/Projects.tsx.
   */
  shots?: string[];
};

export const projects: Project[] = [
  {
    slug: "pitchiq",
    title: "PitchIQ — AI Sales-Call Coaching Platform",
    year: "2026",
    summary:
      "An AI-powered Arabic sales-call coaching platform, designed and built in a single day.",
    detail:
      "Won 1st place out of 100+ participants at a Replit-sponsored hackathon at Wadi Jeddah. Built end to end in a single day under competition constraints — scoping, AI integration, and a working interface, all shipped before the buzzer.",
    tags: ["AI", "Rapid Prototyping", "Hackathon Winner"],
    badge: "1st place · 100+ participants",
    featured: true,
  },
  {
    slug: "procurement-assistant",
    title: "AI Procurement Assistant",
    year: "2026",
    summary:
      "Natural-language querying over large procurement datasets via tool-based LLM agents.",
    detail:
      "An AI-driven procurement analytics assistant: ask questions in plain language and get answers backed by real data. Handles data cleaning, time-based analysis, supplier and commodity insights, and exploratory forecasting — all through an interactive web interface powered by tool-using LLM agents.",
    tags: ["FastAPI", "LangChain", "MongoDB", "OpenAI", "Analytics"],
    featured: true,
  },
  {
    slug: "fake-news-detector",
    title: "Arabic Fake-News Detection Browser Extension",
    year: "2025",
    summary:
      "A Chrome extension that scores the credibility of Arabic news in real time.",
    detail:
      "Final Year Project. Detects misinformation in Arabic news through a custom NLP/ML pipeline: built a 50,000-article dataset, engineered 25+ linguistic features, applied LDA topic modelling, and trained a CatBoost classifier that produces real-time credibility scores from 0 to 100.",
    tags: ["NLP", "Machine Learning", "CatBoost", "Chrome Extension"],
    badge: "Final Year Project",
  },
  {
    slug: "flutter-supabase-app",
    title: "Full-Stack Flutter App + Supabase Backend",
    year: "2024",
    summary:
      "A cross-platform Flutter app with a secure Supabase backend and a web-only dashboard for admins and managers.",
    detail:
      "Team Project. Built both the Flutter/Dart frontend and the Supabase backend — authentication, authorization, row-level security, and Edge Functions to automate business logic. The same Flutter codebase targeted mobile and web, with an admin and manager overview dashboard scoped to the web build only — keeping that higher-role tooling off the mobile app by design. Delivered a functional MVP that attracted early investor interest.",
    tags: ["Flutter", "Flutter Web", "Supabase", "RLS", "Dashboard"],
    badge: "Team Project",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Product Engineer",
    company: "Outriders",
    period: "Apr 2026 – Present",
    points: [
      "Build and ship products end to end at an AI-focused company.",
      "Next.js + Tailwind CSS web frontends, Supabase backends (Edge Functions, Row-Level Security), and Flutter/Dart mobile apps.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "ProximityFocal",
    period: "Jul 2024 – Nov 2024",
    points: [
      "Analyzed and documented a legacy enterprise system for modernization planning, and evaluated integration feasibility.",
      "Aligned business and technical requirements with stakeholders.",
      "Represented the IT team at the Global Health Exhibition (Riyadh 2024).",
    ],
  },
  {
    role: "Technical Assistant & Technical Writer",
    company: "Asia Pacific University",
    period: "Nov 2023 – Feb 2025",
    points: [
      "IT support — hardware, software, and troubleshooting for students and lecturers.",
      "Asset and service-request documentation in Snipe-IT; authored Knowledge Base guides.",
      "Produced official IT and board-meeting minutes.",
    ],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Programming & Tools",
    items: ["Python", "Java", "SQL", "R", "Dart", "Flutter", "TensorFlow", "Scikit-Learn", "Git"],
  },
  {
    label: "Frontend & Web",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "AI / ML",
    items: ["NLP", "LDA", "Feature Engineering", "Model Optimization", "Data Preprocessing"],
  },
  {
    label: "Backend & Database",
    items: ["Supabase", "Auth & Authorization", "Row-Level Security", "Edge Functions", "Backend Integration"],
  },
  {
    label: "Software",
    items: ["Browser Extensions", "Flutter prototyping", "Backend-focused dev", "MVP development"],
  },
];

export type Education = {
  degree: string;
  school: string;
  detail: string;
};

export const education: Education[] = [
  {
    degree: "M.Sc. Finance",
    school: "Sunway University, Malaysia",
    detail: "Online · expected 2028",
  },
  {
    degree: "B.Sc. (Hons.) Computer Science (Artificial Intelligence)",
    school: "Asia Pacific University, Malaysia",
    detail: "Aug 2025",
  },
];

export const contact = {
  heading: "Let's build something — or talk about a role.",
  body: "I'm open to product engineering roles and to founders who need a builder. The fastest way to reach me is email.",
};
