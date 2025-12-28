import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Limpiar Mancha Vino Terciopelo - AMP",
    description: "Guía de emergencia para manchas en terciopelo. Versión AMP.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/blog/como-limpiar-mancha-vino-terciopelo',
    },
};

export default function AmpArticlePage() {
    return (
        <main>
            <AmpHeader />
            <article className="container px-4 py-12 max-w-2xl mx-auto">
                <header className="mb-8 text-center">
                    <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Consejos de Limpieza</span>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4 font-serif text-primary">Cómo limpiar una mancha de vino en terciopelo</h1>
                    <p className="text-muted-foreground text-sm">27 Diciembre, 2025</p>
                </header>

                <div className="flex flex-col gap-6 text-stone-800 leading-relaxed">
                    <p className="font-medium text-lg">
                        El pánico es el peor enemigo del terciopelo. Si has derramado vino, <strong>NUNCA FROTES</strong>.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">1. Absorción Inmediata</h3>
                    <p>
                        Usa papel absorbente. Colócalo suavemente para que el líquido suba. Repite hasta que salga seco. Frotar rompe el pelo del terciopelo.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">2. El Truco del Agua con Gas</h3>
                    <p>
                        Si persiste, usa un paño con agua con gas. Las burbujas levantan la suciedad. Aplica con toques suaves (dabbing) de fuera hacia dentro.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mt-8 text-center">
                        <h4 className="text-lg font-bold text-primary mb-2">¿Prefieres no arriesgarte?</h4>
                        <a href="tel:+34631543707" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md mt-2">
                            Llamar al Taller
                        </a>
                    </div>
                </div>
            </article>
            <AmpFooter />
        </main>
    );
}
