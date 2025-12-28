import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const BeforeAfterSlider = dynamic(
    () => import("@/components/features/BeforeAfterSlider").then(mod => mod.BeforeAfterSlider),
    { ssr: false, loading: () => <div className="h-[400px] bg-stone-100 animate-pulse rounded-2xl" /> }
);

export const metadata: Metadata = {
    title: "Tapicero en Las Rozas y Európolis | Taller de Restauración | Telas Premium",
    description: "Servicio de tapicería en Las Rozas de Madrid, Las Matas y Európolis. Transformamos tus muebles con las mejores telas.",
};

export default function LasRozasPage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Header />
            <Hero
                title={<>Servicio de Recogida y Tapizado en <span className="text-secondary">Las Rozas</span> y Európolis</>}
                subtitle="Especialistas en grandes volúmenes y chalets. Recogida y entrega gratuita en todo el municipio."
            />
            <ServiceGrid />
            <section className="py-16 container mx-auto px-4 prose prose-slate lg:prose-lg max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-primary">Expertos en Grandes Proyectos Residenciales</h2>
                <p>
                    Las Rozas demanda un servicio de otro nivel. Atendemos habitualmente en <strong>La Chopera</strong>, <strong>Molino de la Hoz</strong>, <strong>Punta Galea</strong> y el <strong>Golf</strong>.
                    Disponemos de furgonetas de gran capacidad para la <strong>recogida a domicilio gratuita</strong> de sofás modulares, chaise longues y conjuntos completos de sillas de comedor.
                    Si estás redecorando tu casa cerca de <strong>Európolis</strong> o Las Matas, confía en la artesanía que recupera el valor de tus muebles de firma.
                    Ofrecemos acabados de lujo y espumas de alta densidad garantizadas.
                </p>
            </section>
            <BeforeAfterSlider />
        </main>
    );
}
