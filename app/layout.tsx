import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Island Homes SVG | Modern Homes. Island Living.",
  description: "Affordable, modern and sustainable living solutions designed for St. Vincent and the Grenadines.",
  metadataBase: new URL("https://islandhomessvg.com"),
  openGraph: { title: "Island Homes SVG | Modern Homes. Island Living.", description: "Affordable, modern and sustainable homes built for island life.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
