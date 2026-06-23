import { SiHtml5, SiJavascript, SiTailwindcss, SiMongodb, SiExpress, SiJsonwebtokens, SiNumpy, SiPandas, SiScikitlearn, SiPostman, SiJupyter, SiGooglecolab } from "react-icons/si";
import { FaReact, FaNodeJs, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaCode, FaExchangeAlt, FaLightbulb, FaUsers } from "react-icons/fa";
import { FaCode as FaCode6 } from "react-icons/fa6";
import { IoGitNetworkSharp } from "react-icons/io5";
import { FiMessageCircle, FiCpu } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { IoIosShuffle } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";
import { FcHeatMap } from "react-icons/fc";

import { BiLineChart } from "react-icons/bi";

const skills = {
  frontend: [
    { id: "fe-1", name: "HTML",         tagline: "Markup",           icon: SiHtml5,       badgeBg: "bg-orange-600",  iconColor: "text-white" },
    { id: "fe-2", name: "CSS",          tagline: "Styling",          icon: FaCss3Alt,     badgeBg: "bg-blue-600",    iconColor: "text-white" },
    { id: "fe-3", name: "JavaScript",   tagline: "Programming",      icon: SiJavascript,  badgeBg: "bg-yellow-400",  iconColor: "text-gray-900" },
    { id: "fe-4", name: "React",        tagline: "Library",          icon: FaReact,       badgeBg: null,             iconColor: "text-sky-400" },
    { id: "fe-5", name: "Tailwind CSS", tagline: "Utility-first CSS",icon: SiTailwindcss, badgeBg: null,             iconColor: "text-cyan-400" },
  ],

  backend: [
    { id: "be-1", name: "Node.js",    tagline: "Runtime",        icon: FaNodeJs,        badgeBg: null, iconColor: "text-green-500" },
    { id: "be-2", name: "Express.js", tagline: "Web Framework",  icon: SiExpress,       badgeBg: null, iconColor: "text-gray-300" },
    { id: "be-3", name: "MongoDB",    tagline: "Database",       icon: SiMongodb,       badgeBg: null, iconColor: "text-green-400" },
    { id: "be-4", name: "REST API",   tagline: "API Design",     icon: FaExchangeAlt,   badgeBg: null, iconColor: "text-gray-300" },
    { id: "be-5", name: "JWT",        tagline: "Authentication", icon: SiJsonwebtokens, badgeBg: null, iconColor: "text-fuchsia-400" },
  ],

  other: [
    { id: "ot-1", name: "C / C++",                      icon: FaCode6 },
    { id: "ot-2", name: "Java",                          icon: FaJava },
    { id: "ot-3", name: "Data Structures & Algorithms",  icon: IoGitNetworkSharp },
    { id: "ot-4", name: "Problem Solving",               icon: FaLightbulb },
    { id: "ot-5", name: "Communication",                 icon: FiMessageCircle },
    { id: "ot-6", name: "Time Management",               icon: LuClock },
    { id: "ot-7", name: "Adaptability",                  icon: IoIosShuffle },
    { id: "ot-8", name: "AI/ML",                         icon: FiCpu },
    { id: "ot-9", name: "Team Collaboration",            icon: FaUsers },
  ],

  aiml: [
    { id: "ai-1", name: "NumPy",       tagline: null,               icon: SiNumpy,       badgeBg: "bg-blue-700",    iconColor: "text-white" },
    { id: "ai-2", name: "Pandas",      tagline: null,               icon: SiPandas,      badgeBg: "bg-indigo-700",  iconColor: "text-white" },
    { id: "ai-3", name: "Matplotlib",  tagline: null,               icon: BiLineChart,   badgeBg: null,             iconColor: "text-orange-400" },
    { id: "ai-4", name: "Seaborn",     tagline: null,               icon: FcHeatMap,   badgeBg: null,             iconColor: "text-teal-400" },
    { id: "ai-5", name: "scikit-learn",tagline: "Machine Learning", icon: SiScikitlearn, badgeBg: "bg-orange-500",  iconColor: "text-white" },
  ],

  tools: [
    { id: "tl-1", name: "Git",          tagline: null, icon: FaGitAlt,      badgeBg: "bg-orange-600",  iconColor: "text-white" },
    { id: "tl-2", name: "GitHub",       tagline: null, icon: FaGithub,      badgeBg: "bg-gray-800",    iconColor: "text-white" },
    { id: "tl-3", name: "VS Code",      tagline: null, icon: VscVscode,       badgeBg: null,             iconColor: "text-blue-400" },
    { id: "tl-4", name: "Google Colab", tagline: null, icon: SiGooglecolab, badgeBg: null,             iconColor: "text-yellow-400" },
    { id: "tl-5", name: "Postman",      tagline: null, icon: SiPostman,     badgeBg: "bg-orange-500",  iconColor: "text-white" },
    { id: "tl-6", name: "Jupyter",      tagline: null, icon: SiJupyter,     badgeBg: "bg-orange-400",  iconColor: "text-white" },
  ],
};

export default skills;