'use client';

import { useEffect, useState } from 'react';

interface HeroTypewriterProps {
    /** Array of roles/phrases to cycle through */
    roles: string[];
    className?: string;
    /** Typing speed in ms per character */
    typeSpeed?: number;
    /** Deleting speed in ms per character */
    deleteSpeed?: number;
    /** Pause after fully typing a word (ms) */
    pauseAfterType?: number;
    /** Pause after deleting before next word (ms) */
    pauseAfterDelete?: number;
}

export default function HeroTypewriter({
    roles,
    className = '',
    typeSpeed = 120,
    deleteSpeed = 60,
    pauseAfterType = 3000,
    pauseAfterDelete = 800,
}: HeroTypewriterProps) {
    const [subIndex, setSubIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // 1. Core state machine for typing/deleting
    useEffect(() => {
        if (!roles || roles.length === 0) return;

        const currentWord = roles[roleIndex];

        // Case A: Word fully visible -> Start deleting after pause
        if (subIndex === currentWord.length && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, pauseAfterType);
            return () => clearTimeout(timeout);
        }

        // Case B: Word fully deleted -> Switch to next word after pause
        if (subIndex === 0 && reverse) {
            const timeout = setTimeout(() => {
                setReverse(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, pauseAfterDelete);
            return () => clearTimeout(timeout);
        }

        // Case C: Standard character tick (typing or deleting)
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, reverse, roleIndex, roles, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

    // 2. Simple cursor blink
    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 530);
        return () => clearTimeout(timeout);
    }, [blink]);

    return (
        <span className={`hero-typewriter-inline ${className}`.trim()}>
            <span className="typewriter-text">
                {roles[roleIndex]?.substring(0, subIndex) || ''}
            </span>
            <span
                className="typewriter-cursor"
                style={{ opacity: blink ? 1 : 0 }}
            >
                |
            </span>
        </span>
    );
}
