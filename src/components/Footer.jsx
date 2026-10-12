"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" data-nav-theme="dark" className="scroll-mt-16 overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-[1400px] px-6 pt-28 md:px-10 md:pt-36">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.08] tracking-tighter md:text-6xl">
            {t.footer.heading}
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-fog">
            {t.footer.note}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${t.footer.email}`}
              className="rounded-full bg-white px-6 py-3 font-mono text-sm text-navy transition-transform duration-200 active:-translate-y-[1px] active:scale-[0.98] hover:bg-white/90"
            >
              {t.footer.email}
            </a>
            {t.footer.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-6 py-3 font-mono text-sm text-white transition-colors duration-200 hover:border-white/60"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </Reveal>

        <div
          className="pointer-events-none mt-24 select-none whitespace-nowrap font-medium leading-[0.85] tracking-tighter text-navy-3"
          style={{ fontSize: "clamp(40px, 10vw, 200px)" }}
          aria-hidden="true"
        >
          FABISIAK.DEV
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-8">
          <p className="font-mono text-xs text-fog">{t.footer.copyright}</p>
          <p className="font-mono text-xs text-fog">Itatiba do Sul, RS, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
