// @ts-nocheck
'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

if (typeof window !== 'undefined') {
    require('@google/model-viewer');
}

interface FurnitureViewerProps {
    modelSrc: string;
    posterSrc?: string;
}

export function FurnitureViewer({ modelSrc, posterSrc }: FurnitureViewerProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [texture, setTexture] = useState<string>('base');
    const viewerRef = useRef<HTMLElement>(null);

    const textureCache = useRef<Map<string, any>>(new Map());

    useEffect(() => {
        const viewer = viewerRef.current;
        if (!viewer) return;

        const handleLoad = () => setIsLoaded(true);
        viewer.addEventListener('load', handleLoad);

        // Preload textures
        const texturls = ['/assets/textures/linen-beige.png', '/assets/textures/velvet-green.png'];
        texturls.forEach(url => {
            const img = new Image();
            img.src = url;
        });

        return () => {
            viewer.removeEventListener('load', handleLoad);
        };
    }, []);

    const swapTexture = async (textureUrl: string, type: 'baseColorTexture' | 'normalTexture' = 'baseColorTexture') => {
        const viewer = viewerRef.current as any;
        if (!viewer || !viewer.model) return;

        try {
            const material = viewer.model.materials[0];

            let texture = textureCache.current.get(textureUrl);
            if (!texture) {
                texture = await viewer.createTexture(textureUrl);
                textureCache.current.set(textureUrl, texture);
            }

            if (type === 'baseColorTexture') {
                material.pbrMetallicRoughness.baseColorTexture.setTexture(texture);
                material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]); // Force white base color

                // Velvet material adjustments
                if (textureUrl.includes('velvet')) {
                    material.pbrMetallicRoughness.setRoughnessFactor(1); // Matte
                    material.pbrMetallicRoughness.setMetallicFactor(0); // No metal shine
                } else {
                    material.pbrMetallicRoughness.setRoughnessFactor(0.5);
                    material.pbrMetallicRoughness.setMetallicFactor(0);
                }
            } else if (type === 'normalTexture') {
                material.normalTexture.setTexture(texture);
            }
        } catch (error) {
            console.error("Error swapping texture:", error);
        }
    };

    return (
        <div className="relative w-full h-[500px] bg-stone-100 rounded-2xl overflow-hidden shadow-inner">
            <model-viewer
                ref={viewerRef}
                src={modelSrc}
                poster={posterSrc}
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                ar
                ar-scale="fixed"
                style={{ width: '100%', height: '100%' }}
            >
                <div
                    slot="poster"
                    className={`absolute inset-0 flex items-center justify-center bg-stone-100 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                    <div className="text-center">
                        <Loader2 className="w-10 h-10 animate-spin text-emerald-900 mx-auto mb-2" />
                        <p className="text-sm text-emerald-900 font-medium">Cargando Modelo 3D...</p>
                    </div>
                </div>
            </model-viewer>

            {/* Texture Controls Overlay (Glassmorphism) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 shadow-lg">
                <button
                    onClick={() => {
                        const viewer = viewerRef.current as any;
                        if (!viewer || !viewer.model) return;
                        const material = viewer.model.materials[0];
                        // Reset to default (remove base texture)
                        material.pbrMetallicRoughness.baseColorTexture.setTexture(null);
                        material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                        // Reset roughness/metallic to default for the model
                        material.pbrMetallicRoughness.setRoughnessFactor(1);
                        material.pbrMetallicRoughness.setMetallicFactor(0);
                    }}
                    className="w-8 h-8 rounded-full bg-white border-2 border-stone-300 ring-2 ring-transparent focus:ring-stone-400 transition-all"
                    title="Original"
                />
                <button
                    onClick={() => swapTexture('/assets/textures/linen-beige.png')}
                    className="w-8 h-8 rounded-full bg-[#D4C4A8] border-2 border-white ring-2 ring-transparent focus:ring-[#D4C4A8] transition-all"
                    title="Lino Beige"
                />
                <button
                    onClick={() => swapTexture('/assets/textures/velvet-green.png')}
                    className="w-8 h-8 rounded-full bg-[#1B4D3E] border-2 border-white ring-2 ring-transparent focus:ring-[#1B4D3E] transition-all"
                    title="Terciopelo Verde"
                />
            </div>
        </div>
    );
}
