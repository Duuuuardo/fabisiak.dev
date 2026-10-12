import Site from "@/components/Site";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return <Site posts={posts} />;
}
