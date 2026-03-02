'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import ThemeToggle from './ThemeToggle';
import { navLinks } from '@/lib/data';

export default function Navbar() {
    const pathname = usePathname();
    const [stuck, setStuck] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const hasAnimated = useRef(false);

    // Scroll-based morphing
    useEffect(() => {
        const onScroll = () => setStuck(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Initial entrance animation
    useEffect(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const nav = navRef.current;
        const links = linksRef.current;
        const logo = logoRef.current;
        if (!nav || !links || !logo) return;

        const ctx = gsap.context(() => {
            // Fade nav in from top
            gsap.fromTo(
                nav,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
            );

            // Stagger nav links
            const linkEls = links.querySelectorAll('a');
            gsap.fromTo(
                linkEls,
                { y: -15, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power3.out',
                    delay: 0.3,
                }
            );

            // Logo spring-bounce
            gsap.fromTo(
                logo,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.6)',
                    delay: 0.2,
                }
            );
        }, nav);

        return () => ctx.revert();
    }, []);

    const isActive = (href: string) => {
        if (href === '/projects') return pathname.startsWith('/projects');
        if (href === '/research') return pathname === '/research';
        return false;
    };

    return (
        <nav ref={navRef} className={`nav${stuck ? ' stuck' : ''}`} id="mainNav">
            <div className="nav-inner">
                <Link href="/" className="nav-logo" ref={logoRef} aria-label="Home">
                    GS<span className="accent">.</span>
                </Link>

                <div
                    ref={linksRef}
                    className={`nav-links${menuOpen ? ' open' : ''}`}
                    id="navLinks"
                >
                    {navLinks.map((link) =>
                        link.isButton ? (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="btn-talk"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={isActive(link.href) ? { color: 'var(--lime)' } : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>

                <ThemeToggle />

                <button
                    className="burger"
                    id="burger"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}



