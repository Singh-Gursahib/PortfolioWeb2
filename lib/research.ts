import { Research } from './types';

export const research: Research[] = [
    {
        slug: 'privacy-preserving-ai-assistant',
        amount: '$6,000',
        grantType: 'Undergraduate Research Experience Award Program (UREAP)',
        title: 'Privacy-Preserving University AI Assistant',
        shortDescription:
            'Undergraduate Research Experience Award Program (UREAP) — Developed a locally hosted GenAI assistant using open-source LLMs and RAG.',
        listingDescription:
            'Developed a locally hosted GenAI assistant using open-source LLMs and RAG pipelines to securely index institutional documents. The system keeps all data on-campus, ensuring student privacy while providing intelligent answers to academic queries across multiple departments.',
        award: '🏅 Best Research Paper — ICICET 2025',
        stack: ['RAG', 'Open-Source LLMs', 'Privacy', 'Python'],
        hasDetail: true,
        detailTag: 'AI Research · Privacy · RAG · LLMs · Education',
        detailSub:
            'Funded through the TRU Undergraduate Research Experience Award Program (UREAP), this project develops a secure, locally-hosted AI assistant tailored to TRU students — utilizing open-source LLMs, Retrieval-Augmented Generation, and voice interfaces while keeping all sensitive data on-campus.',
        timeline: 'Summer 2025',
        role: 'Lead Researcher',
        status: '🏅 Best Paper — ICICET 2025',
        bannerImage: '/research/posters/TRU-LLM-Project-cover.png',
        overview: [
            'Navigating university resources, academic requirements, and support services can be overwhelming. This research project develops a <strong>secure, locally-hosted AI assistant</strong> specifically designed for TRU students — providing timely, accurate answers without sending sensitive data to external cloud APIs.',
            'The core innovation is a <strong>privacy-first RAG pipeline</strong>: public TRU documents (course calendars, policies, FAQs) are chunked, embedded using Sentence-BERT, and stored in a local vector database. When a student asks a question, the system retrieves relevant documents and feeds them to a locally-hosted LLM for context-grounded answers — all within TRU\'s infrastructure.',
        ],
        features: [
            {
                icon: '🔐',
                title: 'Privacy-First Architecture',
                description: 'All LLMs run locally on university hardware. No student queries or institutional data ever leave TRU\'s network, ensuring full data sovereignty.',
            },
            {
                icon: '📚',
                title: 'University Data RAG Assistant',
                description: 'Semantic search over TRU documents — course guides, policies, FAQs — using ChromaDB and Sentence-BERT embeddings for accurate, grounded answers.',
            },
            {
                icon: '🎓',
                title: 'Dynamic Degree Pathway Designer',
                description: 'AI-powered academic planner that suggests optimal course sequences, flags prerequisites, and estimates time-to-completion based on program requirements.',
            },
            {
                icon: '🗣️',
                title: 'Voice-Enabled AI Advisor',
                description: 'Whisper-based speech-to-text and Piper TTS enable conversational interaction — ask questions out loud and receive spoken responses.',
            },
            {
                icon: '💚',
                title: 'Mental Health Resource Navigator',
                description: 'Confidentially connects students with existing TRU support services. Keyword detection identifies wellness queries and directs users to counseling, peer support, and emergency contacts.',
            },
            {
                icon: '📊',
                title: 'Rigorous Benchmarking',
                description: 'Local models (Llama 3, Phi-3, Mistral) benchmarked against GPT-4o and Claude 3 on accuracy, latency, resource usage, and privacy compliance.',
            },
        ],
        detailSections: [
            {
                tag: '// The Four Pillars',
                title: 'Four applications, one privacy-preserving backbone',
                titleAccent: 'one privacy-preserving backbone',
                paragraphs: [
                    'The project is structured around four integrated AI-powered applications, each addressing a distinct student challenge. All four share the same underlying RAG pipeline and locally-deployed LLM infrastructure, ensuring consistent privacy guarantees across every interaction.',
                ],
                subsections: [
                    {
                        heading: 'University Data RAG Assistant',
                        content: 'Public TRU documents are chunked, converted into vector embeddings using Sentence-BERT, and stored in ChromaDB. Student queries trigger semantic retrieval of relevant chunks, which are fed alongside the question to the local LLM for synthesis.',
                    },
                    {
                        heading: 'Dynamic Degree Pathway Designer',
                        content: 'Interfaces with program requirements and course dependencies to suggest personalized academic plans. The LLM understands course descriptions, prerequisites, and scheduling constraints to recommend optimal sequences.',
                    },
                    {
                        heading: 'Voice-Enabled AI Advisor',
                        content: 'Integrates Whisper for speech-to-text and Piper for text-to-speech, providing a conversational interface. Students ask questions naturally and receive spoken answers — a frontend to the RAG Assistant pipeline.',
                    },
                    {
                        heading: 'Mental Health Resource Navigator',
                        content: 'Designed to connect — not counsel. Uses keyword detection and sentiment analysis to identify wellness-related queries, then directs students to official TRU counseling services, peer support groups, or emergency contacts. Privacy is paramount.',
                    },
                ],
            },
            {
                tag: '// Technology & Benchmarking',
                title: 'Local models vs. cloud — a rigorous comparison',
                titleAccent: 'rigorous comparison',
                paragraphs: [
                    'A critical component of this research is systematically benchmarking open-source local LLMs against proprietary cloud models. We evaluate Llama 3 (8B/70B), Phi-3, and Mistral 7B against GPT-4o, Gemini Pro, and Claude 3 using TRU-specific question-answering datasets.',
                ],
                bullets: [
                    'Accuracy: ROUGE, BLEU, and human evaluation on TRU-specific Q&A datasets',
                    'Latency: End-to-end response time measured on local GPU hardware',
                    'Resource Usage: VRAM, RAM, and CPU consumption during inference',
                    'Privacy Compliance: Data flow auditing to verify no sensitive information leaves the local environment',
                ],
            },
            {
                tag: '// Academic Impact',
                title: 'A blueprint for responsible educational AI',
                titleAccent: 'responsible educational AI',
                paragraphs: [
                    'This research contributes to the growing body of work on privacy-preserving AI in education. By demonstrating that locally-hosted, open-source solutions can achieve competitive performance with cloud APIs, the project provides a practical blueprint for institutions seeking to leverage AI without compromising student data.',
                    'The work was recognized with the <strong>Best Research Paper award at ICICET 2025</strong>, validating the practical significance of the privacy-first approach in educational technology.',
                ],
            },
        ],
        techStack: [
            { name: 'Llama 3 / Phi-3 / Mistral', role: 'Local LLM Inference' },
            { name: 'ChromaDB', role: 'Vector Database' },
            { name: 'Sentence-BERT', role: 'Text Embeddings' },
            { name: 'LangChain', role: 'RAG Orchestration' },
            { name: 'Whisper', role: 'Speech-to-Text' },
            { name: 'Piper TTS', role: 'Text-to-Speech' },
            { name: 'Python / FastAPI', role: 'Backend API' },
        ],
        impact: [
            'Awarded <strong>Best Research Paper at ICICET 2025</strong>, validating the practical significance of privacy-preserving AI for education.',
            'Demonstrated that <strong>local open-source LLMs</strong> can achieve competitive accuracy with cloud APIs on domain-specific tasks while maintaining full data sovereignty.',
            'Developed a <strong>reproducible blueprint</strong> for institutions seeking to deploy AI student support systems without sending data to external providers.',
            'Secured <strong>$6,000 in UREAP funding</strong> and support from faculty supervisors Dr. Ghazanfar Latif and Dr. Jaspreet Kaur.',
        ],
    },
    {
        slug: 'microbiology-curriculum-digitization',
        amount: '$5,000',
        grantType: 'Internal Research Fund (TRU)',
        title: 'Microbiology Curriculum Digitization',
        shortDescription:
            "Internal Research Fund (TRU) Grant — Created AI-enhanced simulations and pedagogical studies for TRU's Microbiology department.",
        listingDescription:
            "Created AI-enhanced simulations for TRU's Microbiology department and conducted pedagogical studies on visual learning outcomes. The platform transforms traditional lab exercises into interactive web-based experiments with guided walkthroughs and adaptive quizzes.",
        stack: ['Web Platform', 'AI Simulations', 'Pedagogy'],
        hasDetail: true,
        detailTag: 'EdTech · Simulations · Interactive Learning · Research',
        detailSub:
            'A collaborative research project with TRU\'s Microbiology department that transforms how students learn about the microscopic world — through interactive virtual lab simulations guided by virtual scientist mentors like Louis Pasteur and Robert Koch.',
        timeline: '2024–Present',
        role: 'Computing Science Researcher',
        status: 'Active Research',
        bannerImage: '/research/posters/microbiology-poster-cover.png',
        overview: [
            'Microbiology involves concepts that are abstract and invisible to the naked eye. Visualizing the microscopic world and connecting foundational theories to their historical origins is inherently difficult — leading to lower student engagement and weaker concept retention.',
            'This project develops an <strong>interactive virtual discovery platform</strong> that reimagines microbiology education. Students actively recreate historical experiments by pioneering scientists — stepping into the shoes of Pasteur, Koch, Leeuwenhoek, and Fleming — within simulated virtual labs guided by AI-powered virtual mentors.',
        ],
        features: [
            {
                icon: '🔬',
                title: 'Historical Experiment Simulations',
                description: 'Actively recreate experiments by Pasteur, Koch, Leeuwenhoek, and Fleming — manipulate variables and observe outcomes in virtual labs.',
            },
            {
                icon: '🧑‍🔬',
                title: 'Virtual Scientist Mentors',
                description: 'AI-powered characters like a virtual Louis Pasteur guide students through the narrative of discovery, contextualizing concepts within their historical breakthroughs.',
            },
            {
                icon: '📈',
                title: 'Progressive Skill Building',
                description: 'Students journey from foundational observations to complex applications — building systematic understanding through a carefully scaffolded curriculum.',
            },
            {
                icon: '📝',
                title: 'Integrated Assessment',
                description: 'Quizzes and comprehension checks are embedded after simulation tasks, reinforcing learning and measuring concept retention in real-time.',
            },
            {
                icon: '🎮',
                title: 'Physics-Based Immersion',
                description: 'JavaScript physics libraries and 3D tools create realistic, immersive virtual lab environments for engaging experimentation.',
            },
            {
                icon: '👶',
                title: 'Broader Audience Activities',
                description: 'Future expansion includes child-friendly interactive activities promoting understanding that not all bacteria are harmful and highlighting their crucial roles.',
            },
        ],
        detailSections: [
            {
                tag: '// Bridging the Gap',
                title: 'Making the invisible world tangible',
                titleAccent: 'tangible',
                paragraphs: [
                    'Traditional microbiology education relies heavily on textbooks, static diagrams, and limited lab time. Students struggle to visualize processes happening at the microscopic level, and connecting historical breakthroughs to their modern applications often requires leaps of imagination that textbooks cannot support.',
                    'Our platform transforms passive learning into active exploration. Instead of reading about Pasteur\'s swan-neck flask experiment, students perform it — adjusting variables, observing microbial growth, and reaching the same conclusions that revolutionized medicine over 150 years ago.',
                ],
            },
            {
                tag: '// The Simulation Experience',
                title: 'Guided discovery with virtual mentors',
                titleAccent: 'virtual mentors',
                paragraphs: [
                    'Each simulation module is built around a historical scientist and their landmark contribution. A virtual mentor character guides students through the narrative of discovery — providing context, asking probing questions, and celebrating breakthroughs as they happen.',
                    'The interactions are designed to build scientific intuition. Students don\'t just follow instructions — they make decisions, observe consequences, and draw conclusions, mirroring the authentic process of scientific discovery.',
                ],
                bullets: [
                    'Leeuwenhoek\'s microscopy: observe and classify microorganisms for the first time',
                    'Pasteur\'s spontaneous generation: design and execute the swan-neck flask experiment',
                    'Koch\'s postulates: identify pathogens through systematic investigation',
                    'Fleming\'s penicillin: discover antibiotics through serendipitous observation',
                ],
            },
            {
                tag: '// Interdisciplinary Collaboration',
                title: 'Where computing science meets microbiology',
                titleAccent: 'meets microbiology',
                paragraphs: [
                    'This project is a truly interdisciplinary effort, combining expertise from Microbiology, Educational Technology, Computer Science, and Science History. The team includes Dr. Naowarat Cheeptham (Professor of Microbiology & 2022 3M National Teaching Fellow), Dr. Mridula Sharma (Computer Science), and myself as the Computing Science researcher.',
                    'Our methodology is iterative and evidence-based — we continuously incorporate user feedback and learning analytics to refine the platform, ensuring both scientific accuracy and pedagogical effectiveness.',
                ],
            },
            {
                tag: '// Impact & Future Vision',
                title: 'From prototype to broader educational transformation',
                titleAccent: 'educational transformation',
                paragraphs: [
                    'Early reviews of our Pasteur experiment prototype have been enthusiastic. We\'re actively refining based on feedback, with plans to expand the lab library to cover additional scientists and more advanced experimental techniques.',
                    'Beyond university students, we envision this platform reaching K-12 education and public audiences — promoting understanding of the microbial world, combating germophobia, and highlighting the crucial roles that microbes play in ecosystems and human health.',
                ],
            },
        ],
        techStack: [
            { name: 'JavaScript', role: 'Simulation Logic & Interactivity' },
            { name: 'Physics Libraries', role: 'Realistic Lab Simulations' },
            { name: '3D Tools', role: 'Immersive Virtual Environments' },
            { name: 'Web Platform', role: 'Accessible Browser-Based Delivery' },
            { name: 'AI / NLP', role: 'Virtual Mentor Characters' },
            { name: 'Learning Analytics', role: 'Assessment & Feedback' },
        ],
        impact: [
            'Addresses <strong>critical gaps in microbiology education</strong> by making abstract, microscopic concepts visible, tangible, and interactive.',
            'Connects <strong>historical breakthroughs to modern applications</strong>, building scientific literacy and appreciation for the history of science.',
            'Demonstrates a <strong>scalable model for STEM education</strong> that can be adapted to other disciplines (chemistry, physics, biology).',
            'Built through <strong>interdisciplinary collaboration</strong> between Computing Science and Microbiology departments, guided by a 3M National Teaching Fellow.',
        ],
    },
    {
        slug: 'health-analytics-web-platform',
        amount: '$4,000',
        grantType: 'Research Assistant Grant',
        grantTypeColor: 'teal',
        title: 'Health Analytics Web Platform',
        shortDescription:
            'Research Assistant $4000 Grant — converted health-science research into a real-time full-stack tracking platform.',
        listingDescription:
            'Serving as Research Assistant to the Dean of Science, converted health-science research data into a real-time full-stack tracking platform. The dashboard visualizes longitudinal health metrics, enabling researchers to identify patterns and generate reports automatically.',
        stack: ['Full-Stack', 'Data Viz', 'Health Science', 'Real-time'],
        bannerImage: '/assets/images/profile/profile-placeholder.png',
        hasDetail: false,
    },
    {
        slug: 'ai-simulations-physics-education',
        amount: '$3,000',
        grantType: 'Undergrad Research Apprenticeship Fund (URAF)',
        title: 'AI Simulations for Physics Education',
        shortDescription:
            'Undergrad Research Apprenticeship Fund (URAF) — Built an agent-based multimodal system for physics course material.',
        listingDescription:
            'Built an agent-based multimodal system that transforms physics course material into interactive simulations. The AI agent ingests lecture slides, textbook content, and problem sets, then generates visual experiments students can manipulate to build intuition about physical concepts.',
        stack: ['Multimodal AI', 'Agent-based', 'Physics', 'Simulations'],
        bannerImage: '/assets/images/profile/profile-placeholder.png',
        hasDetail: false,
    },
];
