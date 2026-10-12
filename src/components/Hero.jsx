"use client";

import { motion, useReducedMotion } from "motion/react";
import { useLang } from "./LangProvider";
import NodeField from "./NodeField";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const words = t.hero.title.split(" ");

  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-navy text-white"
    >
      <NodeField variant="field" density={0.8} className="absolute inset-0 h-full w-full opacity-60" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,transparent_40%,var(--color-navy)_95%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-bright md:text-xs">
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.06] tracking-tighter md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="mr-[0.24em] inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.045, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-7 max-w-[46ch] text-lg leading-relaxed text-fog"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
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
    </section>
  );
}
