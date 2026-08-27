import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uday Kumar G — AI/ML Engineer",
  description:
    "AI/ML Engineer who turns ideas into intelligent systems — from multi-agent AI apps to deep learning models.",
  keywords: [
    "Uday Kumar G",
    "AI Engineer",
    "ML Engineer",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Multi-Agent Systems",
    "Portfolio",
  ],
  authors: [{ name: "Uday Kumar G" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Uday Kumar G — AI/ML Engineer",
    description:
      "AI/ML Engineer who turns ideas into intelligent systems — from multi-agent AI apps to deep learning models.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
