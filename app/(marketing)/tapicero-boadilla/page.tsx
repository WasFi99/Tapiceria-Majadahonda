import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { BeforeAfterSlider } from "@/components/features/BeforeAfterSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tapicería en Boadilla del Monte | Restauración de Muebles Exclusivos",
    description: "Servicio premium de tapicería en Boadilla, Montepríncipe y Las Lomas. Restauramos muebles de firma y antigüedades. Recogida en urbanizaciones.",
};

export default function BoadillaPage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Header />
            <Hero
                title={<>Tapicería de Alta Gama en <span className="text-secondary">Boadilla del Monte</span></>}
                subtitle="Servicio exclusivo para Las Lomas, Montepríncipe y El Pastel. Restauramos sus muebles con la discreción y excelencia que su hogar merece."
            />
            <ServiceGrid />
            <section className="py-16 container mx-auto px-4 prose prose-slate lg:prose-lg max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-primary font-serif mb-6">Artesanía para el Hogar Exigente</h2>
                <p className="text-lg leading-relaxed mb-6">
                    En <strong>Boadilla del Monte</strong>, entendemos que cada mueble cuenta una historia.
                    Nos especializamos en trabajar con piezas de alto valor en urbanizaciones como <strong>Montepríncipe</strong> y <strong>Las Lomas</strong>,
                    ofreciendo un servicio de <em>&quot;Lujo Sostenible&quot;</em>.
                </p>
                <p className="text-lg leading-relaxed">
                    No solo cambiamos una tela; le ayudamos a <strong>recuperar recuerdos</strong>.
                    Desde butacas familiares hasta sofás de diseño italiano, aplicamos técnicas tradicionales con tejidos de firmas internacionales
                    (Gancedo, Romo, Güell Lamadrid) para asegurar un acabado de revista.
                </p>
            </section>
            <BeforeAfterSlider />
        </main>
    );
}
