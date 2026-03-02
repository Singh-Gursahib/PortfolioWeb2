import ScrollReveal from './ScrollReveal';

interface HeroBadgeProps {
    text: string;
    accent?: boolean;
}

export default function HeroBadge({ text, accent }: HeroBadgeProps) {
    return (
        <span className={`badge${accent ? ' accent' : ''}`}>
            {text}
        </span>
    );
}
