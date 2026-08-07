import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ブログ",
  description: "Wir Journeyのブランドストーリー、商品開発の裏側、京都の生産者との取り組みなどをご紹介します。",
  path: "/blog",
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function BlogIndexPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <Breadcrumb items={[{ name: "ブログ", path: "/blog" }]} />
      <Section tone="paper">
        <SectionTitle eyebrow="Journal" title="ブログ" />

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Badge key={c} tone="stone">
              {c}
            </Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <PhotoFrame alt={post.imageAlt} ratio="landscape" />
              <p className="mt-4 text-xs text-ink-soft/70">
                {formatDate(post.publishedAt)} — {post.category}
              </p>
              <h2 className="mt-2 font-serif-jp text-lg leading-snug group-hover:text-moss">{post.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
