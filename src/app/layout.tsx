import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://maazharoon.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maaz Haroon | Full Stack Developer & UI Designer",
    template: "%s | Maaz Haroon",
  },
  description:
    "Full stack developer and UI designer building fast, accessible, and modern web experiences for brands and businesses.",
  keywords: [
    "Full Stack Developer",
    "UI Designer",
    "Portfolio",
    "Next.js",
    "React",
    "Shopify",
    "WordPress",
    "Framer",
    "Squarespace",
    "Web Development",
    "Web Design",
  ],
  applicationName: "Maaz Haroon Portfolio",
  creator: "Maaz Haroon",
  authors: [{ name: "Maaz Haroon", url: siteUrl }],
  category: "Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Maaz Haroon | Full Stack Developer & UI Designer",
    description:
      "Full stack developer and UI designer building fast, accessible, and modern web experiences for brands and businesses.",
    url: siteUrl,
    siteName: "Maaz Haroon Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/hero.png`,
        width: 1200,
        height: 630,
        alt: "Maaz Haroon portfolio hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaz Haroon | Full Stack Developer & UI Designer",
    description:
      "Full stack developer and UI designer building fast, accessible, and modern web experiences for brands and businesses.",
    creator: "@maazharoon900",
    images: [`${siteUrl}/hero.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Maaz Haroon",
      "url": siteUrl,
      "image": `${siteUrl}/logo.png`,
      "jobTitle": "Full Stack Developer & UI Designer",
      "description": "I build fast, accessible, and modern websites with polished interfaces and high performance.",
      "sameAs": [
        "https://github.com/maazharoon1",
        "https://linkedin.com/in/maaz-haroon-b278372a0",
        "https://twitter.com/maazharoon900",
        "https://instagram.com/maazx_36",
        "https://behance.net/maazharoon8",
      ],
      "knowsAbout": [
        "Full Stack Development",
        "UI Design",
        "Next.js",
        "React",
        "Shopify",
        "WordPress",
        "Framer",
        "Squarespace",
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Maaz Haroon Portfolio",
        "url": siteUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Maaz Haroon Portfolio",
      "description": "Portfolio website of Maaz Haroon, a Full Stack Developer and UI Designer.",
      "publisher": { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/#portfolio`,
      "url": siteUrl,
      "name": "Portfolio",
      "description": "A curated portfolio of modern Shopify, WordPress, Framer and Squarespace projects.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Toaster />
      </body>
    </html>
  );
}
