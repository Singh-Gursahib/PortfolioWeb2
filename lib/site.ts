import {
    SiteMetadata,
    Experience,
    SkillGroup,
    Education,
    ContactLink,
    NavLink,
} from './types';

// ── Site Metadata ──
export const siteMetadata: SiteMetadata = {
    name: 'Gursahib Singh',
    initials: 'GS',
    tagline: 'AI Builder, Researcher & Founder',
    description:
        'GenAI-focused CS student managing $22k+ in AI research funding. Specializing as an AI Builder and Software Engineer developing RAG pipelines, autonomous AI agents, LLM-powered platforms, and Next.js applications.',
    location: 'Kamloops, BC, Canada',
};

// ── Navigation ──
export const navLinks: NavLink[] = [
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Research', href: '/research' },
    { label: 'Skills', href: '/#skills' },
    { label: "Let's Talk", href: '/#contact', isButton: true },
];

// ── Experience ──
export const experiences: Experience[] = [
    {
        org: 'Thompson Rivers Univ.',
        date: 'Jan 2026 – Present',
        role: 'Learning Technologist Developer (Co-op)',
        bullets: [
            'Designing a centralized AI enablement platform for students and faculty to adopt GenAI tools responsibly.',
            'Building web infrastructure with AI prompt galleries, automated workflows, and pedagogical best practices.',
        ],
    },
    {
        org: 'TechNerv',
        date: 'Jul 2025 – Present',
        role: 'Co-founder & Technical Lead',
        bullets: [
            'Leading an AI consultancy delivering custom automation and AI pipelines for business clients.',
            'Deployed voice AI agents and workflow automation tools, securing multiple contracts in week one.',
        ],
    },
    {
        org: 'Thompson Rivers Univ.',
        date: 'Jan 2026 – Present',
        role: 'Research Coach — Mobile App Development',
        bullets: [
            'Mentoring students on semester-long research projects covering methodology and technical implementation.',
            'Developing a course research framework resulting in academic posters and journal-ready publications.',
        ],
    },
    {
        org: 'Outlier.ai',
        date: 'Aug 2024 – Present',
        role: 'AI Model Trainer',
        bullets: [
            'Optimizing LLMs through reinforcement learning (RLHF) to improve reasoning and tool usage.',
            'Refining function-calling workflows to align AI outputs with real-world application standards.',
        ],
    },
    {
        org: 'Thompson Rivers Univ.',
        date: 'Jan 2025 – Present',
        role: 'Teaching Assistant — DS&A / Mobile Dev',
        bullets: [
            'Mentored 140+ students across Data Structures, Algorithms, and Mobile Development courses.',
            'Conducted weekly labs and evaluated 120+ programming projects.',
        ],
    },
];

// ── Skills ──
export const skillGroups: SkillGroup[] = [
    {
        label: 'AI / ML',
        skills: [
            'LLMs (Gemini, Llama, Groq)',
            'RAG Pipelines',
            'Prompt Engineering',
            'Agentic Systems',
            'Reinforcement Learning',
        ],
    },
    {
        label: 'Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'C / C++', 'Java', 'Dart', 'SQL'],
    },
    {
        label: 'Frameworks & Web',
        skills: ['React', 'Next.js', 'Node.js', 'Flutter', 'Django'],
    },
    {
        label: 'Tools & Infra',
        skills: ['Git', 'Docker', 'Firebase', 'Jupyter', 'V0', 'VS Code'],
    },
];

// ── Education ──
export const education: Education = {
    degree: 'Bachelor of Computing Science',
    institution: 'Thompson Rivers University',
    period: '2022 – Present',
    bullets: [
        "Dean's List standing every semester.",
        'President of the TRU AI Club — leading workshops, hackathons, and guest speaker series.',
    ],
    icon: '🎓',
};

// ── Contact ──
export const contactLinks: ContactLink[] = [
    {
        name: 'Email',
        value: 'gursahib99888@gmail.com',
        href: 'mailto:gursahib99888@gmail.com',
    },
    {
        name: 'GitHub',
        value: 'Singh-Gursahib',
        href: 'https://github.com/Singh-Gursahib',
        external: true,
    },
    {
        name: 'LinkedIn',
        value: 'gursahibsingh07',
        href: 'https://www.linkedin.com/in/gursahibsingh07',
        external: true,
    },
    {
        name: 'X / Twitter',
        value: '@SinghGursahib07',
        href: 'https://X.com/SinghGursahib07',
        external: true,
    },
];

// ── Hero Badges ──
export const heroBadges = [
    { text: 'President, TRU AI Club', accent: true },
    { text: '$22k+ Research Grants', accent: false },
    { text: 'ACRES Winner — $4k', accent: false },
    { text: "Dean's List · All Semesters", accent: false },
];
