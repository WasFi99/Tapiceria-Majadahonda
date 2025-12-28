import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { AmpImage } from '@/components/amp/AmpImage';
import { AmpServiceGrid } from '@/components/amp/AmpServiceGrid';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tapicería Majadahonda - Expertos en Restauración (AMP)",
    description: "Restauración de sofás y tapicería en Majadahonda. Lujo y artesanía. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/',
    },
};

export default function AmpHome() {
    return (
        <main>
            <AmpHeader />

            {/* HERO SECTION */}
            <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <AmpImage
                        src="/assets/images/hero-luxury.png"
                        alt="Sofá de lujo restaurado"
                        width={1200}
                        height={800}
                        layout="fill"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-4 flex flex-col items-center gap-6">
                    <h1 className="text-3xl sm:text-5xl font-serif font-bold drop-shadow-lg">
                        Renovamos tus Muebles,<br />
                        <span className="text-secondary">Recuperamos tus Recuerdos.</span>
                    </h1>
                    <p className="text-lg sm:text-xl max-w-xl mx-auto drop-shadow-md text-stone-100">
                        Artesanía, lujo y rapidez en Majadahonda. Especialistas en telas antimanchas Aquaclean.
                    </p>

                    <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-md sm:flex-row justify-center mt-4">
                        <a href="https://wa.me/34631543707" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-md font-bold shadow-lg uppercase tracking-wide">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                        <a href="tel:+34631543707" className="flex items-center justify-center gap-2 bg-white text-primary py-4 px-6 rounded-md font-bold shadow-lg uppercase tracking-wide border border-stone-200">
                            <Phone className="w-5 h-5" />
                            Llamar
                        </a>
                    </div>
                </div>
            </section>

            {/* TRUST SIGNALS (Static list for AMP) */}
            <section className="py-8 bg-stone-50 border-b border-stone-100">
                <div className="container text-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">Confianza Premium: Trabajamos con las mejores editoras</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
                        <span className="text-xl font-serif font-bold text-stone-400">Aquaclean</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Gancedo</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Gaston y Daniela</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Güell Lamadrid</span>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID (Reused component) */}
            {/* ServiceGrid uses 'next/link', which renders <a> tag. Safe for AMP. */}
            {/* ServiceGrid uses 'lucide-react'. SVG safe. */}
            {/* ServiceGrid uses 'Card'. Divs safe. */}
            {/* SERVICES GRID (Reused component) */}
            {/* ServiceGrid uses 'next/link', which renders <a> tag. Safe for AMP. */}
            {/* ServiceGrid uses 'lucide-react'. SVG safe. */}
            {/* ServiceGrid uses 'Card'. Divs safe. */}
            <AmpServiceGrid />

            {/* TRANSFORM CTA (Replaces Budget Calculator) */}
            <section className="py-16 bg-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">¿Tu sofá necesita una segunda vida?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        No lo tires. Restaura la calidad original con nuestras espumas de alta densidad y tejidos de lujo.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
                        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                            <AmpImage src="/assets/images/before-after/sofa-old.jpg" alt="Antes" width={600} height={400} layout="fill" className="object-cover" />
                            <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-xs font-bold rounded">ANTES</span>
                        </div>
                        <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                            <AmpImage src="/assets/images/before-after/sofa-new.jpg" alt="Después" width={600} height={400} layout="fill" className="object-cover" />
                            <span className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-xs font-bold rounded">DESPUÉS</span>
                        </div>
                    </div>

                    <a href="tel:+34631543707" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-stone-800 transition-colors">
                        Pedir Presupuesto Gratuito <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <AmpFooter />
        </main>
    );
}
