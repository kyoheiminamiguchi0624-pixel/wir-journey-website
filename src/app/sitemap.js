import { SITE } from "@/lib/constants";
import { products } from "@/lib/data/products";
import { news } from "@/lib/data/news";

const staticPaths = [
  "/",
  "/products",
  "/case-studies",
  "/for-business",
  "/about",
  "/oem",
  "/faq",
  "/news",
  "/stores",
  "/privacy",
  "/contact",
];

export default function sitemap() {
  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE.url}/products/${product.slug}`,
  }));

  const newsEntries = news.map((item) => ({
    url: `${SITE.url}/news/${item.slug}`,
    lastModified: item.date,
  }));

  return [...staticEntries, ...productEntries, ...newsEntries];
}
