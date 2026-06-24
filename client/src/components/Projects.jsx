import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/project.js";

const badgeColors = {
  "React":         "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Node.js":       "bg-green-500/10 text-green-400 border-green-500/20",
  "Express":       "bg-gray-500/10 text-gray-300 border-gray-500/20",
  "MongoDB":       "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "AI API":        "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Python":        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  "Flask":         "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "scikit-learn":  "bg-pink-500/10 text-pink-400 border-pink-500/20",
};

const defaultBadge = "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";

function getCategory(techStack) {
  const has = (t) => techStack.includes(t);
  if (has("AI API") || has("scikit-learn") || has("Flask") || has("Python")) return "Full Stack + AI";
  if (has("Node.js") || has("Express") || has("MongoDB")) return "Full Stack";
  return "Frontend";
}

const categoryColors = {
  "Full Stack":      "bg-violet-600/20 text-violet-300 border-violet-500/30",
  "Full Stack + AI": "bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-500/30",
  "Frontend":        "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
};

function ProjectCard({ item, delay }) {
  const category = getCategory(item.techStack);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col rounded-2xl border border-gray-200 dark:border-white/10
        bg-gray-50 dark:bg-[#0d0d1a]
        overflow-hidden hover:border-violet-400 dark:hover:border-violet-500
        hover:-translate-y-1 transition-all duration-300"
    >
      {/* Project screenshot */}
      <div className="w-full aspect-video bg-gray-100 dark:bg-[#080812] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 gap-2.5 sm:gap-3">

        {/* Title + category badge */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h2 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex-1 min-w-0">
            {item.title}
          </h2>
          <span
            className={`text-[10px] font-semibold px-2 sm:px-2.5 py-1 rounded-lg border shrink-0 ${
              categoryColors[category] || defaultBadge
            }`}
          >
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
          {item.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
          {item.techStack.map((tech, index) => (
            <span
              key={index}
              className={`text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg border ${
                badgeColors[tech] || defaultBadge
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-white/10 mt-1 sm:mt-2" />

        {/* Footer */}
        <div className="flex items-center justify-end pt-0.5 sm:pt-1">
          <a
            href={item.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg text-gray-500 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-white
              hover:bg-gray-100 dark:hover:bg-white/10
              transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
        </div>

      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white dark:bg-[#05050a] px-6 sm:px-8 md:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-200/40 dark:bg-violet-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              My <span className="text-violet-500 underline decoration-violet-500/40 underline-offset-4">Projects</span>
            </h1>
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-violet-500 mt-1" />
          </div>

          <a
            href="https://github.com/alokbhagat971-bit?tab=repositories"
            className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium
              text-violet-600 dark:text-violet-400
              hover:text-violet-700 dark:hover:text-violet-300
              transition-colors shrink-0"
          >
            View All <ArrowRight size={13} />
          </a>
        </motion.div>

        {/* Project cards grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {projects.map((item, index) => (
            <ProjectCard key={item.id} item={item} delay={index * 0.07} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;