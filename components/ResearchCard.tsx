import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award } from 'lucide-react';
import { Research } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

interface ResearchCardProps {
    research: Research;
    delay?: number;
}

export default function ResearchCard({ research, delay = 0 }: ResearchCardProps) {
    const typeStyle =
        research.grantTypeColor === 'teal'
            ? { color: 'var(--teal)' }
            : research.grantTypeColor === 'red'
                ? { color: 'var(--red)' }
                : { color: 'var(--lime)' };

    const direction = delay % 2 === 0 ? 'left' as const : 'right' as const;

    return (
        <ScrollReveal className="r-card-v2-wrapper" delay={delay * 2} direction={direction} distance={40}>
            <Link
                href={research.hasDetail ? `/research/${research.slug}` : '#'}
                className="r-card-v2-link"
                aria-label={research.hasDetail ? `Read research case: ${research.title}` : `Research item: ${research.title}`}
            >
                <div className="r-card-v2">
                    <div className="r-card-image">
                        {research.bannerImage ? (
                            <Image
                                src={research.bannerImage}
                                alt={research.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        ) : (
                            <div className="r-image-placeholder" />
                        )}
                    </div>

                    <div className="r-card-body">
                        <div className="r-card-header" />

                        <h3 className="r-card-title">{research.title}</h3>
                        <p className="r-card-desc">{research.shortDescription}</p>

                        {(research.grantType || research.amount) && (
                            <div className="r-card-grant">
                                <div className="r-grant-details">
                                    <span className="r-grant-label">{research.grantType}</span>
                                    <span className="r-grant-val">{research.amount}</span>
                                </div>
                                {research.award && (
                                    <div className="r-card-award-icon" title={research.award}>
                                        <Award size={16} />
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="r-card-footer">
                            <div className="r-card-stack-preview">
                                {research.stack.slice(0, 3).map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            {research.hasDetail && (
                                <div className="r-card-link">
                                    More Details<ArrowRight size={16} strokeWidth={2.5} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </ScrollReveal>
    );
}
