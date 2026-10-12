"use client";

import { useLang } from "./LangProvider";

export default function PostBody({ post }) {
  const { t } = useLang();

  return (
    <div data-nav-theme="light" className="bg-paper px-6 pb-28 pt-32 md:pt-40">
      <article className="mx-auto max-w-3xl">
        <a href="/blog" className="font-mono text-sm text-accent">
          ↩ {t.blog.backToBlog}
        </a>
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-mist">
          {post.date} · {post.readingTime}
        </p>
        <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-tighter text-ink md:text-5xl">
          {post.title}
        </h1>
        <ul className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-mist"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div
          className="post-content mt-12 border-t border-line pt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </div>
  );
}
