import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tapicería Exterior y Náutica | Telas Hidrófugas",
    description: "Cojines y colchonetas a medida para terraza, jardín y barcos. Espumas Dry Feel que no retienen agua y telas resistentes al sol.",
};

export default function OutdoorPage() {
    return (
        <article>
            <link rel="amphtml" href="https://tapiceriamajadahonda.es/amp/servicios/muebles-exterior" />
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-sky-900">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/services/outdoor-furniture.png"
                        alt="Mobiliario de exterior de lujo"
                        fill
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight">Muebles de Exterior</h1>
                    <p className="text-xl max-w-2xl mx-auto font-light text-sky-100">
                        Prepara tu terraza para durar todo el año.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6">El gran error de los muebles de jardín</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Muchas personas usan espumas normales para exterior. Resultado: la espuma absorbe agua como una esponja y se pudre por dentro.
                            Nosotros utilizamos exclusivamente <strong>Espuma Técnica Dry Feel</strong>, que deja pasar el agua y el aire, evitando moho y malos olores.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Telas náuticas resistentes a los rayos UV (no decoloran).",
                                "Confección con hilo de poliéster de alta tenacidad.",
                                "Cremalleras plásticas que no se oxidan con la humedad.",
                                "Fundas a medida para proteger tus muebles en invierno."
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
                            src="/assets/images/services/outdoor-furniture.png"
                            alt="Terraza de lujo con muebles tapizados"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </article>
    );
}
