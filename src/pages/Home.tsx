import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type HomeProps = {
  isDark: boolean;
};

type HeroVisualProps = {
  isDark: boolean;
};

type ProjectItem = {
  title: string;
  description: string;
  tech: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  contribution: string;
  stack: string;
  accent: "violet" | "cyan" | "emerald";
};

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail: string;
  activities: string[];
  accent: "violet" | "cyan";
};

type CertificationItem = {
  title: string;
  type: string;
  description: string;
  issuer: string;
  verifyUrl: string;
  logoText: string;
  logoClass: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "University of Oklahoma",
    role: "Full Stack Developer",
    period: "Jan 2023 - Present",
    summary:
      "Building public-facing platforms that combine engineering, analytics, and mapping into products that help planners, policymakers, and research teams work with complex housing data more clearly.",
    contribution:
      "Launched the Oklahoma Housing Needs Assessment platform, designed scalable APIs, integrated ArcGIS mapping, and built a Python ETL workflow that reduced annual data refresh time by 80%.",
    stack: "Angular • PHP • MySQL • Python ETL • ArcGIS JS • SQL",
    accent: "violet",
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Application Developer",
    period: "Jan 2021 - Dec 2022",
    summary:
      "Worked across enterprise frontend delivery, cloud APIs, authentication, and Azure-based ingestion workflows for secure production systems with strong operational visibility.",
    contribution:
      "Built Angular application layers, developed .NET and Python APIs on Azure App Service, and implemented data pipelines across Azure services for scalable enterprise workflows.",
    stack: "Angular • .NET • Python • Azure • APIs • CI/CD",
    accent: "cyan",
  },
  {
    company: "Purple Technologies",
    role: ".NET Developer",
    period: "May 2019 - Sep 2020",
    summary:
      "Delivered an operational college automation platform from requirements through deployment, with a strong focus on usability, role-based workflows, and reliable day-to-day system behavior.",
    contribution:
      "Built the portal using .NET, Entity Framework Core, and SQL Server to support admissions, attendance, grading, and fee tracking, then deployed and maintained it on IIS.",
    stack: ".NET • EF Core • SQL Server • Bootstrap • IIS",
    accent: "emerald",
  },
];

