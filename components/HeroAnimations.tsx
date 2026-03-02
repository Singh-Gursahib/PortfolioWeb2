'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Global micro-interactions across the homepage.
 * Mounted once, handles all GSAP-powered hover/scroll effects.
 */
export default function HeroAnimations() {
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        const ctx = gsap.context(() => {
            // ════════════════════════════
            //  HERO SECTION
            // ════════════════════════════

            // Photo frame parallax on scroll
            const photoFrame = document.querySelector('.hero-photo-frame');
            if (photoFrame) {
                gsap.to(photoFrame, {
                    y: -50,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.hero',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 2,
                    },
                });
            }

            // Corner bracket spring-in
            const cornerBr = document.querySelector('.corner-br');
            if (cornerBr) {
                gsap.fromTo(
                    cornerBr,
                    { opacity: 0, scale: 0 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: 'elastic.out(1, 0.5)',
                        delay: 1.8,
                    }
                );
            }

            // Eyebrow line draw
            const eyebrowLine = document.querySelector('.eyebrow .line');
            if (eyebrowLine) {
                gsap.fromTo(
                    eyebrowLine,
                    { width: 0 },
                    { width: 32, duration: 0.8, ease: 'power3.out', delay: 0.4 }
                );
            }

            // CTA button pulse glow
            const ctaFill = document.querySelector('.hero-cta .btn-fill');
            if (ctaFill) {
                gsap.to(ctaFill, {
                    boxShadow: '0 0 30px rgba(200, 255, 0, 0.3), 0 0 60px rgba(200, 255, 0, 0.1)',
                    duration: 2,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                    delay: 3,
                });
            }



            // Hero badges hover spring
            const badges = document.querySelectorAll('.hero-badges .badge');
            badges.forEach((badge) => {
                badge.addEventListener('mouseenter', () => {
                    gsap.to(badge, { scale: 1.08, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
                });
                badge.addEventListener('mouseleave', () => {
                    gsap.to(badge, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
                });
            });

            // ════════════════════════════
            //  EXPERIENCE SECTION
            // ════════════════════════════

            // Row hover — slide right with spring
            const expRows = document.querySelectorAll('.exp-row');
            expRows.forEach((row) => {
                row.addEventListener('mouseenter', () => {
                    gsap.to(row, { x: 8, duration: 0.4, ease: 'power2.out' });
                    // Highlight the org name on hover
                    const org = row.querySelector('.exp-org');
                    if (org) gsap.to(org, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
                });
                row.addEventListener('mouseleave', () => {
                    gsap.to(row, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.6)' });
                    const org = row.querySelector('.exp-org');
                    if (org) gsap.to(org, { scale: 1, duration: 0.4, ease: 'power2.out' });
                });
            });

            // Animated timeline connector between experience rows
            const expSection = document.querySelector('#experience .wrap');
            if (expSection && expRows.length > 0) {
                // Create a vertical line connector
                const connector = document.createElement('div');
                connector.className = 'exp-timeline-connector';
                expSection.appendChild(connector);

                // Animate its height as user scrolls through
                ScrollTrigger.create({
                    trigger: '#experience',
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: 1,
                    onUpdate: (self) => {
                        connector.style.height = `${self.progress * 100}%`;
                    },
                });
            }

            // ════════════════════════════
            //  PROJECTS SECTION
            // ════════════════════════════

            // Project card 3D tilt on hover
            const pCards = document.querySelectorAll('.p-card');
            pCards.forEach((card) => {
                const el = card as HTMLElement;

                // Inner arrow slide logic moved here
                const link = el.querySelector('.p-card-link');
                const arrow = el.querySelector('.arrow-slide');
                if (link && arrow) {
                    link.addEventListener('mouseenter', () => {
                        gsap.to(arrow, { x: 5, duration: 0.3, ease: 'power2.out' });
                    });
                    link.addEventListener('mouseleave', () => {
                        gsap.to(arrow, { x: 0, duration: 0.3, ease: 'power2.out' });
                    });
                }

                el.addEventListener('mousemove', (e: MouseEvent) => {
                    const rect = el.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;

                    gsap.to(el, {
                        rotateY: x * 8,
                        rotateX: -y * 8,
                        duration: 0.4,
                        ease: 'power2.out',
                        transformPerspective: 800,
                    });

                    // Move the big number watermark subtly
                    const num = el.querySelector('.p-num');
                    if (num) {
                        gsap.to(num, {
                            x: x * 15,
                            y: y * 15,
                            duration: 0.4,
                            ease: 'power2.out',
                        });
                    }
                });

                el.addEventListener('mouseleave', () => {
                    gsap.to(el, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.7,
                        ease: 'elastic.out(1, 0.5)',
                    });
                    const num = el.querySelector('.p-num');
                    if (num) {
                        gsap.to(num, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' });
                    }
                });
            });

            // Project number watermark count-up on scroll
            pCards.forEach((card) => {
                const numEl = card.querySelector('.p-num');
                if (!numEl) return;
                const finalNum = numEl.textContent || '';
                const numericPart = parseInt(finalNum.replace(/\D/g, ''));
                if (isNaN(numericPart)) return;

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        const counter = { val: 0 };
                        gsap.to(counter, {
                            val: numericPart,
                            duration: 1.2,
                            ease: 'power2.out',
                            onUpdate: () => {
                                numEl.textContent = String(Math.floor(counter.val)).padStart(2, '0');
                            },
                        });
                    },
                });
            });

            // ════════════════════════════
            //  RESEARCH SECTION
            // ════════════════════════════

            // Research card inner content stagger on scroll
            const rCards = document.querySelectorAll('.r-card');
            rCards.forEach((card) => {
                const children = card.querySelectorAll('.r-meta, h3, p, .r-stack, .r-award');
                gsap.set(children, { opacity: 0, y: 15 });

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 82%',
                    once: true,
                    onEnter: () => {
                        gsap.to(children, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: 'power3.out',
                        });
                    },
                });
            });

            // ════════════════════════════
            //  EDUCATION SECTION
            // ════════════════════════════

            // Floating graduation cap icon
            const eduIcon = document.querySelector('.edu-icon-animated');
            if (eduIcon) {
                gsap.to(eduIcon, {
                    y: -8,
                    rotation: 5,
                    duration: 3,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                });
            }

            // Education bullet points stagger
            const eduBullets = document.querySelectorAll('.edu-card li');
            if (eduBullets.length) {
                gsap.set(eduBullets, { opacity: 0, x: -20 });
                ScrollTrigger.create({
                    trigger: '.edu-card',
                    start: 'top 80%',
                    once: true,
                    onEnter: () => {
                        gsap.to(eduBullets, {
                            opacity: 1,
                            x: 0,
                            duration: 0.6,
                            stagger: 0.15,
                            ease: 'power3.out',
                            delay: 0.4,
                        });
                    },
                });
            }

            // ════════════════════════════
            //  CONTACT SECTION
            // ════════════════════════════

            // Contact link hover — arrow slides and scales
            const cLinks = document.querySelectorAll('.c-link');
            cLinks.forEach((link) => {
                const arrow = link.querySelector('.cl-arrow');
                link.addEventListener('mouseenter', () => {
                    if (arrow) {
                        gsap.to(arrow, {
                            x: 6,
                            scale: 1.3,
                            duration: 0.3,
                            ease: 'elastic.out(1, 0.5)',
                        });
                    }
                });
                link.addEventListener('mouseleave', () => {
                    if (arrow) {
                        gsap.to(arrow, { x: 0, scale: 1, duration: 0.4, ease: 'power2.out' });
                    }
                });
            });

            // ════════════════════════════
            //  GLOBAL — Section header parallax
            // ════════════════════════════

            // Back to top button visibility
            const btt = document.getElementById('backToTop');
            if (btt) {
                gsap.set(btt, { opacity: 0, y: 20, pointerEvents: 'none' });
                ScrollTrigger.create({
                    start: 400,
                    onUpdate: (self) => {
                        if (self.direction === 1 && self.scroll() > 400) {
                            gsap.to(btt, { opacity: 1, y: 0, pointerEvents: 'auto', duration: 0.4 });
                        } else if (self.scroll() < 300) {
                            gsap.to(btt, { opacity: 0, y: 20, pointerEvents: 'none', duration: 0.4 });
                        }
                    }
                });
            }

            const sectionHeaders = document.querySelectorAll('.sec-h');
            sectionHeaders.forEach((header) => {
                gsap.to(header, {
                    y: -15,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: header,
                        start: 'top 90%',
                        end: 'top 20%',
                        scrub: 1,
                    },
                });
            });

            // Section tags — fade in from left
            const secTags = document.querySelectorAll('.sec-tag');
            secTags.forEach((tag) => {
                gsap.fromTo(
                    tag,
                    { opacity: 0, x: -30 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: tag,
                            start: 'top 90%',
                            once: true,
                        },
                    }
                );
            });

            // Section rules — width draw animation
            const secRules = document.querySelectorAll('.sec-rule');
            secRules.forEach((rule) => {
                gsap.fromTo(
                    rule,
                    { width: '0%' },
                    {
                        width: '100%',
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: rule,
                            start: 'top 90%',
                            once: true,
                        },
                    }
                );
            });

            // ════════════════════════════
            //  SKILLS — Tech pill stack labels
            // ════════════════════════════
            const skillLabels = document.querySelectorAll('.skills-group-label');
            skillLabels.forEach((label) => {
                // Add a decorative underline that draws on scroll
                const underline = document.createElement('span');
                underline.className = 'skill-label-underline';
                label.appendChild(underline);

                ScrollTrigger.create({
                    trigger: label,
                    start: 'top 88%',
                    once: true,
                    onEnter: () => {
                        gsap.fromTo(
                            underline,
                            { width: '0%' },
                            { width: '100%', duration: 0.8, ease: 'power3.out', delay: 0.2 }
                        );
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}
