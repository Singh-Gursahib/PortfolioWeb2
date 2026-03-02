import { Feature } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

interface FeatureCardProps {
    feature: Feature;
}

export default function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <ScrollReveal className="feature-card">
            <div className="feat-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
        </ScrollReveal>
    );
}
