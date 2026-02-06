import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200">
      <div className="luxe-container py-10 text-sm text-neutral-600">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-neutral-700">{site.brand}</p>
          <div className="flex gap-4">
            <a className="hover:text-neutral-900" href={site.instagramUrl} target="_blank" rel="noreferrer">
              Instagram @{site.instagramHandle}
            </a>
            <span>•</span>
            <span>DM to order</span>
          </div>
        </div>
        <p className="mt-6 text-xs text-neutral-500">
          Shipping & availability shared on request. © {new Date().getFullYear()} {site.brand}.
        </p>
      </div>
    </footer>
  );
}