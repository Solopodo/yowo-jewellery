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
      <section className="luxe-container pt-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="luxe-kicker">YOWO • Fashion Jewellery</p>

            <h1 className="luxe-h1 mt-4">
              Jewellery that moves with you
            </h1>

            <p className="mt-6 leading-relaxed max-w-md">
              Designed for everyday elegance — effortless, personal pieces
              made to elevate how you feel, every day.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/catalog" className="luxe-btn-primary">
                View Collection
              </Link>

              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="luxe-btn-secondary"
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

      {/* COLLECTION STORYTELLING */}
      <section className="luxe-container luxe-section">
        <div className="max-w-2xl">
          <p className="luxe-kicker">Curated edit</p>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            Everyday to occasion — thoughtfully chosen
          </h2>

          <p className="mt-4 leading-relaxed">
            Versatile pieces designed to move seamlessly from daily wear
            to celebrations, balancing subtle detail with quiet presence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-10">
          <Link className="text-sm hover:underline" href="/catalog">
            Explore the full collection →
          </Link>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="luxe-container luxe-section">
        <div className="max-w-3xl">
          <p className="luxe-kicker">Our story</p>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
            Designed to feel like you
          </h2>

          <p className="mt-5 leading-relaxed">
            YOWO creates fashion jewellery that blends seamlessly into
            everyday life — refined enough for occasions, subtle enough
            to wear on repeat.
          </p>

          <p className="mt-4 leading-relaxed">
            Each piece is designed with balance in mind: presence without
            excess, detail without distraction. Jewellery that complements
            your style, not competes with it.
          </p>
        </div>
      </section>

      {/* BRAND STANDARD */}
      <section className="luxe-container luxe-section">
        <div className="luxe-card p-10 md:p-14">
          <p className="luxe-kicker">The YOWO standard</p>

          <h3 className="mt-4 text-xl md:text-2xl font-semibold">
            Bold details. Clean finish.
          </h3>

          <p className="mt-5 leading-relaxed max-w-3xl">
            Designed for weddings, evenings out, and everyday glow-ups —
            premium-look fashion jewellery that complements your style,
            without ever feeling overdone.
          </p>

          <div className="mt-8">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="luxe-btn-primary"
            >
              DM to order on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
