"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => mounted && setTheme(theme === "dark" ? "light" : "dark")}
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black/[0.04] text-slate-700 shadow-sm transition duration-300 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-600 hover:shadow-[0_0_20px_rgba(8,145,178,0.18)] dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-cyan-400/50 dark:hover:text-cyan-300 dark:hover:shadow-[0_0_24px_rgba(34,211,238,0.28)]"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-5 w-5 transition duration-300 group-hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 transition duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}

function ResumeButton() {
  return (
    <a
      href={portfolioData.resume}
      download
      aria-label="Download CV"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black/[0.04] text-slate-700 shadow-sm transition duration-300 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-600 hover:shadow-[0_0_20px_rgba(8,145,178,0.18)] dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-cyan-400/50 dark:hover:text-cyan-300 dark:hover:shadow-[0_0_24px_rgba(34,211,238,0.28)]"
    >
      <Download className="h-5 w-5 transition duration-300 group-hover:-translate-y-0.5" />
    </a>
  );
}

function ProfilePreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open profile picture"
          className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-black/20 bg-black/[0.05] shadow-sm transition duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(8,145,178,0.2)] dark:border-white/20 dark:bg-white/[0.06] dark:hover:border-cyan-400/50 dark:hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
        >
          <Image
            src={portfolioData.profileImage}
            alt={portfolioData.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-110"
          />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md border-black/10 bg-white/95 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f19]/95">
        <DialogTitle className="sr-only">Profile picture</DialogTitle>
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={portfolioData.profileImage}
            alt={portfolioData.name}
            fill
            className="object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Navbar() {
  return (
    <TooltipProvider delayDuration={120}>
      <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2">
        <div className="rounded-[2rem] border border-black/15 bg-white/70 px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/15 dark:bg-black/45 dark:shadow-[0_12px_40px_rgba(0,0,0,0.28)] sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ProfilePreview />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                >
                  <p>View profile photo</p>
                </TooltipContent>
              </Tooltip>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {portfolioData.name}
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:scale-105 hover:bg-black/[0.05] hover:text-cyan-600 dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ResumeButton />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                >
                  <p>Download CV</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ThemeButton />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                >
                  <p>Change theme</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ResumeButton />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                >
                  <p>Download CV</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <ThemeButton />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                >
                  <p>Change theme</p>
                </TooltipContent>
              </Tooltip>

              <Sheet>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SheetTrigger asChild>
                      <button
                        type="button"
                        aria-label="Open menu"
                        className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-black/[0.04] text-slate-700 shadow-sm transition duration-300 hover:scale-110 hover:border-cyan-500/50 hover:text-cyan-600 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:border-cyan-400/50 dark:hover:text-cyan-300"
                      >
                        <Menu className="h-5 w-5 transition duration-300 group-hover:rotate-6" />
                      </button>
                    </SheetTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={10}
                    className="mt-2 rounded-md border border-black/10 bg-white px-3 py-1 text-xs text-slate-700 shadow-md dark:border-white/10 dark:bg-[#0b0f19] dark:text-white"
                  >
                    <p>Open menu</p>
                  </TooltipContent>
                </Tooltip>

                <SheetContent
                  side="right"
                  className="w-[300px] border-black/10 bg-white/95 backdrop-blur-2xl dark:border-white/10 dark:bg-[#090d16]/95"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Navigation Menu</SheetTitle>
                  </SheetHeader>

                  <div className="mt-8 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-black/15 dark:border-white/15">
                        <Image
                          src={portfolioData.profileImage}
                          alt={portfolioData.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                          {portfolioData.name}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Web Developer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition duration-300 hover:translate-x-1 hover:bg-black/[0.05] hover:text-cyan-600 dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    <a
                      href={portfolioData.resume}
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-black/[0.04] px-4 py-3 font-medium text-slate-700 transition duration-300 hover:bg-black/[0.06] hover:text-cyan-600 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:text-cyan-300"
                    >
                      <Download className="h-4 w-4" />
                      Download CV
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}