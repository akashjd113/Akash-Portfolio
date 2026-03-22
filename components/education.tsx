import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { CalendarDays, GraduationCap } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 inline-block">
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
                    {/* Glow background */}
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-xl dark:from-cyan-400/20 dark:to-blue-500/20" />

                    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                        Education
                    </h2>
                </div>
            </div>

            <p className="mb-12 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                My education journey has been focused on learning and growth. Here are the details of my academic background.
            </p>

            <div className="grid gap-8 lg:grid-cols-3">
                {portfolioData.education.map((item) => (
                    <div
                        key={item.title}
                         className="
                                    group relative overflow-hidden rounded-[30px]
                                    border border-black/10 bg-white/35 p-6
                                    backdrop-blur-2xl
                                    shadow-[0_18px_50px_rgba(0,0,0,0.08)]
                                    transition duration-500

                                    hover:-translate-y-2
                                    hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]

                                    dark:border-white/10 dark:bg-white/[0.04]
                                    dark:shadow-[0_0_30px_rgba(56,189,248,0.10)]

                                    dark:hover:shadow-[0_0_60px_rgba(56,189,248,0.35)]
                                    dark:hover:border-cyan-400/40">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-70 dark:from-cyan-400/10 dark:to-blue-500/10" />
                        <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/15" />
                        <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />

                        <div className="relative z-10">
                            <div className="mb-6 flex items-start justify-between gap-4">
                                <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/10">
                                    <Image
                                        src={item.logo}
                                        alt={item.institute}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                                    <CalendarDays className="h-3.5 w-3.5" />
                                    {item.year}
                                </div>
                            </div>

                            <h3 className="text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-white">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap overflow-hidden text-ellipsis">
                                {item.institute}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                                <GraduationCap className="h-4 w-4" />
                                {item.grade}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}