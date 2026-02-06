import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[rgba(250,250,249,0.85)] backdrop-blur">
      <div className="luxe-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="text-sm tracking-luxe font-semibold">{site.brand}</span>
          <span className="hidden sm:inline text-xs text-neutral-600">{site.tagline}</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/catalog" className="text-neutral-800 hover:text-neutral-950">
            Catalogue
          </Link>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-300 px-3 py-1.5 text-neutral-800 hover:border-neutral-400 hover:text-neutral-950"
          >
            DM on Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}