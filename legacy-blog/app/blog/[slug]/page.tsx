import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Section } from "@/components/ui/Section";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Badge } from "@/components/ui/Badge";
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/data/blog";
import { buildMetadata, articleJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug);

  return (
    <>
      <Breadcrumb
        items={[
          { name: "ブログ", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              excerpt: post.excerpt,
              slug: post.slug,
              publishedAt: post.publishedAt,
            })
          ),
        }}
      />

      <Section tone="paper" narrow>
        <p className="text-xs text-ink-soft/70">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> — {post.category}
        </p>
        <h1 className="mt-3 font-serif-jp text-3xl leading-snug md:text-4xl">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} tone="stone">
              #{tag}
            </Badge>
          ))}
        </div>
        <div className="mt-8">
          <PhotoFrame alt={post.imageAlt} ratio="wide" priority />
        </div>
        <div className="prose-editorial mt-10" dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
      </Section>

      {related.length > 0 && (
        <Section tone="deep" narrow>
          <h2 className="font-serif-jp text-xl">関連記事</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                <PhotoFrame alt={r.imageAlt} ratio="landscape" />
                <h3 className="mt-3 font-serif-jp text-base group-hover:text-moss">{r.title}</h3>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
