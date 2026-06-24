import { motion } from "framer-motion";
import education from "../data/eductaion";

function Education() {
  return (
    <section
      id="education"
      className="relative bg-white dark:bg-[#05050a] px-6 sm:px-8 md:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-violet-300/20 dark:bg-violet-700/10 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
              Academic Journey
            </span>
            <span className="w-2 h-2 rounded-full bg-violet-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-violet-500 underline decoration-violet-500/40 underline-offset-4">
              Education
            </span>
          </h1>
        </motion.div>

        {/* Timeline */}
        <ul className="border-l-2 border-gray-200 dark:border-gray-700 space-y-0 ml-2 sm:ml-4">
          {education.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative pl-5 sm:pl-7 pb-8 last:pb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 bg-gray-600 border-violet-400 hover:bg-violet-700 transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  {/* Degree title */}
                  <h2 className="text-sm sm:text-[15px] font-semibold text-gray-900 dark:text-white mb-1.5 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default leading-snug">
                    {item.title}
                  </h2>

                  {/* Logo + Institute */}
                  <div className="flex items-center gap-2">
                    {item.logo && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded overflow-hidden bg-gray-700 flex-shrink-0">
                        <img
                          src={item.logo}
                          alt={`${item.institute} logo`}
                          className="w-full h-full object-cover bg-white"
                        />
                      </div>
                    )}
                    <h3 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {item.institute}
                    </h3>
                  </div>
                </div>

                {/* Year + Grade — inline on mobile, stacked on right for desktop */}
                <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 shrink-0 flex-wrap">
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg
                    bg-violet-50 dark:bg-violet-500/10
                    border border-violet-200 dark:border-violet-500/25
                    text-violet-600 dark:text-violet-400 whitespace-nowrap">
                    {item.year}
                  </span>
                  {item.grade && (
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {item.grade}
                    </span>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default Education;