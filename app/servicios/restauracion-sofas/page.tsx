import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restauración de Sofás en Majadahonda | Tapicero Experto",
    description: "Recuperamos tu sofá, cheslong o sillón. Cambio de espumas, telas antimanchas Aquaclean y refuerzo de estructuras. Recogida y entrega a domicilio.",
};

export default function SofaPage() {
    return (
        <article>
            {/* Hero Service */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/assets/images/services/sofa-restoration.png"
                    alt="Restauración de sofás de lujo"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">Restauración de Sofás</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light text-stone-200">
                        No tires tu sofá de calidad. Le devolvemos el confort y la elegancia del primer día.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">Más que cambiar la tela</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Un buen sofá es una inversión. La mayoría de los sofás modernos "low-cost" tienen estructuras de aglomerado que duran pocos años.
                            Sin embargo, tu sofá antiguo probablemente tenga un armazón de <strong>madera maciza de haya o pino</strong> que merece la pena conservar.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Sustitución de cinchas y muelles vencidos.",
                                "Añadido de espumas de Alta Densidad (HR) para recuperar firmeza.",
                                "Tratamiento anti-carcoma preventivo en estructuras de madera.",
                                "Confección a medida con doble costura de refuerzo."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                                    <span className="text-stone-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-stone-100">
                        <Image
                            src="/assets/images/services/sofa-restoration.png"
                            alt="Detalle de costura artesanal"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Aquaclean Section */}
            <section className="py-16 bg-stone-50">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Distribuidores Oficiales Aquaclean®</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                        Olvídate de las manchas. Trabajamos con la tecnología textil más avanzada que permite limpiar manchas de vino, tinta, salsa o barro simplemente con agua. Ideal para casas con niños y mascotas.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Placeholders for fabric swatches */}
                        {[
                            { color: "Neutral", img: "/assets/images/services/sample-neutral.png" },
                            { color: "Azul Profundo", img: "/assets/images/services/sample-blue.png" },
                            { color: "Mostaza", img: "/assets/images/services/sample-mustard.png" },
                            { color: "Terracotta", img: "/assets/images/services/sample-terracotta.png" }
                        ].map((sample, i) => (
                            <div key={i} className="aspect-square relative rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                                <Image
                                    src={sample.img}
                                    alt={`Muestra tela Aquaclean color ${sample.color}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center backdrop-blur-sm">
                                    {sample.color}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
