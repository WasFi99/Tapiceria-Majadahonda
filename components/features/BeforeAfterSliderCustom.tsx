"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
    width?: number;
    height?: number;
}

export function BeforeAfterSliderCustom({
    beforeSrc = "/assets/images/before-after/sofa-old.webp",
    afterSrc = "/assets/images/before-after/sofa-new.webp",
    beforeAlt = "Sofá antiguo desgastado",
    afterAlt = "Sofá restaurado con tela antimanchas",
    width = 665,
    height = 665,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleClick = (e: React.MouseEvent) => {
        handleMove(e.clientX);
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-square cursor-ew-resize select-none overflow-hidden rounded-2xl"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={handleClick}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Comparador antes y después"
        >
            {/* After Image (background) */}
            <Image
                src={afterSrc}
                alt={afterAlt}
                width={width}
                height={height}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                priority
            />

            {/* Before Image (clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeSrc}
                    alt={beforeAlt}
                    width={width}
                    height={height}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-amber-600 shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
                {/* Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-amber-600">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 text-white text-sm font-medium rounded-full">
                Antes
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-white text-sm font-medium rounded-full">
                Después
            </div>
        </div>
    );
}
