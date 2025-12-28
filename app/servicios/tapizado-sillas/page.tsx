import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tapizado de Sillas y Butacas | Tapicería Majadahonda",
    description: "Tapizamos sillas de comedor, butacas y sillones orejeros. Encolado de sillas, cambio de rejilla y restauración de barniz.",
};

export default function ChairsPage() {
    return (
        <article>
            <link rel="amphtml" href="https://tapiceriamajadahonda.es/amp/servicios/tapizado-sillas" />
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-900">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/services/chair-upholstery.png"
                        alt="Sillas tapizadas"
                        fill
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight">Sillas y Butacas</h1>
                    <p className="text-xl max-w-2xl mx-auto font-light text-stone-300">
                        Renovamos tus asientos favoritos con estilo y durabilidad.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-stone-100 order-2 md:order-1">
                        <Image
                            src="/assets/images/fabric-samples-luxury.png"
                            alt="Proceso de restauración"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-primary mb-6">Detalles que Marcan la Diferencia</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Una silla no solo debe ser bonita, debe ser firme. En nuestro taller, cada silla pasa por un proceso de revisión estructural antes de poner la tela.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Encolado de patas y refuerzo de uniones.",
                                "Sustitución de rejilla vegetal o sintética.",
                                "Acabados con tachuelas (bronce, plata, envejecido) o pasamanería.",
                                "Tapizado a la inglesa o tradicional con muelles."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                    <span className="text-stone-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    );
}
