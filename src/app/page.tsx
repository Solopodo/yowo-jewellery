import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { site } from "../data/site";
import { getFeaturedProducts } from "../data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="luxe-container pt-14 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="luxe-kicker">YOWO • Fashion Jewellery</p>

            <h1 className="luxe-h1 mt-3">
              Jewellery that moves with you
            </h1>

            <p className="mt-5 text-neutral-700 leading-relaxed max-w-md">
              Designed for everyday elegance — effortless, personal pieces
              made to elevate how you feel, every day.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/catalog"
                className="rounded-full bg-neutral-950 px-6 py-3 text-sm text-white hover:bg-neutral-800 transition"
              >
                View Collection
              </Link>

              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-900 hover:border-neutral-400 transition"
              >
                DM on Instagram
              </a>
            </div>
          </div>

          <div className="luxe-card overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/hero.jpg"
                alt="Woman wearing YOWO jewellery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="luxe-container mt-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="luxe-kicker">Curated</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">
              Featured pieces
            </h2>
          </div>

          <Link
            className="text-sm text-neutral-700 hover:text-neutral-950 transition"
            href="/catalog"
          >
            Explore all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* BRAND STANDARD */}
      <section className="luxe-container mt-24">
        <div className="luxe-card p-8 md:p-12">
          <p className="luxe-kicker">The YOWO standard</p>

          <h3 className="mt-2 text-xl md:text-2xl font-semibold">
            Bold details. Clean finish.
          </h3>

          <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
            Designed for weddings, evenings out, and everyday glow-ups —
            premium-look fashion jewellery that complements your style,
            without ever feeling overdone.
          </p>

          <div className="mt-7">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-sm text-white hover:bg-neutral-800 transition"
            >
              DM to order on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
