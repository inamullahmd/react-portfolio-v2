import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

type HomeProps = {
  isDark: boolean;
};

type HeroVisualProps = {
  isDark: boolean;
};


type ProjectItem = {
  title: string;
  type: string;
  description: string;
  tech: string;
  tags?: string[];
  highlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  contribution: string[];
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
  issued: string;
  expiry?: string;
  verifyUrl: string;
  logo: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "University of Oklahoma",
    role: "Full Stack Developer",
    period: "Jan 2023 - Present",
    contribution: [
      "Led the development of the Oklahoma Housing Needs Assessment platform and built secure APIs for large housing and planning datasets.",
      "Built an automated Python ETL pipeline with validation checks and integrated ArcGIS-based mapping and analytics workflows into the platform.",
      "Improved performance and reliability through SQL optimization, indexing, cleaner payload delivery, and deployment hardening.",
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    role: "Application Developer",
    period: "Jan 2021 - Dec 2022",
    contribution: [
      "Built Angular application layers with reusable UI components and secure authentication for enterprise workflows.",
      "Developed ASP.NET Core and Python services on Microsoft Azure and supported backend integrations across APIs and connected systems.",
      "Implemented ETL workflows for reporting data and improved operational reliability through logging, monitoring, and release support.",
    ],
  },
  {
    company: "Purple Technologies",
    role: ".NET Developer",
    period: "May 2019 - Sep 2020",
    contribution: [
      "Designed and developed a college automation portal covering admissions, attendance, grading, and fee tracking workflows.",
      "Handled the project from requirements gathering through development, testing, and deployment with a focus on structured admin flows and usability.",
      "Deployed and maintained the application on IIS and supported ongoing fixes, updates, and operational stability.",
    ],
  },
];

