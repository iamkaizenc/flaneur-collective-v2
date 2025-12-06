import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flaneur Collective — Creative Direction for Modern Brands",
  description:
    "We design identities, stories, and content systems for modern founders, creators, and global lifestyle brands.",
  keywords: [
    "creative studio",
    "brand design",
    "visual identity",
    "content production",
    "AI video",
    "UGC campaigns",
  ],
  authors: [{ name: "Flaneur Collective" }],
  openGraph: {
    title: "Flaneur Collective — Creative Direction for Modern Brands",
    description:
      "We design identities, stories, and content systems for modern founders, creators, and global lifestyle brands.",
    type: "website",
    locale: "en_US",
    siteName: "Flaneur Collective",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flaneur Collective",
    description: "Creative direction for brands that move the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Outfit:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
