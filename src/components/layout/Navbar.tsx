import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const headerClasses = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 text-slate-100 backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 text-slate-900 backdrop-blur-xl";

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative text-sm transition-colors duration-200",
      isDark
        ? isActive
          ? "text-white"
          : "text-slate-400 hover:text-slate-200"
        : isActive
          ? "text-slate-900"
          : "text-slate-500 hover:text-slate-900",
    ].join(" ");

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "rounded-xl px-4 py-3 text-sm transition",
      isDark
        ? isActive
          ? "bg-white text-slate-950"
          : "text-slate-300 hover:bg-white/10 hover:text-white"
        : isActive
          ? "bg-slate-950 text-white"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    ].join(" ");

  const ctaClass = isDark
    ? "inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
    : "inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-[-0.02em] md:text-base"
          onClick={() => setIsOpen(false)}
        >
          Inamullah Mohammad
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLinkClass}>
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute -bottom-2 left-0 h-[1.5px] w-full rounded-full ${
                        isDark ? "bg-white" : "bg-slate-900"
                      }`}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            className={
              isDark
                ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:bg-white/[0.08]"
                : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
            }
          >
            {isDark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <a href="/#contact" className={`${ctaClass} hidden sm:inline-flex`}>
            Contact
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className={
              isDark
                ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:bg-white/[0.08] md:hidden"
                : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-slate-50 text-slate-900 transition hover:bg-slate-100 md:hidden"
            }
          >
            {isOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={
            isDark
              ? "border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden"
              : "border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden"
          }
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
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
              href="/#contact"
              className={`${ctaClass} mt-2 w-full`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}