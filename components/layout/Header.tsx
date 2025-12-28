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
                isScrolled
                    ? "bg-white/90 backdrop-blur-md border-b border-stone-100 shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="w-full px-4 md:px-8 h-20 flex items-center justify-between">
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
                        "text-lg md:text-2xl font-serif font-bold tracking-tight transition-colors",
                        isScrolled || isLightPage ? "text-primary" : "text-white"
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

                <div className="flex md:hidden items-center gap-2">
                    <Button
                        asChild
                        size="sm"
                        className={cn(
                            "gap-2 font-semibold shadow-md transition-colors",
                            isScrolled || isLightPage
                                ? "bg-primary text-white hover:bg-primary/90"
                                : "bg-white text-primary hover:bg-stone-100" // Inverted on transparent header
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
                                className={cn(
                                    "rounded-full shadow-md transition-colors",
                                    isScrolled || isLightPage
                                        ? "bg-primary text-white hover:bg-primary/90"
                                        : "bg-white text-primary hover:bg-stone-100"
                                )}
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
