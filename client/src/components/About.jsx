import {
  User,
  MapPin,
  Languages,
  Briefcase,
  Code2,
  Puzzle,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import laptop from '../assets/laptop_couch.png';
import { GraduationCap } from "lucide-react";

function About() {

  const stats = [
    { icon: GraduationCap, label: "Always Learning",  desc: "Exploring new technologies and frameworks." },
    { icon: Code2,         label: "Clean Code",        desc: "Writing maintainable and scalable code." },
    { icon: Puzzle,        label: "Problem Solver",    desc: "Breaking down problems into smart solutions." },
    { icon: Target,        label: "Impact Driven",     desc: "Building with purpose and user in mind." },
  ];

  const knowns = [
    { icon: <User size={18} />,      title: "Name",      ans: "Alok Bhagat" },
    { icon: <MapPin size={18} />,    title: "Location",  ans: "Kolkata, India" },
    { icon: <Languages size={18} />, title: "Languages", ans: "English, Hindi, Bengali" },
    { icon: <Briefcase size={18} />, title: "Work",      ans: "Open to Internship" },
  ];

  return (
    <section
      id="about"
      className="relative bg-white dark:bg-[#05050a] px-6 sm:px-8 md:px-16 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/60 dark:bg-violet-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-fuchsia-200/40 dark:bg-fuchsia-700/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12 lg:mb-16 items-start">

          {/* Left: heading + bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:max-w-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-violet-500 dark:text-violet-400 text-xs font-bold tracking-[0.2em] uppercase">
                Get to know me
              </span>
              <div className="h-px w-8 bg-violet-500 dark:bg-violet-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                Me.
              </span>
            </h1>

            <div
              className="w-16 h-1 rounded-full mb-6"
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #a855f7)' }}
            />

            <div className="space-y-4 mb-8">
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-[15px]">
                I'm an Electronics &amp; Communication Engineering student and a
                passionate developer who loves turning ideas into{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">real-world solutions</span>{" "}
                through code.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm sm:text-[15px]">
                I specialize in building full stack web applications using the{" "}
                <span className="text-violet-600 dark:text-violet-400 font-medium">MERN stack</span>{" "}
                and enjoy exploring{" "}
                <span className="text-fuchsia-600 dark:text-fuchsia-400 font-medium">AI/ML</span>{" "}
                and{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">data-driven solutions</span>{" "}
                to create impactful experiences.
              </p>
            </div>
          </motion.div>

          {/* Mobile: info card + laptop stacked */}
          {/* Center: info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-[280px] shrink-0 rounded-2xl p-6
              bg-gray-50 dark:bg-[#0f0f20]
              border border-gray-200 dark:border-violet-500/20
              shadow-lg shadow-gray-200/80 dark:shadow-none"
          >
            <ul className="space-y-0">
              {knowns.map((item, idx) => (
                <li key={idx} className="flex gap-4 relative">
                  {idx < knowns.length - 1 && (
                    <div
                      className="absolute left-5 top-10 w-px"
                      style={{
                        height: 'calc(100% - 4px)',
                        background: 'rgba(139,92,246,0.25)',
                      }}
                    />
                  )}
                  <div
                    className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full z-10
                      text-violet-600 dark:text-violet-400
                      bg-violet-100 dark:bg-violet-500/12
                      border border-violet-300 dark:border-violet-500/25"
                  >
                    {item.icon}
                  </div>
                  <div className="pb-6">
                    <p className="text-[10px] text-violet-500 dark:text-violet-400/70 uppercase tracking-[0.15em] font-bold mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[15px] font-bold text-gray-800 dark:text-gray-100">
                      {item.ans}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: laptop image — hidden on small screens to reduce clutter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-1 items-center justify-center"
          >
            <img
              src={laptop}
              alt="Developer workspace"
              className="w-full max-w-[500px] object-contain"
              style={{
                filter: 'drop-shadow(0 24px 48px rgba(139,92,246,0.25))',
              }}
            />
          </motion.div>

        </div>

        {/* Laptop image shown between sections on mobile/tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex lg:hidden items-center justify-center mb-10"
        >
          <img
            src={laptop}
            alt="Developer workspace"
            className="w-full max-w-xs sm:max-w-sm object-contain"
            style={{
              filter: 'drop-shadow(0 24px 48px rgba(139,92,246,0.25))',
            }}
          />
        </motion.div>

        {/* BOTTOM SECTION: trait cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300 dark:bg-violet-500/25" />
            <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-center">
              What defines me
            </span>
            <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-gray-300 dark:bg-violet-500/25" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0d0d1a] px-4 sm:px-5 py-4 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default About;