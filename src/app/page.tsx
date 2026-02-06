import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { site } from "../data/site";
import { getFeaturedProducts } from "../data/products";
export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="luxe-container pt-10 md:pt-14">
        <p className="luxe-kicker">YOWO • Fashion Jewellery</p>
        <div className="mt-3 grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="luxe-h1">{site.tagline}</h1>
            <p className="mt-5 text-neutral-700 leading-relaxed">{site.description}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
              >
                View Collection
              </Link>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-900 hover:border-neutral-400"
              >
                DM on Instagram
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs text-neutral-600">
              {site.categories.map((c) => (
                <span key={c} className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="luxe-card overflow-hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/hero.jpg"
                alt="YOWO Jewellery hero"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="luxe-container mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="luxe-kicker">Curated</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold">Featured pieces</h2>
          </div>
          <Link className="text-sm text-neutral-700 hover:text-neutral-950" href="/catalog">
            Explore all →
          </Link>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="luxe-container mt-16">
        <div className="luxe-card p-8 md:p-10">
          <p className="luxe-kicker">The YOWO standard</p>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold">Bold details. Clean finish.</h3>
          <p className="mt-4 text-neutral-700 leading-relaxed max-w-3xl">
            Designed for weddings, evenings out, and everyday glow-ups — premium-look fashion jewellery that elevates any outfit.
          </p>
          <div className="mt-6">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white hover:bg-neutral-800"
            >
              DM to order on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
