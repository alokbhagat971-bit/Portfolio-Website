import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import envelope from '../assets/envelope.png';
import { FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoSpeedometerSharp } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight, HiOutlineRocketLaunch } from "react-icons/hi2";
import { LuClock, LuShieldCheck, LuStar, LuHeadphones } from "react-icons/lu";
import { MdWeb, MdStorage, MdSmartToy, MdCode, MdLightbulb } from "react-icons/md";
import emailjs from '@emailjs/browser';

const footerSocials = [
  { Icon: FaGithub,    href: "https://github.com/alokbhagat971-bit" },
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/alok-bhagat-06a951306/" },
  { Icon: FaInstagram, href: "https://www.instagram.com/alokk_k121/" },
  { Icon: SiLeetcode,  href: "https://leetcode.com/u/AlokBhagat/" },
];

const quickLinks = ["Home", "About", "Skills", "Projects", "Certificates", "Education"];

const services = [
  { icon: <MdWeb size={20} />,       title: "Web Development",     desc: "Responsive, modern & scalable web apps" },
  { icon: <MdStorage size={20} />,   title: "Full Stack Solutions", desc: "End-to-end development with robust backend" },
  { icon: <MdSmartToy size={20} />,  title: "AI/ML Applications",  desc: "Intelligent solutions powered by AI/ML" },
  { icon: <MdCode size={20} />,      title: "Open Source",         desc: "Contributions & collaborative projects" },
  { icon: <MdLightbulb size={20} />, title: "Other Ideas",         desc: "Have something else in mind? Let's talk!" },
];

const expectations = [
  { icon: <IoSpeedometerSharp size={26} />,           label: "Fast & Reliable",      desc: "I value your time and deliver solutions within deadlines." },
  { icon: <LuStar size={26} />,                       label: "High Quality",         desc: "Clean code, best practices, and scalable solutions." },
  { icon: <HiOutlineChatBubbleLeftRight size={26} />, label: "Clear Communication",  desc: "Regular updates and transparent communication throughout." },
  { icon: <LuHeadphones size={26} />,                 label: "Long Term Support",    desc: "Continued support even after project completion." },
];

