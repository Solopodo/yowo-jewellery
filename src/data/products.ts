import type { Category } from "./site";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price?: string; // optional today; tomorrow we can make it real pricing + checkout
  images: string[]; // paths in /public
  featured?: boolean;
  details?: string[];
};

export const products: Product[] = [
  {
    slug: "aurora-drop-earrings",
    name: "Aurora Drop Earrings",
    category: "Earrings",
    price: "₹799",
    images: ["/products/sample-01.jpg", "/products/sample-02.jpg"],
    featured: true,
    details: ["Lightweight", "High-shine finish", "Statement silhouette"]
  },
  {
    slug: "noir-chain-pendant",
    name: "Noir Chain Pendant",
    category: "Chains & Pendants",
    price: "₹999",
    images: ["/products/sample-02.jpg"],
    featured: true,
    details: ["Premium finish", "Day-to-night styling"]
  },
  {
    slug: "hand-glow-bracelet",
    name: "Hand Glow Jewellery",
    category: "Hand Jewellery",
    price: "₹899",
    images: ["/products/sample-01.jpg"],
    featured: true,
    details: ["Comfort fit", "Photogenic detailing"]
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}