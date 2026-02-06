import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug } from "../../../data/products";
import { site } from "../../../data/site";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="luxe-container pt-10">
      <p className="luxe-kicker">{product.category}</p>

      <div className="mt-3 grid gap-8 md:grid-cols-2 md:items-start">
        {/* Images */}
        <div className="grid gap-4">
          {product.images.map((src, index) => (
            <div key={src} className="luxe-card overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={src}
                  alt={`${product.name} image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="luxe-card p-7 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {product.name}
          </h1>

          {product.price && (
            <p className="mt-2 text-lg text-neutral-800">
              {product.price}
            </p>
          )}

          {product.details && product.details.length > 0 && (
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-neutral-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}

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
            Payments will be enabled soon.
          </p>
        </div>
      </div>
    </div>
  );
}
