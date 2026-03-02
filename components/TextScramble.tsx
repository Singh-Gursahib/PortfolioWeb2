'use client';

import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
    text: string;
    className?: string;
    /** Characters to use for scramble effect */
    chars?: string;
    /** Duration of scramble in ms */
    duration?: number;
    /** Delay before starting (ms) */
    startDelay?: number;
}

/**
 * Matrix-style text scramble reveal.
 * Characters cycle through random glyphs before resolving to the final text.
 */
export default function TextScramble({
    text,
    className = '',
    chars = '!<>-_\\/[]{}—=+*^?#_ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    duration = 1500,
    startDelay = 200,
}: TextScrambleProps) {
    const [display, setDisplay] = useState('');
    const frameRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            const animate = (timestamp: number) => {
                if (!startRef.current) startRef.current = timestamp;
                const elapsed = timestamp - startRef.current;
                const progress = Math.min(elapsed / duration, 1);

                // How many characters are resolved
                const resolvedCount = Math.floor(progress * text.length);

                let result = '';
                for (let i = 0; i < text.length; i++) {
                    if (i < resolvedCount) {
                        result += text[i];
                    } else if (text[i] === ' ') {
                        result += ' ';
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }

                setDisplay(result);

                if (progress < 1) {
                    frameRef.current = requestAnimationFrame(animate);
                } else {
                    setDisplay(text);
                }
            };

            frameRef.current = requestAnimationFrame(animate);
        }, startDelay);

        return () => {
            clearTimeout(delayTimer);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [text, chars, duration, startDelay]);

    return (
        <span className={`text-scramble ${className}`.trim()}>
            {display || '\u00A0'.repeat(text.length)}
        </span>
    );
}
