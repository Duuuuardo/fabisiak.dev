"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";

export default function BlogSection({ posts }) {
  const { t, lang } = useLang();

  if (!posts?.length) return null;

  return (
    <section id="blog" data-nav-theme="light" className="scroll-mt-16 bg-paper pb-28 md:pb-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="text-5xl font-medium tracking-tighter text-ink md:text-7xl">
            <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
            {t.blog.heading}
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-mist">
            {t.blog.intro}
          </p>
        </Reveal>

        <div className="mt-14">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <a
                href={`/blog/${post.slug}`}
                className="group grid gap-4 border-t border-line py-9 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-mist">
                    {post.date}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-mist">
                    {post.readingTime}
                    {lang === "en" ? ` · ${t.blog.ptOnly}` : ""}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-[72ch] leading-relaxed text-mist">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 font-mono text-sm text-accent">
                    {t.blog.readMore} ↳
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
