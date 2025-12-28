"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sofa, Armchair, Bed, Camera, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

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
        photoPreview: "",
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

    // CSS transition classes for step animations
    const stepClass = "transition-all duration-300 ease-out";

    return (
        <section className="py-20 bg-slate-50" id="presupuesto">
            <div className="container px-4 mx-auto max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Asistente de Restauración</h2>
                    <p className="text-muted-foreground">Diagnóstico preliminar y cita con experto en 1 minuto.</p>
                </div>

                <Card className="border-slate-200 shadow-xl overflow-hidden relative min-h-[400px]">
                    <CardContent className="p-6 md:p-10">
                        {/* Step 1 */}
                        <div className={`${stepClass} ${step === 1 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                            <div className="space-y-6">
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
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className={`${stepClass} ${step === 2 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                            <div className="space-y-6">
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
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className={`${stepClass} ${step === 3 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                            <div className="space-y-6">
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
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className={`${stepClass} ${step === 4 ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}>
                            <div className="space-y-6">
                                <Label className="text-lg font-semibold">4. Foto del mueble (Crucial)</Label>
                                <div
                                    className="border-2 border-dashed border-red-200 rounded-xl p-8 text-center bg-red-50/50 hover:bg-red-50 transition-colors cursor-pointer group relative overflow-hidden"
                                    onClick={() => document.getElementById('photo-upload')?.click()}
                                >
                                    <input
                                        type="file"
                                        id="photo-upload"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                const url = URL.createObjectURL(file);
                                                setData({ ...data, hasPhoto: true, photoPreview: url });
                                            }
                                        }}
                                    />

                                    {data.photoPreview ? (
                                        <div className="absolute inset-0 z-10">
                                            <img src={data.photoPreview} alt="Preview" className="w-full h-full object-cover opacity-50" />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                <p className="text-white font-bold text-lg flex items-center gap-2">
                                                    <CheckCircle2 className="w-6 h-6" /> Foto Cargada
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mx-auto w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform relative z-0">
                                                <Camera className="w-6 h-6 text-red-400" />
                                            </div>
                                            <p className="text-sm text-slate-600 mb-4 font-medium relative z-0">
                                                Pulsa aquí para subir una foto de tu galería.
                                                <br />
                                                <span className="text-xs text-muted-foreground font-normal">Ayudará al tapicero a darte un precio exacto.</span>
                                            </p>
                                        </>
                                    )}

                                    <Button variant="outline" className={`relative z-20 border-red-200 ${data.hasPhoto ? 'bg-red-100 text-red-800' : 'text-red-700'}`}>
                                        {data.hasPhoto ? "Cambiar Foto" : "Subir Foto"}
                                    </Button>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={handleBack}>Atrás</Button>
                                    <Button
                                        className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg h-12"
                                        asChild
                                    >
                                        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="w-5 h-5" />
                                            Enviar a WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>

                    {/* Progress bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
                        <div
                            className="h-full bg-secondary transition-all duration-300 ease-out"
                            style={{ width: `${step * 25}%` }}
                        />
                    </div>
                </Card>
            </div>
        </section>
    );
}
