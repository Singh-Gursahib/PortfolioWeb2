import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/components/CTABanner';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Projects — Gursahib Singh',
    description:
        'All projects by Gursahib Singh — AI-powered platforms, hackathon winners, and full-stack applications.',
};

export default function ProjectsPage() {
    return (
        <>
            <PageHero
                backLink={{ href: '/', label: '← Back to Home' }}
                eyebrow="All Projects"
                title="Ideas shipped into&nbsp;the&nbsp;world"
                titleAccent="into&nbsp;the&nbsp;world"
                subtitle="From hackathon sprints to production platforms — every project is built to solve a real problem using AI, modern web frameworks, and a sharp eye for user experience."
            />

            {/* PROJECT GRID */}
            <div className="wrap" style={{ paddingBottom: '4rem' }}>
                <div className="home-project-grid">
                    {projects.map((project, idx) => (
                        <ScrollReveal key={project.slug} delay={idx * 0.1}>
                            <ProjectCard project={project} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <CTABanner
                title="Have a project idea?"
                titleAccent="idea"
                subtitle="I'm always looking for the next challenge. Let's build something impactful together."
                primaryLink={{ href: '/#contact', label: 'Get in Touch →' }}
                secondaryLink={{ href: '/research', label: 'View Research' }}
            />
        </>
    );
}
