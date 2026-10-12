import BlogShell from "@/components/BlogShell";
import BlogIndex from "@/components/BlogIndex";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Notas sobre o que eu construo, aprendo e quebro no caminho.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <BlogShell>
      <BlogIndex posts={posts} />
    </BlogShell>
  );
}
