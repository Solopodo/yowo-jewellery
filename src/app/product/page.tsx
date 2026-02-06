import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../../data/products";
import { site } from "../../../data/site";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="luxe-container pt-10">
      <p className="luxe-kicker">{product.category}</p>
      <div className="mt-2 flex flex-col gap-8 md:grid md:grid-cols-2 md:items-start">
        <div className="grid gap-4">
          {product.images.map((src, idx) => (
            <div key={src} className="luxe-card overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={`${product.name} ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="luxe-card p-7 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name}</h1>
          {product.price ? <p className="mt-2 text-lg text-neutral-800">{product.price}</p> : null}

          {product.details?.length ? (
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-neutral-400" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
            >
              DM on Instagram to order
            </a>
            <a
              href="/catalog"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-900 hover:border-neutral-400"
            >
              Back to catalogue
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Tomorrow we’ll add “Buy Now” + payments here (no redesign required).
          </p>
        </div>
      </div>
    </div>
  );
}
