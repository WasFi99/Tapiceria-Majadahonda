"use client";

import * as React from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

export function Header() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const [hidden, setHidden] = React.useState(false);
    const [prevScroll, setPrevScroll] = React.useState(0);
    const [isScrolled, setIsScrolled] = React.useState(false);

    // Force "scrolled" style (dark text) on light pages like showroom
    const isLightPage = pathname === "/showroom";

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const routes = [
        { href: "/tapicero-majadahonda", label: "Majadahonda" },
        { href: "/tapicero-las-rozas", label: "Las Rozas" },
        { href: "/showroom", label: "Showroom 3D" },
    ];

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate="visible"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                "bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm"
            )}
        >
            <div className="w-full px-4 md:px-8 h-20 flex items-center justify-between relative">

                {/* Mobile: Left - Call Button (Symmetrical Balance) */}
                <div className="md:hidden z-50">
                    <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="rounded-full transition-colors text-primary hover:bg-stone-100"
                    >
                        <a href="tel:+34631543707" aria-label="Llamar">
                            <Phone className="w-6 h-6" />
                        </a>
                    </Button>
                </div>

                {/* Logo - Absolute Center on Mobile, Left on Desktop */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 z-40">
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        className="flex items-center gap-2 group whitespace-nowrap"
                    >
                        <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary">
                            Tapicería<span className="text-secondary italic">Majadahonda</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav - Right */}
                <nav className="hidden md:flex items-center gap-8">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className="text-sm font-medium uppercase tracking-widest transition-colors hover:text-secondary text-primary"
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className="gap-2 font-semibold shadow-lg hover:shadow-xl transition-all rounded-full px-6 bg-primary text-white hover:bg-primary/90"
                    >
                        <a href="tel:+34631543707">
                            <Phone className="w-4 h-4" />
                            631 543 707
                        </a>
                    </Button>
                </nav>

                {/* Mobile: Right - Menu Button */}
                <div className="md:hidden z-50">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                variant="ghost"
                                aria-label="Menu"
                                className="rounded-full transition-colors text-primary hover:bg-stone-100"
                            >
                                <Menu className="w-7 h-7" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-8 mt-10 items-center">
                                <SheetTitle className="text-center text-2xl font-serif font-bold">
                                    Navegación
                                </SheetTitle>
                                <div className="flex flex-col gap-6 w-full items-center">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="text-xl font-medium hover:text-secondary transition-colors w-full text-center py-2"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/"
                                        onClick={(e) => {
                                            if (pathname === "/") {
                                                e.preventDefault();
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }
                                        }}
                                        className="text-xl font-medium hover:text-secondary transition-colors w-full text-center py-2"
                                    >
                                        Inicio
                                    </Link>
                                </div>
                                <div className="mt-8 w-full px-8">
                                    <p className="text-sm text-muted-foreground mb-4 text-center uppercase tracking-widest">Contacto Urgente</p>
                                    <Button asChild className="w-full gap-2 text-lg py-6 rounded-full shadow-lg">
                                        <a href="tel:+34631543707">
                                            <Phone className="w-5 h-5" />
                                            631 543 707
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
