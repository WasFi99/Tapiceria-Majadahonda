import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { AmpImage } from '@/components/amp/AmpImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cabeceros a Medida - AMP",
    description: "Diseñamos y fabricamos cabeceros exclusivos. Versión móvil acelerada.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/servicios/cabeceros-medida',
    },
};

export default function AmpHeadboardsPage() {
    return (
        <main>
            <AmpHeader />

            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-800">
                <div className="absolute inset-0">
                    <AmpImage
                        src="/assets/images/services/headboard-custom.png"
                        alt="Cabecero a medida"
                        width={1200}
                        height={800}
                        layout="fill"
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Cabeceros a Medida</h1>
                    <p className="text-lg md:text-xl font-light text-stone-300">
                        El protagonista de tu dormitorio, diseñado para ti.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container px-4 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-6">Tú imaginas, nosotros creamos</h2>
                    <p className="text-muted-foreground mb-8 text-left">
                        Fabricamos cabeceros que se ajustan perfectamente a tu espacio, salvando enchufes e interruptores.
                    </p>

                    <div className="flex flex-col gap-6">
                        {[
                            { title: "Capitoné Clásico", desc: "Elaborado artesanalmente pliegue a pliegue. Lujo atemporal." },
                            { title: "Paneles Modulares", desc: "Diseños modernos geométricos para paredes completas." },
                            { title: "Formas Orgánicas", desc: "Siluetas curvas y suaves, tendencia actual." }
                        ].map((item, i) => (
                            <div key={i} className="bg-stone-50 p-6 rounded-xl border border-stone-100 text-left">
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AmpFooter />
        </main>
    );
}
