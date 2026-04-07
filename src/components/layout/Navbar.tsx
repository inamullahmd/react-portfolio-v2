import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-4 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-white" : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-white"
          onClick={() => setIsOpen(false)}
        >
          Inamullah Mohammad
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {({ isActive }) => (
                <span className="relative">
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-white" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Contact Me
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/60 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/75 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              href="#contact"
              className="mt-3 rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-black transition hover:bg-white/90"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}