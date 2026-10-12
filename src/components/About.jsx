"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-7">
          <SectionHeading>{t.about.heading}</SectionHeading>
          <p className="mt-10 max-w-[60ch] text-xl font-light leading-relaxed text-ink/90 md:text-2xl">
            {t.about.body}
          </p>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9 md:pt-24" delay={0.08}>
          <dl className="border-b border-line">
            {t.about.facts.map((fact) => (
              <div key={fact.label} className="border-t border-line py-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
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
