import { Header } from "@/components/layout/Header";
import { FurnitureViewer } from "@/components/features/FurnitureViewer";
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
        <main className="min-h-screen bg-stone-50 font-serif">
            <Header />
            <div className="container px-4 py-20 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <Link href="/" className="inline-flex items-center text-sm text-stone-500 hover:text-secondary mb-8 font-sans transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al Inicio
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary tracking-tight">
                        Configurador <span className="text-secondary italic">Luxury 2025</span>
                    </h1>

                    <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-sans font-light">
                        Experimenta con texturas de terciopelo y lino en tiempo real.
                        La tecnología AR te permite ver la pieza en tu propio salón.
                    </p>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100">
                        <FurnitureViewer
                            modelSrc="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                            posterSrc="/assets/images/hero-bg.png"
                        />
                    </div>

                    <div className="mt-12">
                        <Button size="lg" asChild className="text-lg px-8 py-6 h-auto bg-primary text-white hover:bg-primary/90 rounded-full shadow-xl">
                            <a href="https://wa.me/34631543707">
                                Solicitar Presupuesto del Diseño
                            </a>
                        </Button>
                        <p className="mt-4 text-sm text-stone-400 font-sans">
                            *El modelo 3D es una representación aproximada.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
