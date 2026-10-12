"use client";

import { useLang } from "./LangProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import PostRow from "./PostRow";

export default function BlogSection({ posts }) {
  const { t } = useLang();

  if (!posts?.length) return null;

  return (
    <section id="blog" className="scroll-mt-14 py-28 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <SectionHeading intro={t.blog.intro}>{t.blog.heading}</SectionHeading>
        </Reveal>

        <div className="mt-14 border-b border-line md:mt-20">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.04}>
              <PostRow post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
