import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 text-center">
      
      <h3 className="text-xl font-semibold text-cyan-400">
        {portfolioData.name}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Passionate web developer building modern and responsive websites.
      </p>

      <p className="mt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </p>

    </footer>
  );
}