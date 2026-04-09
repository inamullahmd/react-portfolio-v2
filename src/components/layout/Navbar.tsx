import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const pageItems = [{ label: "Home", to: "/" }];

const sectionItems = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Education", to: "/#education" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const headerClasses = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 text-slate-100 backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 text-slate-900 backdrop-blur-xl";

  const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
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

  const desktopSectionLinkClass = isDark
    ? "text-sm text-slate-400 transition-colors duration-200 hover:text-slate-200"
    : "text-sm text-slate-500 transition-colors duration-200 hover:text-slate-900";

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
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

  const mobileSectionLinkClass = isDark
    ? "rounded-xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
    : "rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900";

  const ctaClass = isDark
    ? "inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
    : "inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link
          to="/"
          className="text-[15px] font-semibold tracking-[0.18em] md:text-base"
          onClick={closeMenu}
        >
          INAMULLAH MOHAMMAD
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {pageItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopNavLinkClass}>
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

          {sectionItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={desktopSectionLinkClass}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
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
            {isDark ? (
              <Sun className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>

          <a
            href="mailto:inamullahmohammadmdi.com"
            className={`${ctaClass} hidden sm:inline-flex`}
            onClick={closeMenu}
          >
            Let&apos;s Talk
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
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {pageItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClass}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}

            {sectionItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={mobileSectionLinkClass}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="mailto:inamullahmohammadmdi.com"
              className={`${ctaClass} mt-2 w-full`}
              onClick={closeMenu}
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}