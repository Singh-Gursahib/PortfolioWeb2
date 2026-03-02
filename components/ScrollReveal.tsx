'use client';

import { useEffect, useRef, ReactNode, CSSProperties } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

interface ScrollRevealProps {
    children?: ReactNode;
    className?: string;
    delay?: number;
    as?: React.ElementType;
    style?: CSSProperties;
    direction?: Direction;
    duration?: number;
    distance?: number;
    staggerChildren?: boolean;
    staggerDelay?: number;
}

function getFromVars(direction: Direction, distance: number) {
    switch (direction) {
        case 'up':
            return { opacity: 0, y: distance };
        case 'down':
            return { opacity: 0, y: -distance };
        case 'left':
            return { opacity: 0, x: -distance };
        case 'right':
            return { opacity: 0, x: distance };
        case 'scale':
            return { opacity: 0, scale: 0.92 };
        default:
            return { opacity: 0, y: distance };
    }
}

function getToVars() {
    return { opacity: 1, x: 0, y: 0, scale: 1 };
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    as: Tag = 'div',
    style,
    direction = 'up',
    duration = 0.9,
    distance = 50,
    staggerChildren = false,
    staggerDelay = 0.08,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            if (staggerChildren) {
                // Stagger all direct children
                const kids = el.children;
                gsap.set(kids, getFromVars(direction, distance));

                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                    onEnter: () => {
                        gsap.to(kids, {
                            ...getToVars(),
                            duration,
                            stagger: staggerDelay,
                            delay: delay * 0.1,
                            ease: 'power3.out',
                        });
                    },
                });
            } else {
                gsap.set(el, getFromVars(direction, distance));

                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 88%',
                    once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            ...getToVars(),
                            duration,
                            delay: delay * 0.1,
                            ease: 'power3.out',
                        });
                    },
                });
            }
        }, el);

        return () => ctx.revert();
    }, [direction, distance, duration, delay, staggerChildren, staggerDelay]);

    return (
        <Tag ref={ref} className={className} style={style}>
            {children}
        </Tag>
    );
}
