"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function WhatsAppFAB() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a small delay to draw attention
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const message = encodeURIComponent("Hola, vi su web tapiceriamajadahonda.es y me gustaría pedir precio para...");
    const waLink = `https://wa.me/34631543707?text=${message}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
        </a>
    );
}
