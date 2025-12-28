import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function AmpFooter() {
    return (
        <footer className="py-12 bg-primary text-white text-sm">
            <div className="container flex flex-col items-center text-center gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-serif font-bold tracking-tight mb-2">
                        Tapicería<span className="text-secondary italic">Majadahonda</span>
                    </h3>
                    <p className="text-stone-400 max-w-md mx-auto">
                        Rescatamos la esencia de tus muebles con técnicas artesanales.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col gap-4 items-center">
                    <a href="tel:+34631543707" className="flex items-center gap-2 hover:text-secondary">
                        <Phone className="w-4 h-4 text-secondary" />
                        631 543 707
                    </a>
                    <a href="mailto:info@tapiceriamajadahonda.es" className="flex items-center gap-2 hover:text-secondary">
                        <Mail className="w-4 h-4 text-secondary" />
                        info@tapiceriamajadahonda.es
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        Majadahonda, Madrid
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-stone-500 border-t border-white/10 pt-6 w-full mt-4">
                    <p>&copy; {new Date().getFullYear()} Tapicería Majadahonda. AMP Version.</p>
                </div>
            </div>
        </footer>
    );
}
