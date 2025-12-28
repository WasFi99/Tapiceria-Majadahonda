import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cómo limpiar una mancha de vino en terciopelo | Tapicería Majadahonda",
    description: "Pasos urgentes para salvar tu sofá de terciopelo. No frotes. Usa papel absorbente y agua con gas. Consejos profesionales.",
};

export default function ArticlePage() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <Header />
            <article className="container mx-auto px-4 py-20 max-w-3xl">
                <header className="mb-10 text-center">
                    <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Consejos de Limpieza</span>
                    <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-slate-900">Cómo limpiar una mancha de vino en terciopelo (Guía de Emergencia)</h1>
                    <p className="text-muted-foreground">Por Maestro Tapicero | 27 Diciembre, 2025</p>
                </header>

                <div className="prose prose-slate prose-lg mx-auto">
                    <p className="lead">
                        El pánico es el peor enemigo del terciopelo. Si acabas de derramar vino tinto sobre tu sofá favorito, respira hondo y sigue estos pasos. Lo más importante: <strong>NUNCA FROTES</strong>.
                    </p>

                    <h3>1. Absorción Inmediata (La Regla de Oro)</h3>
                    <p>
                        Coge papel de cocina absorbente o un paño blanco limpio. Colócalo suavemente sobre la mancha para que el líquido suba por capilaridad. Repite esto tantas veces como sea necesario hasta que el papel salga casi seco. Si frotas, romperás el pelo del terciopelo y la mancha penetrará en la base.
                    </p>

                    <h3>2. El Truco del Agua con Gas</h3>
                    <p>
                        Si la mancha persiste, humedece ligeramente un paño limpio con agua con gas. Las burbujas ayudan a levantar la suciedad. Aplica con toques suaves (dabbing), de fuera hacia dentro para no extender la mancha.
                    </p>

                    <h3>3. ¿Cuándo llamar a un profesional?</h3>
                    <p>
                        Si el terciopelo es de seda o algodón 100% (fibras naturales delicadas), los remedios caseros son arriesgados. Si la mancha se ha secado o es muy grande, no te la juegues.
                    </p>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 not-prose my-10 text-center">
                        <h4 className="text-xl font-bold text-amber-900 mb-2">¿Prefieres no arriesgarte?</h4>
                        <p className="mb-4 text-amber-800">Recogemos tu funda o mueble en Majadahonda y te lo devolvemos como nuevo.</p>
                        <Button asChild>
                            <Link href="/#presupuesto">Pedir Presupuesto de Limpieza</Link>
                        </Button>
                    </div>
                </div>
            </article>
        </main>
    );
}
