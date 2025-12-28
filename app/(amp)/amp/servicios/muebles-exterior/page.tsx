import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { AmpImage } from '@/components/amp/AmpImage';
import { CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Muebles de Exterior - AMP",
    description: "Tapicería náutica y de exterior. Telas hidrófugas. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/servicios/muebles-exterior',
    },
};

export default function AmpOutdoorPage() {
    return (
        <main>
            <AmpHeader />

            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-sky-900">
                <div className="absolute inset-0">
                    <AmpImage
                        src="/assets/images/services/outdoor-furniture.png"
                        alt="Mobiliario Exterior"
                        width={1200}
                        height={800}
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Muebles de Exterior</h1>
                    <p className="text-lg md:text-xl font-light text-sky-100">
                        Prepara tu terraza para durar todo el año.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container px-4">
                    <h2 className="text-2xl font-bold text-primary mb-6">El secreto: Espuma Dry Feel</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Evita el moho. Usamos espuma técnica que deja pasar el agua y el aire, junto con telas náuticas que no decoloran.
                    </p>

                    <ul className="flex flex-col gap-4 mb-8">
                        {[
                            "Telas náuticas resistentes UV.",
                            "Hilo de alta tenacidad.",
                            "Cremalleras plásticas anti-oxido.",
                            "Fundas a medida."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span className="text-stone-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-8">
                        <AmpImage
                            src="/assets/images/services/outdoor-furniture.png"
                            alt="Terraza lujo"
                            width={600}
                            height={400}
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <AmpFooter />
        </main>
    );
}
