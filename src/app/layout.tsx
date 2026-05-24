import type { Metadata } from "next";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/700.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import { GridBackground } from "@/components/GridBackground";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokesh | Full-Stack & AI Systems",
  description:
    "Hi, I'm Lokesh, a 2nd year CS student at MIT Manipal building scalable web platforms, robust backend infrastructure, and AI evaluation systems.",
  openGraph: {
    title: "Lokesh | Full-Stack & AI Systems",
    description:
      "CS undergrad and full-stack developer building scalable web platforms, robust infrastructure, and multimodal AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
