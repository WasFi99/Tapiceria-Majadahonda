import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tapicero en Majadahonda | Restauración de Sofás y Muebles | Presupuesto Urgente",
  description: "Tapicería artesanal en Majadahonda, Las Rozas, Boadilla. Especialistas en telas Aquaclean, restauración de sofás, sillas y muebles. Recogida a domicilio. ¡Pide precio por WhatsApp!",
};

import { WhatsAppFAB } from "@/components/features/WhatsAppFAB";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
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
