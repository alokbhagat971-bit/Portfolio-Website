import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Moon, Sun, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const visibilityMap = {};
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });
        const mostVisible = Object.entries(visibilityMap).reduce(
          (best, [id, ratio]) => (ratio > best.ratio ? { id, ratio } : best),
          { id: "home", ratio: 0 }
        );
        if (mostVisible.ratio > 0) setActivateId(mostVisible.id);
      },
      { threshold: [0.1, 0.2, 0.3, 0.4, 0.5] }
    );
    sectionLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const scrollToSection = (id) => {
    setMenuOpen(false);
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
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#0a0a12]/90 backdrop-blur-md border-b border-gray-200 dark:border-violet-500/20">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 shrink-0"
        >
          <span className="text-violet-600 dark:text-violet-400 font-mono font-bold text-lg">{"</>"}</span>
          <span className="text-gray-900 dark:text-white font-bold text-lg">Alok Bhagat</span>
        </button>

        {/* Desktop: nav links + actions */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <ul className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
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

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 shadow-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-violet-400 transition-colors"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            onClick={() => navigate('/hire-me')}
            className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            Hire Me <FaPaperPlane size={14} />
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-violet-400 transition-colors"
          >
            {isDark ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-violet-400 transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-1 border-t border-gray-200 dark:border-violet-500/20 bg-white/95 dark:bg-[#0a0a12]/95">
          {sectionLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-left py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                activateId === link.id
                  ? "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setMenuOpen(false); navigate('/hire-me'); }}
            className="mt-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            Hire Me <FaPaperPlane size={14} />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;