const skillGroups = [
  {
    label: "Frontend & UI",
    items: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    label: "Backend & APIs",
    items: [".NET", "C#", "PHP", "Python", "REST APIs", "Entity Framework Core"],
  },
  {
    label: "Databases",
    items: ["SQL", "MySQL", "SQL Server", "PostgreSQL", "Oracle", "MariaDB", "MongoDB"],
  },
  {
    label: "Data & Analytics",
    items: ["Python ETL", "Power BI", "Tableau", "ArcGIS JavaScript", "Jupyter", "R"],
  },
  {
    label: "Cloud & Tools",
    items: [
      "Microsoft Azure",
      "Azure DevOps",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Docker",
      "Linux",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Project Title 01",
    description:
      "Short placeholder description for this project. Keep it to one or two lines on the homepage.",
    tech: "Tech Stack • Add • Yours",
  },
  {
    title: "Project Title 02",
    description:
      "Short placeholder description for this project. Keep it concise and replace it later with your real summary.",
    tech: "Tech Stack • Add • Yours",
  },
  {
    title: "Project Title 03",
    description:
      "Short placeholder description for this project. This card is intentionally compact for the homepage.",
    tech: "Tech Stack • Add • Yours",
  },
  {
    title: "Project Title 04",
    description:
      "Short placeholder description for this project. You can later replace this with a real brief overview.",
    tech: "Tech Stack • Add • Yours",
  },
  {
    title: "Project Title 05",
    description:
      "Short placeholder description for this project. Keep the homepage version brief and clean.",
    tech: "Tech Stack • Add • Yours",
  },
  {
    title: "Project Title 06",
    description:
      "Short placeholder description for this project. Full details can live on the separate Projects page.",
    tech: "Tech Stack • Add • Yours",
  },
];

const education: EducationItem[] = [
  {
    school: "University of Oklahoma",
    degree: "Master of Science in Data Science & Analytics",
    period: "Jan 2023 - Dec 2024",
    detail: "Norman, OK • GPA 3.9 / 4.0",
    activities: [
      "Add academic, research, or student activity here",
      "Add coursework, capstone, assistantship, or involvement here",
    ],
    accent: "violet",
  },
  {
    school: "Dhanekula Institute of Engineering & Technology",
    degree: "Bachelor of Science in Computer Science & Engineering",
    period: "Jun 2016 - Nov 2020",
    detail: "Vijayawada, India • GPA 8.17 / 10.0",
    activities: [
      "Add student activity, project, club, or leadership item here",
      "Add technical involvement, event, or academic highlight here",
    ],
    accent: "cyan",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Certification Title 01",
    type: "Professional Certificate",
    description:
      "Add a short description here about what this certification covers, what tools it focuses on, or what it validates.",
    issuer: "Issuing Organization",
    verifyUrl: "#",
    logoText: "MS",
    logoClass: "from-sky-400 to-blue-500",
  },
  {
    title: "Certification Title 02",
    type: "Specialization",
    description:
      "Add a short description here about what this certification covers, what tools it focuses on, or what it validates.",
    issuer: "Issuing Organization",
    verifyUrl: "#",
    logoText: "GH",
    logoClass: "from-slate-200 to-slate-400",
  },
  {
    title: "Certification Title 03",
    type: "Certificate",
    description:
      "Add a short description here about what this certification covers, what tools it focuses on, or what it validates.",
    issuer: "Issuing Organization",
    verifyUrl: "#",
    logoText: "AZ",
    logoClass: "from-cyan-300 to-violet-500",
  },
  {
    title: "Certification Title 04",
    type: "Professional Certificate",
    description:
      "Add a short description here about what this certification covers, what tools it focuses on, or what it validates.",
    issuer: "Issuing Organization",
    verifyUrl: "#",
    logoText: "DB",
    logoClass: "from-amber-300 to-orange-500",
  },
];

function HeroVisual({ isDark }: HeroVisualProps) {
  const ringClass = isDark ? "border-white/12" : "border-slate-300/70";
  const glassClass = isDark
    ? "border-white/10 bg-white/[0.05] backdrop-blur-2xl"
    : "border-slate-300/70 bg-white/65 backdrop-blur-2xl";

  const glowClass = isDark
    ? "bg-gradient-to-br from-violet-500/35 via-cyan-400/22 to-emerald-400/18"
    : "bg-gradient-to-br from-violet-400/22 via-sky-400/18 to-emerald-400/18";

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[440px] lg:h-[430px]">
      <motion.div
        className={`absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glowClass}`}
        animate={{
          scale: [1, 1.06, 0.98, 1],
          x: [0, 10, -8, 0],
          y: [0, -10, 8, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${ringClass}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className={`absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${ringClass}`}
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className={`absolute left-[10%] top-[19%] h-16 w-16 rounded-full border ${glassClass}`}
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute right-[10%] top-[14%] h-20 w-20 rounded-full border ${glassClass}`}
        animate={{ y: [0, 12, 0], x: [0, -7, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute bottom-[12%] left-[16%] h-14 w-14 rounded-full border ${glassClass}`}
        animate={{ y: [0, 9, 0], x: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute bottom-[10%] right-[12%] h-24 w-24 rounded-full border ${glassClass}`}
        animate={{ y: [0, -12, 0], x: [0, 9, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  sideText,
  isDark,
}: {
  eyebrow: string;
  title: string;
  sideText?: string;
  isDark: boolean;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_260px] md:items-end">
      <div>
        <div
          className={
            isDark
              ? "text-[11px] uppercase tracking-[0.28em] text-slate-400"
              : "text-[11px] uppercase tracking-[0.28em] text-slate-500"
          }
        >
          {eyebrow}
        </div>

        <h2 className="mt-3 max-w-3xl text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] md:text-[2.35rem]">
          {title}
        </h2>
      </div>

      {sideText ? (
        <p
          className={
            isDark
              ? "max-w-sm text-sm leading-relaxed text-slate-400"
              : "max-w-sm text-sm leading-relaxed text-slate-500"
          }
        >
          {sideText}
        </p>
      ) : null}
    </div>
  );
}

function ExperienceRow({
  item,
  isDark,
}: {
  item: ExperienceItem;
  isDark: boolean;
}) {
  const accentMap = {
    violet: {
      glow: isDark
        ? "from-violet-500/10 via-violet-400/5 to-transparent"
        : "from-violet-300/18 via-violet-200/8 to-transparent",
    },
    cyan: {
      glow: isDark
        ? "from-cyan-500/10 via-cyan-400/5 to-transparent"
        : "from-sky-300/18 via-sky-200/8 to-transparent",
    },
    emerald: {
      glow: isDark
        ? "from-emerald-500/10 via-emerald-400/5 to-transparent"
        : "from-emerald-300/18 via-emerald-200/8 to-transparent",
    },
  } as const;

  const accent = accentMap[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative py-2 md:py-3"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-r ${accent.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="grid gap-6 rounded-[1.4rem] px-4 py-6 md:px-5 md:py-7 lg:grid-cols-[170px_minmax(0,1fr)_260px] lg:gap-7 lg:px-6">
        <div className="space-y-2.5">
          <p
            className={
              isDark
                ? "text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600"
            }
          >
            {item.company}
          </p>

          <p className="text-xs tracking-wide text-slate-500">{item.period}</p>
        </div>

        <div>
          <h3 className="text-[1.35rem] font-semibold tracking-[-0.04em] md:text-[1.55rem]">
            {item.role}
          </h3>

          <p
            className={`mt-3 max-w-2xl text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
              }`}
          >
            {item.summary}
          </p>
        </div>

        <div>
          <p
            className={
              isDark
                ? "text-[11px] uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] uppercase tracking-[0.26em] text-slate-600"
            }
          >
            What I Built
          </p>

          <p
            className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"
              }`}
          >
            {item.contribution}
          </p>

          <p className="mt-4 text-xs tracking-wide text-slate-500">{item.stack}</p>
        </div>
      </div>
    </motion.article>
  );
}

function EducationRow({
  item,
  isDark,
}: {
  item: EducationItem;
  isDark: boolean;
}) {
  const accentMap = {
    violet: {
      dot: isDark ? "bg-violet-300" : "bg-violet-500",
      glow: isDark
        ? "from-violet-500/10 via-violet-400/5 to-transparent"
        : "from-violet-300/16 via-violet-200/6 to-transparent",
    },
    cyan: {
      dot: isDark ? "bg-cyan-300" : "bg-sky-500",
      glow: isDark
        ? "from-cyan-500/10 via-cyan-400/5 to-transparent"
        : "from-sky-300/16 via-sky-200/6 to-transparent",
    },
  } as const;

  const accent = accentMap[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative py-2 md:py-3"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-r ${accent.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="grid gap-6 rounded-[1.4rem] px-4 py-6 md:px-5 md:py-7 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-7 lg:px-6">
        <div className="space-y-3">
          <h3 className="text-[1.3rem] font-semibold tracking-[-0.04em] md:text-[1.5rem]">
            {item.degree}
          </h3>

          <p
            className={
              isDark
                ? "text-sm font-medium text-slate-300"
                : "text-sm font-medium text-slate-800"
            }
          >
            {item.school}
          </p>

          <p className="text-xs tracking-wide text-slate-500">{item.detail}</p>
          <p className="text-xs tracking-wide text-slate-500">{item.period}</p>
        </div>

        <div>
          <p
            className={
              isDark
                ? "text-[11px] uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] uppercase tracking-[0.26em] text-slate-600"
            }
          >
            Activities & Focus
          </p>

          <div className="mt-3 space-y-3">
            {item.activities.map((activity) => (
              <div key={activity} className="flex gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`} />
                <p
                  className={`text-sm leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                >
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  isDark,
}: {
  project: ProjectItem;
  isDark: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`h-full rounded-[1.25rem] border p-4 md:p-5 ${isDark
        ? "border-white/10 bg-white/[0.03]"
        : "border-slate-200 bg-white"
        }`}
    >
      <p
        className={
          isDark
            ? "text-[10px] uppercase tracking-[0.24em] text-slate-400"
            : "text-[10px] uppercase tracking-[0.24em] text-slate-500"
        }
      >
        Featured Project
      </p>

      <h3 className="mt-3 text-base font-semibold tracking-[-0.03em] md:text-[1.05rem]">
        {project.title}
      </h3>

      <p
        className={`mt-3 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {project.description}
      </p>

      <p className="mt-4 text-[11px] tracking-wide text-slate-500">{project.tech}</p>
    </motion.article>
  );
}

function CertificationGridCard({
  item,
  isDark,
}: {
  item: CertificationItem;
  isDark: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className={`h-full rounded-[1.25rem] border p-5 ${isDark
          ? "border-white/10 bg-white/[0.03]"
          : "border-slate-200 bg-white"
        }`}
    >
      <div className="flex justify-center">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-gradient-to-br ${item.logoClass} text-xs font-semibold text-slate-950 shadow-[0_8px_18px_rgba(0,0,0,0.18)]`}
        >
          {item.logoText}
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-[1rem] font-semibold leading-tight tracking-[-0.03em] md:text-[1.08rem]">
          {item.title}
        </h3>

        <p
          className={
            isDark
              ? "mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400"
              : "mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-500"
          }
        >
          {item.type}
        </p>

        <p
          className={
            isDark
              ? "mt-2 text-xs text-slate-400"
              : "mt-2 text-xs text-slate-500"
          }
        >
          {item.issuer}
        </p>
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"
          }`}
      >
        {item.description}
      </p>

      <div className="mt-5 flex justify-end">
        <a
          href={item.verifyUrl}
          target="_blank"
          rel="noreferrer"
          className={
            isDark
              ? "inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/[0.09]"
              : "inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-900 transition hover:bg-slate-100"
          }
        >
          Verify
        </a>
      </div>
    </motion.article>
  );
}

export default function Home({ isDark }: HomeProps) {
  const primaryButtonClass = isDark
    ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
    : "inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800";

  const secondaryButtonClass = isDark
    ? "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/[0.08]"
    : "inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-50";

  const pillClass = isDark
    ? "rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-slate-300"
    : "rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] text-slate-600";

  return (
    <>
      <section id="home" className="relative overflow-hidden px-6 pb-10 pt-14 md:pb-12 md:pt-16 lg:pb-14 lg:pt-20">
        <div
          className={`absolute inset-0 -z-10 ${isDark
            ? "bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_20%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.10),transparent_22%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.10),transparent_22%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_18%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_22%)]"
            }`}
        />

        <div className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,460px)] lg:gap-12">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={
                isDark
                  ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-slate-300"
                  : "inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-slate-600"
              }
            >
              <Sparkles className="h-3.5 w-3.5" />
              Full-Stack Developer • Data Analytics
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={isDark ? "mt-5 text-sm text-slate-400" : "mt-5 text-sm text-slate-500"}
            >
              Welcome — I&apos;m Inamullah Mohammad.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-3 max-w-[11ch] text-[3rem] font-semibold leading-[0.94] tracking-[-0.055em] md:text-[4.6rem]"
            >
              Building modern software for data-rich, real-world products.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className={
                isDark
                  ? "mt-5 max-w-[620px] text-sm leading-relaxed text-slate-300 md:text-[15px]"
                  : "mt-5 max-w-[620px] text-sm leading-relaxed text-slate-600 md:text-[15px]"
              }
            >
              I work across frontend development, backend APIs, cloud systems,
              ETL workflows, analytics tooling, and geospatial applications —
              turning complex requirements into clear, maintainable software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex flex-wrap gap-2.5"
            >
              <span className={pillClass}>Angular / React</span>
              <span className={pillClass}>.NET / PHP / APIs</span>
              <span className={pillClass}>Azure / SQL / ETL</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#experience" className={primaryButtonClass}>
                Explore Experience <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <Link to="/about" className={secondaryButtonClass}>
                About Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            <HeroVisual isDark={isDark} />
          </motion.div>
        </div>
      </section>

      <section id="experience" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Professional Journey"
            title="Built through products, platforms, and systems that had to work."
            isDark={isDark}
          />

          <div className={`mt-8 divide-y ${isDark ? "divide-white/10" : "divide-slate-200"}`}>
            {experiences.map((item) => (
              <ExperienceRow
                key={`${item.company}-${item.role}`}
                item={item}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Skills"
            title="Tools I use to design, build, and ship."
            sideText="Kept compact on purpose."
            isDark={isDark}
          />

          <div className={`mt-8 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className={`grid gap-3 py-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-8 ${isDark ? "border-b border-white/10" : "border-b border-slate-200"
                  }`}
              >
                <p
                  className={
                    isDark
                      ? "text-sm font-medium text-slate-200"
                      : "text-sm font-medium text-slate-900"
                  }
                >
                  {group.label}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={
                        isDark
                          ? "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-slate-200"
                          : "rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-700"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects-preview" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Selected Projects"
            title="Some things I’ve built."
            sideText="Compact homepage cards. Full details can live on the Projects page."
            isDark={isDark}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <ProjectCard project={project} isDark={isDark} />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-start">
            <Link
              to="/projects"
              className={
                isDark
                  ? "inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
                  : "inline-flex items-center gap-2 text-sm text-slate-700 transition hover:text-slate-950"
              }
            >
              View all projects <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="education" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Education"
            title="Academic foundations behind the engineering and analytics."
            sideText="Kept editorial and compact, just before the final contact block."
            isDark={isDark}
          />

          <div className={`mt-8 divide-y ${isDark ? "divide-white/10" : "divide-slate-200"}`}>
            {education.map((item) => (
              <EducationRow
                key={`${item.school}-${item.degree}`}
                item={item}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Certifications"
            title="Professional learning and credentials."
            sideText="Simple cards, kept compact."
            isDark={isDark}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <CertificationGridCard item={item} isDark={isDark} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-16 pt-10 md:pb-20">
        <div className="mx-auto max-w-[1180px]">
          <div className={isDark ? "border-t border-white/10 pt-8" : "border-t border-slate-200 pt-8"}>
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
              <div>
                <div
                  className={
                    isDark
                      ? "text-[11px] uppercase tracking-[0.28em] text-slate-400"
                      : "text-[11px] uppercase tracking-[0.28em] text-slate-500"
                  }
                >
                  Contact
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] md:text-[2rem]">
                  Let&apos;s build something thoughtful.
                </h2>

                <p
                  className={
                    isDark
                      ? "mt-4 max-w-2xl text-sm leading-relaxed text-slate-300"
                      : "mt-4 max-w-2xl text-sm leading-relaxed text-slate-600"
                  }
                >
                  Add your email, LinkedIn, and GitHub links here and keep this final
                  section direct and minimal.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="mailto:your.email@example.com" className={primaryButtonClass}>
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButtonClass}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}