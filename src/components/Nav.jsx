"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

const links = [
  ["projects", "/#projects"],
  ["experience", "/#experience"],
  ["stack", "/#stack"],
  ["about", "/#about"],
  ["blog", "/blog"],
  ["contact", "/#contact"],
];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [onDark, setOnDark] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-nav-theme]");
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, entry.target.dataset.navTheme);
          else visible.delete(entry.target);
        }
        const themes = [...visible.values()];
        setOnDark(themes.length ? themes[0] === "dark" : true);
      },
      { rootMargin: "-64px 0px -70% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onDark ? "text-white" : "text-ink"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="/" className="font-mono text-sm font-medium tracking-tight">
          fabisiak.dev
        </a>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([key, href]) => (
            <li key={key}>
              <a
                href={href}
                className="opacity-70 transition-opacity duration-200 hover:opacity-100"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <div className="font-mono text-xs" role="group" aria-label="Language">
            {["pt", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-1 uppercase transition-opacity ${
                  lang === l ? "font-medium" : "opacity-40 hover:opacity-80"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/Duuuuardo"
            target="_blank"
            rel="noreferrer"
            className={`hidden rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 sm:block ${
              onDark
                ? "border-white/25 hover:border-white/60"
                : "border-ink/25 hover:border-ink/60"
            }`}
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}
