'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SkillGroup } from '@/lib/types';

gsap.registerPlugin(ScrollTrigger);

interface SkillPillsProps {
    groups: SkillGroup[];
}

export default function SkillPills({ groups }: SkillPillsProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const groupEls = container.querySelectorAll('.skills-group');

            groupEls.forEach((group, groupIdx) => {
                const pills = group.querySelectorAll('.skill-pill');
                const label = group.querySelector('.skills-group-label');

                // Set initial state
                if (label) {
                    gsap.set(label, { opacity: 0, x: -20 });
                }
                gsap.set(pills, {
                    opacity: 0,
                    y: 25,
                    scale: 0.85,
                    rotation: () => gsap.utils.random(-3, 3),
                });

                ScrollTrigger.create({
                    trigger: group,
                    start: 'top 88%',
                    once: true,
                    onEnter: () => {
                        // Animate label first
                        if (label) {
                            gsap.to(label, {
                                opacity: 1,
                                x: 0,
                                duration: 0.5,
                                ease: 'power3.out',
                                delay: groupIdx * 0.15,
                            });
                        }

                        // Spring-bounce pills with stagger
                        gsap.to(pills, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotation: 0,
                            duration: 0.7,
                            stagger: 0.04,
                            ease: 'elastic.out(1, 0.6)',
                            delay: groupIdx * 0.15 + 0.2,
                        });
                    },
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            {groups.map((group) => (
                <div className="skills-group" key={group.label}>
                    <p className="skills-group-label">{group.label}</p>
                    <div className="skill-pills">
                        {group.skills.map((skill) => (
                            <span className="skill-pill" key={skill}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
