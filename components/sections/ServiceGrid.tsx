import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Armchair, Bed, Sofa, Sun } from "lucide-react";

import Link from "next/link";

const services = [
    {
        title: "Restauración de Sofás",
        description: "Recuperamos la comodidad y estética de tu sofá antiguo con espumas de alta densidad y tejidos premium.",
        icon: Sofa,
        color: "bg-emerald-50 text-emerald-900",
        href: "/servicios/restauracion-sofas"
    },
    {
        title: "Tapizado de Sillas",
        description: "Desde sillas de comedor hasta butacas de diseño. Refuerzo de estructuras y encolado incluido.",
        icon: Armchair,
        color: "bg-stone-100 text-stone-900",
        href: "/servicios/tapizado-sillas"
    },
    {
        title: "Cabeceros a Medida",
        description: "Diseñamos el cabecero de tus sueños. Capitoné, liso, con tachuelas... tú eliges el estilo.",
        icon: Bed,
        color: "bg-amber-50 text-amber-900",
        href: "/servicios/cabeceros-medida"
    },
    {
        title: "Muebles de Exterior",
        description: "Telas náuticas y espumas hidrófugas para que tus muebles de terraza resistan el sol y la lluvia.",
        icon: Sun,
        color: "bg-sky-50 text-sky-900",
        href: "/servicios/muebles-exterior"
    },
];

export function ServiceGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
                        Nuestros Servicios Artesanales
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Combinamos técnicas tradicionales con materiales de última generación para dar una segunda vida a tus muebles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href} className="block group">
                            <Card className="h-full hover:shadow-xl transition-all duration-300 border-none bg-card/50 hover:bg-card">
                                <CardHeader className="relative overflow-hidden pb-0">
                                    <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed mb-4">
                                        {service.description}
                                    </CardDescription>
                                    <div className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Ver Detalles
                                        <span className="text-secondary">→</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
