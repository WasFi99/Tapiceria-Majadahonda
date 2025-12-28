import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { AmpImage } from '@/components/amp/AmpImage';
import { CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tapizado de Sillas - AMP",
    description: "Renovamos tus sillas y butacas. Encolado y tapizado artesanal. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/servicios/tapizado-sillas',
    },
};

export default function AmpChairsPage() {
    return (
        <main>
            <AmpHeader />

            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0">
                    <AmpImage
                        src="/assets/images/services/chair-upholstery.png"
                        alt="Sillas tapizadas"
                        width={1200}
                        height={800}
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Sillas y Butacas</h1>
                    <p className="text-lg md:text-xl font-light text-stone-300">
                        Renovamos tus asientos favoritos con estilo y durabilidad.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container px-4">
                    <h2 className="text-2xl font-bold text-primary mb-6">Detalles que Marcan la Diferencia</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        Una silla no solo debe ser bonita, debe ser firme. Revisamos la estructura antes de poner la tela.
                    </p>

                    <ul className="flex flex-col gap-4 mb-8">
                        {[
                            "Encolado de patas y refuerzo.",
                            "Sustitución de rejilla.",
                            "Acabados con tachuelas o pasamanería.",
                            "Tapizado tradicional."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                                <span className="text-stone-700">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg mb-8">
                        <AmpImage
                            src="/assets/images/fabric-samples-luxury.png"
                            alt="Proceso restauración"
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
