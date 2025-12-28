import { Header } from "@/components/layout/Header";
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Blog de Tapicería y Decoración | Consejos de Expertos",
    description: "Aprende a cuidar tus muebles, descubre tendencias de telas y consejos de restauración con Tapicería Majadahonda.",
};

const ARTICLES = [
    {
        slug: "como-limpiar-mancha-vino-terciopelo",
        title: "Cómo limpiar una mancha de vino en terciopelo",
        description: "Guía de emergencia para salvar tu sofá favorito sin dañar la tela. Trucos caseros y profesionales.",
        date: "27 de Diciembre, 2025"
    },
    {
        slug: "retapizar-sofa-ikea-merece-pena",
        title: "¿Vale la pena retapizar un sofá de Ikea?",
        description: "Analizamos costes y beneficios. ¿Es mejor comprar uno nuevo o mejorar la estructura del que ya tienes?",
        date: "20 de Diciembre, 2025"
    },
    {
        slug: "tendencias-telas-2025",
        title: "Tendencias de telas 2025: Lo que se lleva",
        description: "Colores tierra, texturas bouclé y la revolución de los tejidos inteligentes sostenibles.",
        date: "15 de Diciembre, 2025"
    }
];

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <link rel="amphtml" href="https://tapiceriamajadahonda.es/amp/blog" />
            <Header />
            <div className="py-20 bg-slate-900 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Consejos de Maestro Tapicero</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Compartimos décadas de experiencia para que tus muebles luzcan siempre impecables.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {ARTICLES.map((article) => (
                        <Card key={article.slug} className="hover:shadow-lg transition-all border-slate-200">
                            <CardHeader>
                                <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                                <CardTitle className="leading-tight mb-2">
                                    <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                        {article.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription>{article.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="link" asChild className="px-0 text-secondary font-semibold">
                                    <Link href={`/blog/${article.slug}`}>Leer artículo completo &rarr;</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    );
}
