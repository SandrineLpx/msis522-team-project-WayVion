export interface ProjectLink {
  label: string;
  url: string;
  primary?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  note: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface GalleryItem {
  title: string;
  caption: string;
  assetPath?: string;
  placeholder?: string;
}

export interface StackGroup {
  category: string;
  tools: string[];
  note: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  highlights: string[];
  assetPath?: string;
}

export interface ArchitectureItem {
  title: string;
  description: string;
}

export interface CodeHighlight {
  title: string;
  language: string;
  note: string;
  code: string;
}

export interface RoadmapPhase {
  phase: string;
  items: string[];
}

export interface RiskItem {
  title: string;
  mitigation: string;
}

export interface ProjectPageData {
  slug: string;
  title: string;
  subtitle: string;
  ownerLine: string;
  executiveSummary: string;
  instructions: string[];
  links: ProjectLink[];
  badges: string[];
  methods: { name: string; note: string }[];
  metrics: ProjectMetric[];
  problemStatement: string;
  solutionSummary: string;
  audience: string;
  impactGoal: string;
  status: string;
  keywords: string[];
  members: TeamMember[];
  gallery: GalleryItem[];
  stack: StackGroup[];
  features: FeatureCard[];
  architecture: ArchitectureItem[];
  codeHighlights: CodeHighlight[];
  roadmap: RoadmapPhase[];
  risks: RiskItem[];
}

export const projectData: ProjectPageData = {
  slug: 'wayvion',

  title: 'WayVion',
  subtitle:
    'An AI-powered learning platform that generates personalized roadmaps, curates real resources, and adapts in real time to how you learn.',
  ownerLine: 'Swati Choudhury, Sandrine Lepesqueux, Nicholas Ray German, Nathan Fitzgerald',
  executiveSummary:
    'Most online learning starts with search, not structure. Learners jump between videos, articles, and AI answers without knowing what comes first, what fits their level, or what to do next. WayVion solves this by generating a personalized learning roadmap based on your topic, skill level, learning goal, and available time. Four specialized AI agents orchestrate the experience: one designs the curriculum, one curates real resources from across the web, one evaluates your performance after each module, and one generates on-demand quizzes. The platform adapts your roadmap in real time when you struggle or accelerate, and supports community-based learning through groups, sharing, and progress dashboards.',

  instructions: [
    'Enter any topic, select your skill level, learning goal, and available time to generate a personalized roadmap.',
    'Work through modules sequentially — each contains curated resources, learning objectives, and an on-demand quiz.',
    'After completing a module, rate its difficulty and take the quiz. The AI evaluates your performance and adapts the roadmap if needed.',
    'Share roadmaps with connections, join study groups or classrooms, and track progress with your team.',
  ],

  links: [
    { label: 'Live App', url: 'https://pathfinderairoadmap.lovable.app', primary: true },
    { label: 'GitHub Repo', url: 'https://github.com/swatt145-png/pathfinder-ai-roadmap' },
    { label: 'Slides PDF', url: '/project-assets/final-slides.pdf' },
    { label: 'PR FAQ', url: '/project-assets/PR-FAQ.html' },
    { label: 'Technical Report', url: '/project-assets/WayVion_Final_Report.pdf' },
  ],

  badges: ['React', 'TypeScript', 'Supabase', 'Gemini API', 'Serper API', 'YouTube Data API', 'Tailwind CSS', 'Vite', 'Deno Edge Functions'],

  keywords: ['adaptive-learning', 'ai-agents', 'personalized-education', 'multi-agent-orchestration', 'edtech'],

  methods: [
    { name: 'Multi-agent orchestration', note: 'Four specialized AI agents coordinate curriculum design, resource curation, performance evaluation, and quiz generation.' },
    { name: 'Two-phase async generation', note: 'Roadmap structure is returned instantly; resources are populated asynchronously to cut perceived wait time.' },
    { name: '10-stage resource curation pipeline', note: 'Real resources scored for quality, difficulty, and fit through search, filtering, AI review, and diversity constraints.' },
    { name: 'Performance-driven adaptation', note: 'Self-reported difficulty and quiz scores trigger automatic roadmap restructuring — review, supplement, or compress.' },
    { name: 'On-demand quiz generation', note: 'Quizzes are generated per module on request, calibrated to skill level and learning goal, saving tokens and ensuring freshness.' },
    { name: 'On-demand flashcards', note: 'Flashcards are generated on demand for each module to support spaced repetition and long-term retention.' },
  ],

  metrics: [
    { label: 'Core Users', value: 'Individuals & Teams', note: 'Students, corporate teams, universities (professors and students), and self-directed learners — for both individual and group usage' },
  ],

  problemStatement:
    'Most online learning starts with search, not structure. Learners jump between videos, articles, and AI answers without knowing what comes first, what fits their level, or what to do next. There is no clear learning path — too many resources with no sequence and no roadmap. Wrong-level content wastes time — beginners get overwhelmed while advanced learners get stuck with basics. AI tools like ChatGPT give answers but not guidance — generic recommendations rarely adapt, progression seems arbitrary, and there is no follow-through.',
  solutionSummary:
    'WayVion generates a personalized learning roadmap based on your topic, skill level, time available, and learning goal. It does not return a list of links — it builds a structured path with sequenced modules, curates real resources from across the web scored for quality and relevance, and adapts the plan when your performance or schedule changes. Four AI agents handle curriculum design, resource discovery, performance evaluation, and quiz generation, working together through a multi-agent orchestration layer.',
  audience: 'Self-directed learners, students, educators, and team managers',
  impactGoal: 'Reduce time-to-competency by replacing unstructured search with adaptive, AI-guided learning paths',
  status: 'Live Tool',

  members: [
    { name: 'Swati Choudhury', role: 'Founder & CEO', focus: 'Built the company from the ground up, owns the vision behind it, and leads all strategic decisions and overall growth.' },
    { name: 'Sandrine Lepesqueux', role: 'Chief Operating Officer', focus: 'Oversees day-to-day operations and makes sure the company runs efficiently.' },
    { name: 'Nicholas Ray German', role: 'Chief Financial Officer', focus: 'Manages the company\'s finances, budgeting, forecasting, and financial risk.' },
    { name: 'Nathan Fitzgerald', role: 'Chief Marketing Officer', focus: 'Leads the marketing strategy, brand positioning, and customer acquisition efforts.' },
  ],

  gallery: [
    {
      title: 'Landing Page',
      caption: 'WayVion\'s landing page introduces the platform\'s four key value propositions: personalized roadmaps, real resources, adaptive learning, and AI-powered insights.',
      assetPath: '/project-assets/landing-page.png',
    },
    {
      title: 'Roadmap Generation',
      caption: 'Users enter a topic, select their learning goal (Conceptual, Practice, Quick Overview, Deep Mastery), skill level, and timeline to generate a personalized roadmap.',
      assetPath: '/project-assets/generate-roadmap.png',
    },
    {
      title: 'Roadmap Dashboard',
      caption: 'A full roadmap view showing module sequence, progress stats, time tracking, and actions like Adapt Plan, Share, and Archive.',
      assetPath: '/project-assets/ai-roadmap-full.png',
    },
    {
      title: 'My Roadmaps',
      caption: 'The My Roadmaps page lets users manage all their active, shared, and archived roadmaps in one place.',
      assetPath: '/project-assets/my-roadmaps.png',
    },
    {
      title: 'Performance Check-In',
      caption: 'After completing a module, the AI analyzes self-reported difficulty and quiz scores to determine if the roadmap needs adaptation.',
      assetPath: '/project-assets/checkin-agent.png',
    },
    {
      title: 'Module Self-Report',
      caption: 'After completing a module, learners rate difficulty (Easy, Medium, Hard), write notes, and generate a quiz — feeding the adaptive learning engine.',
      assetPath: '/project-assets/module-self-report.png',
    },
    {
      title: 'Landing Page Features',
      caption: 'How WayVion builds your learning path — showcasing the agent workflow and key value propositions like tailored goals, proficiency levels, and timeline customization.',
      assetPath: '/project-assets/landing-page-features.png',
    },
    {
      title: '10-Stage Resource Pipeline',
      caption: 'The full resource curation pipeline: from context extraction and search query generation through Serper/YouTube APIs, authority scoring, AI review, and final diversity constraints.',
      assetPath: '/project-assets/resource-pipeline-flowchart.png',
    },
  ],

  stack: [
    {
      category: 'Frontend',
      tools: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/ui (Radix)', 'React Query', 'React Hook Form', 'Recharts'],
      note: 'Single-page app with real-time polling for async resource population. Shadcn/ui provides 25+ accessible components. Recharts powers progress dashboards.',
    },
    {
      category: 'AI and Agent Orchestration',
      tools: ['Gemini 3-Pro', 'Gemini 2.5 Flash', 'Gemini 2.5 Flash-Lite', 'Lovable AI Gateway', 'Serper API', 'YouTube Data API v3'],
      note: 'Four specialized agents deployed as Supabase Edge Functions. Gemini Pro handles curriculum design (pedagogical reasoning), Flash handles resource scoring and adaptation, Flash-Lite handles quiz generation for speed. Serper and YouTube APIs supply real-time resource discovery.',
    },
    {
      category: 'Backend, Data, and Auth',
      tools: ['Supabase', 'PostgreSQL', 'Deno Edge Functions', 'Row-Level Security', 'Supabase Auth'],
      note: '10+ database tables with RLS policies. Edge Functions run on Deno runtime. Auth supports email/password and guest accounts. Points calculated via Postgres function.',
    },
  ],

  features: [
    {
      title: 'Personalized Curriculum with Curated Resources',
      assetPath: '/project-assets/module-detail.png',
      description:
        'The Curriculum Architect agent designs a module structure and learning sequence based on your topic, skill level, learning goal, and available time. The Resource Curator agent then runs a 10-stage pipeline across the web — using Serper search and YouTube API — to score resources for quality, difficulty, and fit.',
      highlights: [
        'Module count dynamically calculated from total hours and time budget enforcement (85% usable time)',
        'Anchor terms per module enable precise, context-aware resource filtering',
        'Hybrid BM25 + semantic similarity scoring with authority bumping for known educators',
      ],
    },
    {
      title: 'Adaptive Learning Engine',
      assetPath: '/project-assets/adapt-roadmap.png',
      description:
        'After completing each module, the Performance Evaluator agent analyzes your self-reported difficulty and quiz score. If you struggled (hard + low quiz), it inserts a review module. If you excelled (easy + high quiz), it compresses upcoming modules. The Adapt Plan modal also lets you change your topic, learning goal, or proficiency level mid-roadmap.',
      highlights: [
        'Three adaptation triggers: review insertion, supplementary resources, and module compression',
        'Timeline recalculated from total hours / hours per day — never arbitrary week additions',
        'Completed modules are always preserved; only upcoming modules are restructured',
      ],
    },
    {
      title: 'On-Demand Quizzes and Self-Assessment',
      assetPath: '/project-assets/module-quiz.png',
      description:
        'The Quiz Generator agent creates 3-5 multiple-choice questions per module, calibrated to your skill level and learning goal. Quizzes are not pre-generated during roadmap creation — they are triggered on-demand to save tokens and ensure freshness.',
      highlights: [
        'Questions adapt: practical for hands-on goals, theoretical for conceptual goals',
        'Each question includes an explanation of the correct answer',
        'Self-report (easy/medium/hard) combines with quiz score to drive adaptation decisions',
      ],
    },
    {
      title: 'Community, Groups, and Sharing',
      assetPath: '/project-assets/community-page.png',
      description:
        'A full social layer supports LinkedIn-style mutual connections, roadmap sharing, and group-based learning. Educators can create classrooms, managers can create teams, and anyone can start a study group. Group owners see a progress dashboard with per-member analytics.',
      highlights: [
        'Three group types: classroom (professor/student), team (manager/member), study group (admin/member)',
        'Shared roadmaps are cloned to the recipient with independent progress tracking',
        'Gamification: 10 points per completed module, 25 per roadmap, 5 per accepted share',
      ],
    },
  ],

  architecture: [
    {
      title: 'Input Layer',
      description:
        'User provides topic, skill level (beginner/intermediate/advanced), learning goal (conceptual/hands-on/quick overview/deep mastery), and timeline (hours per day, weeks or total hours). Inputs are sanitized and rate-limited per user.',
    },
    {
      title: 'Curriculum Design (Agent 1 — Gemini 3-Pro)',
      description:
        'The Curriculum Architect generates a sequenced module plan using a 4-priority framework: Domain, Goal, Level, Time. It enforces an 85% time budget, calculates optimal module count, and produces anchor terms per module. Resources and quizzes are left as empty arrays — downstream agents populate them on demand to reduce latency.',
    },
    {
      title: 'Resource Curation (Agent 2 — Gemini 2.5 Flash)',
      description:
        'Runs asynchronously after roadmap creation. A 10-stage pipeline per module: context extraction, search query generation, Serper API fetch, YouTube API enrichment, anchor gate filtering, authority scoring, AI-driven pedagogical review, span negotiation for multi-part resources, coverage repair (85% rule), and final diversity constraints. Parallel AI scoring runs one agent instance per module simultaneously.',
    },
    {
      title: 'Performance Evaluation and Adaptation (Agent 3 — Gemini 2.5 Flash)',
      description:
        'Triggered on module completion. Evaluates self-report + quiz score against adaptation thresholds. Hard + quiz < 60% inserts a review module. Hard + quiz >= 60% adds supplementary resources. Easy + quiz > 90% compresses upcoming modules. Returns a decision with an updated roadmap structure; resources are re-populated via Agent 2.',
    },
    {
      title: 'Quiz and Flashcard Generation (Agent 4 — Gemini 2.5 Flash-Lite)',
      description:
        'On-demand assessment agent that generates 3–5 multiple-choice questions per module, calibrated to the learner\'s skill level and learning goal. Questions are not pre-generated — they are created when the learner requests a quiz, saving tokens and ensuring freshness. Each question includes an explanation of the correct answer. Quiz scores feed into the Performance Evaluator to drive adaptation decisions.',
    },
    {
      title: 'Output Layer',
      description:
        'User receives a fully structured roadmap with sequenced modules, curated resources, learning objectives, and progress tracking. The dashboard displays completion percentage, streaks, time tracking, and adaptation history. Sharing, groups, and progress dashboards extend the output to collaborative contexts.',
    },
  ],

  codeHighlights: [
    {
      title: 'Performance Evaluator — Adaptation Logic',
      language: 'ts',
      note: 'The check-in edge function determines if the roadmap needs restructuring based on self-reported difficulty and quiz performance.',
      code: `// Determine if adaptation needed based on performance signals
let needsCheck = false;
if (self_report === "hard" && (quiz_score === null || quiz_score < 60))
  needsCheck = true;  // Struggling — insert review module
else if (self_report === "hard" && quiz_score >= 60)
  needsCheck = true;  // Passing but difficult — add supplementary resources
else if (self_report === "easy" && quiz_score !== null && quiz_score > 90)
  needsCheck = true;  // Excelling — compress upcoming modules

if (!needsCheck) {
  return { needs_adaptation: false, message_to_student: "Great progress! Keep going." };
}`,
    },
    {
      title: 'Resource Curator — YouTube Relevance Validation',
      language: 'ts',
      note: 'Every YouTube resource is validated against the module context to filter out off-topic content before it reaches the learner.',
      code: `function isVideoRelevant(
  title: string, channel: string,
  moduleTitle: string, topic: string
): boolean {
  const combined = \`\${title} \${channel}\`.toLowerCase();
  const searchContext = \`\${moduleTitle} \${topic}\`.toLowerCase();
  const topicWords = searchContext.split(/\\s+/).filter(w => w.length > 3);
  const matchCount = topicWords.filter(w => combined.includes(w)).length;
  if (matchCount >= 2) return true;
  const hasTechSignal = TECH_RELEVANCE_KEYWORDS.some(kw => combined.includes(kw));
  if (hasTechSignal && matchCount >= 1) return true;
  return matchCount > 0;
}`,
    },
  ],

  roadmap: [
    {
      phase: 'Delivered (Now)',
      items: [
        'Live platform with full roadmap generation, resource curation, adaptive learning, and on-demand quizzes',
        'Community layer with mutual connections, roadmap sharing/requesting, and public profiles',
        'Groups system supporting classrooms, teams, and study groups with owner progress dashboards',
        'Two-phase async pipeline cutting perceived generation time from 60+ seconds to under 30 seconds',
        'Adapt plan controls for changing topic, learning goal, and proficiency level mid-roadmap',
      ],
    },
    {
      phase: 'Next',
      items: [
        'Spaced repetition and flashcard system for long-term retention across completed modules',
        'Resource quality feedback loop — aggregate like/dislike signals to improve future curation',
        'Mobile-responsive redesign for on-the-go learning',
        'Onboarding flow for first-time users to reduce time-to-first-roadmap',
      ],
    },
    {
      phase: 'Later',
      items: [
        'B2B expansion: enterprise workforce upskilling with team analytics and custom content libraries',
        'Data moat: aggregated learning behavior data to train proprietary recommendation models',
        'Certification partnerships with industry providers for verified learning outcomes',
        'Multi-language support for global learner reach',
      ],
    },
  ],

  risks: [
    {
      title: 'LLM Output Quality and Reliability',
      mitigation:
        'Fallback roadmap generator produces a valid structure if AI fails. Multi-attempt JSON parsing with sanitization handles malformed responses. Per-user rate limiting prevents abuse.',
    },
    {
      title: 'Resource Freshness and Link Rot',
      mitigation:
        'Resources are fetched live from Serper and YouTube APIs at generation time rather than cached. YouTube API enrichment validates video availability and metadata. Users can mark resources as "not relevant" to filter them out.',
    },
    {
      title: 'API Cost and Rate Limits',
      mitigation:
        'Token optimization: quizzes generated on-demand (not pre-generated), compact payloads strip completed module detail, Flash-Lite used for low-complexity tasks. Per-user rate limits (10 roadmaps, 30 quizzes, 60 check-ins) control spend.',
    },
    {
      title: 'Cold Start for New Users',
      mitigation:
        'Quick-start templates on the generation page let users begin with one click. Public profiles and the community page surface popular roadmaps for discovery. Guest mode lowers the sign-up barrier.',
    },
  ],
};
