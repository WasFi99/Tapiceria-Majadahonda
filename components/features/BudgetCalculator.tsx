"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Sofa, Armchair, Bed, Camera, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FURNITURE_TYPES = [
    { id: "sofa", label: "Sofá", icon: Sofa },
    { id: "silla", label: "Silla/Butaca", icon: Armchair },
    { id: "cabecero", label: "Cabecero", icon: Bed },
    { id: "otro", label: "Otro", icon: Sofa },
];

const CONDITIONS = [
    { id: "cariño", label: "Necesita cariño (Desgate superficial)" },
    { id: "restauracion", label: "Restauración completa (Relleno+Tela)" },
    { id: "muy_danado", label: "Muy dañado (Estructura/Muelles)" },
];

const FABRICS = [
    { id: "terciopelo", label: "Terciopelo (Lujo)" },
    { id: "antimanchas", label: "Aquaclean (Antimanchas)" },
    { id: "lino", label: "Lino (Natural)" },
    { id: "piel", label: "Piel / Polipiel" },
];

export function BudgetCalculator() {
    const [step, setStep] = React.useState(1);
    const [data, setData] = React.useState({
        type: "",
        condition: "",
        fabric: "",
        hasPhoto: false,
    });

    const handleNext = () => setStep((p) => p + 1);
    const handleBack = () => setStep((p) => p - 1);

    const getWhatsAppLink = () => {
        const text = `Hola Tapicería Majadahonda. Quiero renovar un mueble:
- Tipo: ${FURNITURE_TYPES.find(f => f.id === data.type)?.label || 'Otro'}
- Estado: ${CONDITIONS.find(c => c.id === data.condition)?.label || 'No especificado'}
- Preferencia Tela: ${FABRICS.find(f => f.id === data.fabric)?.label || 'A asesorar'}
${data.hasPhoto ? '(Tengo la foto lista)' : ''}`;

        return `https://wa.me/34631543707?text=${encodeURIComponent(text)}`;
    };

    return (
        <section className="py-20 bg-slate-50" id="presupuesto">
            <div className="container px-4 mx-auto max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Asistente de Restauración</h2>
                    <p className="text-muted-foreground">Diagnóstico preliminar y cita con experto en 1 minuto.</p>
                </div>

                <Card className="border-slate-200 shadow-xl overflow-hidden relative min-h-[400px]">
                    <CardContent className="p-6 md:p-10">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <Label className="text-lg font-semibold">1. ¿Qué mueble quieres renovar?</Label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {FURNITURE_TYPES.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setData({ ...data, type: item.id })}
                                                className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${data.type === item.id
                                                    ? "border-secondary bg-secondary/5 text-secondary"
                                                    : "border-slate-100 hover:border-slate-200 bg-white"
                                                    }`}
                                            >
                                                <item.icon className="w-8 h-8 mb-3" />
                                                <span className="font-medium">{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-end pt-4">
                                        <Button onClick={handleNext} disabled={!data.type} className="w-full sm:w-auto gap-2">
                                            Siguiente <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <Label className="text-lg font-semibold">2. ¿En qué estado se encuentra?</Label>
                                    <RadioGroup value={data.condition} onValueChange={(v: string) => setData({ ...data, condition: v })}>
                                        {CONDITIONS.map((c) => (
                                            <div key={c.id} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-slate-100 hover:border-secondary/50 cursor-pointer transition-colors">
                                                <RadioGroupItem value={c.id} id={c.id} />
                                                <Label htmlFor={c.id} className="flex-1 cursor-pointer">{c.label}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <div className="flex justify-between pt-4">
                                        <Button variant="ghost" onClick={handleBack}>Atrás</Button>
                                        <Button onClick={handleNext} disabled={!data.condition} className="gap-2">
                                            Siguiente <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <Label className="text-lg font-semibold">3. ¿Qué acabado buscas?</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {FABRICS.map((f) => (
                                            <button
                                                key={f.id}
                                                onClick={() => setData({ ...data, fabric: f.id })}
                                                className={`p-4 rounded-lg border text-left transition-all ${data.fabric === f.id
                                                    ? "border-secondary bg-secondary/10 text-secondary-foreground font-medium"
                                                    : "border-slate-100 hover:border-slate-200 bg-white"
                                                    }`}
                                            >
                                                {f.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <Button variant="ghost" onClick={handleBack}>Atrás</Button>
                                        <Button onClick={handleNext} disabled={!data.fabric} className="gap-2">
                                            Siguiente <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <Label className="text-lg font-semibold">4. Foto del mueble (Crucial)</Label>
                                    <div className="border-2 border-dashed border-red-200 rounded-xl p-8 text-center bg-red-50/50 hover:bg-red-50 transition-colors cursor-pointer group" onClick={() => setData({ ...data, hasPhoto: true })}>
                                        <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                            <Camera className="w-6 h-6 text-red-400" />
                                        </div>
                                        <p className="text-sm text-slate-600 mb-4 font-medium">
                                            Para un diagnóstico preciso, necesitamos ver la pieza.
                                            <br />
                                            <span className="text-xs text-muted-foreground font-normal">Confirma que tienes la foto lista para enviarla al Maestro Tapicero.</span>
                                        </p>
                                        <Button variant="outline" className={`border-red-200 ${data.hasPhoto ? 'bg-red-100 text-red-800' : 'text-red-700'}`}>
                                            {data.hasPhoto ? "¡Foto Confirmada!" : "Tengo la foto lista"}
                                        </Button>
                                    </div>
                                    <div className="flex justify-between pt-4">
                                        <Button variant="ghost" onClick={handleBack}>Atrás</Button>
                                        <Button onClick={handleNext} disabled={!data.hasPhoto} className="gap-2 bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200">
                                            Ver Análisis <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="bg-green-50 p-6 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 animate-bounce">
                                        <MessageCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold">¡Gracias! Datos Recibidos</h3>
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-left">
                                        <p className="text-sm text-slate-700 mb-2"><strong>Estado:</strong> <span className="text-amber-600">Revisión Técnica en Curso</span></p>
                                        <p className="text-sm text-slate-600">
                                            Hemos analizado tus datos. Un técnico maestro está esperando tu foto para calcular los metraje de tela exactos.
                                            Te enviaremos el presupuesto cerrado por WhatsApp en menos de 15 minutos.
                                        </p>
                                    </div>

                                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 shadow-lg h-14 text-lg animate-pulse" asChild>
                                        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="w-6 h-6" />
                                            Completar Valoración en WhatsApp
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground">
                                        Volver y editar
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                        <motion.div
                            className="h-full bg-secondary"
                            initial={{ width: "25%" }}
                            animate={{ width: `${step * 20}%` }}
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
