import Image from "next/image";
import Link from "next/link";
import { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="luxe-card overflow-hidden transition-transform duration-300 ease-out">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium leading-snug">
            {product.title}
          </h3>

          {product.price && (
            <p className="mt-1 text-sm text-neutral-600">
              {product.price}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
