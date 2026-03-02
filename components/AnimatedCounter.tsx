'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}

export default function AnimatedCounter({
    value,
    prefix = '',
    suffix = '',
    duration = 2,
    className = '',
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const [displayValue, setDisplayValue] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    if (hasAnimated.current) return;
                    hasAnimated.current = true;

                    const counter = { val: 0 };
                    gsap.to(counter, {
                        val: value,
                        duration,
                        ease: 'power2.out',
                        onUpdate: () => {
                            setDisplayValue(Math.floor(counter.val));
                        },
                    });
                },
            });
        }, el);

        return () => ctx.revert();
    }, [value, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toLocaleString()}
            {suffix}
        </span>
    );
}
