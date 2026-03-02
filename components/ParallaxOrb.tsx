'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxOrbProps {
    color?: string;
    size?: number;
    top?: string;
    left?: string;
    right?: string;
    speed?: number;
    blur?: number;
    opacity?: number;
}

export default function ParallaxOrb({
    color = 'var(--lime-glow)',
    size = 600,
    top = '10%',
    left,
    right = '-5%',
    speed = 0.3,
    blur = 80,
    opacity = 1,
}: ParallaxOrbProps) {
    const orbRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = orbRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // Parallax scroll movement
            gsap.to(el, {
                y: () => speed * 300,
                ease: 'none',
                scrollTrigger: {
                    trigger: el.parentElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });

            // Subtle floating animation
            gsap.to(el, {
                y: '+=20',
                x: '+=15',
                duration: 6,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });

            // Subtle scale breathing
            gsap.to(el, {
                scale: 1.1,
                duration: 8,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });
        }, el);

        return () => ctx.revert();
    }, [speed]);

    return (
        <div
            ref={orbRef}
            className="parallax-orb"
            style={{
                position: 'absolute',
                top,
                left,
                right,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
                pointerEvents: 'none',
                filter: `blur(${blur}px)`,
                opacity,
                zIndex: 0,
                willChange: 'transform',
            }}
        />
    );
}
