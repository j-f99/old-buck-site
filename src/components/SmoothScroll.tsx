"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // 1. Flag that we are now on the client side
        setMounted(true);
        // 2. Check for touch
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // During Server Side Rendering (SSR) or on Mobile, 
    // we return the children without the Lenis wrapper.
    if (!mounted || isTouch) {
        return <>{children}</>;
    }

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
                autoRaf: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}