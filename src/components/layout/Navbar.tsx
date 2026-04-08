import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const headerClasses = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl text-slate-100"
    : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl text-slate-900";

  const navLinkBase =
    "relative text-sm font-medium transition-colors duration-200";

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      navLinkBase,
      isDark
        ? isActive
          ? "text-slate-100"
          : "text-slate-300 hover:text-white"
        : isActive
          ? "text-slate-900"
          : "text-slate-700 hover:text-slate-900",
    ].join(" ");

  const primaryButtonClass = isDark
    ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
    : "inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800";

  const mobilePanelClass = isDark
    ? "border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
    : "border-t border-slate-200 bg-white/95 backdrop-blur-xl";

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "rounded-xl px-4 py-3 text-sm font-medium transition",
      isDark
        ? isActive
          ? "bg-white text-slate-950"
          : "text-slate-300 hover:bg-white/10 hover:text-white"
        : isActive
          ? "bg-slate-950 text-white"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          to="/"
          className="text-lg font-semibold uppercase tracking-[0.2em]"
          onClick={() => setIsOpen(false)}
        >
          Inamullah Mohammad
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClasses}>
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-2 left-0 h-[2px] w-full rounded-full ${
                        isDark ? "bg-white" : "bg-slate-900"
                      }`}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className={
              isDark
                ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-slate-100 text-slate-900 transition hover:bg-slate-200"
            }
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a href="#contact" className={primaryButtonClass}>
            Let&apos;s Talk
          </a>

          <button
            type="button"
            className={
              isDark
                ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden"
                : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-slate-100 text-slate-900 transition hover:bg-slate-200 md:hidden"
            }
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${mobilePanelClass}`}>
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="#contact"
              className={`${primaryButtonClass} mt-2 w-full text-center`}
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}