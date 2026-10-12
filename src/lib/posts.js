import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function estimateReadingTime(markdown) {
  const words = markdown.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

function toMeta(slug, file) {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags : [],
    readingTime: estimateReadingTime(content),
  };
}

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => toMeta(slug, path.join(POSTS_DIR, `${slug}.md`)))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug) {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const meta = toMeta(slug, file);
  const raw = fs.readFileSync(file, "utf8");
  const { content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { ...meta, html: processed.toString() };
}
