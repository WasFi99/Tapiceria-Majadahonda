import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { AmpImage } from '@/components/amp/AmpImage';
import { CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Restauración de Sofás - AMP",
    description: "Recuperamos tu sofá con técnicas artesanales. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/servicios/restauracion-sofas',
    },
};

export default function AmpSofaPage() {
    return (
        <main>
            <AmpHeader />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <AmpImage
                        src="/assets/images/services/sofa-restoration.png"
                        alt="Restauración de sofás"
                        width={1200}
                        height={800}
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Restauración de Sofás</h1>
                    <p className="text-lg md:text-xl font-light text-stone-200">
                        Devolvemos el confort y la elegancia a tu sofá.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-white">
                <div className="container px-4">
                    <h2 className="text-2xl font-bold text-primary mb-6">Más que cambiar la tela</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Un buen sofá es una inversión. Restauramos la estructura, cambiamos las cinchas y renovamos las espumas para que dure otros 20 años.
                    </p>

                    <ul className="flex flex-col gap-4 mb-8">
                        {[
                            "Sustitución de cinchas y muelles.",
                            "Espumas de Alta Densidad (HR).",
                            "Tratamiento anti-carcoma.",
                            "Costura doble de refuerzo."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span className="text-stone-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Image */}
                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-8">
                        <AmpImage
                            src="/assets/images/services/sofa-restoration.png"
                            alt="Detalle costura"
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
