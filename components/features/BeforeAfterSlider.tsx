"use client";

import { BeforeAfterSliderCustom } from "./BeforeAfterSliderCustom";

export function BeforeAfterSlider() {
    return (
        <section className="py-20 bg-stone-50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-primary">
                            La Magia de la Restauración
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Desliza para ver la transformación. No solo cambiamos la tela; recuperamos la estructura, rellenamos las espumas y devolvemos el confort original.
                        </p>
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                            <h3 className="font-semibold text-xl mb-2">¿Por qué restaurar?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-secondary rounded-full" />
                                    <span>Estructuras de madera maciza (mejores que las actuales).</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-secondary rounded-full" />
                                    <span>Diseño sentimental irreemplazable.</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-secondary rounded-full" />
                                    <span>Sostenibilidad y consumo responsable.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
                        <BeforeAfterSliderCustom
                            beforeSrc="/assets/images/before-after/sofa-old.webp"
                            afterSrc="/assets/images/before-after/sofa-new.webp"
                            beforeAlt="Sofá antiguo desgastado"
                            afterAlt="Sofá restaurado con tela antimanchas"
                            width={665}
                            height={665}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
