'use client';

import { useRef, useCallback, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticHoverProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    scale?: number;
}

export default function MagneticHover({
    children,
    className = '',
    strength = 0.3,
    scale = 1.03,
}: MagneticHoverProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            gsap.to(el, {
                x: deltaX,
                y: deltaY,
                scale,
                duration: 0.4,
                ease: 'power2.out',
            });
        },
        [strength, scale]
    );

    const handleMouseLeave = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;

        gsap.to(el, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'elastic.out(1, 0.5)',
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className={`magnetic-hover ${className}`.trim()}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: 'transform' }}
        >
            {children}
        </div>
    );
}
