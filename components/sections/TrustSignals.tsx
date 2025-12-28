import { ShieldCheck } from "lucide-react";

const BRANDS = [
    { name: "Aquaclean", description: "Tecnología Antimanchas" },
    { name: "Gancedo", description: "Telas de Alta Decoración" },
    { name: "Gaston y Daniela", description: "Textiles Exclusivos" },
    { name: "Güell Lamadrid", description: "Diseño Internacional" },
];

export function TrustSignals() {
    return (
        <section className="py-16 bg-white border-t border-stone-100 overflow-hidden">
            <div className="container px-4 mx-auto mb-10">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Confianza Premium: Trabajamos con las mejores editoras
                </p>
            </div>

            // 8 repetitions ensuring seamless loop on ultra-wide screens and avoiding overlap
            const REPEATS = 8;
            const ALL_BRANDS = Array(REPEATS).fill(BRANDS).flat();

            function BrandItem({brand}: {brand: {name: string, description: string } }) {
    return (
            <div className="flex flex-col items-center text-center mx-0 min-w-[140px] md:min-w-[200px] shrink-0 hover:scale-105 transition-transform duration-300 snap-center">
                <span className="text-xl md:text-3xl font-serif font-bold text-stone-300 hover:text-primary transition-colors cursor-pointer select-none">
                    {brand.name}
                </span>
            </div>
            );
}

            export function TrustSignals() {
    return (
            <section className="py-16 bg-white border-t border-stone-100 overflow-hidden">
                <div className="container px-4 mx-auto mb-10">
                    <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                        Confianza Premium: Trabajamos con las mejores editoras
                    </p>
                </div>

                {/* Banner Wrapper */}
                <div className="relative flex w-full max-w-[100vw] overflow-hidden">

                    {/* 
                    Mobile: Native Horizontal Scroll (Swipeable)
                    Desktop: Infinite Marquee Animation (Auto-moving)
                    
                    Fixes:
                    - overflow-x-auto on mobile allows swipe.
                    - md:animate-marquee enables animation only on desktop.
                    - gap-12 / md:gap-32 prevents overlapping text.
                    - [&::-webkit-scrollbar]:hidden hides scrollbars for a clean look.
                */}
                    <div className="flex md:animate-marquee overflow-x-auto md:overflow-visible gap-12 md:gap-32 items-center px-4 w-full md:w-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {ALL_BRANDS.map((brand, i) => (
                            <BrandItem key={i} brand={brand} />
                        ))}
                    </div>

                    {/* Gradient Masks (Desktop Only) to avoid blocking touch on mobile */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-stone-50 rounded-full border border-stone-200 shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-medium text-stone-700">Garantía de Reparación de 5 Años</span>
                    </div>
                </div>
            </section>
            );
}
