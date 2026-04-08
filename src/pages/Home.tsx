import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type HomeProps = {
  isDark: boolean;
};

type HeroVisualProps = {
  isDark: boolean;
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

const experiences: ExperienceItem[] = [
  {
    company: "University of Oklahoma",
    role: "Full Stack Developer",
    period: "Jan 2023 — Present",
    summary:
      "Building public-facing platforms that combine engineering, analytics, and mapping into products that help planners, policymakers, and research teams work with complex housing data more clearly.",
    contribution:
      "Launched the Oklahoma Housing Needs Assessment platform, designed scalable APIs, integrated ArcGIS mapping, and built a Python ETL workflow that reduced annual data refresh time by 80%.",
    stack: "Angular • PHP • MySQL • Python ETL • ArcGIS JS • SQL",
    accent: "violet",
  },
  {
    company: "Cognizant",
    role: "Application Developer",
    period: "Jan 2021 — Dec 2022",
    summary:
      "Worked across enterprise frontend delivery, cloud APIs, authentication, and Azure-based ingestion workflows for secure production systems with strong operational visibility.",
    contribution:
      "Built Angular application layers, developed .NET and Python APIs on Azure App Service, and implemented data pipelines using Azure Functions, Logic Apps, API Management, Key Vault, and monitoring.",
    stack: "Angular • .NET • Python • Azure • APIs • CI/CD",
    accent: "cyan",
  },
  {
    company: "Purple Technologies",
    role: ".NET Developer",
    period: "May 2019 — Sep 2020",
    summary:
      "Delivered an operational college automation platform from requirements through deployment, with a strong focus on usability, role-based workflows, and reliable day-to-day system behavior.",
    contribution:
      "Built the portal using .NET, Entity Framework Core, and SQL Server to support admissions, attendance, grading, and fee tracking, then deployed and maintained it on Windows Server with IIS.",
    stack: ".NET • EF Core • SQL Server • Bootstrap • IIS",
    accent: "emerald",
  },
];

const capabilities = [
  {
    title: "Frontend & UI",
    description:
      "Building responsive, structured interfaces that make complex workflows feel clear and usable.",
    tools: [
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
    title: "Backend & APIs",
    description:
      "Designing application logic, APIs, and integrations that are reliable, maintainable, and scalable.",
    tools: [
      ".NET",
      "C#",
      "PHP",
      "Python",
      "REST API",
      "Entity Framework Core",
    ],
  },
  {
    title: "Databases",
    description:
      "Working with relational database systems and query-heavy applications that need performance and structure.",
    tools: [
      "SQL",
      "MS SQL Server",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MariaDB",
      "MongoDB",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Building ETL workflows, reporting layers, geospatial tools, and analytics experiences that support real decisions.",
    tools: [
      "Python ETL",
      "Power BI",
      "Tableau",
      "ArcGIS JS API",
      "Jupyter Notebook",
      "R",
      "Data Visualization",
    ],
  },
  {
    title: "Cloud & Development Tools",
    description:
      "Using cloud, collaboration, and delivery tooling to ship, maintain, and improve production-ready software.",
    tools: [
      "Microsoft Azure",
      "Azure DevOps",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Docker",
      "Linux",
      "Windows Server",
      "Visual Studio",
      "VS Code",
      "Agile / Scrum",
    ],
  },
];

function HeroVisual({ isDark }: HeroVisualProps) {
  const glassClass = isDark
    ? "border-white/10 bg-white/[0.04] backdrop-blur-2xl"
    : "border-slate-300/70 bg-white/60 backdrop-blur-2xl";

  const ringClass = isDark ? "border-white/10" : "border-slate-300/70";

  const glowClass = isDark
    ? "bg-gradient-to-br from-violet-500/35 via-cyan-400/25 to-emerald-400/20"
    : "bg-gradient-to-br from-violet-400/25 via-sky-400/20 to-emerald-400/20";

  return (
    <div className="relative mx-auto h-[380px] w-full max-w-[520px] lg:h-[560px]">
      <motion.div
        className={`absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glowClass}`}
        animate={{
          scale: [1, 1.08, 0.98, 1],
          x: [0, 14, -10, 0],
          y: [0, -12, 10, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border ${ringClass}`}
        animate={{ rotate: 360, scale: [1, 1.03, 1] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className={`absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${ringClass}`}
        animate={{ rotate: -360, scale: [1, 0.97, 1] }}
        transition={{
          rotate: { duration: 24, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className={`absolute left-[14%] top-[20%] h-24 w-24 rounded-full border ${glassClass}`}
        animate={{
          y: [0, -16, 0],
          x: [0, 8, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute right-[12%] top-[16%] h-32 w-32 rounded-full border ${glassClass}`}
        animate={{
          y: [0, 18, 0],
          x: [0, -10, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-[12%] left-[18%] h-20 w-20 rounded-full border ${glassClass}`}
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute bottom-[10%] right-[16%] h-40 w-40 rounded-full border ${glassClass}`}
        animate={{
          y: [0, -18, 0],
          x: [0, 12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute left-[48%] top-[18%] h-3 w-3 rounded-full ${isDark ? "bg-violet-300" : "bg-violet-500"
          }`}
        animate={{
          y: [0, -18, 0],
          opacity: [0.45, 1, 0.45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute right-[30%] top-[50%] h-2.5 w-2.5 rounded-full ${isDark ? "bg-cyan-300" : "bg-sky-500"
          }`}
        animate={{
          y: [0, 14, 0],
          x: [0, -6, 0],
          opacity: [0.4, 0.95, 0.4],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className={`absolute left-[34%] top-[56%] h-2.5 w-2.5 rounded-full ${isDark ? "bg-emerald-300" : "bg-emerald-500"
          }`}
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
          opacity: [0.35, 0.9, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
      dot: isDark ? "bg-violet-300" : "bg-violet-500",
      glow: isDark
        ? "from-violet-500/12 via-violet-400/6 to-transparent"
        : "from-violet-300/18 via-violet-200/8 to-transparent",
    },
    cyan: {
      dot: isDark ? "bg-cyan-300" : "bg-sky-500",
      glow: isDark
        ? "from-cyan-500/12 via-cyan-400/6 to-transparent"
        : "from-sky-300/18 via-sky-200/8 to-transparent",
    },
    emerald: {
      dot: isDark ? "bg-emerald-300" : "bg-emerald-500",
      glow: isDark
        ? "from-emerald-500/12 via-emerald-400/6 to-transparent"
        : "from-emerald-300/18 via-emerald-200/8 to-transparent",
    },
  } as const;

  const accent = accentMap[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="group relative py-4 md:py-5"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-r ${accent.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div
        className={`grid gap-8 rounded-[2rem] px-6 py-10 md:px-8 md:py-14 lg:grid-cols-[200px_minmax(0,1fr)_320px] lg:gap-12 lg:px-10 ${isDark ? "border-white/10" : "border-slate-200"
          }`}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <p
              className={
                isDark
                  ? "text-sm font-semibold uppercase tracking-[0.24em] text-slate-400"
                  : "text-sm font-semibold uppercase tracking-[0.24em] text-slate-700"
              }
            >
              {item.company}
            </p>
          </div>

          <p
            className={
              isDark
                ? "text-sm tracking-wide text-slate-400"
                : "text-sm tracking-wide text-slate-700"
            }
          >
            {item.period}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.04em] md:text-[2.6rem]">
            {item.role}
          </h3>

          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${isDark ? "text-slate-300" : "text-slate-600"
              }`}
          >
            {item.summary}
          </p>
        </div>

        <div>
          <p
            className={
              isDark
                ? "text-[11px] uppercase tracking-[0.28em] text-slate-400"
                : "text-[11px] uppercase tracking-[0.28em] text-slate-700"
            }
          >
            What I Built
          </p>

          <p
            className={`mt-4 leading-relaxed ${isDark ? "text-slate-200" : "text-slate-700"
              }`}
          >
            {item.contribution}
          </p>

          <p
            className={`mt-6 text-sm tracking-wide ${isDark ? "text-slate-400" : "text-slate-700"
              }`}
          >
            {item.stack}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home({ isDark }: HomeProps) {
  const sectionClass = "relative overflow-hidden";

  const eyebrowClass = isDark
    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-300"
    : "inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-slate-600";

  const welcomeClass = isDark
    ? "text-sm font-medium tracking-wide text-slate-300 md:text-base"
    : "text-sm font-medium tracking-wide text-slate-600 md:text-base";

  const paragraphClass = isDark
    ? "max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
    : "max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg";

  const primaryButtonClass = isDark
    ? "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
    : "inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800";

  const secondaryButtonClass = isDark
    ? "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10"
    : "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100";

  return (
    <>
      <section id="home" className={sectionClass}>
        <div
          className={`absolute inset-0 -z-10 ${isDark
              ? "bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_18%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_24%)]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.10),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_18%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.10),transparent_24%)]"
            }`}
        />

        <div
          className={`absolute inset-0 -z-10 bg-[size:64px_64px] ${isDark
              ? "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px)]"
            }`}
        />

        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:gap-20">
          <div className="w-full max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={eyebrowClass}
            >
              <Sparkles className="h-4 w-4" />
              FULL-STACK DEVELOPER • DATA ANALYTICS
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className={welcomeClass}
            >
              Welcome — I&apos;m Inamullah Mohammad.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="max-w-[11ch] text-5xl font-semibold leading-[0.9] tracking-[-0.04em] md:text-7xl xl:text-[6.2rem]"
            >
              I BUILD
              <br />
              MODERN,
              <br />
              DATA-DRIVEN
              <br />
              DIGITAL{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                PRODUCTS.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={paragraphClass}
            >
              Full-stack developer with over 5 years of experience building secure,
              scalable web applications and data platforms. I work across modern
              frontend development, backend APIs, cloud-based systems, ETL
              workflows, and analytics-focused solutions that turn complex
              requirements into clean, practical user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
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
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="relative w-full"
          >
            <HeroVisual isDark={isDark} />
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative px-6 pb-24 pt-6 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-end"
          >
            <div>
              <div
                className={
                  isDark
                    ? "text-sm uppercase tracking-[0.32em] text-slate-400"
                    : "text-sm uppercase tracking-[0.32em] text-slate-700"
                }
              >
                Experience
              </div>

              <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Built through products, platforms,
                <br />
                and systems that had to work.
              </h2>
            </div>
          </motion.div>

          <div
            className={`mt-16 divide-y ${isDark ? "divide-white/10" : "divide-slate-200"
              }`}
          >
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

      <section id="skills" className="relative px-6 pb-24 pt-4 md:pb-32">
  <div className="mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-end"
    >
      <div>
        <div
          className={
            isDark
              ? "text-sm uppercase tracking-[0.32em] text-slate-400"
              : "text-sm uppercase tracking-[0.32em] text-slate-700"
          }
        >
          Skills
        </div>

        <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
          Tools and technologies I use
          <br />
          to design, build, and ship.
        </h2>
      </div>

      <p
        className={`max-w-md text-base leading-relaxed md:text-lg ${
          isDark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        My stack spans frontend development, backend systems, databases,
        analytics workflows, and the tools that support delivery in real
        projects.
      </p>
    </motion.div>

    <div className="mt-16 grid gap-6 lg:grid-cols-12">
      {capabilities.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: index * 0.06 }}
          className={`rounded-[2rem] border p-7 md:p-8 ${
            index < 3 ? "lg:col-span-4" : "lg:col-span-6"
          } ${
            isDark
              ? "border-white/10 bg-white/[0.03] backdrop-blur-xl"
              : "border-slate-200 bg-white"
          }`}
        >
          <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-[2rem]">
            {item.title}
          </h3>

          <p
            className={`mt-5 leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {item.description}
          </p>

          <div
            className={`mt-8 border-t pt-6 ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          >
            <div className="flex flex-wrap gap-2.5">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className={
                    isDark
                      ? "rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                      : "rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  }
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

      <div id="contact" />
    </>
  );
}