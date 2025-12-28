import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tendencias Telas 2025 - AMP",
    description: "Lo que se lleva en tapicería este año. Versión AMP.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/blog/tendencias-telas-2025',
    },
};

export default function AmpArticlePage() {
    return (
        <main>
            <AmpHeader />
            <article className="container px-4 py-12 max-w-2xl mx-auto">
                <header className="mb-8 text-center">
                    <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Tendencias</span>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4 font-serif text-primary">Tendencias de Telas 2025</h1>
                    <p className="text-muted-foreground text-sm">15 Diciembre, 2025</p>
                </header>

                <div className="flex flex-col gap-6 text-stone-800 leading-relaxed">
                    <p className="font-medium text-lg">
                        El 2025 busca el equilibrio entre lo "cozy" y lo funcional.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">1. Bouclé (Borreguito)</h3>
                    <p>
                        Esa textura rizada blanca sigue reina del minimalismo cálido. Perfecta para butacas.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">2. Terciopelos Lavables</h3>
                    <p>
                        Lujo sin miedo. Colores estrella: <strong>Verde Oliva, Terracota y Azul Noche</strong>.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">3. Estampados Botánicos</h3>
                    <p>
                        Vuelve el maximalismo con motivos de jungla o Toile de Jouy en colores vibrantes.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mt-8 text-center">
                        <a href="tel:+34631543707" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md mt-2">
                            Pedir Muestrario
                        </a>
                    </div>
                </div>
            </article>
            <AmpFooter />
        </main>
    );
}