const skillGroups = [
  {
    label: "Core Programming",
    items: [
      "C#",
      "Python",
      "Java",
      "SQL",
      "R",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [".NET", "Angular", "React", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Databases & Data",
    items: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MariaDB", "MongoDB"],
  },
  {
    label: "Cloud & Developer Tools",
    items: [
      "Microsoft Azure",
      "Azure DevOps",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Docker",
    ],
  },
  {
    label: "Analytics & Visualization",
    items: ["Power BI", "Tableau", "ArcGIS JavaScript", "Jupyter Notebook"],
  },
];

const projects: ProjectItem[] = [
  {
    title: "Cleanframe.",
    type: "Featured",
    description:
      "Developed a browser-first CSV workspace for profiling messy datasets, correcting schema issues, cleaning missing values, building charts, and exporting packaged data artifacts.",
    tech: "Next.js • TypeScript • Tailwind CSS • Zustand • shadcn/ui • Apache ECharts",
    highlights: [
      "Built a schema-first CSV workbench with column profiling, type detection, missing-value detection, outlier indicators, and data-quality summaries.",
      "Implemented an interactive data grid with formatted/raw value toggles, column visibility controls, text-size adjustment, pagination, missing-value highlighting, and outlier highlighting.",
      "Migrated charting from Recharts to Apache ECharts and added configurable bar, line, area, pie, scatter, and histogram charts with PNG export and save-to-package support.",
      "Added local browser session persistence, workspace history, settings-driven parsing behavior, custom delimiters, configurable empty-value tokens, and exportable ZIP packages."
    ],
    githubUrl: "https://github.com/inamullahmd/cleanframe",
    liveUrl: "https://cleanframe.inamullahmd.com/"
  },
  {
    title: "Kinetodesk.",
    type: "Featured",
    description:
      "Developed a full-stack business dashboard that presents key operational data in a clean, centralized interface for tracking customers, employees, finances, and inventory activity.",
    tech: "Laravel • React • Vite • TypeScript • MySQL • Tailwind CSS",
    highlights: [
      "Built a centralized dashboard to display business metrics and operational summaries in one place.",
      "Integrated a Laravel REST API with a React frontend to fetch and present real-time application data.",
      "Implemented date-based filtering and structured dashboard views to make financial and operational insights easier to review."
    ],
    "githubUrl": "https://github.com/inamullahmd/estimation-of-obesity-levels",
    "liveUrl": "https://kinetodesk.inamullahmd.com/"
  },
  {
    title: "Gathering Place Parking Study",
    type: "Featured",
    description:
      "Conducted a parking study for Gathering Place, a public park in Tulsa, by collecting parking data, analyzing demand patterns, and presenting findings through ArcGIS StoryMaps and geospatial visualizations.",
    tech: "ArcGIS Online • ArcGIS StoryMaps • MS Office Suite",
  },
  {
    title: "Oklahoma Housing Needs Assessment",
    type: "Featured",
    description:
      "Developed a data-driven platform for analyzing housing conditions, surfacing planning insights, and presenting findings through interactive geospatial tools.",
    tech: "Angular • PHP • MySQL • ArcGIS JS • Python",
    highlights: [
      "Built a platform that helped turn housing data into planning insights for public-facing use.",
      "Supported researchers and policymakers with clearer access to geographic and housing trends.",
      "Improved the reliability and usability of the system for working with large planning datasets."
    ]
  },
  {
    title: "College Administrative System",
    type: "Internal",
    description:
      "Developed a college administrative system to streamline admissions, attendance, grading, and fee management through centralized academic workflows.",
    tech: ".NET • EF Core • SQL Server • Bootstrap • IIS",
    highlights: [
      "Streamlined core academic workflows including admissions, attendance, grading, and fee tracking.",
      "Designed a structured admin experience that made everyday operations easier to manage.",
      "Handled the project across development, deployment, and ongoing maintenance."
    ]
  },
  {
    title: "Twitter Sentiment Analysis",
    type: "Academic",
    description:
      "Analyzed political sentiment on Twitter/X during the 2024 U.S. election cycle to understand how public opinion shifted across swing states, major candidates, and key campaign events.",
    tech: "Python • Sentiment Analysis • Transformers • Data Visualization",
    highlights: [
      "Tracked voter sentiment across seven swing states over a six-month period.",
      "Compared how public opinion changed around debates, candidate changes, and other major events.",
      "Studied how predicted sentiment trends lined up with actual election outcomes."
    ]
  },
  {
    title: "Enhanced Indexing Strategies for SQLite",
    type: "Academic",
    description:
      "Implemented and evaluated custom GIN and BRIN indexing extensions in SQLite to study how alternative indexing strategies affect query performance on large datasets.",
    tech: "C • SQLite • Indexing • Query Performance",
    highlights: [
      "Extended SQLite with custom indexing approaches to improve performance on large-scale queries.",
      "Benchmarked creation time and query speed against standard indexing baselines.",
      "Found BRIN to be the stronger fit for fast range queries, while GIN introduced significant setup and maintenance overhead."
    ]
  },
  {
    title: "Estimation of Obesity Levels",
    type: "Academic",
    description:
      "Built a machine learning project to estimate obesity levels from eating habits and physical condition data, using classification models to study how lifestyle and health factors relate to obesity outcomes.",
    tech: "Python • Machine Learning • Data Analysis • Predictive Modeling",
    highlights: [
      "Prepared and balanced the dataset to improve model reliability across obesity categories.",
      "Tested multiple classification models and compared them using accuracy, precision, recall, and F1 score.",
      "Achieved the strongest results with SVM, reaching 99.17% accuracy on the final evaluation."
    ],
    "githubUrl": "https://github.com/inamullahmd/estimation-of-obesity-levels"
  },
  {
    title: "Prediction of Heart Disease",
    type: "Academic",
    description:
      "Built a machine learning project to predict heart disease risk from large-scale health records, with a focus on supporting early diagnosis and understanding the tradeoff between strong detection rates and false positives.",
    tech: "R • Machine Learning • Predictive Modeling • Data Analysis",
    highlights: [
      "Analyzed more than 319,000 health records to study factors linked to heart disease risk.",
      "Compared three predictive approaches and evaluated them across accuracy, sensitivity, specificity, and related error measures.",
      "Found that high overall accuracy still came with low specificity, leading to more false positives in practice."
    ],
    githubUrl: "https://github.com/inamullahmd/heart-disease-prediction"
  },
  {
    title: "Loan Default Prediction",
    type: "Academic",
    description:
      "Built a machine learning project to predict possible loan defaults from borrower data, with a focus on handling class imbalance and comparing supervised models for financial risk assessment.",
    tech: "Python • Machine Learning • Predictive Modeling • Data Analysis",
    highlights: [
      "Worked with a dataset of 252,000 records to study patterns linked to potential loan default.",
      "Preprocessed the data, handled imbalance, and compared multiple supervised learning approaches.",
      "Found Random Forest to be the strongest overall model, while KNN showed much slower prediction time."
    ],
    githubUrl: "https://github.com/inamullahmd/loan-default-prediction"
  },
  {
    title: "Tic-Tac-Toe RL Agent",
    type: "Academic",
    description:
      "Built a reinforcement learning project to train an agent for Tic-Tac-Toe and compare how different learning strategies perform in a simple but strategic game environment.",
    tech: "Python • Reinforcement Learning • Q-Learning • SARSA",
    githubUrl: "https://github.com/inamullahmd/reinforced-learning-tic-tac-toe",
    highlights: [
      "Implemented and compared Q-Learning, SARSA, and Dynamic Programming for game-play decisions.",
      "Studied how learning strategy and learning rate affected convergence and overall performance.",
      "Used Dynamic Programming as a benchmark to evaluate how well the RL agents learned optimal play."
    ]
  },
  {
    title: "College Fest Website",
    type: "Featured",
    description:
      "Built a college fest website to centralize event information, streamline participant registration, and support both online and offline payment workflows for the annual fest.",
    tech: "Java • JSP • MySQL • JavaScript • Bootstrap",
    highlights: [
      "Created a single platform for event details, schedules, venues, and coordinator information.",
      "Built a registration flow that allowed participants to sign up for events and choose between online and offline payment options.",
      "Added reporting features for organizers to track participation, financial summaries, and winner lists."
    ]
  }
];

const education: EducationItem[] = [
  {
    school: "University of Oklahoma",
    degree: "Master of Science in Data Science & Analytics",
    period: "Jan 2023 - Dec 2024",
    detail: "Norman, OK • GPA 3.9 / 4.0",
    activities: [
      "Served as a Graduate Research Assistant, supporting housing data analysis and parking study initiatives.",
      "Participated in the DSA Club through seminars and other technical events."
    ],
    accent: "violet",
  },
  {
    school: "Dhanekula Institute of Engineering & Technology",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "Jun 2016 - Nov 2020",
    detail: "Vijayawada, India • GPA 8.17 / 10.0",
    activities: [
      "Platinum member of the college R&D Club, leading teams on the development of a school automation system.",
      "Technical Coordinator for the annual fest, managing website development and maintenance.",
      "Coordinator for weekly department activities such as seminars, presentations, quizzes, and coding competitions."
    ],
    accent: "cyan",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "Azure Data Fundamentals",
    type: "Professional Certification",
    description:
      "Validated foundational knowledge of Microsoft Azure data services, including relational and non-relational data, analytics workloads, and core data concepts.",
    issuer: "Microsoft",
    issued: "Feb 26, 2022",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/InamullahMohammad-3148/DCFD5FBFAD9CA3A9?sharingId=B0CE504634BC7CA",
    logo: "/logos/microsoft_logo.png",
  },
  {
    title: "Azure Developer Associate",
    type: "Professional Certification",
    description:
      "Validated expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure using tools and frameworks aligned with modern development practices.",
    issuer: "Microsoft",
    issued: "Feb 12, 2022",
    expiry: "Feb 12, 2023",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/InamullahMohammad-3148/2877FBCA704E6439?sharingId=B0CE504634BC7CA",
    logo: "/logos/microsoft_logo.png",
  },
];

const terminalSequences = [
  {
    command: "npx create-innovation --latest",
    output: [
      "Fetching starter files...",
      "Installing dependencies...",
      "Scaffolding project...",
    ],
  },
  {
    command: "git checkout -b feature/analytics",
    output: [
      "Switching to new branch...",
      "Tracking clean history...",
      "Ready for first commit...",
    ],
  },
  {
    command: "pnpm dev --host",
    output: [
      "Compiling modules...",
      "Starting local server...",
      "Ready on localhost:5173",
    ],
  },
  {
    command: "docker compose up -d",
    output: [
      "Pulling service images...",
      "Booting containers...",
      "Environment is healthy...",
    ],
  },
];

function TypingTerminal({ isDark }: { isDark: boolean }) {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [mode, setMode] = useState<"typing" | "holding" | "deleting">("typing");
  const [visibleLogs, setVisibleLogs] = useState(0);

  const activeSequence = terminalSequences[sequenceIndex];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (mode === "typing") {
      if (typed.length < activeSequence.command.length) {
        timeout = setTimeout(() => {
          setTyped(activeSequence.command.slice(0, typed.length + 1));
        }, 26 + Math.random() * 28);
      } else {
        timeout = setTimeout(() => {
          setMode("holding");
          setVisibleLogs(1);
        }, 500);
      }
    }

    if (mode === "holding") {
      if (visibleLogs < activeSequence.output.length) {
        timeout = setTimeout(() => {
          setVisibleLogs((prev) => prev + 1);
        }, 340);
      } else {
        timeout = setTimeout(() => {
          setMode("deleting");
        }, 1400);
      }
    }

    if (mode === "deleting") {
      if (typed.length > 0) {
        timeout = setTimeout(() => {
          setTyped((prev) => prev.slice(0, -1));
        }, 16);
      } else {
        timeout = setTimeout(() => {
          setVisibleLogs(0);
          setMode("typing");
          setSequenceIndex((prev) => (prev + 1) % terminalSequences.length);
        }, 240);
      }
    }

    return () => clearTimeout(timeout);
  }, [typed, mode, visibleLogs, activeSequence, sequenceIndex]);

  return (
    <div
      className={`relative overflow-hidden rounded-[1.35rem] border shadow-[0_24px_80px_rgba(0,0,0,0.22)] ${isDark
          ? "border-white/10 bg-[#0b1020]/90 backdrop-blur-xl"
          : "border-slate-300/70 bg-white/90 backdrop-blur-xl"
        }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-3 ${isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-slate-50/80"
          }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>

      <div className="relative px-5 py-5 font-mono text-[13px] leading-7 md:text-[14px]">
        <motion.div
          className={`absolute inset-y-0 -left-20 w-20 skew-x-[-22deg] ${isDark
              ? "bg-gradient-to-r from-transparent via-white/8 to-transparent"
              : "bg-gradient-to-r from-transparent via-white/70 to-transparent"
            }`}
          animate={{ x: ["0%", "620%"] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span className={isDark ? "text-emerald-300" : "text-emerald-600"}>$</span>

            <span className={isDark ? "text-emerald-300" : "text-emerald-600"}>
              {typed}
            </span>

            <motion.span
              className={`inline-block h-[18px] w-[8px] ${isDark ? "bg-violet-400/90" : "bg-violet-600/90"
                }`}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="mt-1 space-y-0.5 pl-5">
            {activeSequence.output.slice(0, visibleLogs).map((line) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className={isDark ? "text-slate-400" : "text-slate-500"}
              >
                › {line}
              </motion.div>
            ))}

            {visibleLogs === activeSequence.output.length && mode !== "deleting" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.3, repeat: Infinity }}
                className={isDark ? "text-slate-300" : "text-slate-600"}
              >
                portfolio_v2 git:(main)
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVisual({ isDark }: HeroVisualProps) {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[560px] lg:h-[460px]">
      <div
        className={`absolute inset-0 overflow-hidden rounded-[2rem] border ${isDark
            ? "border-white/8 bg-[radial-gradient(circle_at_35%_18%,rgba(168,85,247,0.14),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(56,189,248,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"
            : "border-slate-300/70 bg-[radial-gradient(circle_at_35%_18%,rgba(168,85,247,0.10),transparent_28%),radial-gradient(circle_at_75%_30%,rgba(56,189,248,0.10),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.92))]"
          }`}
      >
        <div
          className={`absolute inset-0 ${isDark
              ? "bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(148,163,184,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.13)_1px,transparent_1px)]"
            } bg-[size:28px_28px] opacity-40`}
        />

        <motion.div
          className={`absolute -left-8 top-16 h-24 w-64 rounded-full blur-3xl ${isDark ? "bg-violet-500/14" : "bg-violet-400/10"
            }`}
          animate={{
            x: [0, 24, -10, 0],
            y: [0, -12, 8, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className={`absolute right-0 top-10 h-28 w-72 rounded-full blur-3xl ${isDark ? "bg-sky-500/12" : "bg-sky-400/9"
            }`}
          animate={{
            x: [0, -20, 12, 0],
            y: [0, 10, -8, 0],
          }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 560 460"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M-20 126C58 120 116 168 178 162C232 156 274 118 336 126C394 134 440 180 582 174"
            stroke="currentColor"
            strokeWidth="1.2"
            className={isDark ? "text-white/8" : "text-slate-400/35"}
            animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.12, 0.45, 0.12] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M-20 286C64 272 110 318 180 320C250 322 312 252 390 262C452 270 486 320 580 330"
            stroke="currentColor"
            strokeWidth="1.2"
            className={isDark ? "text-white/8" : "text-slate-400/35"}
            animate={{ pathLength: [1, 0.22, 1], opacity: [0.12, 0.4, 0.12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <div
          className={`absolute left-10 top-8 text-[10px] font-mono ${isDark ? "text-white/5" : "text-slate-500/10"
            }`}
        >
          const state = useState(null)
        </div>
        <div
          className={`absolute right-12 top-12 text-[10px] font-mono ${isDark ? "text-white/5" : "text-slate-500/10"
            }`}
        >
          void main() {"{}"}
        </div>
        <div
          className={`absolute left-16 bottom-20 text-[10px] font-mono ${isDark ? "text-white/5" : "text-slate-500/10"
            }`}
        >
          docker-compose up -d
        </div>

        <motion.div
          className="absolute left-1/2 top-1/2 w-[78%] max-w-[360px] -translate-x-1/2 -translate-y-1/2"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <TypingTerminal isDark={isDark} />
        </motion.div>
      </div>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  isDark,
}: {
  eyebrow: string;
  title: string;
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
  const glowClass = isDark
    ? "from-violet-500/8 via-violet-400/4 to-transparent"
    : "from-slate-300/20 via-slate-200/10 to-transparent";

  const dotClass = isDark ? "bg-violet-300" : "bg-slate-500";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative py-2 md:py-3"
    >
      <div
        className={`pointer-events-none absolute inset-0 rounded-[1.4rem] bg-gradient-to-r ${glowClass} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="grid gap-6 rounded-[1.4rem] px-4 py-6 md:px-5 md:py-7 lg:grid-cols-12 lg:gap-8 lg:px-6">
        <div className="space-y-3 lg:col-span-3">
          <p
            className={
              isDark
                ? "text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-600"
            }
          >
            {item.company}
          </p>

          <h3 className="text-[1.2rem] font-semibold tracking-[-0.04em] md:text-[1.35rem]">
            {item.role}
          </h3>

          <p className="text-xs tracking-wide text-slate-500">{item.period}</p>
        </div>

        <div className="min-w-0 lg:col-span-9">
          <p
            className={
              isDark
                ? "text-[11px] uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] uppercase tracking-[0.26em] text-slate-600"
            }
          >
            Key Contributions
          </p>

          <div className="mt-3 space-y-3">
            {item.contribution.map((point) => (
              <div key={point} className="flex gap-2.5">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} />
                <p
                  className={`text-sm leading-relaxed break-words ${isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
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

      <div className="grid gap-6 rounded-[1.4rem] px-4 py-6 md:px-5 md:py-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-8 lg:px-6">
        <div className="space-y-3">
          <h3 className="text-[1.12rem] font-semibold tracking-[-0.04em] md:text-[1.28rem]">
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

        <div className="min-w-0">
          <p
            className={
              isDark
                ? "text-[11px] uppercase tracking-[0.26em] text-slate-400"
                : "text-[11px] uppercase tracking-[0.26em] text-slate-700"
            }
          >
            Activities & Focus
          </p>

          <div className="mt-3 space-y-3">
            {item.activities.map((activity) => (
              <div key={activity} className="flex gap-2.5">
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot}`}
                />
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
  const [expanded, setExpanded] = useState(false);

  const hasLinks = Boolean(project.liveUrl || project.githubUrl);
  const hasHighlights = Boolean(project.highlights && project.highlights.length > 0);
  const hasTags = Boolean(project.tags && project.tags.length > 0);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`flex h-full flex-col rounded-[1.25rem] border p-4 md:p-5 ${isDark ? "border-white/10 bg-white/[0.03]" : "border-slate-200 bg-white"
        }`}
    >
      <p
        className={
          isDark
            ? "text-[10px] uppercase tracking-[0.24em] text-slate-400"
            : "text-[10px] uppercase tracking-[0.24em] text-slate-500"
        }
      >
        {project.type} Project
      </p>

      <h3 className="mt-3 min-h-[3.25rem] text-base font-semibold tracking-[-0.03em] md:text-[1.05rem] md:leading-6">
        {project.title}
      </h3>

      <p
        className={`mt-3 min-h-[7.5rem] text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"
          }`}
      >
        {project.description}
      </p>

      <p
        className={
          isDark
            ? "mt-4 min-h-[2.75rem] text-[12px] leading-relaxed text-slate-400"
            : "mt-4 min-h-[2.75rem] text-[12px] leading-relaxed text-slate-500"
        }
      >
        <span className="font-medium">Tech:</span> {project.tech}
      </p>

      <div className="mt-4 min-h-[2rem]">
        {hasTags ? (
          <div className="flex flex-wrap gap-2">
            {project?.tags?.map((tag) => (
              <span
                key={tag}
                className={
                  isDark
                    ? "rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-400"
                    : "rounded-full border border-slate-200 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-slate-500"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 min-h-[2.5rem]">
        {hasLinks ? (
          <div className="flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${isDark
                    ? "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <CgWebsite className="h-3.5 w-3.5" />
                Live Website
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${isDark
                    ? "border-white/10 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                  }`}
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub Repo
              </a>
            ) : null}
          </div>
        ) : null}
      </div>

      {hasHighlights ? (
        <div
          className={`mt-auto pt-4 ${isDark ? "border-white/10" : "border-slate-200"
            }`}
        >
          <div className={`border-t pt-4 ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className={
                isDark
                  ? "text-xs font-medium text-slate-300 transition hover:text-white"
                  : "text-xs font-medium text-slate-700 transition hover:text-slate-950"
              }
            >
              {expanded ? "Hide highlights" : "View highlights"}
            </button>

            {expanded ? (
              <div className="mt-3 space-y-2.5">
                {project.highlights?.map((point) => (
                  <div key={point} className="flex gap-2.5">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${isDark ? "bg-slate-400" : "bg-slate-500"
                        }`}
                    />
                    <p
                      className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"
                        }`}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mt-auto pt-4" />
      )}
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
        <img
          src={item.logo}
          alt={`${item.issuer} logo`}
          className="h-10 w-auto object-contain md:h-11"
        />
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

      <div
        className={
          isDark
            ? "mt-3 space-y-1 text-xs text-slate-400"
            : "mt-3 space-y-1 text-xs text-slate-500"
        }
      >
        <p>Issued: {item.issued}</p>
        {item.expiry && <p>Expires: {item.expiry}</p>}
      </div>

      <p
        className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"
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

  const PROJECTS_PER_PAGE = 3;
  const [projectPage, setProjectPage] = useState(1);

  const totalProjectPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = projects.slice(
    (projectPage - 1) * PROJECTS_PER_PAGE,
    projectPage * PROJECTS_PER_PAGE
  );

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
                  : "inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-slate-700"
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
                  : "mt-5 max-w-[620px] text-sm leading-relaxed text-slate-700 md:text-[15px]"
              }
            >
              Full-stack developer with over 5 years of experience building secure,
              scalable web applications and data platforms. I work across modern
              frontend development, backend APIs, cloud-based systems, ETL
              workflows, and analytics-focused solutions that turn complex
              requirements into clean, practical user experiences.
            </motion.p>

            {/* <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 flex flex-wrap gap-2.5"
            >
              <span className={pillClass}>Angular / React</span>
              <span className={pillClass}>.NET / PHP / APIs</span>
              <span className={pillClass}>Azure / SQL / ETL</span>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className={primaryButtonClass}>
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="files/INAMULLAH_MOHAMMAD.pdf"
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                Resume
              </a>
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

      <section id="about" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="About Me"
            title="A little more about how I work."
            isDark={isDark}
          />

          <div className={`mt-8 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
            <div className="grid gap-8 py-6 md:grid-cols-2 md:gap-10">
              <div>
                <p
                  className={
                    isDark
                      ? "text-sm leading-relaxed text-slate-300 md:text-[15px]"
                      : "text-sm leading-relaxed text-slate-600 md:text-[15px]"
                  }
                >
                  I like building software that sits between strong engineering and
                  practical user needs. My approach is structured and systems-oriented
                  — clear architecture, reliable backend logic, and interfaces that
                  make complex workflows easier to understand and use.
                </p>
              </div>

              <div>
                <p
                  className={
                    isDark
                      ? "text-sm leading-relaxed text-slate-300 md:text-[15px]"
                      : "text-sm leading-relaxed text-slate-600 md:text-[15px]"
                  }
                >
                  My long-term goal is to build products that create real public value
                  — tools that support community welfare, improve access to useful
                  information, and help people make better decisions through
                  thoughtful, data-driven software. I am especially drawn to work that
                  feels meaningful, usable, and built for impact beyond just delivery.
                </p>
              </div>
            </div>
          </div>
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
                          ? "rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] text-slate-200"
                          : "rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-700"
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

      <section id="projects" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Selected Projects"
            title="Some things I’ve built."
            isDark={isDark}
          />

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${projectPage}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="h-full"
              >
                <ProjectCard project={project} isDark={isDark} />
              </motion.div>
            ))}
          </div>

          {totalProjectPages > 1 ? (
            <div className="mt-8 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setProjectPage((prev) => Math.max(prev - 1, 1))}
                disabled={projectPage === 1}
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition ${projectPage === 1
                    ? isDark
                      ? "cursor-not-allowed border border-white/10 bg-white/[0.03] text-slate-500"
                      : "cursor-not-allowed border border-slate-200 bg-slate-50 text-slate-400"
                    : isDark
                      ? "border border-white/10 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
              >
                Previous
              </button>

              {Array.from({ length: totalProjectPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setProjectPage(pageNumber)}
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium transition ${projectPage === pageNumber
                      ? isDark
                        ? "border border-white/10 bg-white text-slate-950"
                        : "border border-slate-900 bg-slate-900 text-white"
                      : isDark
                        ? "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setProjectPage((prev) => Math.min(prev + 1, totalProjectPages))
                }
                disabled={projectPage === totalProjectPages}
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition ${projectPage === totalProjectPages
                    ? isDark
                      ? "cursor-not-allowed border border-white/10 bg-white/[0.03] text-slate-500"
                      : "cursor-not-allowed border border-slate-200 bg-slate-50 text-slate-400"
                    : isDark
                      ? "border border-white/10 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]"
                      : "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
                  }`}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section id="education" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <SectionIntro
            eyebrow="Education"
            title="Academic foundations behind the engineering and analytics."
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

      <section id="contact" className="px-6 py-12 md:py-14">
        <div className="mx-auto max-w-[1180px]">
          <div
            className={`rounded-[1.5rem] border px-5 py-8 md:px-8 md:py-10 ${isDark
              ? "border-white/10 bg-white/[0.03]"
              : "border-slate-200 bg-white"
              }`}
          >
            <div className="max-w-2xl">
              <div
                className={
                  isDark
                    ? "text-[11px] uppercase tracking-[0.28em] text-slate-400"
                    : "text-[11px] uppercase tracking-[0.28em] text-slate-500"
                }
              >
                Let&apos;s Talk
              </div>

              <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.04em] md:text-[2.2rem]">
                Let&apos;s work together.
              </h2>

              <p
                className={
                  isDark
                    ? "mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-[15px]"
                    : "mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-[15px]"
                }
              >
                I&apos;m open to full-stack development roles, data-focused work,
                research collaborations, and thoughtful software projects. Feel free
                to reach out if you&apos;d like to connect.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:inamullahmohammadmdi@gmail.com"
                className={
                  isDark
                    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                    : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                }
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/inamullahmd/"
                target="_blank"
                rel="noreferrer"
                className={
                  isDark
                    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                    : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                }
              >
                <FaLinkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>

              <a
                href="https://www.discordapp.com/users/inamullahmd"
                target="_blank"
                rel="noreferrer"
                className={
                  isDark
                    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                    : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                }
              >
                <FaDiscord className="h-3.5 w-3.5" />
                Discord
              </a>

              <a
                href="https://github.com/inamullahmd"
                target="_blank"
                rel="noreferrer"
                className={
                  isDark
                    ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                    : "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                }
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-16 pt-6 md:pb-20">
        <div className="mx-auto max-w-[1180px]">
          <div
            className={
              isDark
                ? "border-t border-white/10 pt-6"
                : "border-t border-slate-200 pt-6"
            }
          >
            <p
              className={
                isDark
                  ? "text-sm text-slate-400"
                  : "text-sm text-slate-500"
              }
            >
              © 2026 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}