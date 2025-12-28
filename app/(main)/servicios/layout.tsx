import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-1">
                {children}
            </main>

            {/* Simple CTA Footer for Service Pages */}
            <footer className="bg-stone-900 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold mb-4 font-serif">¿Listo para transformar tus muebles?</h3>
                    <p className="mb-8 text-stone-400">Pide tu presupuesto sin compromiso hoy mismo.</p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none" asChild>
                            <a href="https://wa.me/34631543707" target="_blank" rel="noopener noreferrer">
                                WhatsApp Directo
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-primary bg-white hover:bg-stone-100 border-none" asChild>
                            <a href="tel:+34631543707">
                                <Phone className="mr-2 w-4 h-4" /> 631 543 707
                            </a>
                        </Button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
