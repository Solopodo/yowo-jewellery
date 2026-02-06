import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function CatalogPage() {
  return (
    <div className="luxe-container pt-10">
      <p className="luxe-kicker">Catalogue</p>
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold">The Collection</h1>
      <p className="mt-3 text-neutral-700 max-w-2xl">
        Browse earrings, chains & pendants, and hand jewellery. For orders and availability, DM on Instagram.
      </p>

      <div className="mt-8 flex flex-wrap gap-2 text-xs text-neutral-600">
        {site.categories.map((c) => (
          <span key={c} className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5">
            {c}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}