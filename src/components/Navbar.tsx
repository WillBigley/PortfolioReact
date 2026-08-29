import { useEffect, useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({
  darkMode,
  onToggleTheme,
}: NavbarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = (): void => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={closeMenu}>
          WB<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navigation-links"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
          id="navigation-links"
        >
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <button
              className="theme-button"
              type="button"
              aria-label={darkMode ? "Use light theme" : "Use dark theme"}
              onClick={onToggleTheme}
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
