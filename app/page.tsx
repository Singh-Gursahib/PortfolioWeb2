import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SplitTextReveal from '@/components/SplitTextReveal';
import HeroTypewriter from '@/components/HeroTypewriter';
import TextScramble from '@/components/TextScramble';

import GlowTracker from '@/components/GlowTracker';
import ParallaxOrb from '@/components/ParallaxOrb';
import MagneticHover from '@/components/MagneticHover';
import AnimatedCounter from '@/components/AnimatedCounter';
import ExperienceRow from '@/components/ExperienceRow';
import ProjectCard from '@/components/ProjectCard';
import ResearchCard from '@/components/ResearchCard';
import ContactLink from '@/components/ContactLink';
import HeroBadge from '@/components/HeroBadge';
import SkillPills from '@/components/SkillPills';
import HeroAnimations from '@/components/HeroAnimations';
import { experiences, skillGroups, education, contactLinks, heroBadges } from '@/lib/site';
import { projects } from '@/lib/projects';
import { research } from '@/lib/research';

export default function Home() {
    return (
        <>
            {/* ═══════════ HERO ═══════════ */}
            <section className="hero" id="hero">
                {/* Parallax ambient orbs */}
                <ParallaxOrb
                    color="var(--lime-glow)"
                    size={700}
                    top="5%"
                    right="-8%"
                    speed={0.4}
                    blur={100}
                />
                <ParallaxOrb
                    color="rgba(200, 255, 0, 0.03)"
                    size={500}
                    top="40%"
                    left="-10%"
                    right="auto"
                    speed={-0.2}
                    blur={120}
                />

                <div className="wrap">
                    <div className="hero-grid">
                        <div className="hero-text">
                            {/* ── Name + Pulse waveform ── */}
                            <ScrollReveal>
                                <div className="hero-name-row">
                                    <TextScramble
                                        text="Hi, I am Gursahib Singh"
                                        className="hero-name-scramble"
                                        duration={1400}
                                        startDelay={300}
                                    />
                                </div>
                            </ScrollReveal>

                            {/* ── Cycling role typewriter ── */}
                            <ScrollReveal delay={1}>
                                <p className="eyebrow">
                                    <span className="line"></span>
                                    <HeroTypewriter
                                        roles={[
                                            'GenAI Engineer',
                                            'Researcher',
                                            'Founder',
                                            'AI Agent Builder',
                                            'Full-Stack Developer',
                                        ]}
                                        typeSpeed={120}
                                        deleteSpeed={50}
                                        pauseAfterType={1000}
                                        pauseAfterDelete={800}
                                    />
                                </p>
                            </ScrollReveal>

                            {/* ── Split-text headline ── */}
                            <SplitTextReveal className="hero-h1" immediate>
                                <span className="split-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>I</span>
                                <span className="split-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>build</span>
                                <span className="split-word serif-i" style={{ display: 'inline-block', marginRight: '0.3em' }}>scalable,</span>
                                <span className="split-word serif-i" style={{ display: 'inline-block', marginRight: '0.3em' }}>agentic</span>
                                <span className="split-word serif-i" style={{ display: 'inline-block', marginRight: '0.3em' }}>AI&nbsp;tools</span>
                                <span className="split-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>for</span>
                                <span className="split-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>learning</span>
                                <span className="split-word" style={{ display: 'inline-block', marginRight: '0.3em' }}>&amp;&nbsp;innovation.</span>
                            </SplitTextReveal>

                            {/* ── Subtitle ── */}
                            <ScrollReveal delay={6}>
                                <p className="hero-sub">
                                    GenAI-focused CS student at Thompson Rivers University. I specialize in
                                    RAG pipelines, AI agents, and LLM-powered platforms — currently managing{' '}
                                    <strong>$22,000+</strong> in research funding.
                                </p>
                            </ScrollReveal>

                            {/* ── CTA buttons ── */}
                            <ScrollReveal delay={8} className="hero-cta">
                                <MagneticHover strength={0.15} scale={1.05}>
                                    <Link href="#projects" className="btn btn-fill">
                                        View My Work ↓
                                    </Link>
                                </MagneticHover>
                                <MagneticHover strength={0.15} scale={1.05}>
                                    <Link href="#research" className="btn btn-ghost">
                                        Research &amp; Grants
                                    </Link>
                                </MagneticHover>
                            </ScrollReveal>

                            {/* ── Trust badges ── */}
                            <ScrollReveal delay={10} className="hero-badges" staggerChildren staggerDelay={0.1}>
                                {heroBadges.map((badge) => (
                                    <HeroBadge key={badge.text} text={badge.text} accent={badge.accent} />
                                ))}
                            </ScrollReveal>
                        </div>

                        {/* ── Photo ── */}
                        <ScrollReveal delay={5} className="hero-photo-col" direction="scale">
                            <div className="hero-photo-frame">
                                <Image
                                    src="/assets/images/profile/profile-pic-dark.png"
                                    alt="Gursahib Singh"
                                    width={400}
                                    height={500}
                                    priority
                                    className="hero-img-dark"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <Image
                                    src="/assets/images/profile/profile-pic-hero.png"
                                    alt="Gursahib Singh"
                                    width={400}
                                    height={500}
                                    priority
                                    className="hero-img-light"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'none' }}
                                />
                                <div className="corner-br"></div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Client-side micro-interactions */}
                <HeroAnimations />
            </section>

            {/* ═══════════ EXPERIENCE ═══════════ */}
            <section className="sec" id="experience">
                <GlowTracker />
                <div className="wrap">
                    <ScrollReveal>
                        <p className="sec-tag">// 01 — Experience</p>
                    </ScrollReveal>
                    <ScrollReveal delay={1}>
                        <h2 className="sec-h">
                            Where I&apos;ve <span className="it">built, taught</span> &amp;&nbsp;led
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={2} className="sec-rule" />

                    {experiences.map((exp, i) => (
                        <ExperienceRow key={i} experience={exp} index={i} />
                    ))}
                </div>
            </section>

            {/* ═══════════ PROJECTS — 2×2 CARD GRID ═══════════ */}
            <section className="sec" id="projects">
                <GlowTracker />
                <div className="wrap">
                    <ScrollReveal>
                        <p className="sec-tag">// 02 — Projects</p>
                    </ScrollReveal>
                    <ScrollReveal delay={1}>
                        <h2 className="sec-h">
                            Ideas shipped <span className="it">into&nbsp;the&nbsp;world</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={2} className="sec-rule" />

                    <div className="home-project-grid">
                        {projects.slice(0, 4).map((project, idx) => (
                            <ScrollReveal
                                key={project.slug}
                                direction="scale"
                                delay={idx * 2}
                                distance={30}
                            >
                                <ProjectCard project={project} />
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <MagneticHover strength={0.1} scale={1.04}>
                            <Link href="/projects" className="btn btn-ghost">
                                View All Projects <ArrowRight size={14} />
                            </Link>
                        </MagneticHover>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════ RESEARCH ═══════════ */}
            <section className="sec" id="research">
                <GlowTracker />
                <div className="wrap">
                    <ScrollReveal>
                        <p className="sec-tag">// 03 — Research &amp; Grants</p>
                    </ScrollReveal>
                    <ScrollReveal delay={1}>
                        <h2 className="sec-h">
                            <AnimatedCounter value={22} prefix="$" suffix="k+" duration={2.5} />
                            {' '}in <span className="it">funded&nbsp;research</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={2} className="sec-rule" />

                    <div className="research-grid">
                        {research.map((r, i) => (
                            <ResearchCard key={r.title} research={r} delay={i} />
                        ))}
                    </div>

                    <ScrollReveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <MagneticHover strength={0.1} scale={1.04}>
                            <Link href="/research" className="btn btn-ghost">
                                View All Research <ArrowRight size={14} />
                            </Link>
                        </MagneticHover>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════ SKILLS ═══════════ */}
            <section className="skills-section" id="skills">
                <div className="wrap">
                    <ScrollReveal>
                        <p className="sec-tag">// 04 — Technical Skills</p>
                    </ScrollReveal>
                    <ScrollReveal delay={1}>
                        <h2 className="sec-h">
                            Tools of <span className="it">the&nbsp;trade</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={2} className="sec-rule" />

                    <SkillPills groups={skillGroups} />
                </div>
            </section>

            {/* ═══════════ EDUCATION ═══════════ */}
            <section className="sec" id="education">
                <div className="wrap">
                    <ScrollReveal>
                        <p className="sec-tag">// 05 — Education</p>
                    </ScrollReveal>
                    <ScrollReveal delay={1}>
                        <h2 className="sec-h">
                            The <span className="it">foundation</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={2} className="sec-rule" />

                    <ScrollReveal className="edu-card" direction="scale" distance={20}>
                        <div>
                            <h3>{education.degree}</h3>
                            <p className="edu-sub">
                                {education.institution} · {education.period}
                            </p>
                            <ul>
                                {education.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="edu-icon edu-icon-animated">
                            <GraduationCap size={48} strokeWidth={1.5} />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ═══════════ CONTACT ═══════════ */}
            <section className="sec contact-sec" id="contact">
                <GlowTracker />
                <div className="wrap">
                    <div className="contact-grid">
                        <ScrollReveal className="contact-left">
                            <h2>
                                Let&apos;s chat about <span className="it">AI</span>, learning
                                &amp;&nbsp;building{' '}
                                <span className="it">cool&nbsp;hacks</span>.
                            </h2>
                            <p>
                                I&apos;m always excited to talk about GenAI engineering, EdTech ideas,
                                or potential collaborations. Drop me a line.
                            </p>
                            <p className="loc">📍 Kamloops, BC, Canada</p>
                        </ScrollReveal>
                        <div className="contact-right">
                            {contactLinks.map((contact, i) => (
                                <ContactLink key={contact.name} contact={contact} delay={i + 1} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
