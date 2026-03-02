'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { GalleryItem } from '@/lib/types';

interface GalleryProps {
    items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
    const [active, setActive] = useState(
        items.findIndex((item) => item.active) || 0
    );

    return (
        <section className="detail-gallery">
            <div className="wrap">
                <ScrollReveal className="gallery-frame">
                    <Image
                        src={items[active].image}
                        alt={items[active].label}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius)' }}
                        priority
                    />
                </ScrollReveal>
                <ScrollReveal className="gallery-thumbnails">
                    {items.map((item, i) => (
                        <button
                            key={item.label}
                            className={`thumb${i === active ? ' active' : ''}`}
                            onClick={() => setActive(i)}
                            type="button"
                        >
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={160}
                                height={90}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '3px' }}
                            />
                            <span className="thumb-label">{item.label}</span>
                        </button>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
