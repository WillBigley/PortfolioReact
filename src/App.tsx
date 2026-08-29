import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const THEME_STORAGE_KEY = "william-portfolio-theme";

function getInitialTheme(): boolean {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "dark") {
    return true;
  }

  if (storedTheme === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((previous) => !previous)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} William Bigley</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
