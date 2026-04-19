import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const sectionItems = [
  { label: "About", to: "/#about", hash: "#about" },
  { label: "Experience", to: "/#experience", hash: "#experience" },
  { label: "Skills", to: "/#skills", hash: "#skills" },
  { label: "Projects", to: "/#projects", hash: "#projects" },
  { label: "Education", to: "/#education", hash: "#education" },
  { label: "Contact", to: "/#contact", hash: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const closeMenu = () => setIsOpen(false);

  const isHomeActive = pathname === "/" && !hash;

  const headerClasses = isDark
    ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 text-slate-100 backdrop-blur-xl"
    : "sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 text-slate-900 backdrop-blur-xl";

  const desktopLinkBase = "relative text-sm transition-colors duration-200";
  const mobileLinkBase = "rounded-xl px-4 py-3 text-sm transition";

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold tracking-[0.24em]">
          INAMULLAH MOHAMMAD
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={[
              desktopLinkBase,
              isDark
                ? isHomeActive
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
                : isHomeActive
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900",
            ].join(" ")}
          >
            Home
            {isHomeActive && (
              <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-current" />
            )}
          </Link>

          {sectionItems.map((item) => {
            const isActive = pathname === "/" && hash === item.hash;

            return (
              <Link
                key={item.label}
                to={item.to}
                className={[
                  desktopLinkBase,
                  isDark
                    ? isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                    : isActive
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-900",
                ].join(" ")}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-current" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={
              isDark
                ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:bg-white/[0.08]"
                : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-slate-50 text-slate-900 transition hover:bg-slate-100"
            }
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            to="/#contact"
            className={
              isDark
                ? "inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
                : "inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            }
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          className={
            isDark
              ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:bg-white/[0.08] md:hidden"
              : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-slate-50 text-slate-900 transition hover:bg-slate-100 md:hidden"
          }
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={closeMenu}
              className={[
                mobileLinkBase,
                isDark
                  ? isHomeActive
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                  : isHomeActive
                    ? "bg-slate-950 text-white"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              Home
            </Link>

            {sectionItems.map((item) => {
              const isActive = pathname === "/" && hash === item.hash;

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMenu}
                  className={[
                    mobileLinkBase,
                    isDark
                      ? isActive
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                      : isActive
                        ? "bg-slate-950 text-white"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}