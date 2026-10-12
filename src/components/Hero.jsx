"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "./LangProvider";
import { ArrowDown, ArrowUpRight } from "./Icons";

const ease = [0.16, 1, 0.3, 1];
const TYPE_MS = 70;

function useClock() {
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (!now) return "--:--:--";
  return now.toLocaleTimeString("en-GB", {
    timeZone: "America/Sao_Paulo",
    hour12: false,
  });
}

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const command = t.hero.command;
  const name = t.hero.name;
  const clock = useClock();

  const [typed, setTyped] = useState(reduce ? command.length : 0);

  useEffect(() => {
    if (reduce) {
      setTyped(command.length);
      return;
    }
    setTyped(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(i);
      if (i >= command.length) clearInterval(id);
    }, TYPE_MS);
    return () => clearInterval(id);
  }, [command, reduce]);

  const typedDone = typed >= command.length;
  const base = reduce ? 0 : (command.length * TYPE_MS) / 1000 + 0.1;

  const fade = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: typedDone ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section id="top" className="relative flex min-h-[100dvh] flex-col">

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pt-14 md:px-10">
        <div className="flex items-center py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          <span>
            {clock} <span className="text-faint">BRT</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <p className="font-mono text-sm text-accent md:text-base">
            {command.slice(0, typed)}
            {!typedDone && <span className="cursor-blink">▮</span>}
          </p>

          <h1 className="mt-6 text-[clamp(2.75rem,9vw,6rem)] font-light leading-[0.98] tracking-[-0.03em] text-ink">
            {name.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span
                  className="mr-[0.22em] inline-block"
                  initial={reduce ? false : { y: "105%" }}
                  animate={typedDone ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[48ch] text-lg leading-relaxed text-dim md:text-xl"
            {...fade(base + 0.3)}
          >
            {t.hero.role}
          </motion.p>

          <motion.div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4" {...fade(base + 0.45)}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 border border-ink/80 px-5 py-3 font-mono text-[13px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {t.hero.ctaPrimary}
              <ArrowDown className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="mailto:eduardofabisiak@proton.me"
              className="font-mono text-[13px] text-dim underline decoration-line-2 underline-offset-[6px] transition-colors duration-300 hover:text-ink hover:decoration-ink"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div className="border-t border-line pb-10 pt-6" {...fade(base + 0.6)}>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 font-mono md:grid-cols-5">
            {t.hero.facts.map((row) => (
              <div key={row.label}>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-dim">{row.label}</dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[13px]">
            {t.hero.links.map((row) => (
              <li key={row.label}>
                <a
                  href={row.url}
                  target={row.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-dim transition-colors duration-300 hover:text-accent"
                >
                  <span className="text-accent">$</span> {row.label}
                  <span className="text-ink transition-colors group-hover:text-accent">{row.value}</span>
                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
