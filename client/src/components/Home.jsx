import dp from "../assets/Dp.png"
import { FaReact, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNodedotjs, SiJavascript, SiMongodb, SiExpress, SiLeetcode } from "react-icons/si";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function ConstellationBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const STAR_COUNT = 80;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.01 + 0.003,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    const CONNECT_DIST = 120;
    let t = 0;

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(167,139,250,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }
      }

      stars.forEach(s => {
        const alpha = s.alpha + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${Math.max(0, Math.min(1, alpha))})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const floatIcons = [
  // RIGHT side — curved along right arc
  { icon: <FaReact size={30} />,      color: "text-sky-400",    label: "React",   angle: 330 },
  { icon: <SiJavascript size={30} />, color: "text-yellow-400", label: "JS",      angle: 10  },
  { icon: <SiNodedotjs size={30} />,  color: "text-green-500",  label: "Node",    angle: 50  },
  // LEFT side — curved along left arc
  { icon: <SiMongodb size={30} />,    color: "text-green-400",  label: "MongoDB", angle: 220 },
  { icon: <FaPython size={30} />,     color: "text-blue-400",   label: "Python",  angle: 170 },
  { icon: <SiExpress size={30} />,    color: "text-gray-300",   label: "Express", angle: 130 },
];

const orbitRadius = 185;

function Home() {
  const [activateId, setActivateId] = useState("home");
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaGithub size={16} />,   href: "https://github.com/alokbhagat971-bit" },
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/alok-bhagat-06a951306/" },
    { icon: <SiLeetcode size={16} />, href: "https://leetcode.com/u/AlokBhagat/" },
    { icon: <Mail size={16} />,       href: "mailto:alokbhagat971@gmail.com" },
  ];

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
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white dark:bg-[#05050a] px-8 md:px-16 py-20"
      style={{ overflow: 'visible' }}
    >
      <ConstellationBg />

      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-300/20 dark:bg-violet-700/30 rounded-full blur-[120px] pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div
        className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-10"
        style={{ zIndex: 2 }}
      >

        {/* ── Left: text ── */}
        <div className="max-w-xl">
          <h2 className="text-gray-500 dark:text-gray-300 text-lg mb-1">Hi, I'm</h2>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3">
            Alok{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Bhagat
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            <span className="text-violet-600 dark:text-violet-300">Full Stack Developer</span>
            <span className="text-gray-400 dark:text-gray-500"> | </span>
            <span className="text-fuchsia-600 dark:text-violet-300">AI/ML Enthusiast</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
            Electronics &amp; Communication Engineering student who loves building
            efficient, scalable, and user-friendly web applications and
            intelligent solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-3 rounded-full transition-colors shadow-lg shadow-violet-600/30"
            >
              Explore My Work
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => navigate('/hire-me')}
              className="border border-gray-300 dark:border-gray-600 hover:border-violet-400 text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-300 font-medium px-6 py-3 rounded-full transition-colors"
            >
              Hire Me
            </button>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, idx) => (
                <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: photo + orbit icons ── */}
        {/* 
          Wrapper = orbitRadius*2 + icon size (48px) on each side
          = 185*2 + 48 = 418 → use 430px to be safe
        */}
        <div
          className="relative shrink-0 flex items-center justify-center"
          style={{ width: '430px', height: '430px' }}
        >
          {/* Glow behind photo */}
          <div className="absolute w-64 h-64 rounded-full bg-violet-300/30 dark:bg-violet-600/30 blur-2xl pointer-events-none" />

          {/* Outer dashed orbit ring — diameter = orbitRadius * 2 */}
          <div
            className="absolute rounded-full border border-dashed border-violet-300/60 dark:border-violet-500/40 pointer-events-none"
            style={{ width: `${orbitRadius * 2}px`, height: `${orbitRadius * 2}px` }}
          />

          {/* Inner dashed ring */}
          <div
            className="absolute rounded-full border border-dashed border-violet-200/40 dark:border-violet-500/20 pointer-events-none"
            style={{ width: `${orbitRadius * 2 + 40}px`, height: `${orbitRadius * 2 + 40}px` }}
          />

          {/* Photo — 260×260, centered */}
          <div className="absolute w-64 h-64 rounded-full overflow-hidden border-4 border-violet-400/50 dark:border-violet-500/50 shadow-[0_0_60px_rgba(139,92,246,0.45)]">
            <img src={dp} alt="Alok Bhagat" className="w-full h-full object-cover" />
          </div>

          {/* Icons on the orbit ring */}
          {floatIcons.map((item, idx) => {
            const radians = (item.angle * Math.PI) / 180;
            const x = orbitRadius * Math.cos(radians);
            const y = orbitRadius * Math.sin(radians);
            const bx = Math.cos(radians) * 6;
            const by = Math.sin(radians) * 6;

            return (
              <motion.div
                key={idx}
                className={`absolute w-11 h-11 flex items-center justify-center rounded-xl
                  bg-gray-100 dark:bg-[#0d0d18]
                  border border-violet-300/50 dark:border-violet-500/40
                  shadow-md dark:shadow-violet-500/20
                  ${item.color}`}
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [x - 22 - bx, x - 22 + bx, x - 22 - bx],
                  y: [y - 22 - by, y - 22 + by, y - 22 - by],
                }}
                transition={{
                  duration: 2.6 + idx * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.25,
                }}
                title={item.label}
              >
                {item.icon}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Home;