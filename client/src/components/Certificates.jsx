import { motion } from "framer-motion";
import { ExternalLink, Award, BadgeCheck, GraduationCap } from "lucide-react";
import certificates from "../data/certificates";

const issuerStyles = {
  "Forage":              { bg: "bg-orange-500/15",  border: "border-orange-500/30",  text: "text-orange-400",  glow: "shadow-orange-500/20"  },
  "LinkedIn Learning":   { bg: "bg-blue-500/15",    border: "border-blue-500/30",    text: "text-blue-400",    glow: "shadow-blue-500/20"    },
  "IT-ITeS SSC NASSCOM": { bg: "bg-violet-500/15",  border: "border-violet-500/30",  text: "text-violet-400",  glow: "shadow-violet-500/20"  },
  "NASSCOM":             { bg: "bg-violet-500/15",  border: "border-violet-500/30",  text: "text-violet-400",  glow: "shadow-violet-500/20"  },
  "Scaler":              { bg: "bg-indigo-500/15",  border: "border-indigo-500/30",  text: "text-indigo-400",  glow: "shadow-indigo-500/20"  },
  "NVIDIA":              { bg: "bg-green-500/15",   border: "border-green-500/30",   text: "text-green-400",   glow: "shadow-green-500/20"   },
  "Google":              { bg: "bg-red-500/15",     border: "border-red-500/30",     text: "text-red-400",     glow: "shadow-red-500/20"     },
};

const defaultStyle = { bg: "bg-violet-500/15", border: "border-violet-500/30", text: "text-violet-400", glow: "shadow-violet-500/20" };

const icons = [Award, BadgeCheck, GraduationCap, Award, BadgeCheck];

function CertCard({ cert, index, delay }) {
  const style = issuerStyles[cert.issuer] || defaultStyle;
  const Icon = icons[index % icons.length];

  return (
    <motion.a
      href={cert.credentialLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`group relative flex items-center gap-4 px-5 py-4
        rounded-2xl border ${style.border}
        bg-white dark:bg-[#0d0d1a]
        shadow-sm hover:shadow-lg ${style.glow}
        hover:border-violet-400 dark:hover:border-violet-400
        hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {/* Left accent bar */}
      <div
        className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full opacity-80 ${style.text}`}
        style={{ background: "currentColor" }}
      />

      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
        bg-gradient-to-r from-violet-500/5 via-transparent to-transparent pointer-events-none rounded-2xl" />

      {/* Icon box */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0
        border ${style.border} ${style.bg} shadow-sm ml-2`}>
        <Icon size={19} className={style.text} />
      </div>

      {/* Title + issuer */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2">
          {cert.title}
        </p>
        <p className={`text-xs font-medium mt-1 ${style.text}`}>
          {cert.issuer}
        </p>
      </div>

      {/* Year badge + arrow */}
      <div className="flex items-center gap-2 shrink-0">
        <span className={`text-[11px] font-bold px-3 py-1.5 rounded-xl
          border ${style.border} ${style.bg} ${style.text}`}>
          {cert.year}
        </span>
        <ExternalLink
          size={14}
          className="text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-violet-400 transition-all duration-200"
        />
      </div>
    </motion.a>
  );
}

function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-white dark:bg-[#05050a] px-8 md:px-16 py-24 overflow-hidden"
    >
      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-300/30 dark:bg-violet-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-xs font-semibold tracking-widest text-violet-500 uppercase">
              Achievements
            </span>
            <span className="w-2 h-2 rounded-full bg-violet-500" />
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-violet-500 underline decoration-violet-500/40 underline-offset-4">
              Certificates
            </span>
          </h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md">
            Credentials and certifications earned through dedicated learning and hands-on practice.
          </p>
        </motion.div>

        {/* ── Certificate grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {certificates.map((cert, index) => (
            <CertCard key={cert.id} cert={cert} index={index} delay={index * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;