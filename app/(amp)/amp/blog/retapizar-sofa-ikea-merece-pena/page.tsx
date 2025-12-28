import React from 'react';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "¿Retapizar sofá Ikea? - AMP",
    description: "Análisis experto: ¿Vale la pena? Versión AMP.",
    alternates: {
        canonical: 'https://tapiceriamajadahonda.es/blog/retapizar-sofa-ikea-merece-pena',
    },
};

export default function AmpArticlePage() {
    return (
        <main>
            <AmpHeader />
            <article className="container px-4 py-12 max-w-2xl mx-auto">
                <header className="mb-8 text-center">
                    <span className="text-secondary font-semibold text-xs uppercase tracking-wider">Restauración</span>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4 font-serif text-primary">¿Vale la pena retapizar un sofá de Ikea?</h1>
                    <p className="text-muted-foreground text-sm">20 Diciembre, 2025</p>
                </header>

                <div className="flex flex-col gap-6 text-stone-800 leading-relaxed">
                    <p className="font-medium text-lg">
                        ¿Tienes un Karlstad o Ektorp viejo? ¿Inviertes en tapizarlo o compras otro?
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">El Caso del "Sí": Modelos Antiguos</h3>
                    <p>
                        Ikea hacía estructuras sólidas hace 10 años. Si es madera maciza, <strong>retapizar es un SÍ</strong>. Tendrás un mueble mejor que los nuevos por el mismo precio.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">La Ventaja: Personalización</h3>
                    <p>
                        Puedes poner telas antimanchas Aquaclean que Ikea no vende. Creas una pieza única.
                    </p>

                    <h3 className="text-xl font-bold text-primary mt-4">El Caso del "No": Gama Baja</h3>
                    <p>
                        Si te costó 300€ y es hueco, no merece la pena. La tela costará más que el sofá.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mt-8 text-center">
                        <h4 className="text-lg font-bold text-primary mb-2">¿Tienes dudas con tu modelo?</h4>
                        <a href="https://wa.me/34631543707" className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-md mt-2">
                            Consultar por WhatsApp
                        </a>
                    </div>
                </div>
            </article>
            <AmpFooter />
        </main>
    );
}
