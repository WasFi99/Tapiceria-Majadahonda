import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "¿Merece la pena retapizar un sofá de Ikea? | Tapicería Majadahonda",
    description: "Análisis de costes. Cuándo compensa restaurar un mueble de Ikea y cuándo es mejor comprar uno nuevo. Opinión experta.",
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <link rel="amphtml" href="https://tapiceriamajadahonda.es/amp/blog/retapizar-sofa-ikea-merece-pena" />
            <Header />
            <article className="container mx-auto px-4 py-20 max-w-3xl">
                <header className="mb-10 text-center">
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Restauración Inteligente</span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">¿Vale la pena retapizar un sofá de Ikea?</h1>
                    <p className="text-muted-foreground">Por Maestro Tapicero | 20 Diciembre, 2025</p>
                </header>

                <div className="prose prose-slate prose-lg mx-auto">
                    <p className="lead">
                        Es la pregunta número 1 que recibimos en el taller. Tienes un Karlstad o un Ektorp al que le tienes cariño, pero la tela está destrozada. ¿Inviertes en tapizarlo o vas a la tienda sueca a por otro?
                    </p>

                    <h3>El Caso del "Sí": Modelos Descatalogados</h3>
                    <p>
                        Ikea solía fabricar estructuras muy sólidas hace 10-15 años (como los antiguos Karlstad de madera maciza). Esos sofás son mejores que la mayoría de los que venden hoy por menos de 600€. Si la estructura está bien y las espumas son decentes, <strong>retapizar es un SÍ rotundo</strong>. Obtendrás un sofá a medida con una tela de calidad muy superior a la original.
                    </p>

                    <h3>La Ventaja de la Personalización</h3>
                    <p>
                        Al tapizar, puedes elegir tejidos antimanchas (como Aquaclean) que Ikea no ofrece, o colores específicos para tu salón. Conviertes un sofá de serie en una pieza única de diseño.
                    </p>

                    <h3>El Caso del "No": Gama Baja Actual</h3>
                    <p>
                        Si tienes un sofá de la gama más económica (estructuras de cartón prensado y espumas de baja densidad) y te costó 300€, la mano de obra y la tela de calidad superarán el coste del mueble nuevo. En ese caso, honestamente, recomendamos comprar uno nuevo.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose my-10 text-center">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">¿Tienes dudas con tu modelo?</h4>
                        <p className="mb-4 text-slate-600">Envíanos una foto y te decimos sinceramente si merece la pena.</p>
                        <Button asChild>
                            <a href="https://wa.me/34631543707">Consultar por WhatsApp</a>
                        </Button>
                    </div>
                </div>
            </article>
        </main>
    );
}
