import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bjr.ai"),
  title: {
    default: "BJ Richardson — Product Leader, Strategist, Builder",
    template: "%s — bjr.ai",
  },
  description:
    "I like problems that don't have a clean brief yet. Product judgment, systems thinking, and hands-on delivery for work that's real but not yet defined.",
  openGraph: {
    title: "BJ Richardson — Product Leader, Strategist, Builder",
    description:
      "I like problems that don't have a clean brief yet. Product judgment, systems thinking, and hands-on delivery for work that's real but not yet defined.",
    url: "https://www.bjr.ai",
    siteName: "bjr.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BJ Richardson — Product Leader, Strategist, Builder",
    description:
      "I like problems that don't have a clean brief yet. Product judgment, systems thinking, and hands-on delivery for work that's real but not yet defined.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
