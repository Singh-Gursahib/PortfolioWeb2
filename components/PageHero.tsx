import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface PageHeroProps {
    backLink: { href: string; label: string };
    eyebrow: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
}

export default function PageHero({
    backLink,
    eyebrow,
    title,
    titleAccent,
    subtitle,
}: PageHeroProps) {
    return (
        <section className="page-hero">
            <div className="wrap">
                <ScrollReveal>
                    <Link href={backLink.href} className="back-link">
                        {backLink.label}
                    </Link>
                </ScrollReveal>
                <ScrollReveal>
                    <p className="eyebrow">
                        <span className="line"></span> {eyebrow}
                    </p>
                </ScrollReveal>
                <ScrollReveal>
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: titleAccent
                                ? title.replace(
                                    titleAccent,
                                    `<span class="serif-i">${titleAccent}</span>`
                                )
                                : title,
                        }}
                    />
                </ScrollReveal>
                <ScrollReveal>
                    <p className="page-sub">{subtitle}</p>
                </ScrollReveal>
            </div>
        </section>
    );
}
