import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="hero" style={{ minHeight: '80vh' }}>
            <div className="wrap">
                <div style={{ maxWidth: '600px' }}>
                    {/* Eyebrow */}
                    <p
                        className="eyebrow"
                        style={{ marginBottom: '1.5rem' }}
                    >
                        <span className="line"></span> Nothing Here
                    </p>

                    {/* Headline */}
                    <h1
                        style={{
                            fontFamily: 'var(--display)',
                            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.08,
                            marginBottom: '1.5rem',
                        }}
                    >
                        You&apos;ve reached a page that{' '}
                        <span className="serif-i" style={{ color: 'var(--lime)' }}>
                            doesn&apos;t&nbsp;exist
                        </span>
                        .
                    </h1>

                    {/* Body */}
                    <p
                        style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '1.05rem',
                            color: 'var(--cream-dim)',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                            maxWidth: '480px',
                        }}
                    >
                        The URL may have been changed, the page may have been removed, or you may have
                        followed an outdated link. Here are some places to start instead.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        <Link href="/" className="btn btn-fill">
                            Back to Home →
                        </Link>
                        <Link href="/projects" className="btn btn-ghost">
                            View Projects
                        </Link>
                        <Link href="/research" className="btn btn-ghost">
                            Research &amp; Grants
                        </Link>
                    </div>

                    {/* Subtle 404 footer line */}
                    <p
                        style={{
                            fontFamily: 'var(--mono)',
                            fontSize: '0.6rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.14em',
                            color: 'var(--cream-muted)',
                            borderTop: '1px solid var(--border)',
                            paddingTop: '1.5rem',
                        }}
                    >
                        Error 404 — Page not found
                    </p>
                </div>
            </div>
        </section>
    );
}
