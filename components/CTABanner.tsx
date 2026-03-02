import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface CTABannerProps {
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryLink: { href: string; label: string };
    secondaryLink: { href: string; label: string };
}

export default function CTABanner({
    title,
    titleAccent,
    subtitle,
    primaryLink,
    secondaryLink,
}: CTABannerProps) {
    return (
        <section className="cta-banner">
            <ScrollReveal className="wrap">
                <h2
                    dangerouslySetInnerHTML={{
                        __html: title.replace(
                            titleAccent,
                            `<span class="it">${titleAccent}</span>`
                        ),
                    }}
                />
                <p dangerouslySetInnerHTML={{ __html: subtitle }} />
                <div className="btn-row">
                    <Link href={primaryLink.href} className="btn btn-fill">
                        {primaryLink.label}
                    </Link>
                    <Link href={secondaryLink.href} className="btn btn-ghost">
                        {secondaryLink.label}
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    );
}
