"use client";

import { useLang } from "./LangProvider";

export default function PostRow({ post, as: Tag = "h3", showTags = false }) {
  const { t, lang } = useLang();
  const meta = (lang === "en" && post.en) || post;
  const ptOnly = lang === "en" && !post.en;

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group grid gap-4 border-t border-line py-9 transition-colors duration-300 md:grid-cols-[260px_1fr] md:gap-10 md:py-11"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em]">
        <p className="tabular text-ink">{meta.date}</p>
        <p className="mt-2 text-dim">
          {meta.readingTime}
          {ptOnly ? ` · ${t.blog.ptOnly}` : ""}
        </p>
      </div>
      <div>
        <Tag className="text-2xl font-normal tracking-tight text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
          {meta.title}
        </Tag>
        <p className="mt-3 max-w-[68ch] leading-relaxed text-dim">{meta.excerpt}</p>
        {showTags && meta.tags?.length > 0 && (
          <p className="mt-4 font-mono text-[11px] text-dim">{meta.tags.join(" · ")}</p>
        )}
        <p className="mt-5 font-mono text-[13px] text-dim transition-colors group-hover:text-accent">
          <span className="text-accent">$</span> {t.blog.readMore.toLowerCase()}
        </p>
      </div>
    </a>
  );
}