function HireMe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', email: '', subject: '', projectType: '', budget: '', timeline: '', message: ''
  });
  const [charCount, setCharCount] = useState(0);
  const [status, setStatus] = useState({ loading: false, error: '', success: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === 'message') setCharCount(value.length);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, error: '', success: false });

  try {
    // 1. Save to DB (no email from backend)
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hire`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong. Please try again.');
    }

    // 2. Send email from frontend via EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        projectType: form.projectType,
        budget: form.budget || 'Not specified',
        timeline: form.timeline || 'Not specified',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus({ loading: false, error: '', success: true });
    setForm({ name: '', email: '', subject: '', projectType: '', budget: '', timeline: '', message: '' });
    setCharCount(0);

  } catch (err) {
    setStatus({ loading: false, error: err.message, success: false });
  }
};

  const scrollTo = (id) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const inputClass = `
    w-full rounded-xl px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500
    bg-gray-100 dark:bg-[#0a0a18]
    border border-gray-300 dark:border-gray-700/60
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-500
  `;
  const selectClass = `
    w-full rounded-xl px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500
    bg-gray-100 dark:bg-[#0a0a18]
    border border-gray-300 dark:border-gray-700/60
    text-gray-600 dark:text-gray-400
  `;
  const labelClass = "block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300";

  return (
    <div className="min-h-screen bg-white dark:bg-[#05050a] text-gray-900 dark:text-white font-sans transition-colors duration-200">

      <Navbar />

      {/* Breadcrumb */}
      <div className="px-8 md:px-16 py-3 text-sm text-gray-400 dark:text-gray-500 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800/50">
        <button onClick={() => navigate('/')} className="hover:text-violet-500 transition-colors">🏠 Home</button>
        <span>/</span>
        <span className="text-violet-500 font-medium">Hire Me</span>
      </div>

      {/* ── Hero ── */}
      <section className="relative px-8 md:px-16 pt-16 pb-20 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-300/30 dark:bg-violet-700/20 rounded-full blur-[140px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-fuchsia-300/20 dark:bg-fuchsia-700/15 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 border border-violet-400/50 dark:border-violet-500/40 bg-violet-50 dark:bg-violet-500/10 rounded-full px-5 py-2 text-sm text-violet-600 dark:text-violet-400 font-medium mb-8">
              <span>✦</span> LET'S BUILD SOMETHING AMAZING <span>✦</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Let's Work<br />
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-lg mb-10">
              Have a project idea, collaboration opportunity, or just want to say hi?
              I'd love to hear from you. Fill out the form and I'll get back to you soon!
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
              {[
                { icon: <IoSpeedometerSharp size={16} />,    label: "Quick Response" },
                { icon: <LuShieldCheck size={16} />,         label: "Professional Support" },
                { icon: <HiOutlineRocketLaunch size={16} />, label: "Results Driven" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2">
                  <span className="text-violet-500">{icon}</span>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: envelope */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-500/30 dark:bg-violet-600/30 rounded-full blur-[80px] scale-110" />
              <div className="absolute -inset-4 bg-fuchsia-400/10 rounded-full blur-[60px]" />
              <img
                src={envelope}
                alt="envelope"
                className="relative w-80 md:w-[420px] object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 60px rgba(139,92,246,0.5))' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Tell Me About card */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-[#0d0d1e] p-7 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <FaPaperPlane size={18} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900 dark:text-white">Tell Me About</p>
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-semibold">Your Project</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or partnerships.
              </p>
              <ul className="flex flex-col gap-5">
                {services.map(({ icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-600/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-violet-600 dark:text-violet-400">
                      {icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote card */}
            <div className="rounded-2xl border border-violet-300 dark:border-violet-500/30 bg-violet-50 dark:bg-[#0d0d1e] p-7">
              <span className="text-4xl text-violet-500 dark:text-violet-400 font-serif leading-none">"</span>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                The best way to predict the future is to invent it together.
              </p>
              <p className="text-sm text-violet-600 dark:text-violet-400 mt-4 font-medium italic">
                Let's create something extraordinary!
              </p>
            </div>
          </div>

          {/* Form card */}
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-[#0d0d1e] p-8 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                <FaPaperPlane size={18} className="text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Send Me a Message</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fill out the form and I'll get back to you as soon as possible.</p>
              </div>
            </div>

            <div className="h-px bg-gray-200 dark:bg-gray-700/40 my-6" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Your Name <span className="text-red-400">*</span></label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Your Email <span className="text-red-400">*</span></label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className={inputClass} required />
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject <span className="text-red-400">*</span></label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="What is this regarding?" className={inputClass} required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Project Type <span className="text-red-400">*</span></label>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className={selectClass} required>
                    <option value="">Select project type</option>
                    <option value="web">Web Development</option>
                    <option value="fullstack">Full Stack App</option>
                    <option value="aiml">AI/ML Project</option>
                    <option value="opensource">Open Source</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget Range (Optional)</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                    <option value="">Select budget range</option>
                    <option value="under5k">Under ₹5,000</option>
                    <option value="5k-15k">₹5,000 – ₹15,000</option>
                    <option value="15k-50k">₹15,000 – ₹50,000</option>
                    <option value="50k+">₹50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Timeline (Optional)</label>
                <input name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. 1 week, 1 month, 3 months+" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Your Message <span className="text-red-400">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, requirements, ideas, or anything else..."
                  rows={6}
                  maxLength={500}
                  className={`${inputClass} resize-none`}
                  required
                />
                <p className="text-right text-sm text-gray-400 dark:text-gray-500 mt-1">{charCount} / 500</p>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-violet-600/30"
              >
                <FaPaperPlane size={16} /> {status.loading ? 'Sending...' : 'Send Message'}
              </button>

              {status.success && (
                <p className="text-center text-sm text-green-500 font-medium">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status.error && (
                <p className="text-center text-sm text-red-500 font-medium">{status.error}</p>
              )}

              <p className="text-center text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2">
                <LuClock size={14} /> I usually reply within{" "}
                <span className="text-violet-500 font-semibold">24 hours</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── What You Can Expect ── */}
      <section className="px-8 md:px-16 pb-24 bg-gray-50 dark:bg-[#080812] py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px flex-1 max-w-[100px] bg-gray-300 dark:bg-gray-700/60" />
            <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
              <span className="text-violet-500">→</span> What You Can Expect <span className="text-violet-500">←</span>
            </h2>
            <div className="h-px flex-1 max-w-[100px] bg-gray-300 dark:bg-gray-700/60" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {expectations.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-[#0d0d1e] p-6 flex flex-col gap-4 hover:border-violet-400 dark:hover:border-violet-500 transition-colors shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-600/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  {icon}
                </div>
                <p className="text-base font-bold text-gray-900 dark:text-white">{label}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-6xl mx-auto rounded-2xl border border-violet-300 dark:border-violet-500/30 bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-[#0d0d1e] dark:to-[#120d1e] px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
              Ready to start your{" "}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                next project
              </span>?
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Click the button and let's turn your ideas into reality!
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 bg-violet-600 hover:bg-violet-500 text-white font-bold text-base px-8 py-4 rounded-full flex items-center gap-3 transition-colors shadow-lg shadow-violet-600/30"
          >
            <FaPaperPlane size={16} /> Hire Me Now
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 dark:border-gray-700/40 bg-gray-50 dark:bg-[#05050a] px-8 md:px-16 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-violet-500 font-mono font-bold text-xl">{"</>"}</span>
              <span className="text-gray-900 dark:text-white font-bold text-xl">Alok Bhagat</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Building digital experiences that make a difference.<br />
              Let's create something amazing together!
            </p>
            <div className="flex items-center gap-3 mt-1">
              {footerSocials.map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-violet-500 hover:border-violet-400 transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-5">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(label => (
                <button
                  key={label}
                  onClick={() => scrollTo(label)}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors text-left py-1"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-5">Let's Connect</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              Feel free to reach out through the form above. I'd love to hear your ideas!
            </p>
            <div className="flex items-center gap-2 text-sm text-violet-500 dark:text-violet-400 font-medium">
              <FaPaperPlane size={13} />
              <span>Let's build something amazing!</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-200 dark:border-gray-700/40 text-center text-sm text-gray-400 dark:text-gray-500">
          © 2026 Alok Bhagat. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default HireMe;