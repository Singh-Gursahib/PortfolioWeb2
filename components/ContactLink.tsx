import { ContactLink as ContactLinkType } from '@/lib/types';
import ScrollReveal from './ScrollReveal';

interface ContactLinkProps {
    contact: ContactLinkType;
    delay?: number;
}

export default function ContactLink({ contact, delay }: ContactLinkProps) {
    return (
        <ScrollReveal delay={delay} direction="right" distance={40}>
            <a
                href={contact.href}
                className="c-link"
                {...(contact.external
                    ? { target: '_blank', rel: 'noopener' }
                    : {})}
            >
                <div>
                    <div className="cl-name">{contact.name}</div>
                    <div className="cl-val">{contact.value}</div>
                </div>
                <span className="cl-arrow">→</span>
            </a>
        </ScrollReveal>
    );
}
