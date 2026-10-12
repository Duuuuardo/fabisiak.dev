"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

export default function Footer() {
  const { t } = useLang();
  const lines = [
    { cmd: "mail", value: t.footer.email, url: `mailto:${t.footer.email}` },
    ...t.footer.socials.map((s) => ({
      cmd: "open",
      value: s.url.replace("https://", "").replace("www.", ""),
      url: s.url,
    })),
  ];

  return (
    <footer id="contact" className="relative scroll-mt-14 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(158,197,255,0.11)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-[1440px] px-6 pt-28 md:px-10 md:pt-40">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(2.5rem,6.5vw,5.5rem)] font-light leading-[1.02] tracking-[-0.03em] text-ink">
            {t.footer.heading}
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-dim">{t.footer.note}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-14 space-y-3 font-mono text-[15px] md:text-base">
            {lines.map((line) => (
              <li key={line.url}>
                <a
                  href={line.url}
                  target={line.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 text-dim transition-colors duration-300 hover:text-accent"
                >
                  <span className="text-accent">$</span>
                  <span>
                    {line.cmd} <span className="text-ink transition-colors group-hover:text-accent">{line.value}</span>
                  </span>
                  <ArrowUpRight className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </li>
            ))}
            <li className="pt-2 text-accent" aria-hidden="true">
              $ <span className="cursor-blink text-ink">▮</span>
            </li>
          </ul>
        </Reveal>

        <div
          className="mask-fade-b pointer-events-none mt-28 select-none overflow-hidden whitespace-nowrap font-light leading-[0.8] tracking-[-0.04em] text-void-3"
          style={{ fontSize: "clamp(56px, 13vw, 240px)" }}
          aria-hidden="true"
        >
          FABISIAK.DEV
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-7 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          <p>{t.footer.copyright}</p>
          <p>Rio Grande do Sul · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
