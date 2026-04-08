type AboutMeProps = {
  isDark: boolean;
};

const focusAreas = [
  {
    title: "What I Work With",
    text: "Angular, React, ASP.NET Core, PHP, SQL, Azure, Python ETL, ArcGIS JavaScript, and analytics tools for data-focused applications.",
  },
  {
    title: "How I Build",
    text: "I like systems that are clear, maintainable, and practical — good structure on the backend, thoughtful UI on the frontend, and decisions grounded in real user needs.",
  },
  {
    title: "What I Care About",
    text: "Clean architecture, useful interfaces, reliable delivery, and software that turns complex workflows into something understandable and usable.",
  },
];

export default function AboutMe({ isDark }: AboutMeProps) {
  const eyebrowClass = isDark
    ? "text-[11px] uppercase tracking-[0.28em] text-slate-400"
    : "text-[11px] uppercase tracking-[0.28em] text-slate-500";

  const titleClass =
    "mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-[2.8rem]";

  const bodyClass = isDark
    ? "text-sm leading-relaxed text-slate-300 md:text-[15px]"
    : "text-sm leading-relaxed text-slate-600 md:text-[15px]";

  const mutedClass = isDark ? "text-slate-400" : "text-slate-500";
  const borderClass = isDark ? "border-white/10" : "border-slate-200";

  return (
    <section className="relative px-6 py-14 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <div className={eyebrowClass}>About Me</div>

          <h1 className={titleClass}>
            I build software that connects engineering, data, and practical user value.
          </h1>

          <div className={`mt-6 space-y-4 ${bodyClass}`}>
            <p>
              I’m a full-stack developer with experience across web applications,
              backend systems, analytics workflows, and data-driven platforms. My
              work usually sits where application development, structured data, and
              real-world usability meet.
            </p>

            <p>
              I enjoy taking complex technical requirements and shaping them into
              products that feel clear, scalable, and maintainable — whether that
              means building frontend experiences, designing APIs, working with
              databases, or supporting reporting and ETL pipelines behind the scenes.
            </p>
          </div>
        </div>

        <div className={`mt-10 border-t ${borderClass}`} />

        <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
          {focusAreas.map((item) => (
            <div key={item.title}>
              <h2 className="text-base font-semibold tracking-[-0.02em]">
                {item.title}
              </h2>

              <p className={`mt-3 text-sm leading-relaxed ${mutedClass}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}