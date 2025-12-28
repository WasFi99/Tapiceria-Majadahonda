import React from 'react';
import { Menu, Phone } from 'lucide-react';

export function AmpHeader() {
    return (
        <>
            <header className="header bg-white relative z-50">
                <div className="container flex justify-between items-center w-full px-4">

                    {/* Mobile Sidebar Trigger */}
                    {/* @ts-ignore */}
                    <button on="tap:sidebar.toggle" className="md:hidden p-2">
                        <Menu className="w-6 h-6 text-primary" />
                    </button>

                    {/* Logo */}
                    <a href="/amp" className="logo flex items-center gap-1 text-primary">
                        Tapicería<span className="text-secondary italic">Majadahonda</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="/amp" className="nav-link text-primary hover:text-secondary">Inicio</a>
                        <a href="/amp/servicios/restauracion-sofas" className="nav-link text-primary hover:text-secondary">Restauración</a>
                        <a href="/amp/servicios/tapizado-sillas" className="nav-link text-primary hover:text-secondary">Sillas</a>
                        <a href="/amp/blog" className="nav-link text-primary hover:text-secondary">Blog</a>
                    </nav>

                    {/* Phone Button */}
                    <a href="tel:+34631543707" className="p-2 text-primary hover:text-secondary">
                        <Phone className="w-5 h-5" />
                    </a>
                </div>
            </header>

            {/* AMP Sidebar for Mobile Menu */}
            <amp-sidebar id="sidebar" layout="nodisplay" side="left">
                <div className="sidebar-content relative">
                    {/* @ts-ignore */}
                    <button on="tap:sidebar.close" className="sidebar-close text-primary">
                        ×
                    </button>

                    <div className="flex flex-col gap-6 mt-12 items-center text-center">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Menú</h3>
                        <a href="/amp" className="text-xl font-medium text-primary py-2 w-full border-b border-stone-100">Inicio</a>
                        <a href="/amp/servicios/restauracion-sofas" className="text-xl font-medium text-primary py-2 w-full border-b border-stone-100">Restauración Sofás</a>
                        <a href="/amp/servicios/tapizado-sillas" className="text-xl font-medium text-primary py-2 w-full border-b border-stone-100">Sillas y Butacas</a>
                        <a href="/amp/servicios/cabeceros-medida" className="text-xl font-medium text-primary py-2 w-full border-b border-stone-100">Cabeceros</a>
                        <a href="/amp/servicios/muebles-exterior" className="text-xl font-medium text-primary py-2 w-full border-b border-stone-100">Exterior</a>

                        <div className="mt-8 w-full">
                            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Contacto Urgente</p>
                            <a href="tel:+34631543707" className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-full w-full font-bold shadow-md">
                                <Phone className="w-5 h-5" />
                                631 543 707
                            </a>
                        </div>
                    </div>
                </div>
            </amp-sidebar>
        </>
    );
}

}
