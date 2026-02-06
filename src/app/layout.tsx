import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { site } from "../data/site";

export const metadata: Metadata = {
  title: site.brand,
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  openGraph: {
    title: site.brand,
    description: site.description,
    url: `https://${site.domain}`,
    siteName: site.brand,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
