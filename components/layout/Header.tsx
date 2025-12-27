"use client";

import * as React from "react";
import Link from "next/link";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = React.useState(false);
    const [prevScroll, setPrevScroll] = React.useState(0);
    const [isScrolled, setIsScrolled] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = prevScroll;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setPrevScroll(latest);
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
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-200",
                isScrolled
                    ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-xl font-bold tracking-tight text-primary">
                        Tapicería<span className="text-secondary">Majadahonda</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                isScrolled ? "text-foreground" : "text-white shadow-sm drop-shadow-md"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                    <Button asChild className="gap-2 font-semibold shadow-lg hover:shadow-xl transition-all">
                        <a href="tel:+34631543707">
                            <Phone className="w-4 h-4" />
                            631 543 707
                        </a>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="flex md:hidden items-center gap-4">
                    <Button asChild size="sm" className="gap-2 font-semibold shadow-md">
                        <a href="tel:+34631543707">
                            <Phone className="w-4 h-4" />
                            Llamar
                        </a>
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Menu">
                                <Menu className="w-6 h-6" />
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
