// Custom Type Definitions for AMP elements
// This file ensures TypeScript recognizes AMP-specific tags and attributes

declare namespace JSX {
    interface IntrinsicElements {
        'amp-img': any;
        'amp-sidebar': any;
        'amp-accordion': any; // Adding common ones just in case
        'amp-base-carousel': any;
    }
}
