"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                        Tapicería<span className="text-secondary italic">Majadahonda</span>
                    </h3>
                    <p className="leading-relaxed text-stone-400">
                        Rescatamos la esencia de tus muebles con técnicas artesanales y materiales de vanguardia. Lujo sostenible para tu hogar.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Expolora</h4>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-secondary transition-colors">Inicio</Link></li>
                        <li><Link href="/showroom" className="hover:text-secondary transition-colors">Showroom 3D</Link></li>
                        <li><Link href="/aviso-legal" className="hover:text-secondary transition-colors">Aviso Legal</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Servicios</h4>
                    <ul className="space-y-2">
                        <li><Link href="/servicios/restauracion-sofas" className="hover:text-secondary transition-colors">Restauración Sofás</Link></li>
                        <li><Link href="/servicios/tapizado-sillas" className="hover:text-secondary transition-colors">Sillas y Butacas</Link></li>
                        <li><Link href="/servicios/cabeceros-medida" className="hover:text-secondary transition-colors">Cabeceros a Medida</Link></li>
                        <li><Link href="/servicios/muebles-exterior" className="hover:text-secondary transition-colors">Muebles Exterior</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contacto</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-secondary shrink-0" />
                            <a href="tel:+34631543707" className="hover:text-white transition-colors">
                                631 543 707
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-secondary shrink-0" />
                            <a href="mailto:majadahondatapicero@gmail.com" className="hover:text-white transition-colors">
                                majadahondatapicero@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-secondary shrink-0" />
                            <span>
                                C. la Flauta Mágica<br />
                                Majadahonda, Madrid
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-xs text-stone-500">
                <p>&copy; {new Date().getFullYear()} Tapicería Majadahonda. Todos los derechos reservados. <span className="opacity-30">v2.2 (Final Box Model Fix)</span></p>
            </div>
        </footer>
    );
}
