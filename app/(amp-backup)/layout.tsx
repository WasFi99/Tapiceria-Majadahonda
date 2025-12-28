import React from "react";
import { AMP_CSS } from "@/components/amp/amp-styles";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Tapicería Majadahonda - AMP",
    description: "Versión AMP acelerada",
};

export default function AmpRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" data-ampdevmode>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />

                {/* AMP Boilerplate */}
                <style amp-boilerplate="">{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
                <noscript>
                    <style amp-boilerplate="">{`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}</style>
                </noscript>

                {/* AMP Script */}
                <script async src="https://cdn.ampproject.org/v0.js"></script>

                {/* AMP Sidebar Script */}
                <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>

                {/* Custom CSS (Inline) */}
                <style amp-custom="" dangerouslySetInnerHTML={{ __html: AMP_CSS }} />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
