"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    phone: z.string().min(9, "Teléfono inválido"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "Cuéntanos un poco más..."),
});

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar el mensaje");
            }

            setIsSuccess(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error al enviar el mensaje");
        } finally {
            setIsSubmitting(false);
        }
    }

    if (isSuccess) {
        return (
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-2">¡Mensaje Enviado!</h3>
                <p className="text-emerald-700">
                    Gracias {form.getValues().name}. Hemos recibido tu consulta.
                    <br />
                    Te contactaremos en menos de 24h.
                </p>
                <Button variant="outline" className="mt-6 border-emerald-200 text-emerald-700 hover:bg-emerald-100" onClick={() => setIsSuccess(false)}>
                    Enviar otro mensaje
                </Button>
            </div>
        );
    }

    return (
        <section className="py-24 bg-stone-900 text-stone-100" id="contacto">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif font-bold text-white mb-6">Hablemos de tu Proyecto</h2>
                        <p className="text-lg text-stone-300 mb-8">
                            ¿Tienes dudas? Déjanos un mensaje y un experto te asesorará sin compromiso.
                            También puedes adjuntar fotos por WhatsApp si lo prefieres.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                                <div className="w-12 h-12 bg-primary rounded-full shadow-sm flex items-center justify-center text-secondary font-bold text-xl">1</div>
                                <p className="font-medium text-stone-200">Asesoramiento gratuito</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                                <div className="w-12 h-12 bg-primary rounded-full shadow-sm flex items-center justify-center text-secondary font-bold text-xl">2</div>
                                <p className="font-medium text-stone-200">Presupuesto en 24h</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-stone-800/50 rounded-xl border border-stone-800">
                                <div className="w-12 h-12 bg-primary rounded-full shadow-sm flex items-center justify-center text-secondary font-bold text-xl">3</div>
                                <p className="font-medium text-stone-200">Recogida y entrega a domicilio</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-2xl border border-stone-800/50 text-stone-900">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Nombre</label>
                                <Input {...form.register("name")} placeholder="Tu nombre" className="bg-stone-50 border-stone-200" />
                                {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Teléfono</label>
                                    <Input {...form.register("phone")} placeholder="600 000 000" className="bg-stone-50 border-stone-200" />
                                    {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Email</label>
                                    <Input {...form.register("email")} placeholder="tu@email.com" className="bg-stone-50 border-stone-200" type="email" />
                                    {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Mensaje</label>
                                <Textarea {...form.register("message")} placeholder="¿Qué necesitas tapizar?" className="bg-stone-50 border-stone-200 min-h-[120px]" />
                                {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                    {error}
                                </div>
                            )}

                            <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white" disabled={isSubmitting}>
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-2" /> Enviar Consulta</>}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
