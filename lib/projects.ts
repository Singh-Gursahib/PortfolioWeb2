import { Project } from './types';

export const projects: Project[] = [
    {
        slug: 'verbi',
        num: '01',
        tag: 'Gen AI · EdTech',
        name: 'Verbi — AI-Powered Study Bot',
        shortDescription:
            'AI-powered study bot that transforms lecture notes and PDFs into dynamic, adaptive quizzes. Built in a 3-day hackathon using React, Next.js, and LLM APIs.',
        listingDescription:
            'AI-powered study bot designed to transform the learning experience. Converts user-provided materials into dynamic, interactive quizzes using Generative AI. Features adaptive difficulty, spaced repetition, detailed analytics, and an AI note assistant — built in a 3-day hackathon.',
        stack: ['React', 'Next.js', 'TypeScript', 'LLM API', 'PDF Processing'],
        hasDetail: true,
        detailTag: 'Gen AI · Hackathon · Adaptive Learning',
        detailSub:
            'Verbi is an AI-powered study bot designed to transform the learning experience. Developed rapidly over an intense 3-day hackathon using React and Next.js, Verbi addresses the challenges of passive studying by turning user-provided materials into dynamic, interactive quizzes and learning tools.',
        timeline: '3-Day Hackathon Sprint',
        role: 'Full-Stack Lead & AI Architect',
        teamSize: '3 Developers',
        status: 'Proof of Concept',
        statusHighlight: false,
        bannerImage: '/projects/verbi/verbi-cover.png',
        videoUrl: 'https://www.youtube.com/embed/gB_ggwkMVc4?si=kVDJfyFTX0aAwM5Z',
        githubUrl: 'https://github.com/Singh-Gursahib',
        overview: [
            'Traditional study methods often involve passively reading notes or textbooks, leading to lower retention and engagement. Verbi tackles this by leveraging Generative AI to create a personalized and adaptive learning environment.',
            'It empowers learners by <strong>automatically generating quizzes</strong> from their notes, tracking their progress with insightful analytics, and adapting question difficulty based on performance — making studying significantly more effective and engaging.',
        ],
        features: [
            {
                icon: '🤖',
                title: 'AI-Driven Quiz Generation',
                description: 'Create personalized quizzes from topics, text, or PDFs using advanced AI algorithms.',
            },
            {
                icon: '🧠',
                title: 'LLM-Powered Personalization',
                description: 'Large Language Models analyze performance to tailor questions to the right difficulty level.',
            },
            {
                icon: '🎯',
                title: 'Focused Practice',
                description: 'Identify and strengthen weak areas with targeted exercises and explanations.',
            },
            {
                icon: '🔄',
                title: 'Spaced Repetition',
                description: 'Optimize long-term retention with a scientifically-backed spaced repetition system.',
            },
            {
                icon: '📊',
                title: 'Progress Tracking',
                description: 'Visualize your learning journey with detailed analytics and progress reports.',
            },
            {
                icon: '📈',
                title: 'Continuous Improvement',
                description: 'The AI constantly evolves, learning from user interactions to provide an ever-improving experience.',
            },
            {
                icon: '📄',
                title: 'PDF Processing',
                description: 'Seamlessly upload and process PDF notes and slides for quiz and content generation.',
            },
            {
                icon: '✍️',
                title: 'AI Note Assistant',
                description: 'Interact with uploaded notes for in-context explanations, summaries, and definitions.',
            },
        ],
        detailSections: [
            {
                tag: '// Quiz Generation',
                title: 'From PDF to quiz instantly',
                titleAccent: 'instantly',
                paragraphs: [
                    'Verbi offers multiple flexible ways to generate quizzes tailored to your study needs. You can simply enter a topic and let the AI generate relevant questions, paste your notes directly, or upload your PDF documents.',
                    'One of the standout features developed during the hackathon is the ability to process uploaded PDF files. Verbi intelligently parses your lecture slides, notes, or textbook chapters, extracts the key information, and automatically converts it into interactive quiz questions — saving valuable study time.',
                ],
                image: '/projects/verbi/verbi-quiz-generator-pdf-upload.png',
                imageCaption: 'PDF upload and quiz generation interface',
            },
            {
                tag: '// Adaptive Engine',
                title: 'Personalized difficulty curve',
                titleAccent: 'difficulty curve',
                paragraphs: [
                    "Verbi's quizzes aren't static. The platform employs an adaptive learning engine powered by Large Language Models to dynamically adjust the difficulty based on your performance, ensuring you're always learning effectively.",
                ],
                image: '/projects/verbi/verbi-adaptive-questionnaire.png',
                imageCaption: 'Adaptive questionnaire adjusting difficulty in real-time',
                subsections: [
                    {
                        heading: 'Intelligent Difficulty Scaling',
                        content: 'If you answer incorrectly, Verbi identifies the knowledge gap and introduces simpler, related questions to help build a solid foundation on that subtopic. Conversely, if you consistently answer correctly, the system presents more challenging questions to deepen your understanding.',
                    },
                    {
                        heading: 'Real-time Feedback',
                        content: 'During the quiz, the "Dynamic Performance Chart" provides immediate visual feedback on your mastery of different subtopics, helping you understand your strengths and weaknesses on the fly.',
                    },
                ],
            },
            {
                tag: '// Analytics & Dashboard',
                title: 'Your learning journey hub',
                titleAccent: 'learning journey',
                paragraphs: [
                    'Understanding your progress is crucial for effective learning. Verbi provides detailed analytics both after each quiz and through a comprehensive user dashboard.',
                    'After completing a quiz, you receive a detailed breakdown including your score, correct/incorrect answers, and AI-generated recommendations suggesting specific areas for improvement.',
                ],
                image: '/projects/verbi/verbi-performance-charts.png',
                imageCaption: 'Radar charts and performance visualization',
                bullets: [
                    'Radar Charts — Show topic mastery across different subject areas',
                    'Time Charts — Track time per question to identify areas needing more focus',
                    'Overall accuracy and score trends across quizzes',
                    'Badge progress for mastering difficulty levels',
                    'Review recently answered incorrect questions',
                ],
            },
            {
                tag: '// AI-Enhanced Notes',
                title: 'Instant contextual help',
                titleAccent: 'contextual help',
                paragraphs: [
                    'Verbi transforms static notes into dynamic learning resources. After uploading a PDF, you can interact directly with the content using the integrated AI assistant.',
                    "Simply highlight any text within your uploaded document, and Verbi's AI assistant offers instant options:",
                ],
                image: '/projects/verbi/verbi-ai-note-assistant.png',
                imageCaption: 'AI note assistant with contextual interaction',
                bullets: [
                    'Explain the concept — optionally using analogies based on your interests',
                    'Expand on the topic — for more detailed understanding',
                    'Define specific terms — quick reference for key vocabulary',
                    'Summarize the selected text — in bullet points for quick review',
                ],
            },
        ],
        techStack: [
            { name: 'React', role: 'UI Framework' },
            { name: 'Next.js', role: 'Full-Stack Framework' },
            { name: 'TypeScript', role: 'Type Safety' },
            { name: 'Tailwind CSS', role: 'Styling' },
            { name: 'LLM API', role: 'AI / Quiz Generation' },
            { name: 'PDF.js', role: 'Document Processing' },
        ],
        techChallenges: [
            '<strong>Time Constraint:</strong> Implementing a feature-rich AI application in just 3 days.',
            '<strong>LLM Integration:</strong> Effectively prompting and utilizing the LLM for adaptive questioning and reliable note assistance.',
            '<strong>PDF Parsing:</strong> Handling various PDF structures and reliably extracting meaningful content.',
            '<strong>UI/UX Design:</strong> Creating an intuitive and visually appealing interface under pressure using React & Next.js.',
        ],
        impact: [
            'Successfully demonstrates the potential of AI to create <strong>highly personalized and adaptive learning tools</strong>.',
            'Showcases the ability to rapidly prototype and integrate <strong>complex AI features</strong> — adaptive quizzing, PDF processing, and contextual AI assistance — into a functional web application.',
            'Serves as a strong <strong>proof-of-concept</strong> for a more intelligent and engaging way to study, moving beyond traditional methods towards learning technology that adapts to the individual learner.',
            'Plan to make Verbi <strong>open-source</strong> to foster community contribution and wider accessibility.',
        ],
    },
    {
        slug: 'ai-trading-platform',
        num: '02',
        tag: 'FinTech · AI',
        tagColor: 'teal',
        name: 'AlphaSage AI — Trading & Investment Platform',
        shortDescription:
            'Analytics pipeline generating pro-grade investment reports from 50+ financial data sources. Python backend for strategy backtesting, Next.js frontend for interactive charting.',
        listingDescription:
            'Engineered an analytics pipeline that generates professional investment reports from 50+ financial data sources. Integrated a Python backend for strategy backtesting and a Next.js frontend for interactive charting and portfolio visualization.',
        stack: ['TypeScript', 'Python', 'Gemini', 'Llama', 'Next.js'],
        hasDetail: true,
        detailTag: 'FinTech · AI Pipeline · Full-Stack',
        detailSub:
            'AlphaSage AI is a comprehensive trading and investment platform that democratizes access to sophisticated research capabilities and backtesting functionalities traditionally reserved for institutional traders — powered by a novel dual-LLM report generation pipeline.',
        timeline: 'Ongoing Development',
        role: 'Solo Developer & AI Architect',
        teamSize: '1 Developer',
        status: 'In Active Development',
        statusHighlight: false,
        bannerImage: '/projects/alphasage-ai/landing-page.png',
        videoUrl: 'https://www.youtube.com/embed/zv4PTZmLCBU',
        overview: [
            'Retail traders and investors often lack access to the institutional-grade research tools that give hedge funds their edge. AlphaSage AI bridges this gap by combining real-time market data, AI-driven analysis, and Python-powered strategy backtesting into a single, accessible platform.',
            'The core innovation is a <strong>dual-LLM report generation pipeline</strong>: Google Gemini performs deep company analysis (fundamentals, sentiment, outlook), then LLaMA via Groq converts each section into polished, publication-ready HTML. The result is a professional investment report generated in minutes — not hours.',
        ],
        features: [
            {
                icon: '📊',
                title: 'Real-Time Charting',
                description: 'Professional-grade TradingView charts with candlestick data, multiple timeframes, and custom-calculated indicators (SMA, EMA, RSI, MACD, Bollinger Bands).',
            },
            {
                icon: '🐍',
                title: 'Python Backtesting',
                description: 'Integrated code editor for writing and running trading strategies against historical data, with detailed performance metrics and trade logs.',
            },
            {
                icon: '🤖',
                title: 'Dual-LLM Report Pipeline',
                description: 'Gemini analyzes 50+ data points per company, then LLaMA formats the output into a polished multi-page HTML report — downloadable as PDF.',
            },
            {
                icon: '📈',
                title: 'Technical Indicators',
                description: 'Custom-written calculation formulas for SMA, EMA, RSI, MACD, Bollinger Bands, and Volume — mirroring industry-standard accuracy.',
            },
            {
                icon: '⚙️',
                title: 'Configurable Settings',
                description: 'Users customize API keys, default chart settings, risk tolerance levels, and notification preferences through a dedicated settings panel.',
            },
            {
                icon: '🔐',
                title: 'Supabase Auth & Storage',
                description: 'PostgreSQL-backed authentication, user settings persistence, saved strategies, and cached analysis data via Supabase.',
            },
        ],
        detailSections: [
            {
                tag: '// The Intelligence Pipeline',
                title: 'Two LLMs, one professional report',
                titleAccent: 'one professional report',
                paragraphs: [
                    'The heart of AlphaSage is its multi-stage AI pipeline — a carefully orchestrated chain where each model plays to its strengths. Rather than asking a single LLM to do everything, we decompose the problem: one model reasons deeply about finance, another excels at structured HTML formatting.',
                    'First, Google Gemini 2.5 Pro receives a comprehensive prompt that guides it through fundamental analysis, market sentiment, financial health, and growth outlook. Gemini returns a rich, structured text report. The backend then parses this into discrete sections — each one fed to LLaMA 3.2 via the Groq API for lightning-fast conversion into beautifully formatted HTML.',
                ],
                subsections: [
                    {
                        heading: 'Why Two Models?',
                        content: 'Gemini excels at deep reasoning over financial data but its raw output needs formatting. LLaMA via Groq provides near-instant (<500ms) HTML generation per section. This separation of concerns yields both depth of analysis and speed of delivery.',
                    },
                    {
                        heading: 'Report Assembly',
                        content: 'Individual HTML sections are stitched together into a complete multi-page report with consistent styling, navigation, and automatic table of contents. Users can view in-browser or download as PDF.',
                    },
                ],
            },
            {
                tag: '// Strategy Backtesting',
                title: 'Write it in Python, test it against history',
                titleAccent: 'test it against history',
                paragraphs: [
                    'AlphaSage includes a full integrated code editor where users write custom Python trading strategies. The backtesting engine processes these strategies against historical OHLC data from Yahoo Finance, simulating trades and calculating comprehensive performance metrics.',
                ],
                image: '/projects/alphasage-ai/strategy-editor.png',
                imageCaption: 'Python strategy editor with backtesting results and performance metrics',
                bullets: [
                    'Initial Investment vs. Final Value comparison',
                    'Total Return %, Annualized Return, and Sharpe Ratio',
                    'Total Trades, Win Rate, and Max Drawdown',
                    'Visual equity curve and recent trade log',
                ],
            },
            {
                tag: '// Market Charting',
                title: 'Pro-grade charts built from scratch',
                titleAccent: 'from scratch',
                paragraphs: [
                    'The charting interface provides interactive analysis with TradingView-powered candlestick charts. Users can select any ticker symbol, choose timeframes (1D to 5Y), switch between chart styles (candlestick, line, area), and overlay multiple technical indicators — all calculated using custom-written formulas validated against industry standards.',
                ],
                image: '/projects/alphasage-ai/chart-analysis.png',
                imageCaption: 'Real-time chart analysis with multiple technical indicators and timeframes',
            },
            {
                tag: '// AI Research Reports',
                title: 'From ticker to professionally formatted insight',
                titleAccent: 'insight',
                paragraphs: [
                    'The AI Research Assistant transforms a simple user prompt ("Analyze Apple for long-term investment") into a comprehensive, multi-page company report. The system fetches financial data, processes it through Gemini for deep analysis, and then uses LLaMA via Groq to format each section into presentation-ready HTML.',
                    'Reports cover company overview, financial performance metrics, competitive positioning, market sentiment analysis, risk assessment, and a synthesized investment outlook — all generated in minutes rather than the hours a human analyst would require.',
                ],
                image: '/projects/alphasage-ai/ai-research-report-overview-performance.png',
                imageCaption: 'AI-generated investment report with performance analysis section',
            },
        ],
        techStack: [
            { name: 'Next.js', role: 'Frontend Framework' },
            { name: 'TypeScript', role: 'Type Safety' },
            { name: 'Python', role: 'Backtesting Engine' },
            { name: 'Google Gemini', role: 'Deep Company Analysis' },
            { name: 'Groq (LLaMA)', role: 'Fast HTML Report Formatting' },
            { name: 'TradingView', role: 'Chart Rendering' },
            { name: 'Yahoo Finance API', role: 'Market Data Source' },
            { name: 'Supabase', role: 'Auth, Database & Storage' },
        ],
        techChallenges: [
            '<strong>Dual-LLM Pipeline Orchestration:</strong> Designing the multi-step AI pipeline (Gemini for analysis → parsing → LLaMA via Groq for HTML) required careful prompt engineering, error handling, and data flow integrity.',
            '<strong>Real-Time Data Reliability:</strong> Efficiently ingesting market data from Yahoo Finance while managing rate limits, data gaps, and inconsistencies across timeframes.',
            '<strong>Python ↔ Next.js Integration:</strong> Bridging the frontend with the Python backtesting engine via APIs for strategy submission, execution, and result delivery.',
            '<strong>Custom Indicator Accuracy:</strong> Implementing and validating SMA, EMA, RSI, MACD, and Bollinger Band calculations to mirror institutional-grade accuracy.',
        ],
        impact: [
            'Demonstrates a novel <strong>dual-LLM architecture</strong> where Gemini handles deep financial reasoning and LLaMA/Groq handles rapid formatting — achieving both analytical depth and speed.',
            'Automates complex <strong>company research workflows</strong> that traditionally require hours of analyst time, delivering professional-grade reports in minutes.',
            'Provides a <strong>full-stack trading toolkit</strong> (charting, backtesting, AI reports, settings) in a single integrated platform accessible to retail investors.',
            'Showcases practical <strong>Python-to-web integration</strong> for computationally intensive financial strategy backtesting with rich visualization of results.',
        ],
    },
    {
        slug: 'acres',
        num: '03',
        tag: '🏆 $4k Winner',
        tagColor: 'red',
        name: 'ACRES — AI Construction Manager',
        shortDescription:
            '1st Place, ACRES Innovation Competition. Computer vision for PPE compliance (under 3s), NL→SQL chatbot, and AI-generated Kanban delegation.',
        listingDescription:
            '1st Place Winner of the ACRES Innovation Competition ($4,000 Scholarship). Combines computer vision for PPE compliance detection (under 3s) with an AI chatbot that translates natural language into SQL queries. Automates task delegation via AI-generated Kanban workflows.',
        stack: ['Next.js', 'Gemini', 'Groq', 'Computer Vision'],
        hasDetail: true,
        detailTag: 'AI · Computer Vision · NLP · Agentic AI · Award Winner',
        detailSub:
            'As Team Lead, I spearheaded a team of three TRU Computing Science students to develop the ACRES AI Construction Management Platform — a comprehensive web application featuring automated PPE compliance checks using computer vision, an intelligent AI chatbot for real-time data access via secure SQL queries, and dynamic task generation leveraging AI agentic calls.',
        timeline: 'Fall 2024 Semester',
        role: 'Team Lead & Full-Stack Developer',
        teamSize: '3 Developers',
        status: '🏆 1st Place — $4,000 Scholarship',
        statusHighlight: true,
        bannerImage: '/projects/acres/acres-welcome-screen.png',
        videoUrl: 'https://www.youtube.com/embed/S5VSp2GwVQw?si=sTz_nJEb4I5J1vv2',
        overview: [
            'The construction industry faces significant operational hurdles — manual PPE compliance checks are error-prone, accessing critical site data relies on siloed systems, and managing project tasks requires massive coordination overhead.',
            'ACRES addresses all three challenges in a single integrated platform. We designed and built an <strong>AI-powered web application</strong> featuring automated uniform/PPE compliance using computer vision, an intelligent chatbot for real-time database access via natural language, and dynamic task generation and management leveraging AI agentic calls — earning us <strong>1st Place and a $4,000 scholarship</strong> at the ACRES Competition at Thompson Rivers University.',
        ],
        features: [
            {
                icon: '👁️',
                title: 'Computer Vision PPE Detection',
                description: 'AI-powered system analyzes worker photos in real-time, detecting required PPE items and providing immediate visual feedback — green for detected, red for missing.',
            },
            {
                icon: '💬',
                title: 'NL→SQL Database Chatbot',
                description: 'Natural language chatbot translates user questions into precise SQL queries, providing instant data access without exposing the database structure.',
            },
            {
                icon: '📋',
                title: 'AI-Generated Kanban Tasks',
                description: 'AI agents auto-generate structured task lists from context — work type, site info, quality docs — and organize them into a Kanban board.',
            },
            {
                icon: '⚙️',
                title: 'Site-Specific Configuration',
                description: 'Managers define mandatory PPE per site through a dedicated dashboard, with granular control based on site hazards.',
            },
            {
                icon: '🔒',
                title: 'Secure Data Handling',
                description: 'Raw database structure never exposed via external APIs. AI handles all interactions internally, enhancing security and preventing SQL injection.',
            },
            {
                icon: '🤖',
                title: 'Agentic AI Reasoning',
                description: 'AI reasons over multiple context sources — manager input, ITP documents via RAG, and current Kanban state — to produce relevant task outputs.',
            },
        ],
        detailSections: [
            {
                tag: '// PPE Compliance',
                title: 'Automated uniform verification',
                titleAccent: 'uniform verification',
                paragraphs: [
                    'Enhancing worker safety was a primary goal. Site managers use a dedicated dashboard to define mandatory PPE items (hard hats, safety vests, steel-toe boots, gloves) for each unique construction site, allowing granular control based on site hazards.',
                    'Workers simply capture an image upon arrival. The integrated computer vision model analyzes the photo in real-time, detecting required PPE items. The system provides immediate visual feedback — highlighting detected items in green and missing items in red — enabling quick corrections before entering the work zone.',
                ],
                image: '/projects/acres/acres-uniform-compliance-ai-detection.png',
                imageCaption: 'AI-powered PPE detection with real-time visual feedback',
            },
            {
                tag: '// Database Chatbot',
                title: 'Conversational data access via natural language',
                titleAccent: 'natural language',
                paragraphs: [
                    'Accessing up-to-date information quickly is crucial. We built the "ACRES Database Assistant" — an AI chatbot providing a natural language interface for querying the project\'s operational database securely.',
                    'Users ask questions like "How many employees do we have?" or "Show me the inventory level for concrete." The chatbot translates requests into precise SQL queries, involving complex data retrieval across multiple tables. Crucially, the raw database structure is never exposed via external APIs — the AI handles interactions internally, enhancing security.',
                ],
                image: '/projects/acres/acres-inventory-chatbot-interface.png',
                imageCaption: 'AI chatbot interface translating natural language to SQL',
                subsections: [
                    {
                        heading: 'Secure SQL Integration',
                        content: 'The chatbot doesn\'t just understand language — it translates user requests into precise SQL queries executed against the database backend, ensuring data integrity while preventing SQL injection and direct credential exposure.',
                    },
                    {
                        heading: 'Complex Query Support',
                        content: 'Supports multi-table queries such as finding nearby sites with specific inventory, aggregating employee counts, and generating actionable reports from structured data.',
                    },
                ],
            },
            {
                tag: '// Task Management',
                title: 'AI-powered Kanban delegation',
                titleAccent: 'Kanban delegation',
                paragraphs: [
                    'Streamlining project management was another key focus. The Kanban board provides a clear visual overview of tasks categorized by status (To Do, In Progress, Done), with each card including priority, due dates, descriptions, subtasks, and specific instructions.',
                    'Managers leverage an "AI Agent" to automatically draft task sets for a specific job or phase. By providing context — work type, site information, quality assurance documents, and current board state — the AI generates a structured task list, breaking down work into logical, actionable items and subtasks.',
                ],
                image: '/projects/acres/acres-tasks-kanban-board.png',
                imageCaption: 'Kanban board with AI-generated task breakdown',
                bullets: [
                    'AI analyzes inputs to break down work into logical tasks and subtasks',
                    'Context-aware: considers work type, site info, ITP documents, and current board state',
                    'Outputs structured JSON suitable for Kanban board rendering',
                    'Saves significant planning time and ensures comprehensive coverage',
                ],
            },
            {
                tag: '// Technical Architecture',
                title: 'Integrating diverse AI systems',
                titleAccent: 'diverse AI systems',
                paragraphs: [
                    'Building this platform involved integrating several AI modalities into a cohesive application. Computer vision uses pre-trained detection models fine-tuned on construction site imagery. NLP leverages LLMs for intent recognition and prompt engineering to translate natural language into structured SQL. The agentic framework uses RAG to reason over manager input, ITP documents, and Kanban state.',
                ],
                subsections: [
                    {
                        heading: 'AI & Machine Learning',
                        content: 'Computer vision for PPE detection (fine-tuned on construction imagery), LLMs for intent recognition and SQL generation, and agentic AI with RAG for context-aware task generation.',
                    },
                    {
                        heading: 'Backend & Database',
                        content: 'Relational SQL database schema storing sites, employees, materials, inventory, PPE requirements, tasks, and quality documents. Secure backend logic prevents SQL injection and credential exposure.',
                    },
                    {
                        heading: 'Frontend & State Management',
                        content: 'React & TypeScript UI with Next.js, using appropriate state management for the dynamic Kanban board and real-time chatbot interactions.',
                    },
                ],
            },
        ],
        techStack: [
            { name: 'Next.js', role: 'Full-Stack Framework' },
            { name: 'React', role: 'UI Framework' },
            { name: 'TypeScript', role: 'Type Safety' },
            { name: 'Google Gemini', role: 'AI / NLP / Agentic Reasoning' },
            { name: 'Groq', role: 'LLM Inference' },
            { name: 'Computer Vision', role: 'PPE Detection' },
            { name: 'SQL', role: 'Database & Chatbot Queries' },
        ],
        techChallenges: [
            '<strong>Multi-Modal AI Integration:</strong> Combining computer vision, NLP, and agentic reasoning into a cohesive application with managed dependencies and data flow.',
            '<strong>Secure AI-Database Bridge:</strong> Enabling LLMs to interact with structured SQL data securely while preventing vulnerabilities.',
            '<strong>Real-Time Detection:</strong> Achieving reliable PPE detection under diverse lighting conditions and partial occlusions.',
            '<strong>Competition Deadline:</strong> Delivering a feature-rich, polished platform under tight university competition timelines.',
        ],
        impact: [
            'Awarded <strong>1st Place and a $4,000 scholarship</strong> at the ACRES Competition, Thompson Rivers University (December 2024).',
            'Demonstrated seamless integration of <strong>three distinct AI modalities</strong> — computer vision, NLP chatbot, and agentic task generation — into a single production-ready platform.',
            'Validated practical application of <strong>AI-powered safety compliance</strong> for the construction industry, with sub-3-second PPE detection.',
            'Reinforced skills across the <strong>entire development stack</strong> — from designing intuitive React/TypeScript interfaces to building robust backend APIs and managing database interactions.',
            'Honed abilities in <strong>team leadership, project planning, and problem decomposition</strong> under competition deadlines.',
        ],
    },
    {
        slug: 'aura-robotics',
        num: '05',
        tag: 'Robotics · Research',
        tagColor: 'teal',
        name: 'AURA — Vision-Controlled Robotic Arm',
        shortDescription:
            'A $150 gesture-controlled robotic arm that replaces $25K+ industrial solutions. Uses MediaPipe hand tracking and IoT to enable no-code control via natural hand movements.',
        listingDescription:
            'A research project reimagining industrial robotics through accessibility. AURA uses computer vision (MediaPipe) to track hand gestures in real-time, translating them into servo commands via IoT — replacing $25K+ industrial arms with a $150 solution requiring zero programming knowledge.',
        stack: ['Python', 'MediaPipe', 'IoT', 'Computer Vision', 'Arduino'],
        hasDetail: true,
        detailTag: 'Research · Computer Vision · IoT · Robotics',
        detailSub:
            'AURA (Autonomous Utilities Robotic Arm) reimagines industrial robotic control by replacing traditional programming interfaces with natural hand gestures tracked through computer vision — making precision robotics accessible to anyone, at a fraction of the cost.',
        timeline: 'Active Research — 2024–Present',
        role: 'Lead Researcher & Developer',
        teamSize: '2 Researchers',
        status: 'Research Paper In Progress',
        statusHighlight: true,
        bannerImage: '/projects/aura/aura-hero-shot.png',
        videoUrl: 'https://www.youtube.com/embed/UHdIT01YlOA?si=UHdIT01YlOA',
        overview: [
            'Industrial robotic arms are powerful tools — but they come with steep barriers. Even basic models start at <strong>$25,000+</strong>, require specialized programming knowledge, and demand extensive training to operate safely. This locks out small businesses, educational institutions, and developing economies from automation benefits.',
            'AURA flips this paradigm entirely. Using a standard webcam and <strong>MediaPipe hand tracking</strong>, the system captures 21 hand landmarks in real-time and translates natural gestures into servo motor commands via IoT protocols. The result: a fully functional robotic arm controllable by anyone who can move their hand — <strong>no coding required, total cost under $150</strong>.',
        ],
        features: [
            {
                icon: '✋',
                title: 'Gesture-Based No-Code Control',
                description: 'Real-time hand tracking via MediaPipe captures 21 landmarks per hand, mapping finger positions and wrist orientation directly to servo angles — no programming needed.',
            },
            {
                icon: '💰',
                title: '$150 vs $25,000+',
                description: 'Complete BOM under $150 using commodity hardware (Arduino, SG90 servos, standard webcam) — a 99.4% cost reduction versus entry-level industrial arms.',
            },
            {
                icon: '🌐',
                title: 'IoT-Enabled Architecture',
                description: 'MQTT-based communication allows remote control over any network. The arm can be operated from anywhere with a webcam and internet connection.',
            },
            {
                icon: '🎓',
                title: 'Research-Driven Design',
                description: 'Built as an academic research project at TRU with a formal research paper in progress, grounded in human-robot interaction literature.',
            },
            {
                icon: '📐',
                title: 'Inverse Kinematics',
                description: 'Mathematical model maps 3D hand coordinates to joint angles, providing smooth and precise multi-axis arm movement from natural gestures.',
            },
            {
                icon: '🔧',
                title: 'Modular & Hackable',
                description: 'Open hardware design with 3D-printable components. Easily extensible for different end-effectors, additional DoF, or alternative control inputs.',
            },
        ],
        detailSections: [
            {
                tag: '// The Problem Worth Solving',
                title: 'A $25,000 barrier to automation',
                titleAccent: '$25,000 barrier',
                paragraphs: [
                    'The current landscape of industrial robotics is defined by exclusion. Entry-level robotic arms from companies like Universal Robots or FANUC start at $25,000 — and that\'s before the cost of training operators, developing control programs, and maintaining the systems.',
                    'This pricing model means that small workshops, schools, research labs in developing nations, and hobbyist makers are effectively locked out of robotic automation. AURA was born from a simple question: what if we could collapse both the financial and technical barriers simultaneously?',
                ],
            },
            {
                tag: '// The AURA Approach',
                title: 'Your hand becomes the controller',
                titleAccent: 'the controller',
                paragraphs: [
                    'AURA\'s control paradigm is radically different from traditional robotics. Instead of writing G-code, learning proprietary software, or configuring teach pendants, the operator simply moves their hand in front of a standard webcam.',
                    'Google\'s MediaPipe framework extracts 21 hand landmarks in real-time at 30+ FPS. Our mapping layer translates finger curl angles, wrist rotation, and palm position into corresponding servo commands. Pinch your thumb and index finger — the gripper closes. Rotate your wrist — the arm rotates. The entire interaction model is intuitive enough for a first-time user to operate within seconds.',
                ],
                image: '/projects/aura/product.png',
                imageCaption: 'AURA robotic arm prototype with gesture-based control',
                bullets: [
                    'Thumb-index pinch → gripper open/close',
                    'Wrist rotation → base rotation',
                    'Hand raise/lower → shoulder joint control',
                    'Finger extension patterns → elbow and wrist articulation',
                ],
            },
            {
                tag: '// System Architecture',
                title: 'From pixels to servo pulses',
                titleAccent: 'servo pulses',
                paragraphs: [
                    'The AURA system follows a three-stage pipeline: capture, compute, and actuate. A standard USB webcam feeds frames to a Python application running MediaPipe for hand landmark detection. The computed joint angles are transmitted via MQTT over Wi-Fi to an Arduino microcontroller, which generates PWM signals for the SG90 servo motors.',
                ],
                image: '/projects/aura/architecture.png',
                imageCaption: 'System architecture: webcam → MediaPipe → MQTT → Arduino → servos',
                subsections: [
                    {
                        heading: 'Vision Layer',
                        content: 'MediaPipe Hand Tracking extracts 21 3D landmarks per hand at 30+ FPS, providing real-time finger positions and orientations with sub-centimeter accuracy using only a standard webcam.',
                    },
                    {
                        heading: 'Communication Layer',
                        content: 'MQTT protocol enables low-latency, reliable message passing between the Python vision server and the Arduino controller — works over local Wi-Fi or across the internet.',
                    },
                    {
                        heading: 'Actuation Layer',
                        content: 'Arduino Uno drives 5–6 SG90 micro servos via PWM, with a PCA9685 servo driver for expanded channel support and smoother multi-axis coordination.',
                    },
                ],
            },
            {
                tag: '// Academic Contribution',
                title: 'Toward accessible human-robot interaction',
                titleAccent: 'accessible',
                paragraphs: [
                    'AURA is more than an engineering project — it\'s a research contribution to the field of human-robot interaction (HRI). Our work is grounded in the literature on gesture-based interfaces, low-cost robotics for education, and the democratization of automation tools.',
                    'We are currently preparing a formal research paper that benchmarks AURA\'s gesture recognition accuracy, latency characteristics, and usability against existing solutions. Preliminary results show that untrained users can successfully operate the arm within 30 seconds of first interaction — a metric that underscores the power of the no-code paradigm.',
                ],
            },
        ],
        techStack: [
            { name: 'Python', role: 'Vision Processing & Control Logic' },
            { name: 'MediaPipe', role: 'Hand Landmark Detection' },
            { name: 'OpenCV', role: 'Camera & Image Processing' },
            { name: 'MQTT', role: 'IoT Communication Protocol' },
            { name: 'Arduino', role: 'Microcontroller & Servo Control' },
            { name: 'SG90 Servos', role: 'Actuation (5–6 DOF)' },
        ],
        impact: [
            'Achieved a <strong>99.4% cost reduction</strong> compared to entry-level industrial robotic arms ($150 BOM vs $25,000+).',
            'Demonstrated that <strong>zero-training operation</strong> is possible — untrained users successfully control the arm within 30 seconds of first interaction.',
            'Validated the <strong>no-code robotics paradigm</strong> using commodity hardware (webcam, Arduino, hobby servos), proving accessibility doesn\'t require expensive proprietary systems.',
            'Contributing to the <strong>academic literature</strong> on low-cost human-robot interaction with a research paper in preparation at Thompson Rivers University.',
            'Open hardware design enables <strong>reproducibility and extensibility</strong> for educational institutions and maker communities worldwide.',
        ],
    },
    {
        slug: 'lifelens',
        num: '04',
        tag: 'Wellness · AI',
        name: 'LifeLens — AI Journaling Companion',
        shortDescription:
            'Multimodal AI journaling platform that analyzes entries and delivers personalized growth insights, turning reflection into data-driven self-improvement.',
        listingDescription:
            'A multimodal AI journaling platform that analyzes entries using text and image pipelines, then delivers personalized growth insights — turning daily reflection into data-driven self-improvement.',
        stack: ['React', 'TypeScript', 'AI / LLM', 'Data Viz'],
        hasDetail: true,
        detailTag: 'HCI · AI · Data Visualization · Wellness',
        detailSub:
            'Built for my Human-Computer Interaction course at TRU, LifeLens transforms journaling from simple text entry into an insightful, interactive experience — powered by AI analysis, multimodal input (voice, camera, keyboard), and rich data visualizations.',
        timeline: 'April 2025',
        role: 'Solo Developer & Designer',
        teamSize: '1 Developer',
        status: 'Completed — University Project',
        statusHighlight: false,
        bannerImage: '/projects/lifelens/lifelens-dashboard-overview.png',
        videoUrl: 'https://www.youtube.com/embed/_XXdjuo5bBg?si=E7IhKyWmF-uyiLjY',
        overview: [
            'Traditional journaling apps treat entries as static text — write, save, forget. LifeLens reimagines the experience by making every entry a data point in a broader picture of personal growth and emotional well-being.',
            'The platform combines <strong>three input modalities</strong> (keyboard, voice, and camera OCR), an <strong>AI analysis engine</strong> that scores entries across emotional dimensions, and <strong>year-long heatmap visualizations</strong> that reveal patterns invisible in day-to-day reflection. The result is a journaling companion that helps users understand themselves better.',
        ],
        features: [
            {
                icon: '🧠',
                title: 'AI Sentiment Analysis',
                description: 'After saving, an LLM analyzes entry text and scores it across Happiness, Energy, Mindfulness, Stress, and Productivity — providing personalized feedback and suggestions.',
            },
            {
                icon: '🗣️',
                title: 'Voice-to-Text Input',
                description: 'Speech-to-text integration lets users speak their thoughts directly into the journal editor, removing friction from the writing process.',
            },
            {
                icon: '📷',
                title: 'Camera OCR (Image-to-Text)',
                description: 'Point a camera at a handwritten journal page and LifeLens extracts the text via OCR, bridging physical and digital journaling.',
            },
            {
                icon: '🔥',
                title: 'Year-Long Heatmaps',
                description: 'GitHub-style heatmaps visualize Mood, Energy, Productivity, and Creativity trends across the entire year — revealing patterns at a glance.',
            },
            {
                icon: '✍️',
                title: 'Markdown Editor',
                description: 'Full Markdown support with live preview, formatting guide, and AI-powered auto-formatting that structures raw text with headings, lists, and emphasis.',
            },
            {
                icon: '🏆',
                title: 'Gamified Motivation',
                description: 'Badges and achievements like "Consistency Champion" and "Gratitude Guru" encourage regular journaling through gentle gamification.',
            },
        ],
        detailSections: [
            {
                tag: '// Designed for Humans First',
                title: 'An HCI-driven journaling experience',
                titleAccent: 'HCI-driven',
                paragraphs: [
                    'LifeLens was built with a deep focus on Human-Computer Interaction principles. Every design decision — from the distraction-free writing canvas to the one-click quick entry — was informed by HCI theory on cognitive load reduction, immediate feedback, and intuitive affordances.',
                    'The dashboard greets users personally, offers a single-click "Quick Journal Entry" button, and surfaces recent entries, favorite posts, and earned badges. The goal: reduce friction to zero so users focus on reflection, not navigation.',
                ],
                image: '/projects/lifelens/lifelens-dashboard-overview.png',
                imageCaption: 'Personalized dashboard with quick entry, recent journals, and achievement badges',
            },
            {
                tag: '// Multimodal Input',
                title: 'Write it, speak it, or photograph it',
                titleAccent: 'speak it, or photograph it',
                paragraphs: [
                    'Not everyone journals the same way. LifeLens meets users where they are with three distinct input methods — all converging into the same Markdown-powered editor.',
                    'The keyboard path provides a clean writing canvas with Markdown formatting. The voice path uses speech-to-text to transcribe spoken thoughts in real-time. And the camera path uses OCR to extract text from handwritten pages — perfect for users who prefer pen and paper but want the benefits of digital analysis.',
                ],
                image: '/projects/lifelens/lifelens-voice-input.png',
                imageCaption: 'Voice input interface for hands-free journal entry',
                subsections: [
                    {
                        heading: 'AI Auto-Formatting',
                        content: 'A single click sends raw text through an LLM that adds Markdown structure — headings, bullet points, emphasis — transforming stream-of-consciousness into organized entries.',
                    },
                    {
                        heading: 'Live Preview',
                        content: 'Toggle between Write and Preview modes to see formatted output instantly. A built-in Markdown guide helps new users learn the syntax as they write.',
                    },
                ],
            },
            {
                tag: '// The AI Behind the Insights',
                title: 'Every entry becomes a data point',
                titleAccent: 'a data point',
                paragraphs: [
                    'After saving an entry, LifeLens runs it through a locally-hosted LLM (Llama) that performs multi-dimensional sentiment analysis. The model scores the entry across Happiness, Energy, Mindfulness, Stress, Productivity, and Creativity — then generates personalized textual feedback and suggestions for reflection.',
                    'If the user skipped the title, the AI generates a contextual one. These scores feed into the dashboard heatmaps, building a comprehensive emotional profile over time.',
                ],
                image: '/projects/lifelens/lifelens-ai-analysis.png',
                imageCaption: 'AI analysis modal showing sentiment scores and personalized feedback',
            },
            {
                tag: '// Seeing the Big Picture',
                title: 'Heatmaps that reveal what words cannot',
                titleAccent: 'what words cannot',
                paragraphs: [
                    'The dedicated Insights page renders full yearly heatmaps for all tracked metrics. Each cell represents a day, with color intensity mapping to the AI-generated score for that dimension. Users can instantly spot periods of high energy, sustained creativity, or creeping stress — correlations that would be invisible when reading individual entries.',
                    'This data visualization approach was chosen specifically for its ability to represent density and trends across two axes (day-of-week and month) simultaneously, following HCI best practices for temporal data presentation.',
                ],
                image: '/projects/lifelens/lifelens-insights-page.png',
                imageCaption: 'Year-long heatmap visualizations for Mood, Energy, Productivity, and Creativity',
            },
        ],
        techStack: [
            { name: 'React', role: 'UI Framework' },
            { name: 'TypeScript', role: 'Type Safety' },
            { name: 'Llama (Local)', role: 'AI Analysis & Sentiment Scoring' },
            { name: 'Tailwind CSS', role: 'Styling' },
            { name: 'Custom SVG', role: 'Heatmap Visualizations' },
            { name: 'Web Speech API', role: 'Voice-to-Text Input' },
            { name: 'Tesseract.js', role: 'OCR / Image-to-Text' },
        ],
        techChallenges: [
            '<strong>Multi-Modal AI Integration:</strong> Seamlessly combining OCR, speech-to-text, and LLM analysis into a cohesive UX without overwhelming the user or introducing latency.',
            '<strong>Heatmap Visualization:</strong> Designing performant, aesthetically pleasing heatmaps that accurately render 365 days of data across four metrics simultaneously.',
            '<strong>HCI Principles in Practice:</strong> Translating theoretical concepts from coursework (cognitive load, affordances, feedback loops) into concrete, measurable UI/UX decisions.',
            '<strong>Local LLM Performance:</strong> Running Llama models locally for privacy-preserving analysis while maintaining acceptable response times for the analysis modal.',
        ],
        impact: [
            'Demonstrated <strong>HCI theory applied in practice</strong> — from cognitive load reduction to immediate feedback and intuitive affordances, grounded in university coursework.',
            'Showcased <strong>three distinct AI modalities</strong> (sentiment LLM, speech-to-text, OCR) working together in a unified journaling experience.',
            'Created <strong>novel temporal data visualizations</strong> (year-long heatmaps) that reveal emotional and productivity patterns invisible in individual journal entries.',
            'Built a <strong>privacy-first architecture</strong> using locally-hosted Llama models, ensuring sensitive personal journal data never leaves the user\'s device.',
        ],
    },
];
