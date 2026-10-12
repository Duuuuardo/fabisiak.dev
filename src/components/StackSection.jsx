"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function StackSection() {
  const { t } = useLang();

  return (
    <section id="stack" data-nav-theme="dark" className="scroll-mt-16 bg-navy py-28 text-white md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="text-5xl font-medium tracking-tighter md:text-7xl">
            {t.stack.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {t.stack.groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.05}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bright">
                {group.name}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-fog"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
