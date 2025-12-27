import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tapicero en Majadahonda | Presupuesto Gratis | Recogida a Domicilio",
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
                <h2 className="text-3xl font-bold text-primary">Tu Tapicería Local en Calle la Flauta Mágica</h2>
                <p>
                    Somos tus vecinos. Nuestro taller en el corazón de <strong>Majadahonda</strong> (28222) nos permite ofrecer una respuesta inmediata a cualquier necesidad de restauración.
                    Si vives por la <strong>Avenida de España</strong>, el <strong>Monte del Pilar</strong> o la zona del <strong>Gran Plaza 2</strong>, podemos recoger tu tresillo o butaca en el mismo día.
                    Sin intermediarios ni costes extra de desplazamiento. Ven a vernos o te visitamos nosotros.
                    Especialistas en la recuperación de muebles antiguos y modernos con tejidos antimanchas de última generación.
                </p>
            </section>
            <BeforeAfterSlider />
        </main>
    );
}
