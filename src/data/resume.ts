// Single source of truth for portfolio content.
// Edit this file to update the site — no component changes needed.

export const profile = {
  name: "Trex Dexter Reapor",
  role: "Junior Programmer",
  tagline: "Web Development & ERP Systems",
  // Kept intentionally short — the site should invite conversation, not restate a CV.
  intro:
    "I build and maintain production ERP systems end-to-end — turning manual, paper-based business processes into automated web workflows with role-based approvals. Full-stack with Next.js, React, TypeScript, Prisma, and PostgreSQL; equally at home in legacy PHP systems.",
  email: "reapor.trex@gmail.com",
  phone: "+63 966 208 2103",
  github: "https://github.com/z1nk0o",
  linkedin: "https://www.linkedin.com/in/trex-reapor-88389a326/",
  // Square PNG with transparent background (600×600) — the hero renders it
  // on a gradient circle that adapts to light/dark mode.
  photo: "/profile.png",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "First Unity Textile Mills",
    role: "Part-Time Junior Programmer",
    period: "Apr 2026 — Present",
    location: "Manila, PH",
    highlights: [
      "Maintain the company's live HR module in production, shipping change requests across HR transactions as the business raises them.",
      "Linked offset and vacation-leave balances in real time with validation rules, and automated offset updates from approved overtime filings — removing manual reconciliation.",
      "Built online and QR-code kiosk ordering for the company cafeteria, supporting cash and food/value voucher payments.",
    ],
  },
  {
    company: "First Unity Textile Mills",
    role: "OJT Intern — Junior Programmer",
    period: "Feb 2026 — Apr 2026",
    location: "Manila, PH",
    highlights: [
      "Digitized manual HR processes into an interconnected ERP module, moving approvals from paper to fully online multi-level flows that vary by department and transaction.",
      "Mirrored legacy DTR and payroll output into the new ERP so HR works from a single system.",
      "Built a web-based time-in/time-out feature for retail employees using geolocation and camera capture, eliminating physical timekeeping submissions.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    name: "UDM HR Portal",
    description:
      "Faculty hiring management system for Universidad de Manila — automates faculty hiring and contract renewal from application to approval.",
    year: "2025",
    highlights: [
      "Designed the PostgreSQL schema and Prisma data layer for faculty records, applications, vacancies, and renewals.",
      "Built HR/Dean analytics dashboards — descriptive, predictive, and prescriptive — with Recharts.",
      "QR-code applicant intake plus role-based access (HR and Dean) with NextAuth, and integrated Cloudinary and email notifications.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    group: "Backend & Data",
    items: [
      "Node.js",
      "Prisma ORM",
      "REST APIs",
      "NextAuth.js",
      "PostgreSQL",
      "MySQL",
      "Relational DB Design",
    ],
  },
  {
    group: "Cloud & Tools",
    items: [
      "Vercel",
      "Cloudinary",
      "Recharts",
      "Git / GitHub",
      "Postman",
      "QR Code Generation",
    ],
  },
];

export const education = [
  {
    school: "Universidad de Manila",
    degree: "BS Information Technology — Data Science specialization",
    period: "2022 — Present",
  },
  {
    school: "National Teachers College",
    degree: "Information and Communications Technology",
    period: "2019 — 2021",
  },
];
