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

            {/* Infinite Marquee Wrapper */}
            <div className="relative flex overflow-hidden">
                {/* Two sets of brands for seamless looping */}
                <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center justify-around px-8">
                    {BRANDS.map((brand, i) => (
                        <BrandItem key={i} brand={brand} />
                    ))}
                    {BRANDS.map((brand, i) => (
                        <BrandItem key={`dup-${i}`} brand={brand} />
                    ))}
                    {BRANDS.map((brand, i) => (
                        <BrandItem key={`dup2-${i}`} brand={brand} />
                    ))}
                </div>

                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
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

function BrandItem({ brand }: { brand: { name: string, description: string } }) {
    return (
        <div className="flex flex-col items-center text-center mx-8 min-w-[200px] hover:scale-105 transition-transform duration-300">
            <span className="text-3xl font-serif font-bold text-stone-300 hover:text-primary transition-colors cursor-default">
                {brand.name}
            </span>
        </div>
    );
}
