import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { StarBackground } from "@/components/StarBackground";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokesh | Full-Stack & AI Systems",
  description:
    "Second-year BTech student at MIT Manipal building web infrastructure and AI evaluation systems for real users.",
  openGraph: {
    title: "Lokesh | Full-Stack & AI Systems",
    description:
      "Second-year undergrad shipping ticketing infrastructure, cross-college portals, and multimodal AI evaluation tooling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
      <body>
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
