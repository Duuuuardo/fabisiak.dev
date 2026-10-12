"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./Icons";

function Row({ project }) {
  return (
    <article className="group relative grid gap-6 border-t border-line py-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_minmax(0,3fr)] md:gap-10 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">{project.category}</p>
        <h3 className="mt-4 text-4xl font-light tracking-[-0.03em] text-ink md:text-5xl">
          {project.name}
        </h3>
      </div>
      <div>
        <p className="max-w-[58ch] leading-relaxed text-dim">{project.description}</p>
        {project.stack.length > 0 && (
          <p className="mt-6 font-mono text-[12px] leading-relaxed text-dim">
            {project.stack.map((item, i) => (
              <span key={item}>
                {i > 0 && <span className="mx-2 text-faint">·</span>}
                <span className="text-ink/80">{item}</span>
              </span>
            ))}
          </p>
        )}
      </div>
      <div className="md:text-right">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-dim transition-colors duration-300 hover:text-accent"
        >
          {project.linkLabel}
          <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="relative scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionHeading intro={t.projects.intro}>{t.projects.heading}</SectionHeading>
        </Reveal>

        <div className="mt-16 border-b border-line md:mt-20">
          {t.projects.items.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.04}>
              <Row project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-28 md:mt-36">
          <SectionHeading as="h3" intro={t.projects.oss.intro}>
            {t.projects.oss.heading}
          </SectionHeading>
        </Reveal>

        <ul className="mt-12 grid border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
          {t.projects.oss.items.map((item, i) => (
            <li key={item.name} className="border-b border-r border-line">
              <Reveal delay={i * 0.04} className="h-full">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between gap-10 p-7 transition-colors duration-300 hover:bg-void-2 md:p-8"
                >
                  <div>
                    <h4 className="flex items-center justify-between text-xl font-normal tracking-tight text-ink">
                      {item.name}
                      <ArrowUpRight className="text-dim transition-colors group-hover:text-accent" />
                    </h4>
                    <p className="mt-3 leading-relaxed text-dim">{item.description}</p>
                  </div>
                  <p className="font-mono text-[11px] leading-relaxed text-dim">
                    {item.stack.join(" · ")}
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
