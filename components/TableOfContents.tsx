'use client';

import { useEffect, useState } from 'react';

interface TOCSection {
    id: string;
    label: string;
}

interface TableOfContentsProps {
    sections: TOCSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0% -80% 0%' }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for sticky nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="toc-nav">
            <p className="toc-label">// Contents</p>
            {sections.map(({ id, label }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`toc-link ${activeId === id ? 'active' : ''}`}
                >
                    {label}
                </a>
            ))}
        </nav>
    );
}
