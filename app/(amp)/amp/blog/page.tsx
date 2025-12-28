import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog de Tapicería - AMP",
    description: "Consejos de expertos en tapicería. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/blog',
    },
};

const ARTICLES = [
    {
        slug: "como-limpiar-mancha-vino-terciopelo",
        title: "Cómo limpiar una mancha de vino en terciopelo",
        description: "Guía de emergencia para salvar tu sofá favorito sin dañar la tela.",
        date: "27 de Diciembre, 2025"
    },
    {
        slug: "retapizar-sofa-ikea-merece-pena",
        title: "¿Vale la pena retapizar un sofá de Ikea?",
        description: "Analizamos costes y beneficios. ¿Comprar nuevo o restaurar?",
        date: "20 de Diciembre, 2025"
    },
    {
        slug: "tendencias-telas-2025",
        title: "Tendencias de telas 2025: Lo que se lleva",
        description: "Colores tierra, texturas bouclé y tejidos inteligentes.",
        date: "15 de Diciembre, 2025"
    }
];

export default function AmpBlogIndex() {
    return (
        <main>
            <AmpHeader />

            <div className="py-16 bg-primary text-white text-center">
                <h1 className="text-3xl font-bold mb-4 font-serif">Consejos de Maestro Tapicero</h1>
                <p className="text-stone-300 max-w-xl mx-auto px-4">
                    Compartimos décadas de experiencia para que tus muebles luzcan siempre impecables.
                </p>
            </div>

            <div className="container px-4 py-12">
                <div className="flex flex-col gap-8">
                    {ARTICLES.map((article) => (
                        <div key={article.slug} className="border border-stone-200 rounded-xl p-6 shadow-sm">
                            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{article.date}</p>
                            <h2 className="text-xl font-bold mb-3 text-primary">
                                <a href={`/amp/blog/${article.slug}`} className="hover:text-secondary">
                                    {article.title}
                                </a>
                            </h2>
                            <p className="text-stone-600 mb-4">{article.description}</p>
                            <a href={`/amp/blog/${article.slug}`} className="text-secondary font-bold text-sm uppercase tracking-wider">
                                Leer Artículo &rarr;
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <AmpFooter />
        </main>
    );
}
