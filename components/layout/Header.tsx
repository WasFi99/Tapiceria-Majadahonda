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
                // Mobile: Always solid white
                "bg-white border-b border-stone-100 shadow-sm",
                // Desktop: Transparent at top, solid when scrolled
                "md:bg-transparent md:border-transparent md:shadow-none",
                isScrolled && "md:bg-white/90 md:backdrop-blur-md md:border-b md:border-stone-100 md:shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="flex items-center gap-2 z-50 group"
                >
                    <span className={cn(
                        "text-2xl font-serif font-bold tracking-tight transition-colors",
                        // Mobile: Always primary
                        "text-primary",
                        // Desktop: White at top, Primary if scrolled or light page
                        "md:text-white",
                        (isScrolled || isLightPage) && "md:text-primary"
                    )}>
                        Tapicería<span className="text-secondary italic">Majadahonda</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-secondary",
                                isScrolled || isLightPage ? "text-primary" : "text-white/90 hover:text-white"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Button
                        asChild
                        className={cn(
                            "gap-2 font-semibold shadow-lg hover:shadow-xl transition-all rounded-full px-6",
                            isScrolled || isLightPage
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-white text-primary hover:bg-stone-100" // Inverted on transparent header
                        )}
                    >
                        <a href="tel:+34631543707">
                            <Phone className="w-4 h-4" />
                            631 543 707
                        </a>
                    </Button>
                </nav>

                <div className="flex md:hidden items-center gap-4">
                    <Button
                        asChild
                        size="sm"
                        className={cn(
                            "rounded-full shadow-md transition-colors",
                            // Mobile: Always Primary background
                            "bg-primary text-white hover:bg-primary/90",
                            // Desktop (hidden anyway but strictly speaking logic):
                            "md:bg-white md:text-primary"
                        )}
                    >
                        <a href="tel:+34631543707">
                            <Phone className="w-4 h-4" />
                            Llamar
                        </a>
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size="icon"
                                aria-label="Menu"
                                className="rounded-full shadow-md bg-primary text-white hover:bg-primary/90"
                            >
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col gap-6 mt-6">
                                <SheetTitle className="text-left text-lg font-bold">
                                    Menú
                                </SheetTitle>
                                <div className="flex flex-col gap-4">
                                    {routes.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className="text-lg font-medium hover:text-secondary transition-colors border-b pb-2"
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
                                        className="text-lg font-medium hover:text-secondary transition-colors border-b pb-2"
                                    >
                                        Inicio
                                    </Link>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm text-muted-foreground mb-2">Contacto Urgente:</p>
                                    <Button asChild className="w-full gap-2 text-lg py-6">
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
