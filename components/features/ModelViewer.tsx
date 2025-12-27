// @ts-nocheck
"use client";

import { useEffect, useState } from "react";

export function ModelViewer() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        import("@google/model-viewer").catch(console.error);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full h-[500px] bg-stone-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
                <div className="animate-pulse bg-stone-200 w-full h-full" />
            </div>
        );
    }

    return (
        <div className="w-full h-[500px] bg-stone-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
            <model-viewer
                src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                poster="/assets/images/hero-bg.png" // Fallback
                alt="Silla de diseño en 3D"
                camera-controls
                auto-rotate
                ar
                style={{ width: "100%", height: "100%" }}
            >
                <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-lg text-xs font-mono">
                    Presiona y arrastra para rotar
                </div>
            </model-viewer>
        </div>
    );
}
