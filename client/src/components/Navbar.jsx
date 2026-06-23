import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Moon, Sun } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

const sectionLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Certificates", id: "certificates" },
  { label: "Projects", id: "projects" },
  
  { label: "Education", id: "education" },

];

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [activateId, setActivateId] = useState("home");
  const observerRef = useRef(null);

  const navigate = useNavigate();

  // Sync dark mode class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // ── IntersectionObserver: update active link on scroll ──
  useEffect(() => {
    // Track which sections are currently visible and how much
    const visibilityMap = {};

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });

        // Pick the section with the highest visibility ratio
        const mostVisible = Object.entries(visibilityMap).reduce(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: "home", ratio: 0 }
        );

        if (mostVisible.ratio > 0) {
          setActivateId(mostVisible.id);
        }
      },
      {
        // Fire when 10%, 30%, 50% etc. of a section is visible
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    // Observe all sections
    sectionLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActivateId(id);
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActivateId(id);
      }, 300);
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center px-8 py-4 bg-white/90 dark:bg-[#0a0a12]/90 backdrop-blur-md border-b border-gray-200 dark:border-violet-500/20">

      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="text-violet-600 dark:text-violet-400 font-mono font-bold text-lg">{"</>"}</span>
          <span className="text-gray-900 dark:text-white font-bold text-lg">Alok Bhagat</span>
        </button>

        {/* Nav links + actions */}
        <div className="flex items-center gap-8 shrink-0">

          <ul className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            {sectionLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`pb-1 transition-colors hover:text-gray-900 dark:hover:text-white ${
                    activateId === link.id
                      ? "text-gray-900 dark:text-white border-b-2 border-violet-500"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm dark:shadow-none text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-violet-400 transition-colors px-2 py-2"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Hire Me */}
          <button
  onClick={() => navigate('/hire-me')}
  className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-2 py-2 rounded-full transition-colors w-full h-full flex items-center justify-center gap-2"
>
  Hire Me <FaPaperPlane size={16} />
</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;