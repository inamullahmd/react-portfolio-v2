type AboutMeProps = {
  isDark: boolean;
};

export default function AboutMe({ isDark}: AboutMeProps) {
  return (
    <section className="relative px-6 py-20">

      <div className="mx-auto max-w-5xl">
        <div
          className={
            isDark
              ? "rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
              : "rounded-[2rem] border border-slate-200 bg-white p-8 backdrop-blur-xl md:p-12"
          }
        >
          <div
            className={
              isDark
                ? "text-sm uppercase tracking-[0.3em] text-slate-400"
                : "text-sm uppercase tracking-[0.3em] text-slate-700"
            }
          >
            About Me
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            I build software that connects strong engineering with practical user value.
          </h1>

          <p
            className={
              isDark
                ? "mt-6 max-w-3xl text-lg leading-relaxed text-slate-300"
                : "mt-6 max-w-3xl text-lg leading-relaxed text-slate-600"
            }
          >
            My work sits at the intersection of full-stack development, data,
            and product thinking. I enjoy designing systems that are scalable,
            maintainable, and clear to use—whether that means building frontend
            experiences, backend APIs, data pipelines, or analytics platforms.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div
              className={
                isDark
                  ? "rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                  : "rounded-2xl border border-slate-200 bg-slate-50 p-6"
              }
            >
              <h2 className="text-xl font-semibold">What I Work With</h2>
              <p
                className={
                  isDark
                    ? "mt-3 leading-relaxed text-slate-300"
                    : "mt-3 leading-relaxed text-slate-600"
                }
              >
                Angular, ASP.NET Core, PHP, SQL, Azure, Python ETL, ArcGIS JS,
                Power BI, and modern web technologies for building secure,
                data-driven applications.
              </p>
            </div>

            <div
              className={
                isDark
                  ? "rounded-2xl border border-white/10 bg-slate-900/60 p-6"
                  : "rounded-2xl border border-slate-200 bg-slate-50 p-6"
              }
            >
              <h2 className="text-xl font-semibold">How I Think</h2>
              <p
                className={
                  isDark
                    ? "mt-3 leading-relaxed text-slate-300"
                    : "mt-3 leading-relaxed text-slate-600"
                }
              >
                I value clean code, strong architecture, thoughtful interfaces,
                and systems that solve real problems without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}