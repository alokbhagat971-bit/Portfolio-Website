import { motion } from "framer-motion";
import { Monitor, Server, Star, Brain, Wrench, ArrowRight } from "lucide-react";
import skills from "../data/skills.js";

function CategoryCard({ title, subtitle, headerIcon: HeaderIcon, children, delay, viewProjects, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0d0d1a] p-4 sm:p-6 flex flex-col ${className}`}
    >
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-100 dark:bg-violet-600/20 flex items-center justify-center flex-shrink-0">
          <HeaderIcon size={18} className="text-violet-600 dark:text-violet-400" />
        </div>
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-tight">{title}</h2>
          {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">{subtitle}</p>}
        </div>
      </div>

      <div className="flex-1">{children}</div>

      {viewProjects && (
        <a
          href="#projects"
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
        >
          View Projects <ArrowRight size={14} />
        </a>
      )}
    </motion.div>
  );
}

function SkillTile({ item }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f0f20] hover:border-violet-400 dark:hover:border-violet-400 hover:-translate-y-1 transition-all cursor-default">
      <div className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg ${item.badgeBg || ""}`}>
        <Icon size={20} className={item.iconColor} />
      </div>
      <div className="text-center">
        <p className="text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-white leading-tight">{item.name}</p>
        {item.tagline && (
          <p className="text-[9px] sm:text-[10px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5 hidden sm:block">{item.tagline}</p>
        )}
      </div>
    </div>
  );
}

function OtherSkillPill({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f0f20] text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-violet-400 dark:hover:border-violet-400 transition-colors cursor-default">
      <Icon size={14} className="text-violet-500 dark:text-violet-400 shrink-0" />
      {skill.name}
    </div>
  );
}

function ConnectorDots({ count = 5 }) {
  return (
    <div className="relative flex justify-around items-center py-3 mb-1">
      <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-gray-200 dark:bg-white/10 -translate-y-1/2" />
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-2 h-2 rounded-full border border-gray-400 dark:border-white/30 bg-gray-50 dark:bg-[#0d0d1a] z-10" />
      ))}
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative bg-white dark:bg-[#05050a] px-6 sm:px-8 md:px-16 py-16 sm:py-24 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-200/50 dark:bg-violet-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase">My Expertise</span>
            <span className="w-2 h-2 rounded-full bg-violet-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-violet-500 underline decoration-violet-500/40 underline-offset-4">
              Skills
            </span>
          </h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md">
            A blend of technical expertise, problem-solving ability, and soft skills to build impactful solutions.
          </p>
        </motion.div>

        {/* Top row: 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <CategoryCard
            title="Frontend Development"
            subtitle="Building responsive and interactive user interfaces."
            headerIcon={Monitor}
            delay={0.05}
            viewProjects
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {skills.frontend.map((item) => (
                <SkillTile key={item.id} item={item} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard
            title="Core Competencies"
            subtitle="Beyond coding—skills that drive impact."
            headerIcon={Star}
            delay={0.1}
          >
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skills.other.map((skill) => (
                <OtherSkillPill key={skill.id} skill={skill} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard
            title="AI / ML Libraries (Python)"
            subtitle="Libraries I use for data science, ML & visualization."
            headerIcon={Brain}
            delay={0.15}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {skills.aiml.map((item) => (
                <SkillTile key={item.id} item={item} />
              ))}
            </div>
          </CategoryCard>
        </div>

        {/* Bottom row: 1 col on mobile, 2 on desktop */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <CategoryCard
            title="Backend Development"
            subtitle="Building robust and scalable server-side applications."
            headerIcon={Server}
            delay={0.2}
            viewProjects
          >
            <ConnectorDots count={skills.backend.length} />
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
              {skills.backend.map((item) => (
                <SkillTile key={item.id} item={item} />
              ))}
            </div>
          </CategoryCard>

          <CategoryCard
            title="Developer Tools & Platforms"
            subtitle="Tools and platforms that power my workflow."
            headerIcon={Wrench}
            delay={0.25}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
              {skills.tools.map((item) => (
                <SkillTile key={item.id} item={item} />
              ))}
            </div>
          </CategoryCard>
        </div>

        {/* Quote bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 sm:mt-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0d0d1a] px-5 sm:px-8 py-4 sm:py-5 flex items-center"
        >
          <span className="text-3xl sm:text-4xl font-serif text-violet-500 dark:text-violet-400 mr-3 sm:mr-4 leading-none select-none">"</span>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            I love turning complex problems into simple,{" "}
            <span className="text-violet-500 font-semibold">beautiful</span> and{" "}
            <span className="text-violet-500 font-semibold">intuitive</span> solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;