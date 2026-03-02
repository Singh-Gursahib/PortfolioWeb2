import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureCard from '@/components/FeatureCard';
import StackItem from '@/components/StackItem';
import CTABanner from '@/components/CTABanner';
import TableOfContents from '@/components/TableOfContents';
import { research } from '@/lib/data';

interface ResearchDetailProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return research
        .filter((r) => r.hasDetail)
        .map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: ResearchDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const item = research.find((r) => r.slug === slug);

    if (!item) {
        return {
            title: 'Research Not Found | Gursahib Singh',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gursahib-singh.me';
    const imageUrl = item.bannerImage ? `${baseUrl}${item.bannerImage}` : `${baseUrl}/assets/images/profile/favicon-light.png`;

    return {
        title: `${item.title} | Research | Gursahib Singh`,
        description: item.shortDescription || item.listingDescription,
        openGraph: {
            title: item.title,
            description: item.shortDescription || item.listingDescription,
            url: `${baseUrl}/research/${slug}`,
            type: 'article',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: item.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: item.title,
            description: item.shortDescription || item.listingDescription,
            images: [imageUrl],
        },
    };
}

export default async function ResearchDetailPage({ params }: ResearchDetailProps) {
    const { slug } = await params;
    const item = research.find((r) => r.slug === slug);

    if (!item) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gursahib-singh.me';

    // JSON-LD for Research items (ScholarlyArticle/Article)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: item.title,
        description: item.shortDescription || item.listingDescription,
        url: `${baseUrl}/research/${slug}`,
        author: {
            '@type': 'Person',
            name: 'Gursahib Singh',
            url: baseUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Gursahib Singh',
        },
        image: item.bannerImage ? `${baseUrl}${item.bannerImage}` : undefined,
    };

    // Build TOC sections dynamically
    const tocSections = [
        ...(item.overview ? [{ id: 'overview', label: 'Overview' }] : []),
        ...(item.features ? [{ id: 'features', label: 'Key Features' }] : []),
        ...(item.detailSections?.map((s, i) => ({ id: `section-${i}`, label: s.tag.replace('// ', '') })) || []),
        ...(item.techStack ? [{ id: 'tech', label: 'Tech Stack' }] : []),
        ...(item.impact ? [{ id: 'impact', label: 'Takeaways' }] : []),
    ];

    return (
        <>
            {/* ═══════════ DETAIL HERO ═══════════ */}
            <section className="detail-hero">
                <div className="wrap">
                    <ScrollReveal>
                        <Link href="/research" className="back-link">
                            ← Back to Research
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal>
                        <span className="detail-tag">{item.detailTag}</span>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h1>{item.title}</h1>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className="detail-sub">{item.detailSub}</p>
                    </ScrollReveal>
                    <ScrollReveal className="detail-meta-row">
                        {item.timeline && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Timeline</div>
                                <div className="dm-val">{item.timeline}</div>
                            </div>
                        )}
                        {item.role && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Role</div>
                                <div className="dm-val">{item.role}</div>
                            </div>
                        )}
                        {item.amount && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Funding</div>
                                <div className="dm-val" style={{ color: 'var(--lime)' }}>{item.amount}</div>
                            </div>
                        )}
                        {item.grantType && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Grant</div>
                                <div className="dm-val">{item.grantType}</div>
                            </div>
                        )}
                        {item.status && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Status</div>
                                <div
                                    className="dm-val"
                                    style={item.statusHighlight ? { color: 'var(--lime)' } : undefined}
                                >
                                    {item.status}
                                </div>
                            </div>
                        )}
                    </ScrollReveal>
                </div>
            </section>

            <div className="wrap">
                <div className="detail-grid-container">
                    {/* Sticky Sidebar */}
                    <aside className="detail-sidebar">
                        <TableOfContents sections={tocSections} />
                    </aside>

                    {/* Main Content Sections */}
                    <div className="detail-main-content">
                        {/* ═══════════ OVERVIEW ═══════════ */}
                        {item.overview && (
                            <section className="detail-section" id="overview">
                                <ScrollReveal>
                                    <p className="sec-tag">// Overview</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        The <span className="it">problem</span> &amp; solution
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <ScrollReveal className="detail-content">
                                    {item.overview.map((para, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                    ))}
                                </ScrollReveal>
                            </section>
                        )}

                        {/* ═══════════ KEY FEATURES ═══════════ */}
                        {item.features && (
                            <section className="detail-section" id="features">
                                <ScrollReveal>
                                    <p className="sec-tag">// Key Features</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        Core <span className="it">capabilities</span>
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <div className="feature-grid">
                                    {item.features.map((feature) => (
                                        <FeatureCard key={feature.title} feature={feature} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* ═══════════ DETAIL SECTIONS ═══════════ */}
                        {item.detailSections?.map((section, i) => (
                            <section className="detail-section" key={i} id={`section-${i}`}>
                                <ScrollReveal>
                                    <p className="sec-tag">{section.tag}</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2
                                        className="sec-h"
                                        dangerouslySetInnerHTML={{
                                            __html: section.title.replace(
                                                section.titleAccent,
                                                `<span class="it">${section.titleAccent}</span>`
                                            ),
                                        }}
                                    />
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />

                                <ScrollReveal className="detail-content">
                                    {section.paragraphs.map((para, j) => (
                                        <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                                    ))}
                                </ScrollReveal>

                                {/* Subsections */}
                                {section.subsections?.map((sub, j) => (
                                    <ScrollReveal className="detail-content" key={j}>
                                        <h4 style={{ fontFamily: 'var(--display)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', marginTop: '1.5rem' }}>
                                            {sub.heading}
                                        </h4>
                                        <p>{sub.content}</p>
                                        {sub.bullets && (
                                            <ul>
                                                {sub.bullets.map((b, k) => (
                                                    <li key={k}>{b}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </ScrollReveal>
                                ))}

                                {/* Bullets */}
                                {section.bullets && (
                                    <ScrollReveal className="detail-content">
                                        <ul>
                                            {section.bullets.map((bullet, j) => (
                                                <li key={j}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </ScrollReveal>
                                )}
                            </section>
                        ))}

                        {/* ═══════════ TECH STACK ═══════════ */}
                        {item.techStack && (
                            <section className="detail-section" id="tech">
                                <ScrollReveal>
                                    <p className="sec-tag">// Tech Stack</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        Tools of <span className="it">the trade</span>
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <ScrollReveal className="stack-grid">
                                    {item.techStack.map((tech) => (
                                        <StackItem key={tech.name} item={tech} />
                                    ))}
                                </ScrollReveal>
                            </section>
                        )}

                        {/* ═══════════ IMPACT ═══════════ */}
                        {item.impact && (
                            <section className="detail-section" id="impact">
                                <ScrollReveal>
                                    <p className="sec-tag">// Conclusion</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        Results &amp; <span className="it">takeaways</span>
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <ScrollReveal className="detail-content">
                                    <ul>
                                        {item.impact.map((point, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                                        ))}
                                    </ul>
                                </ScrollReveal>
                            </section>
                        )}
                    </div>
                </div>
            </div>

            {/* ═══════════ CTA ═══════════ */}
            <CTABanner
                title="Want to see more?"
                titleAccent="more"
                subtitle="Explore my other research initiatives or get in touch to discuss collaboration."
                primaryLink={{ href: '/research', label: 'All Research ←' }}
                secondaryLink={{ href: '/#contact', label: 'Contact Me' }}
            />
        </>
    );
}
