"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Number Guessing Game",
    description:
      "An interactive front-end guessing game where users try to find the correct number through a clean, responsive, and engaging interface built for a smooth gameplay experience.",
    tech: ["HTML", "JavaScript", "React", "Tailwind CSS"],
    preview: "https://number-guessing-game-xi-ashen.vercel.app/",
    image: "/number-guessing-game.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <div className="inline-block">
          <div
            className="
              relative rounded-2xl px-8 py-4
              border border-black/15 dark:border-white/15
              bg-white/40 dark:bg-white/5
              backdrop-blur-xl
              shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              dark:shadow-[0_0_30px_rgba(56,189,248,0.15)]
            "
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl dark:from-cyan-400/20 dark:to-blue-500/20" />
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Projects
            </h2>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          A showcase of the work I&apos;ve built, reflecting my interest in creating interactive,
          responsive, and user-friendly websites.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
            className="
              group relative overflow-hidden rounded-[30px]
              border border-black/10 bg-white/35
              backdrop-blur-2xl
              shadow-[0_18px_50px_rgba(0,0,0,0.08)]
              transition-all duration-150 ease-out
              hover:shadow-[0_24px_60px_rgba(0,0,0,0.14)]
              dark:border-white/10 dark:bg-white/[0.04]
              dark:shadow-[0_0_36px_rgba(56,189,248,0.14)]
              dark:hover:shadow-[0_0_80px_rgba(56,189,248,0.34)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-80 dark:from-cyan-400/10 dark:to-blue-500/10" />
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/25" />
            <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/25" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-500/8 blur-2xl" />

            <div className="relative h-56 w-full overflow-hidden rounded-t-[30px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 p-7">
              <h3 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full border border-cyan-500/20
                      bg-cyan-500/[0.07] px-4 py-2
                      text-sm font-medium text-cyan-700
                      shadow-[0_0_15px_rgba(8,145,178,0.08)]
                      transition-all duration-150 ease-out
                      hover:scale-[1.03] hover:border-cyan-500/45 hover:bg-cyan-500/[0.14]
                      dark:border-cyan-400/20 dark:bg-cyan-400/[0.08]
                      dark:text-cyan-300 dark:shadow-[0_0_20px_rgba(34,211,238,0.14)]
                      dark:hover:border-cyan-400/45 dark:hover:bg-cyan-400/[0.16]
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 rounded-2xl
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    px-6 py-3 text-sm font-semibold text-white
                    shadow-[0_10px_30px_rgba(37,99,235,0.25)]
                    transition-all duration-150 ease-out
                    hover:shadow-[0_18px_44px_rgba(37,99,235,0.4)]
                  "
                >
                  <ExternalLink className="h-4 w-4" />
                  Preview
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}