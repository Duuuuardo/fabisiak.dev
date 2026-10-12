"use client";

import { useLang } from "./LangProvider";
import SectionHeading from "./SectionHeading";
import PostRow from "./PostRow";

export default function BlogIndex({ posts }) {
  const { t } = useLang();

  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading as="h1" intro={t.blog.intro}>
          {t.blog.heading}
        </SectionHeading>

        <div className="mt-14 border-b border-line md:mt-20">
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} as="h2" showTags />
          ))}
        </div>
      </div>
    </div>
  );
}
