import { Header } from "@/components/layout/Header";
import { ModelViewer } from "@/components/features/ModelViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Showroom 3D | Tapicería Majadahonda",
    description: "Visualiza nuestros acabados en 3D. Tecnología de vanguardia para tu restauración.",
};

export default function ShowroomPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="container px-4 py-20 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Inicio
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Showroom Virtual</h1>
                    <p className="text-xl text-muted-foreground">
                        Explora el futuro de la restauración. Visualiza cómo quedará tu mueble antes de empezar.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto border-4 border-white shadow-2xl rounded-3xl overflow-hidden">
                    <ModelViewer />
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" asChild className="text-lg px-8">
                        <a href="https://wa.me/34631543707">Solicitar Diseño 3D Previo</a>
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">Servicio disponible para presupuestos aceptados.</p>
                </div>
            </div>
        </main>
    );
}
