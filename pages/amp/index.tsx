import Head from 'next/head';
import { AMP_CSS } from '@/components/amp/amp-styles';
import { AmpHeader } from '@/components/amp/AmpHeader';
import { AmpFooter } from '@/components/amp/AmpFooter';
import { MessageCircle, Phone, ArrowRight, Sofa, Armchair, Bed, Sun } from 'lucide-react';

// THIS IS THE KEY: Disables all client-side JavaScript
export const config = { amp: true };

const services = [
    { title: "Restauración de Sofás", description: "Espumas de alta densidad y tejidos premium.", icon: Sofa, href: "/amp/servicios/restauracion-sofas" },
    { title: "Tapizado de Sillas", description: "Desde sillas de comedor hasta butacas de diseño.", icon: Armchair, href: "/amp/servicios/tapizado-sillas" },
    { title: "Cabeceros a Medida", description: "Capitoné, liso, con tachuelas... tú eliges.", icon: Bed, href: "/amp/servicios/cabeceros-medida" },
    { title: "Muebles de Exterior", description: "Telas náuticas y espumas hidrófugas.", icon: Sun, href: "/amp/servicios/muebles-exterior" },
];

export default function AmpHomePage() {
    return (
        <>
            <Head>
                <title>Tapicería Majadahonda - Expertos en Restauración (AMP)</title>
                <meta name="description" content="Restauración de sofás y tapicería en Majadahonda. Lujo y artesanía. Versión móvil acelerada." />
                <link rel="canonical" href="https://tapiceriamajadahonda.es/" />
                <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" />
                <style amp-custom="" dangerouslySetInnerHTML={{ __html: AMP_CSS }} />
            </Head>

            <AmpHeader />

            {/* HERO SECTION */}
            <section className="relative py-20 bg-slate-900 text-center text-white">
                <div className="container px-4 flex flex-col items-center gap-6">
                    <h1 className="text-3xl font-serif font-bold">
                        Renovamos tus Muebles,<br />
                        <span className="text-secondary">Recuperamos tus Recuerdos.</span>
                    </h1>
                    <p className="text-lg max-w-xl mx-auto text-stone-100">
                        Artesanía, lujo y rapidez en Majadahonda. Especialistas en telas antimanchas Aquaclean.
                    </p>

                    <div className="flex flex-col gap-4 w-full max-w-xs sm:flex-row justify-center mt-4">
                        <a href="https://wa.me/34631543707" className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 px-6 rounded-md font-bold shadow-lg uppercase tracking-wide">
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp
                        </a>
                        <a href="tel:+34631543707" className="flex items-center justify-center gap-2 bg-white text-primary py-4 px-6 rounded-md font-bold shadow-lg uppercase tracking-wide border border-stone-200">
                            <Phone className="w-5 h-5" />
                            Llamar
                        </a>
                    </div>
                </div>
            </section>

            {/* TRUST SIGNALS */}
            <section className="py-8 bg-stone-50 border-b border-stone-100">
                <div className="container text-center">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">Confianza Premium: Trabajamos con las mejores editoras</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-70">
                        <span className="text-xl font-serif font-bold text-stone-400">Aquaclean</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Gancedo</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Gaston y Daniela</span>
                        <span className="text-xl font-serif font-bold text-stone-400">Güell Lamadrid</span>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                            Nuestros Servicios Artesanales
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Combinamos técnicas tradicionales con materiales de última generación para dar una segunda vida a tus muebles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <a key={index} href={service.href} className="block p-6 bg-white rounded-xl shadow-md border border-stone-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground mb-4">{service.description}</p>
                                        <span className="text-primary font-bold text-sm uppercase tracking-wider">
                                            Ver Detalles <span className="text-secondary">→</span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white text-center">
                <div className="container px-4">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">¿Tu sofá necesita una segunda vida?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                        No lo tires. Restaura la calidad original con nuestras espumas de alta densidad y tejidos de lujo.
                    </p>
                    <a href="tel:+34631543707" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl">
                        Pedir Presupuesto Gratuito <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <AmpFooter />
        </>
    );
}
