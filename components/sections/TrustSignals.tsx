import { ShieldCheck } from "lucide-react";

const BRANDS = [
    { name: "Aquaclean", description: "Tecnología Antimanchas" },
    { name: "Gancedo", description: "Telas de Alta Decoración" },
    { name: "Gaston y Daniela", description: "Textiles Exclusivos" },
    { name: "Güell Lamadrid", description: "Diseño Internacional" },
];

export function TrustSignals() {
    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="container px-4 md:px-6 mx-auto">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                    Trabajamos con las mejores editoras textiles
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 hover:opacity-100 transition-opacity">
                    {BRANDS.map((brand) => (
                        <div key={brand.name} className="flex flex-col items-center text-center group cursor-default">
                            <span className="text-2xl font-serif font-bold text-slate-800 group-hover:text-primary transition-colors">
                                {brand.name}
                            </span>
                            <span className="text-xs text-muted-foreground mt-1">{brand.description}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200">
                        <ShieldCheck className="w-5 h-5 text-secondary" />
                        <span className="text-sm font-medium text-slate-700">Garantía de Reparación de 5 Años</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
