import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "../globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tapiceriamajadahonda.es'),
  title: {
    default: "Tapicería Majadahonda | Restauración de Muebles de Lujo",
    template: "%s | Tapicería Majadahonda"
  },
  description: "Expertos en tapicería artesanal en Majadahonda y Las Rozas. Restauramos sofás, sillas y cabeceros con telas premium antimanchas Aquaclean.",
  keywords: ["tapicero majadahonda", "restauración sofás", "tapizar sillas", "telas aquaclean", "tapicería las rozas"],
  authors: [{ name: "Tapicería Majadahonda" }],
  creator: "Tapicería Majadahonda",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tapiceriamajadahonda.es",
    title: "Tapicería Majadahonda | Expertos en Restauración",
    description: "Devolvemos la vida a tus muebles con técnicas artesanales y telas de última generación.",
    siteName: "Tapicería Majadahonda",
    images: [
      {
        url: "/assets/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Taller de Tapicería en Majadahonda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tapicería Majadahonda | Restauración Premium",
    description: "Artesanía y diseño para tus muebles en Madrid.",
    images: ["/assets/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/features/WhatsAppFAB";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          href="/assets/images/hero-luxury.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        className={`${bodoniModa.variable} ${inter.variable} antialiased`}
      >
        <div className="relative min-h-screen flex flex-col overflow-x-hidden w-full">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <WhatsAppFAB />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "name": "Tapicería Majadahonda",
              "image": "https://tapiceriamajadahonda.es/logo-taller.jpg",
              "@id": "https://tapiceriamajadahonda.es",
              "url": "https://tapiceriamajadahonda.es",
              "telephone": "+34631543707",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. la Flauta Mágica",
                "addressLocality": "Majadahonda",
                "addressRegion": "Madrid",
                "postalCode": "28222",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.4726,
                "longitude": -3.8727
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              },
              "sameAs": [
                "https://www.facebook.com/tapiceriamajadahonda",
                "https://www.instagram.com/majadahondatapicero"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
