"use client";

import { useLang } from "./LangProvider";
import { ArrowLeft } from "./Icons";

export default function PostBody({ post }) {
  const { t, lang } = useLang();
  const meta = (lang === "en" && post.en) || post;
  const ptOnly = lang === "en" && !post.en;

  return (
    <div className="px-6 pb-28 pt-32 md:pt-44">
      <article className="mx-auto max-w-3xl">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-[13px] text-dim transition-colors hover:text-accent"
        >
          <ArrowLeft />
          {t.blog.backToBlog}
        </a>
        <p className="tabular mt-12 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
          {meta.date} · {meta.readingTime}
          {ptOnly ? ` · ${t.blog.ptOnly}` : ""}
        </p>
        <h1 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.03em] text-ink md:text-6xl">
          {meta.title}
        </h1>
        {meta.tags?.length > 0 && (
          <p className="mt-6 font-mono text-[12px] text-dim">{meta.tags.join(" · ")}</p>
        )}
        <div
          className="post-content mt-12 border-t border-line pt-10"
          dangerouslySetInnerHTML={{ __html: meta.html }}
        />
      </article>
    </div>
  );
}
