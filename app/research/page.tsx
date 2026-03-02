import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import CTABanner from '@/components/CTABanner';
import ResearchCard from '@/components/ResearchCard';
import { research } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Research & Grants — Gursahib Singh',
    description:
        '$22k+ in funded AI research — privacy-preserving LLMs, physics simulations, health analytics, and microbiology digitization.',
};

export default function ResearchPage() {
    return (
        <>
            <PageHero
                backLink={{ href: '/', label: '← Back to Home' }}
                eyebrow="Research &amp; Grants"
                title="$22k+ in funded&nbsp;research"
                titleAccent="funded&nbsp;research"
                subtitle="Exploring privacy-preserving AI, interactive simulations, and data-driven education — each project backed by competitive grant funding and real institutional impact."
            />

            {/* RESEARCH GRID */}
            <div className="wrap" style={{ paddingBottom: '4rem' }}>
                <div className="home-project-grid">
                    {research.map((r, i) => (
                        <ResearchCard key={r.slug} research={r} delay={i} />
                    ))}
                </div>
            </div>

            <CTABanner
                title="Interested in collaboration?"
                titleAccent="collaboration"
                subtitle="I&apos;m always looking for research partners, grant opportunities, and academic collaborations in AI &amp; EdTech."
                primaryLink={{ href: '/#contact', label: 'Get in Touch →' }}
                secondaryLink={{ href: '/projects', label: 'View Projects' }}
            />
        </>
    );
}
