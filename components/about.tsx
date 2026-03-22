import { portfolioData } from "@/data/portfolio";
import TypingText from "@/components/typing-text";

export default function About() {
    return (
        <section id="about" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-20 left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="w-full max-w-4xl">
                {/* Small heading */}
                <p className="mb-12 inline-block rounded-full px-5 py-2 text-xs uppercase tracking-[0.35em] 
                    text-slate-700 dark:text-cyan-300 
                    bg-black/5 dark:bg-white/10 
                    border border-black/20 dark:border-transparent
                    backdrop-blur-xl 
                    shadow-[0_0_10px_rgba(0,0,0,0.08)] 
                    dark:shadow-[0_0_25px_rgba(56,189,248,0.25)] 
                    dark:drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                    Welcome to my portfolio
                </p>
                {/* Main Heading */}
                <div className="space-y-3">
                    {/* Short Intro */}
                    <div>
                        <div className="text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                            {portfolioData.greet}
                        </div>
                        <div className="text-5xl font-semibold tracking-tight sm:text-4xl md:text-5xl mb-8">
                            {portfolioData.name1}
                        </div>

                    </div>
                    {/* Hero Highlight */}
                    <div className="text-2xl font-medium tracking-tight sm:text-2xl md:text-3xl">
                        <span className="text-foreground">I am a </span>
                        <TypingText />
                    </div>
                </div>

                {/* Bio */}
                <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
                    {portfolioData.bio}
                </p>
            </div>
        </section>
    );
}