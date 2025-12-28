import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cabeceros a Medida en Madrid | Diseños Exclusivos",
    description: "Diseñamos y fabricamos cabeceros de cama a medida. Capitoné, lisos, con formas. Elige la tela y el diseño, nosotros lo hacemos realidad.",
};

export default function HeadboardsPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-stone-800">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/services/headboard-custom.png"
                        alt="Cabecero a medida de lujo"
                        fill
                        className="object-cover brightness-50"
                    />
                </div>
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight">Cabeceros a Medida</h1>
                    <p className="text-xl max-w-2xl mx-auto font-light text-stone-300">
                        El protagonista de tu dormitorio, diseñado exclusivamente para ti.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-6">Tú imaginas, nosotros creamos</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            No te conformes con medidas estándar. Fabricamos cabeceros que se ajustan perfectamente a tu espacio, salvando enchufes, interruptores o columnas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Capitoné Clásico", desc: "Elaborado artesanalmente pliegue a pliegue, no cosido a máquina. Un toque de lujo atemporal." },
                            { title: "Paneles Modulares", desc: "Diseños modernos con paneles rectangulares o cuadrados, ideales para paredes completas." },
                            { title: "Formas Orgánicas", desc: "Cabeceros curvos y con siluetas suaves, tendencia absoluta en decoración." }
                        ].map((item, i) => (
                            <div key={i} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
