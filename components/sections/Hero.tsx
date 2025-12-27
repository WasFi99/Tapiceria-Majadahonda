import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export function Hero({
    title = <>Renovamos tus Muebles,<br className="hidden sm:block" /> <span className="text-secondary bg-clip-text">Recuperamos tus Recuerdos.</span></>,
    subtitle = "Artesanía, lujo y rapidez en Majadahonda. Especialistas en telas antimanchas Aquaclean.",
    imageSrc = "/assets/images/hero-bg.png",
    imageAlt = "Sofá de terciopelo esmeralda restaurado por Tapicería Majadahonda"
}: HeroProps) {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                    fetchPriority="high"
                    quality={85}
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="container relative z-10 px-4 text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md text-stone-100">
                    {subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl hover:shadow-2xl transition-all border-none" asChild>
                        <a href="https://wa.me/34631543707?text=Hola,%20me%20gustar%C3%ADa%20pedir%20presupuesto%20para%20tapizar..." target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-6 h-6" />
                            Pedir Presupuesto WhatsApp
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto text-primary bg-white/90 hover:bg-white border-none shadow-lg" asChild>
                        <a href="tel:+34631543707">Llamar Ahora</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
