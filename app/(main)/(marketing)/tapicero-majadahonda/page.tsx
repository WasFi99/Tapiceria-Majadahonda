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
    title: "Tapicería en Majadahonda | Restauración de Muebles y Chill Out",
    description: "Tapicería experta en Majadahonda. Restauramos sofás cerca de Gran Plaza 2 y El Carralero. Telas Aquaclean y acabados de lujo.",
};

export default function MajadahondaPage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Header />
            <Hero
                title={<>Taller de Tapicería en el Centro de <span className="text-secondary">Majadahonda</span></>}
                subtitle="Ubicados en C. la Flauta Mágica, cerca de la Avenida de España. Servicio ultrarrápido para residentes."
            />
            <ServiceGrid />
            <section className="py-16 container mx-auto px-4 prose prose-slate lg:prose-lg max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-primary font-serif mb-6">Tu Tapicería Local en Calle la Flauta Mágica</h2>
                <p className="text-lg leading-relaxed mb-6">
                    Somos tus vecinos. Nuestro taller en el corazón de <strong>Majadahonda</strong> (28222) nos permite ofrecer una respuesta inmediata a cualquier necesidad de restauración.
                    Si vives por la <strong>Avenida de España</strong>, el <strong>Monte del Pilar</strong> o la zona del <strong>Gran Plaza 2</strong>, podemos recoger tu tresillo o butaca en el mismo día.
                </p>
                <p className="text-lg leading-relaxed">
                    Apostamos por el <em>&quot;Lujo Sostenible&quot;</em>: no tires ese sofá de calidad. Permítenos <strong>recuperar tus recuerdos</strong> con telas antimanchas de última generación y
                    un acabado artesanal que revaloriza tu hogar.
                </p>
            </section>
            <BeforeAfterSlider />
        </main>
    );
}
