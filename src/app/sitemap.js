import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts().map((post) => ({
    url: `https://fabisiak.dev/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    { url: "https://fabisiak.dev", lastModified: new Date() },
    { url: "https://fabisiak.dev/blog", lastModified: new Date() },
    ...posts,
  ];
}
