export interface FrontierItem {
  id: string
  type: 'blog' | 'worth-reading' | 'utility'
  title: string
  description: string
  url: string
  source: string
  date: string
  featured?: boolean
}

export const frontierItems: FrontierItem[] = [
  // Our Thinking
  {
    id: 'agents-learn-on-the-job',
    type: 'blog',
    title: 'From Smart to Experienced: How Agents Learn On The Job',
    description:
      'Chairing a board meeting where CEO and CTO agents debated strategy. Both came prepared with their own assessments and priorities.',
    url: 'https://blog.nik-patel.com/from-smart-to-experienced-how-agents-learn-on-the-job/',
    source: 'Nik Patel',
    date: 'Feb 2026',
    featured: true,
  },
  {
    id: 'agent-fatigue',
    type: 'blog',
    title: 'Agent Fatigue Is a System Design Problem',
    description:
      'Steve Yegge\'s "AI Vampire" piece describes something real. Agent fatigue is not a model problem. It is a system design problem.',
    url: 'https://blog.nik-patel.com/agent-fatigue-is-a-system-design-problem/',
    source: 'Nik Patel',
    date: 'Feb 2026',
    featured: true,
  },
  {
    id: 'reading-digest',
    type: 'blog',
    title: 'Reading Digest: AI Agent Wrote a Hit Piece',
    description:
      'An AI agent wrote a hit piece on a developer who rejected its pull request. A new and genuinely alarming failure mode.',
    url: 'https://journal.troopx.ai/reading-digest-2026-02-25/',
    source: 'TroopX Journal',
    date: 'Feb 2026',
  },

  // Worth Reading (all verified working)
  {
    id: 'anthropic-harness-design',
    type: 'worth-reading',
    title: 'Harness Design for Long-Running Application Development',
    description:
      'Anthropic on designing harnesses for agents that build real applications over extended sessions.',
    url: 'https://www.anthropic.com/engineering/harness-design-long-running-apps',
    source: 'Anthropic',
    date: 'Mar 2026',
    featured: true,
  },
  {
    id: 'anthropic-effective-harnesses',
    type: 'worth-reading',
    title: 'Effective Harnesses for Long-Running Agents',
    description:
      'Architecture patterns, failure recovery, and the infrastructure needed to support agents that operate over hours and days.',
    url: 'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',
    source: 'Anthropic',
    date: 'Nov 2025',
  },
  {
    id: 'anthropic-building-effective-agents',
    type: 'worth-reading',
    title: 'Building Effective Agents',
    description:
      'Practical patterns for building AI agents. Moving beyond complex frameworks to embrace simplicity and composability.',
    url: 'https://www.anthropic.com/engineering/building-effective-agents',
    source: 'Anthropic',
    date: 'Dec 2024',
  },
  {
    id: 'karpathy-auto-research',
    type: 'worth-reading',
    title: 'Automated Research with AI',
    description:
      'Karpathy lays out his vision for how AI agents could automate the full cycle of scientific research.',
    url: 'https://karpathy.ai/blog/research.html',
    source: 'Andrej Karpathy',
    date: 'Mar 2025',
    featured: true,
  },
  {
    id: 'langchain-agent-harness',
    type: 'worth-reading',
    title: 'The Anatomy of an Agent Harness',
    description:
      'What agent harnesses are, how they connect LLMs to environments, and why they matter for production agents.',
    url: 'https://blog.langchain.com/the-anatomy-of-an-agent-harness/',
    source: 'LangChain',
    date: '2026',
  },
  {
    id: 'langchain-gtm-agent',
    type: 'worth-reading',
    title: 'How We Built LangChain\'s GTM Agent',
    description:
      'LangChain built their own go-to-market agent. How it works, what it automates, and lessons from production.',
    url: 'https://blog.langchain.com/how-we-built-langchains-gtm-agent/',
    source: 'LangChain',
    date: '2026',
  },
  {
    id: 'situational-awareness',
    type: 'worth-reading',
    title: 'Situational Awareness: The Decade Ahead',
    description:
      'Leopold Aschenbrenner on AI systems surpassing human capability by 2028. Essential reading for anyone making bets on AI.',
    url: 'https://situational-awareness.ai/',
    source: 'Leopold Aschenbrenner',
    date: '2024',
  },

  // Utilities (coming soon)
  {
    id: 'competitive-research-agent',
    type: 'utility',
    title: 'AI Competitive Research Agent',
    description:
      'Tell us your industry and problem. Our agent researches your competitors and shows you where AI can give you an edge.',
    url: '/utilities/competitive-research',
    source: 'CodeTicks',
    date: 'Coming Soon',
  },
]

export const getFeaturedFrontier = () =>
  frontierItems.filter((item) => item.featured)

export const getFrontierByType = (type: FrontierItem['type']) =>
  frontierItems.filter((item) => item.type === type)
