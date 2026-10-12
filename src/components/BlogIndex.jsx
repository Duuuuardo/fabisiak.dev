"use client";

import { useLang } from "./LangProvider";

export default function BlogIndex({ posts }) {
  const { t, lang } = useLang();

  return (
    <div data-nav-theme="light" className="bg-paper px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <h1 className="text-5xl font-medium tracking-tighter text-ink md:text-7xl">
          <span className="mr-3 font-mono text-accent" aria-hidden="true">&gt;</span>
          {t.blog.heading}
        </h1>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-mist">
          {t.blog.intro}
        </p>

        <div className="mt-14">
          {posts.map((post) => (
            <a
              key={post.slug}
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
                <h2 className="text-2xl font-medium tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-[72ch] leading-relaxed text-mist">
                  {post.excerpt}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10.5px] text-mist"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
