import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
export const metadata: Metadata = {
  title: "Indentix Studio — Ideas deserve better.",
  description: "Independent creative studio building expressive websites, digital identities and online experiences.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
