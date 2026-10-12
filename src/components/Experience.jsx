"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./Icons";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionHeading>{t.experience.heading}</SectionHeading>
        </Reveal>

        <div className="mt-16 border-b border-line md:mt-20">
          {t.experience.items.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.04}>
              <article className="grid gap-6 border-t border-line py-10 md:grid-cols-[260px_1fr] md:gap-10 md:py-14">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  <p className="tabular text-ink">{job.period}</p>
                  <p className="mt-2 text-dim">{job.role}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-normal tracking-tight text-ink md:text-3xl">
                    {job.company}
                  </h3>
                  <ul className="mt-5 max-w-[68ch] space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 leading-relaxed text-dim">
                        <span className="mt-[0.1em] font-mono text-accent" aria-hidden="true">
                          $
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[12px]">
                    <p className="text-dim">
                      {job.tags.map((tag, j) => (
                        <span key={tag}>
                          {j > 0 && <span className="mx-2 text-faint">·</span>}
                          {tag}
                        </span>
                      ))}
                    </p>
                    {job.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-accent/80 transition-colors duration-300 hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRight />
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
