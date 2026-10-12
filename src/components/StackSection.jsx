"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TECH_ICONS } from "@/lib/techIcons";

function TechIcon({ label }) {
  const path = TECH_ICONS[label];
  if (!path) {
    return (
      <span className="font-mono text-[11px] leading-none text-faint" aria-hidden="true">
        &gt;_
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function StackSection() {
  const { t } = useLang();

  return (
    <section id="stack" className="scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionHeading>{t.stack.heading}</SectionHeading>
        </Reveal>

        <div className="mt-16 border-b border-line md:mt-20">
          {t.stack.groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.04}>
              <div className="grid gap-5 border-t border-line py-10 md:grid-cols-[240px_1fr] md:gap-10 md:py-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                  {group.name}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group/chip flex items-center gap-2.5 border border-line bg-void-2/40 px-3.5 py-2.5 transition-colors duration-300 hover:border-accent/40 hover:bg-void-2"
                    >
                      <span className="text-dim transition-colors duration-300 group-hover/chip:text-accent">
                        <TechIcon label={item} />
                      </span>
                      <span className="text-[13px] leading-none text-ink/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
