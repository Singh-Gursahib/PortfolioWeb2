import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureCard from '@/components/FeatureCard';
import StackItem from '@/components/StackItem';
import CTABanner from '@/components/CTABanner';
import TableOfContents from '@/components/TableOfContents';
import { projects } from '@/lib/data';

interface ProjectDetailProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects
        .filter((p) => p.hasDetail)
        .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Gursahib Singh',
        };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gursahib-singh.me';
    const imageUrl = project.bannerImage ? `${baseUrl}${project.bannerImage}` : `${baseUrl}/assets/images/profile/favicon-light.png`;

    return {
        title: `${project.name} | Gursahib Singh`,
        description: project.shortDescription || project.listingDescription,
        openGraph: {
            title: project.name,
            description: project.shortDescription || project.listingDescription,
            url: `${baseUrl}/projects/${slug}`,
            type: 'article',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: project.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.name,
            description: project.shortDescription || project.listingDescription,
            images: [imageUrl],
        },
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project || !project.hasDetail) {
        notFound();
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gursahib-singh.me';

    // JSON-LD for AI/LLM indexing and rich snippets
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.name,
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        url: `${baseUrl}/projects/${slug}`,
        description: project.shortDescription || project.listingDescription,
        author: {
            '@type': 'Person',
            name: 'Gursahib Singh',
            url: baseUrl,
        },
        image: project.bannerImage ? `${baseUrl}${project.bannerImage}` : undefined,
    };

    // Build TOC sections dynamically
    const tocSections = [
        ...(project.videoUrl ? [{ id: 'video', label: 'Video Walkthrough' }] : []),
        ...(project.overview ? [{ id: 'overview', label: 'Overview' }] : []),
        ...(project.features ? [{ id: 'features', label: 'Key Features' }] : []),
        ...(project.detailSections?.map((s, i) => ({ id: `section-${i}`, label: s.tag.replace('// ', '') })) || []),
        ...(project.techStack ? [{ id: 'tech', label: 'Tech Stack' }] : []),
        ...(project.impact ? [{ id: 'impact', label: 'Takeaways' }] : []),
    ];

    return (
        <>
            {/* ═══════════ DETAIL HERO ═══════════ */}
            <section className="detail-hero">
                <div className="wrap">
                    <ScrollReveal>
                        <Link href="/projects" className="back-link">
                            ← Back to Projects
                        </Link>
                    </ScrollReveal>
                    <ScrollReveal>
                        <span className="detail-tag">{project.detailTag}</span>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h1>{project.name}</h1>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className="detail-sub">{project.detailSub}</p>
                    </ScrollReveal>
                    <ScrollReveal className="detail-meta-row">
                        {project.timeline && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Timeline</div>
                                <div className="dm-val">{project.timeline}</div>
                            </div>
                        )}
                        {project.role && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Role</div>
                                <div className="dm-val">{project.role}</div>
                            </div>
                        )}
                        {project.teamSize && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Team Size</div>
                                <div className="dm-val">{project.teamSize}</div>
                            </div>
                        )}
                        {project.status && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Status</div>
                                <div
                                    className="dm-val"
                                    style={project.statusHighlight ? { color: 'var(--lime)' } : undefined}
                                >
                                    {project.status}
                                </div>
                            </div>
                        )}
                        {project.githubUrl && (
                            <div className="detail-meta-item">
                                <div className="dm-label">Source</div>
                                <div className="dm-val">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener"
                                        style={{ color: 'var(--lime)', textDecoration: 'underline' }}
                                    >
                                        GitHub →
                                    </a>
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
                        {/* ═══════════ VIDEO WALKTHROUGH ═══════════ */}
                        {project.videoUrl && (
                            <section className="detail-section" id="video">
                                <ScrollReveal>
                                    <p className="sec-tag">// Video Walkthrough</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        See {project.name} <span className="it">in action</span>
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <ScrollReveal>
                                    <div
                                        style={{
                                            position: 'relative',
                                            paddingBottom: '56.25%',
                                            height: 0,
                                            overflow: 'hidden',
                                            borderRadius: 'var(--radius)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        <iframe
                                            src={project.videoUrl}
                                            title={`${project.name} — Video Walkthrough`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none',
                                            }}
                                        />
                                    </div>
                                </ScrollReveal>
                            </section>
                        )}

                        {/* ═══════════ OVERVIEW ═══════════ */}
                        {project.overview && (
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
                                    {project.overview.map((para, i) => (
                                        <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                                    ))}
                                </ScrollReveal>
                            </section>
                        )}

                        {/* ═══════════ KEY FEATURES ═══════════ */}
                        {project.features && (
                            <section className="detail-section" id="features">
                                <ScrollReveal>
                                    <p className="sec-tag">// Key Features</p>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <h2 className="sec-h">
                                        Core <span className="it">functionality</span>
                                    </h2>
                                </ScrollReveal>
                                <ScrollReveal className="sec-rule" />
                                <div className="feature-grid">
                                    {project.features.map((feature) => (
                                        <FeatureCard key={feature.title} feature={feature} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* ═══════════ DETAIL SECTIONS ═══════════ */}
                        {project.detailSections?.map((section, i) => (
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

                                {/* Section image */}
                                {section.image && (
                                    <ScrollReveal style={{ marginTop: '2rem' }}>
                                        <Image
                                            src={section.image}
                                            alt={section.imageCaption || section.title}
                                            width={1200}
                                            height={675}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: 'var(--radius)',
                                                border: '1px solid var(--border)',
                                            }}
                                        />
                                        {section.imageCaption && (
                                            <p
                                                style={{
                                                    fontFamily: 'var(--mono)',
                                                    fontSize: '0.6rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    color: 'var(--cream-muted)',
                                                    marginTop: '0.8rem',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                ↑ {section.imageCaption}
                                            </p>
                                        )}
                                    </ScrollReveal>
                                )}
                            </section>
                        ))}

                        {/* ═══════════ TECH STACK ═══════════ */}
                        {project.techStack && (
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
                                    {project.techStack.map((item) => (
                                        <StackItem key={item.name} item={item} />
                                    ))}
                                </ScrollReveal>

                                {/* Hackathon Challenges */}
                                {project.techChallenges && (
                                    <>
                                        <ScrollReveal>
                                            <h3 style={{
                                                fontFamily: 'var(--display)',
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                marginTop: '3rem',
                                                marginBottom: '1rem',
                                                letterSpacing: '-0.02em',
                                            }}>
                                                Key Hackathon Challenges
                                            </h3>
                                        </ScrollReveal>
                                        <ScrollReveal className="detail-content">
                                            <ul>
                                                {project.techChallenges.map((challenge, i) => (
                                                    <li key={i} dangerouslySetInnerHTML={{ __html: challenge }} />
                                                ))}
                                            </ul>
                                        </ScrollReveal>
                                    </>
                                )}
                            </section>
                        )}

                        {/* ═══════════ IMPACT ═══════════ */}
                        {project.impact && (
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
                                        {project.impact.map((item, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
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
                subtitle="Check out my other projects or get in touch to discuss a collaboration."
                primaryLink={{ href: '/projects', label: 'All Projects ←' }}
                secondaryLink={{ href: '/#contact', label: 'Contact Me' }}
            />
        </>
    );
}
