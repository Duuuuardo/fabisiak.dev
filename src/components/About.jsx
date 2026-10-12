"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" data-nav-theme="light" className="scroll-mt-16 bg-paper py-28 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-7">
          <h2 className="text-5xl font-medium tracking-tighter text-ink md:text-7xl">
            <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
            {t.about.heading}
          </h2>
          <p className="mt-8 max-w-[62ch] text-xl leading-relaxed text-mist">
            {t.about.body}
          </p>
        </Reveal>

        <Reveal className="md:col-span-5" delay={0.1}>
          <dl>
            {t.about.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line py-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                  {fact.label}
                </dt>
                <dd className="mt-2 leading-relaxed text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
