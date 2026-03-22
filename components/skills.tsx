"use client";
import { motion } from "motion/react";

import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiC } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: <VscVscode className="h-8 w-8" /> },
      { name: "GitHub", icon: <FaGithub className="h-8 w-8" /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="h-8 w-8" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-8 w-8" /> },
      { name: "JavaScript", icon: <SiJavascript className="h-8 w-8" /> },
      { name: "React", icon: <FaReact className="h-8 w-8" /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "C", icon: <SiC className="h-8 w-8" /> },
      { name: "C++", icon: <SiCplusplus className="h-8 w-8" /> },
      { name: "Python", icon: <FaPython className="h-8 w-8" /> },
      { name: "JavaScript", icon: <SiJavascript className="h-8 w-8" /> },
    ],
  },
];

function TiltSkillCard({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <motion.div
      whileHover={{
        rotateX: -8,
        rotateY: 8,
        y: -6,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ transformStyle: "preserve-3d" }}
      className="
        group relative overflow-hidden rounded-2xl
        border border-black/10 bg-black/[0.02]
        px-4 py-5
        min-h-[140px]
        transition duration-300
        dark:border-white/10 dark:bg-white/[0.03]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-400/5 opacity-0 transition duration-500 group-hover:opacity-100 dark:from-white/5 dark:to-cyan-400/10" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div
          className="
            mb-3 text-slate-800 transition duration-300
            group-hover:scale-110 group-hover:-translate-y-1
            dark:text-white
          "
          style={{ transform: "translateZ(24px)" }}
        >
          {icon}
        </div>

        <p
          className="
            text-sm font-semibold tracking-tight text-slate-700
            transition duration-300
            group-hover:text-cyan-700
            dark:text-slate-200 dark:group-hover:text-cyan-300
            sm:text-base
          "
          style={{ transform: "translateZ(16px)" }}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 inline-block">
        <div
          className="
            relative rounded-2xl border border-black/15 bg-white/40 px-8 py-4
            backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            dark:border-white/15 dark:bg-white/5
            dark:shadow-[0_0_30px_rgba(56,189,248,0.15)]
          "
        >
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl dark:from-cyan-400/20 dark:to-blue-500/20" />
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Skills
          </h2>
        </div>
      </div>

      <p className="mb-12 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
        I am a passionate web developer with hands-on experience in front-end
        technologies such as HTML, CSS, JavaScript, and React. I specialize in
        building clean, responsive, and user-focused interfaces, and I am
        committed to continuously learning and evolving with modern web
        development practices.
      </p>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="
              group relative overflow-hidden rounded-[28px]
              border border-black/10 bg-white/35 p-6
              backdrop-blur-2xl
              shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              transition duration-500
              hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.14)]
              dark:border-white/10 dark:bg-white/[0.04]
              dark:shadow-[0_0_30px_rgba(56,189,248,0.10)]
              dark:hover:shadow-[0_0_45px_rgba(56,189,248,0.22)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-70 dark:from-cyan-400/10 dark:to-blue-500/10" />
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
            <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

            <div className="relative z-10">
              <h3 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-cyan-300">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <TiltSkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}