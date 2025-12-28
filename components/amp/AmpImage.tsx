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
    return (
        // @ts-ignore - React doesn't know about amp-img by default
        <amp-img
            src={src}
            alt={alt}
            width={width.toString()}
            height={height.toString()}
            layout={layout}
            // @ts-ignore
            class={className}
        />
    );
}
