import { Experience } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

interface ExperienceRowProps {
    experience: Experience;
    index?: number;
}

export default function ExperienceRow({ experience, index = 0 }: ExperienceRowProps) {
    return (
        <ScrollReveal className="exp-row" direction="left" delay={index} distance={60}>
            <div className="exp-left">
                <div className="exp-dot"></div>
                <div className="exp-org">{experience.org}</div>
                <div className="exp-date">{experience.date}</div>
            </div>
            <div className="exp-right">
                <h3 dangerouslySetInnerHTML={{ __html: experience.role }} />
                <ul>
                    {experience.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </ScrollReveal>
    );
}
