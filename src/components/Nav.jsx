"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";

const links = [
  ["about", "/#about"],
  ["stack", "/#stack"],
  ["experience", "/#experience"],
  ["projects", "/#projects"],
  ["blog", "/blog"],
  ["contact", "/#contact"],
];

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-line bg-void/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6 md:px-10">
        <a href="/" className="font-mono text-[13px] text-ink">
          <span className="text-accent">~</span>/fabisiak.dev
        </a>

        <ul className="hidden items-center gap-7 font-mono text-[12px] md:flex">
          {links.map(([key, href]) => (
            <li key={key}>
              <a
                href={href}
                className="text-dim transition-colors duration-300 hover:text-ink"
              >
                {t.nav[key].toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 font-mono text-[12px]">
          <div className="flex items-center gap-0.5" role="group" aria-label="Language">
            {["pt", "en"].map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="px-1 text-faint" aria-hidden="true">/</span>}
                <button
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`uppercase transition-colors duration-300 ${
                    lang === l ? "text-ink" : "text-dim hover:text-ink"
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <a
            href="https://github.com/fabisiakeduardo"
            target="_blank"
            rel="noreferrer"
            className="hidden text-dim transition-colors duration-300 hover:text-ink sm:block"
          >
            github
          </a>
        </div>
      </nav>
    </header>
  );
}
