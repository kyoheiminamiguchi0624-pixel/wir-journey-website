import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";

interface BreadcrumbProps {
  items: { name: string; path: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const full = [{ name: "TOP", path: "/" }, ...items];
  return (
    <nav aria-label="パンくずリスト" className="border-b border-stone-light bg-paper-deep py-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(full)) }}
      />
      <ol className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-2 px-6 text-xs text-ink-soft md:px-10">
        {full.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === full.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-moss">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
