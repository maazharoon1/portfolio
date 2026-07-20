'use client';

import { scrollToSection } from "@/lib/scroll";
import { motion, Variants } from "motion/react";

type StatCardProps = {
  icon: string;
  value: string;
  label: string;
};

type SkillPillProps = {
  name: string;
};

const stats: StatCardProps[] = [
  { icon: '👨‍💻', value: '2+ Years', label: 'Experience' },
  { icon: '🚀', value: '25+ Projects', label: 'Completed' },
  { icon: '🤝', value: '10+ Clients', label: 'Happy Clients' },
  { icon: '📚', value: 'Always', label: 'Learning' },
];

const skills: string[] = [
  'WordPress',
  'Shopify',
  'Squarespace',
  'Framer',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardMotion: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <motion.article
    variants={cardMotion}
    whileHover={{ y: -6, scale: 1.02 }}
    className="group rounded-[1.65rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300"
  >
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-100/80 text-xl shadow-sm shadow-blue-200/60">
      {icon}
    </span>
    <p className="mt-6 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    <p className="mt-2 text-sm uppercase tracking-[0.32em] text-slate-500">{label}</p>
    <span className="mt-4 block h-1 w-12 rounded-full bg-linear-to-r from-blue-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </motion.article>
);

const SkillPill = ({ name }: SkillPillProps) => (
  <motion.span
    variants={fadeUp}
    className="rounded-full border border-slate-200/70 bg-slate-50/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
  >
    {name}
  </motion.span>
);

export default function AboutME() {
  return (
    <section id="about" className="w-full rounded-2xl relative  sm:mt-20 overflow-hidden bg-white/50 backdrop-blur-2xl py-16 ">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-linear-to-b from-purple-100/80 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-10 top-24 h-44 w-44 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="pointer-events-none absolute right-4 top-32 h-52 w-52 rounded-full bg-violet-300/25 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid gap-12 lg:items-center"
        >
          <div className="space-y-8">
            <motion.div variants={fadeUp} className="max-w-full sm:max-w-6xl">
              <span className="inline-flex items-center rounded-full border border-blue-200/70 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-100/60">
                👋 About Me
              </span>
              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Crafting modern digital experiences with clean code and thoughtful design.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I am a Full Stack Developer and UI Designer who enjoys building modern, interactive and high-performance web applications. I focus on elevated experiences, polished interfaces, and performance-first development for brands that want a premium digital presence.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </motion.div>

            <motion.div variants={staggerContainer} className="rounded-[2rem] border border-slate-200/70 bg-slate-50/80 p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Skills & tools</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => (
                  <SkillPill key={skill} name={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Let&apos;s Talk
                <motion.span
                  className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-base"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  →
                </motion.span>
              </button>

            
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
