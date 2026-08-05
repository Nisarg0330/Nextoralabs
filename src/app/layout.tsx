import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteBoot from "@/components/RouteBoot";
import "./globals.css";

const description =
  "A two-founder software engineering company building web, mobile, and AI systems for startups and growing companies across North America.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextoralabs.ca"),
  title: "Nextora Labs — Software Engineering, Toronto, Canada",
  description,
  openGraph: {
    type: "website",
    siteName: "Nextora Labs",
    title: "Nextora Labs — Software Engineering, Toronto, Canada",
    description,
    url: "https://nextoralabs.ca",
    images: [{ url: "/img/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextora Labs — Software Engineering, Toronto, Canada",
    description,
    images: ["/img/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico" },
      { url: "/img/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/img/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/img/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A0D13",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="lightwash"></div>
        <svg id="grain">
          <filter id="gf">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves={3} />
          </filter>
          <rect width="100%" height="100%" filter="url(#gf)" />
        </svg>
        <Header />
        {children}
        <Footer />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <RouteBoot />
      </body>
    </html>
  );
}
