"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" data-nav-theme="light" className="scroll-mt-16 bg-paper pb-28 pt-4 md:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="text-5xl font-medium tracking-tighter text-ink md:text-7xl">
            <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
            {t.experience.heading}
          </h2>
        </Reveal>

        <div className="mt-16">
          {t.experience.items.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[240px_1fr] md:py-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-mist">
                    {job.period}
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {job.role}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
                    {job.company}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed text-mist">
                        <span className="font-mono text-accent" aria-hidden="true">
                          ↳
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mist"
                      >
                        {tag}
                      </span>
                    ))}
                    {job.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-accent/30 px-3 py-1 font-mono text-[11px] text-accent transition-colors duration-200 hover:border-accent hover:bg-accent/5"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
