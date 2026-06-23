import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useNavigate } from 'react-router-dom'

const socials = [
  { id: 1, name: "GitHub",    Icon: FaGithub,    href: "https://github.com/alokbhagat971-bit" },
  { id: 2, name: "LinkedIn",  Icon: FaLinkedin,  href: "https://www.linkedin.com/in/alok-bhagat-06a951306/" },
  { id: 3, name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/alokk_k121/" },
  { id: 4, name: "LeetCode",  Icon: SiLeetcode,  href: "https://leetcode.com/u/AlokBhagat/" },
];

const iconLinks = [
  { id: 1, Icon: FaGithub,    href: "https://github.com/alokbhagat971-bit",              colorClass: "border-gray-600 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent" },
  { id: 2, Icon: FaLinkedin,  href: "https://www.linkedin.com/in/alok-bhagat-06a951306/",colorClass: "bg-blue-600 border-blue-600 text-white" },
  { id: 3, Icon: FaCode,      href: "#",                                                  colorClass: "bg-green-500 border-green-500 text-white" },
  { id: 4, Icon: FaEnvelope,  href: "mailto:alokbhagat971@gmail.com",                    colorClass: "border-gray-600 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-transparent" },
];

function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="w-full relative bg-gray-100 dark:bg-[#080818] text-gray-900 dark:text-white transition-colors duration-200">

      {/* Purple ambient glow — dark only */}
      <div className="hidden dark:block pointer-events-none absolute inset-x-0 bottom-0 h-64" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 120%, #6d28d9 0%, #1e1b4b 50%, transparent 100%)",
      }} />

      {/* Main content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 md:px-10 pt-8 pb-14 max-w-6xl mx-auto">

        {/* LEFT: Brand card */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-[#0d0d1e] p-6 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="text-violet-500">✦</span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Alok <span className="text-violet-500">Bhagat</span>
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Crafting digital experiences<br />
            that inspire, engage, and<br />
            leave a lasting impact.
          </p>
          <div className="w-10 h-0.5 bg-violet-500 rounded-full" />
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>📍</span>
            <span>Based in Kolkata, India</span>
          </div>
          <div className="flex items-start gap-2 text-sm mt-1">
            <div className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-[#1a1a2e]">
              🚀
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Available for exciting projects</p>
              <p className="text-xs text-gray-400">Let's create something great together.</p>
            </div>
          </div>
        </div>

        {/* CENTER: Thank You card */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-[#0d0d1e] p-6 flex flex-col items-center gap-3 text-center">
          <div className="border border-gray-300 dark:border-gray-600 rounded-full px-4 py-1.5 text-xs flex items-center gap-2 text-gray-500 dark:text-gray-300">
            <span className="text-violet-400">✦</span>
            Let's build the future together
          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight text-gray-900 dark:text-white">
            Thank <span className="text-violet-500">You!</span>
          </h2>

          {/* Decorative line with diamond */}
          <div className="flex items-center gap-2 w-full justify-center">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="text-violet-400 text-xs">✦</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          <p className="text-sm text-gray-400">Thanks for visiting my portfolio.</p>

          <div className="flex items-center gap-3">
            {iconLinks.map(({ id, Icon, href, colorClass }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-200 hover:border-violet-500 hover:text-violet-400 ${colorClass}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              navigate('/hire-me')
            }}
            className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
          >
            Let's Work Together <span>→</span>
          </button>
        </div>

        {/* RIGHT: Let's Connect card */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-[#0d0d1e] p-6 flex flex-col gap-2">
          <h3 className="text-sm font-bold flex items-center gap-2 mb-1 text-gray-900 dark:text-white">
            <span className="text-violet-500">✦</span> Let's Connect
          </h3>
          <ul className="flex flex-col">
            {socials.map(({ id, name, Icon, href }) => (
              <li key={id} className="border-b border-gray-100 dark:border-gray-700/50 last:border-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-3 px-1 rounded-lg text-gray-600 dark:text-gray-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className="text-gray-400 group-hover:text-violet-400 transition-colors" />
                    <span className="text-sm">{name}</span>
                  </div>
                  <span className="text-violet-500 text-sm">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="relative z-10 py-3 border-t border-gray-200 dark:border-gray-700/40 flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-500">
        <span className="text-violet-400">✦</span>
        <span>🤍 Designed &amp; built with passion</span>
        <span className="text-violet-400">✦</span>
      </div>
    </footer>
  );
}

export default Footer;