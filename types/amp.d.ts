/* eslint-disable @typescript-eslint/no-explicit-any */
// This file ensures TypeScript recognizes AMP-specific tags and attributes

// If this file is treated as a module (has imports/exports), we need to use global augmentation.
// Even if script, declare global is safe.

export { }; // Ensure this is treated as a module

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                alt?: string;
                width?: string;
                height?: string;
                layout?: string;
                class?: string;
            };
            'amp-sidebar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                id?: string;
                layout?: string;
                side?: string;
            };
            'amp-accordion': any;
            'amp-base-carousel': any;
        }
    }
}
