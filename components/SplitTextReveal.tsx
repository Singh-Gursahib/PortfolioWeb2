'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextRevealProps {
    children: ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
    stagger?: number;
    duration?: number;
    /** If true, triggers immediately on mount (for above-fold content) */
    immediate?: boolean;
}

export default function SplitTextReveal({
    children,
    className = '',
    as: Tag = 'h1',
    stagger = 0.08,
    duration = 0.9,
    immediate = false,
}: SplitTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const words = el.querySelectorAll('.split-word');

            gsap.set(words, {
                opacity: 0,
                y: 35,
                rotateX: -40,
                transformOrigin: 'center bottom',
            });

            const tl = gsap.timeline({
                scrollTrigger: immediate
                    ? undefined
                    : {
                        trigger: el,
                        start: 'top 85%',
                        once: true,
                    },
                delay: immediate ? 0.3 : 0,
            });

            tl.to(words, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration,
                stagger,
                ease: 'power3.out',
            });
        }, el);

        return () => ctx.revert();
    }, [stagger, duration, immediate]);

    // Split the text content into words, preserving JSX children
    const renderChildren = () => {
        if (typeof children === 'string') {
            return children.split(' ').map((word, i) => (
                <span
                    key={i}
                    className="split-word"
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                    {word}
                </span>
            ));
        }
        // For JSX children, wrap in a container for GSAP to target
        return children;
    };

    return (
        <Tag
            ref={containerRef}
            className={`split-text-reveal ${className}`.trim()}
            style={{ perspective: '600px' }}
        >
            {renderChildren()}
        </Tag>
    );
}
