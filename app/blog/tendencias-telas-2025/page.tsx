import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tendencias de Telas 2025 | Decoración y Tapicería",
    description: "Descubre qué tejidos se llevan este año. Bouclé, terciopelos lavables y colores tierra. Transforma tu hogar.",
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Header />
            <article className="container mx-auto px-4 py-20 max-w-3xl">
                <header className="mb-10 text-center">
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Tendencias</span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">Tendencias de Telas 2025: Lo que se lleva</h1>
                    <p className="text-muted-foreground">Por Equipo de Diseño | 15 Diciembre, 2025</p>
                </header>

                <div className="prose prose-slate prose-lg mx-auto">
                    <p className="lead">
                        Este 2025, la tapicería busca el equilibrio entre la estética "cozy" (acogedora) y la funcionalidad extrema. Ya no queremos sofás de mirame-y-no-me-toques.
                    </p>

                    <h3>1. El Reinado del Bouclé (Borreguito) continúa</h3>
                    <p>
                        Esa textura rizada y suave en tonos blancos y crudos sigue siendo la reina del minimalismo cálido. Es perfecta para butacas de acento o cabeceros curvos. Aporta dimensión sin añadir "ruido" visual.
                    </p>

                    <h3>2. Terciopelos de "Alto Rendimiento"</h3>
                    <p>
                        El terciopelo ya no es algo antiguo. Las nuevas colecciones de micro-terciopelo lavable permiten tener ese look lujoso sin miedo a las manchas. Los colores estrella: <strong>Verde Oliva, Terracota y Azul Noche</strong>.
                    </p>

                    <h3>3. Estampados Botánicos y Toile de Jouy</h3>
                    <p>
                        Para los más atrevidos, vuelve el maximalismo. Butacas forradas con estampados de jungla o motivos pastoriles clásicos (Toile de Jouy) pero en colores modernos y vibrantes.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 not-prose my-10 text-center">
                        <h4 className="text-xl font-bold text-stone-900 mb-2">¿Quieres ver estas telas en persona?</h4>
                        <p className="mb-4 text-stone-600">Ven a nuestro taller en Majadahonda o te llevamos los muestrarios a casa.</p>
                        <Button asChild>
                            <Link href="/#presupuesto">Solicitar Muestrario</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </main>
    );
}
