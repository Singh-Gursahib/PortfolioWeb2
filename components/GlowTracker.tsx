'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Gradient cursor-tracking glow effect that follows the mouse.
 * Creates an ambient radial glow that follows cursor within a section.
 */
export default function GlowTracker({ className = '' }: { className?: string }) {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const parent = glow.parentElement;
        if (!parent) return;

        // Ensure parent can contain the glow
        if (getComputedStyle(parent).position === 'static') {
            parent.style.position = 'relative';
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = parent.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            gsap.to(glow, {
                left: x,
                top: y,
                duration: 0.8,
                ease: 'power2.out',
            });
        };

        const handleMouseEnter = () => {
            gsap.to(glow, { opacity: 1, duration: 0.4 });
        };

        const handleMouseLeave = () => {
            gsap.to(glow, { opacity: 0, duration: 0.6 });
        };

        parent.addEventListener('mousemove', handleMouseMove);
        parent.addEventListener('mouseenter', handleMouseEnter);
        parent.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            parent.removeEventListener('mousemove', handleMouseMove);
            parent.removeEventListener('mouseenter', handleMouseEnter);
            parent.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            className={`glow-tracker ${className}`.trim()}
            style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200, 255, 0, 0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                opacity: 0,
                zIndex: -1,
                filter: 'blur(80px)',
                willChange: 'left, top, opacity',
            }}
        />
    );
}
