"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode, useEffect, useState } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Check if the device has touch capabilities
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
                // If it's a touch device, we disable Lenis logic to prevent conflicts
                enabled: !isTouch,
                autoRaf: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}