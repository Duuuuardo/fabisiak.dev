"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "./LangProvider";
import NodeField from "./NodeField";

const ease = [0.16, 1, 0.3, 1];
const TYPE_MS = 80;

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const command = t.hero.command;
  const name = t.hero.name;

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
  const nameDelay = reduce ? 0 : (command.length * TYPE_MS) / 1000 + 0.15;

  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy text-white"
    >
      <NodeField variant="field" density={0.8} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,transparent_40%,var(--color-navy)_95%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-14 px-6 pt-16 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="font-mono text-sm text-accent-bright md:text-base">
            {command.slice(0, typed)}
            {!typedDone && <span className="cursor-blink">▮</span>}
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[1.04] tracking-tighter md:text-7xl lg:text-8xl">
            {name.split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className="mr-[0.24em] inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={typedDone ? { y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.08, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-fog md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: nameDelay + 0.3, ease }}
          >
            {t.hero.role}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: nameDelay + 0.5, ease }}
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-navy transition-transform duration-200 active:-translate-y-[1px] active:scale-[0.98] hover:bg-white/90"
            >
              {t.hero.ctaPrimary} ↳
            </a>
            <a
              href="mailto:eduardofabisiak@proton.me"
              className="rounded-full border border-white/25 px-6 py-3 text-sm text-white transition-colors duration-200 hover:border-white/60"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="w-full max-w-xl lg:justify-self-end"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: nameDelay + 0.2, ease }}
        >
          <div className="overflow-hidden rounded-xl border border-line-dark bg-navy-2/70 backdrop-blur">
            <div className="flex items-center gap-3 border-b border-line-dark px-4 py-2.5">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </span>
              <p className="font-mono text-xs text-fog">{t.hero.windowTitle}</p>
            </div>
            <div className="p-5 font-mono text-[13px] leading-relaxed md:p-6">
              <dl>
                {[...t.hero.facts, ...t.hero.links].map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] gap-x-4 py-1 md:grid-cols-[130px_1fr]">
                    <dt className="text-fog/70">{row.label}</dt>
                    <dd className="text-white/90">
                      {row.url ? (
                        <a
                          href={row.url}
                          target={row.url.startsWith("mailto") ? undefined : "_blank"}
                          rel="noreferrer"
                          className="text-accent-bright underline decoration-accent-bright/30 underline-offset-4 transition-colors hover:decoration-accent-bright"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-accent-bright">
                $ <span className="cursor-blink text-white">▮</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
