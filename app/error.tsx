'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-stone-50 text-slate-900">
            <h2 className="text-3xl font-serif font-bold mb-4 text-emerald-900">Algo ha salido mal</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                Lo sentimos, ha habido un problema técnico. Nuestro equipo ya ha sido notificado.
            </p>
            <div className="flex gap-4">
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    variant="default"
                    className="bg-emerald-900 text-white"
                >
                    Intentar de nuevo
                </Button>
                <Button
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                >
                    Volver al Inicio
                </Button>
            </div>
        </div>
    );
}
