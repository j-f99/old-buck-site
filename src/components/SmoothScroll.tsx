"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,      // Controls smoothness (0.1 is a nice glide)
            duration: 1.2,   // How long the scroll animation lasts
            smoothWheel: true,
        }}>
            {children}
        </ReactLenis>
    );
}