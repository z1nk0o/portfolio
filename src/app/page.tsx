import Image from "next/image";
import { Section } from "@/components/section";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/data/resume";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const accentText = "text-emerald-600 dark:text-emerald-400";
const card =
  "rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none";
const primaryBtn =
  "rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400";
const outlineBtn =
  "rounded-lg border border-zinc-300 text-zinc-700 transition-colors hover:border-emerald-500/60 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-emerald-400/60 dark:hover:text-emerald-400";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_100%_at_50%_-20%,rgba(16,185,129,0.10),transparent)] dark:bg-[radial-gradient(ellipse_60%_100%_at_50%_-20%,rgba(16,185,129,0.14),transparent)]"
      />

      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <a
            href="#top"
            className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100"
          >
            <span className={accentText}>~/</span>trex.reapor
          </a>
          <nav className="flex items-center gap-4 text-sm text-zinc-500 sm:gap-5 dark:text-zinc-400">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden transition-colors hover:text-emerald-600 sm:inline dark:hover:text-emerald-400"
              >
                {item.label}
              </a>
            ))}
            <span className="hidden h-4 w-px bg-zinc-300 sm:block dark:bg-zinc-800" />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <GitHubIcon className="size-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <LinkedInIcon className="size-4" />
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-6">
        {/* ── Hero ─────────────────────────────────────── */}
        <section className="flex min-h-[85vh] items-center py-16">
          <div className="grid w-full items-center gap-10 sm:grid-cols-[1fr_auto]">
            <div className="order-2 sm:order-1">
              <p className={`mb-4 font-mono text-sm ${accentText}`}>
                Hi, my name is
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
                {profile.name}.
              </h1>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-500 sm:text-3xl dark:text-zinc-400">
                {profile.role} · {profile.tagline}
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                {profile.intro}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href={`mailto:${profile.email}`} className={primaryBtn}>
                  Get in touch
                </a>
                <a
                  href="#experience"
                  className={`${outlineBtn} px-6 py-3 text-sm font-semibold`}
                >
                  See my work
                </a>
                <span className="mx-1 hidden h-6 w-px bg-zinc-300 sm:block dark:bg-zinc-800" />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <GitHubIcon className="size-6" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
                >
                  <LinkedInIcon className="size-6" />
                </a>
              </div>
            </div>

            {/* profile picture — circular crop on a theme-aware gradient */}
            <div className="order-1 justify-self-center sm:order-2">
              <div className="animate-hero-in">
                <div className="animate-float relative">
                  {/* soft pulsing glow */}
                  <div
                    aria-hidden
                    className="animate-glow-pulse absolute -inset-3 rounded-full bg-emerald-500/25 blur-2xl dark:bg-emerald-400/20"
                  />
                  <div className="relative size-48 overflow-hidden rounded-full bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-500 ring-2 ring-emerald-600/30 sm:size-64 dark:from-emerald-500/50 dark:via-emerald-700/40 dark:to-emerald-950 dark:ring-emerald-400/30">
                    <Image
                      src={profile.photo}
                      alt={`Portrait of ${profile.name}`}
                      width={600}
                      height={600}
                      priority
                      className="size-full object-cover"
                    />
                    {profile.photoDark ? (
                      // Alternate dark-mode photo cross-fades over the base one
                      <Image
                        src={profile.photoDark}
                        alt=""
                        width={600}
                        height={600}
                        className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 dark:opacity-100"
                      />
                    ) : (
                      // Sunglasses drop in when dark mode is on 😎
                      <svg viewBox="0 0 200 64" className="sunglasses" aria-hidden>
                        <rect x="12" y="10" width="76" height="42" rx="17" fill="#0c0a09" stroke="#34d399" strokeOpacity="0.45" strokeWidth="2.5" />
                        <rect x="112" y="10" width="76" height="42" rx="17" fill="#0c0a09" stroke="#34d399" strokeOpacity="0.45" strokeWidth="2.5" />
                        <path d="M88 22 C 94 13, 106 13, 112 22" fill="none" stroke="#0c0a09" strokeWidth="7" strokeLinecap="round" />
                        <line x1="28" y1="42" x2="52" y2="18" stroke="white" strokeOpacity="0.16" strokeWidth="7" strokeLinecap="round" />
                        <line x1="128" y1="42" x2="152" y2="18" stroke="white" strokeOpacity="0.16" strokeWidth="7" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────── */}
        <Section id="experience" number="01" title="Experience">
          <ol className="relative space-y-10 border-l border-zinc-200 pl-8 dark:border-zinc-800">
            {experience.map((job) => (
              <li key={job.role} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1.5 size-2.5 rounded-full border-2 border-emerald-600 bg-zinc-50 dark:border-emerald-400 dark:bg-zinc-950"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                    <span className={accentText}> @ {job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-zinc-500">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      <span aria-hidden className={`mt-1 ${accentText}`}>
                        ▹
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* ── Projects ─────────────────────────────────── */}
        <Section id="projects" number="02" title="Projects">
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className={`${card} p-6 transition-colors hover:border-emerald-500/40 sm:p-8 dark:hover:border-emerald-400/40`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      <span aria-hidden className={`mt-1 ${accentText}`}>
                        ▹
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-emerald-600/25 bg-emerald-600/5 px-3 py-1 font-mono text-xs text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* ── Skills ───────────────────────────────────── */}
        <Section id="skills" number="03" title="Skills">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className={`${card} p-6`}>
                <h3 className={`mb-4 font-mono text-sm font-semibold ${accentText}`}>
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-zinc-200 bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700/70 dark:bg-zinc-800/50 dark:text-zinc-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Education ────────────────────────────────── */}
        <Section id="education" number="04" title="Education">
          <div className="space-y-4">
            {education.map((entry) => (
              <div
                key={entry.school}
                className={`${card} flex flex-wrap items-baseline justify-between gap-x-4 px-6 py-4`}
              >
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {entry.school}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {entry.degree}
                  </p>
                </div>
                <p className="font-mono text-xs text-zinc-500">{entry.period}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Contact ──────────────────────────────────── */}
        <Section id="contact" number="05" title="Get in touch">
          <div className="pb-8 text-center sm:text-left">
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
              I&apos;m open to junior software engineer and full-stack developer
              roles. If you&apos;d like to talk about how I can help your team,
              my inbox is always open.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <a href={`mailto:${profile.email}`} className={primaryBtn}>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className={`${outlineBtn} px-6 py-3 font-mono text-sm`}
              >
                {profile.phone}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`${outlineBtn} p-3`}
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`${outlineBtn} p-3`}
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center font-mono text-xs text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-600">
        © {new Date().getFullYear()} {profile.name} · built with Next.js &
        Tailwind CSS
      </footer>
    </div>
  );
}
