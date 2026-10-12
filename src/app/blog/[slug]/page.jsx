import { notFound } from "next/navigation";
import BlogShell from "@/components/BlogShell";
import PostBody from "@/components/PostBody";
import { getPost, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <BlogShell>
      <PostBody post={post} />
    </BlogShell>
  );
}
