import { SITE } from "@/lib/constants";
import { products } from "@/lib/data/products";

const staticPaths = [
  "/",
  "/products",
  "/case-studies",
  "/for-business",
  "/about",
  "/oem",
  "/faq",
  "/contact",
];

export default function sitemap() {
  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE.url}/products/${product.slug}`,
  }));

  return [...staticEntries, ...productEntries];
}
