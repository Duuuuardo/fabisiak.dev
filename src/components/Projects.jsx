"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useLang } from "./LangProvider";
import NodeField from "./NodeField";
import Reveal from "./Reveal";

function StackCard({ project, selfRef, targetRef, hasNext }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: hasNext ? targetRef : selfRef,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const filter = useTransform(scrollYProgress, [0, 1], ["brightness(1)", "brightness(0.5)"]);

  return (
    <div ref={selfRef}>
      <motion.article
        style={!reduce && hasNext ? { scale, filter, transformOrigin: "center top" } : undefined}
        className="sticky top-20 overflow-hidden rounded-2xl border border-line-dark bg-navy-2 text-white md:top-24"
      >
        <div className="grid min-h-[70vh] md:grid-cols-2">
          <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bright">
                {project.category}
              </p>
              <h3 className="mt-5 text-4xl font-medium tracking-tighter md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-fog">
                {project.description}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] text-fog"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-accent-bright/40 px-5 py-2.5 font-mono text-sm text-accent-bright transition-colors duration-200 hover:border-accent-bright hover:bg-accent-bright/10"
            >
              {project.linkLabel} ↗
            </a>
          </div>
          <div className="relative min-h-[280px] border-t border-white/10 md:border-l md:border-t-0">
            <NodeField
              variant={project.motif}
              density={1.15}
              className="absolute inset-0 h-full w-full"
            />
            <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const projects = t.projects.items;
  const refs = useRef([]);
  if (refs.current.length !== projects.length) {
    refs.current = projects.map(() => ({ current: null }));
  }

  return (
    <section id="projects" data-nav-theme="light" className="scroll-mt-16 bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="text-5xl font-medium tracking-tighter text-ink md:text-7xl">
            <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
            {t.projects.heading}
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-mist">
            {t.projects.intro}
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <StackCard
              key={project.name}
              project={project}
              selfRef={refs.current[i]}
              targetRef={refs.current[i + 1]}
              hasNext={i < projects.length - 1}
            />
          ))}
        </div>

        <Reveal className="mt-28 md:mt-36">
          <h3 className="text-3xl font-medium tracking-tighter text-ink md:text-5xl">
            <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
            {t.projects.oss.heading}
          </h3>
          <p className="mt-4 max-w-[56ch] leading-relaxed text-mist">
            {t.projects.oss.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.oss.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05} className={i === 0 ? "lg:col-span-2" : ""}>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-paper-2 p-7 transition-colors duration-200 hover:border-accent/50"
              >
                <div>
                  <h4 className="text-xl font-medium tracking-tight text-ink group-hover:text-accent">
                    {item.name}
                  </h4>
                  <p className="mt-3 leading-relaxed text-mist">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10.5px] text-mist"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="font-mono text-xs text-accent">
                  {item.link.replace("https://", "")} ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
