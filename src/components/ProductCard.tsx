import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group">
      <div className="luxe-card overflow-hidden">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={product.featured}
          />
        </div>

        <div className="p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">{product.category}</p>
          <div className="mt-2 flex items-start justify-between gap-3">
            <h3 className="text-sm font-medium text-neutral-900">{product.name}</h3>
            {product.price ? <span className="text-sm text-neutral-700">{product.price}</span> : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
