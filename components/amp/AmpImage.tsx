import React from 'react';

interface AmpImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    layout?: 'responsive' | 'fixed' | 'fill' | 'intrinsic' | 'nodisplay' | 'container';
    className?: string;
}

export function AmpImage({ src, alt, width, height, layout = 'responsive', className }: AmpImageProps) {
    // Generate Next.js optimized URL
    // We strictly use the provided width. If Next.js rejects it (rare in default config), we might need to snap to breakpoints.
    // Quality fixed at 75 (standard/high).
    const optimizedSrc = `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

    return (
        // @ts-ignore - React doesn't know about amp-img by default
        <amp-img
            src={optimizedSrc}
            alt={alt}
            width={width.toString()}
            height={height.toString()}
            layout={layout}
            // @ts-ignore
            class={className}
        >
            {/* Fallback for no-js or failure */}
            <noscript>
                <img src={optimizedSrc} width={width} height={height} alt={alt} />
            </noscript>
        </amp-img>
    );
}
