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
  // Our Thinking (blogs from Nik and TroopX)
  {
    id: 'multi-agent-claude',
    type: 'blog',
    title: 'Building a Multi-Agent System with Claude',
    description:
      'How we built a production-ready multi-agent system using Claude\'s tool use capabilities.',
    url: 'https://blog.nik-patel.com/posts/multi-agent-claude',
    source: 'Nik Patel',
    date: 'May 2025',
    featured: true,
  },
  {
    id: 'autonomous-agents-enterprise',
    type: 'blog',
    title: 'The Rise of Autonomous AI Agents in Enterprise',
    description:
      'How autonomous agents are reshaping enterprise workflows and what leaders need to know.',
    url: 'https://journal.troopx.ai/posts/autonomous-agents-enterprise',
    source: 'TroopX Journal',
    date: 'June 2025',
    featured: true,
  },
  {
    id: 'ai-agents-build-vs-buy',
    type: 'blog',
    title: 'The Economics of AI Agents: Build vs Buy',
    description:
      'A framework for deciding when to build custom AI agents versus using off-the-shelf solutions.',
    url: 'https://journal.troopx.ai/posts/ai-agents-build-vs-buy',
    source: 'TroopX Journal',
    date: 'April 2025',
  },
  {
    id: 'reliable-ai-pipelines',
    type: 'blog',
    title: 'Building Reliable AI Pipelines: A Production Guide',
    description:
      'Lessons from deploying AI pipelines that process millions of requests daily.',
    url: 'https://journal.troopx.ai/posts/reliable-ai-pipelines',
    source: 'TroopX Journal',
    date: 'May 2025',
  },
  {
    id: 'ai-dev-tools',
    type: 'blog',
    title: 'AI-Powered Dev Tools: My 2025 Stack',
    description:
      'A deep dive into the AI-powered development tools that have transformed our workflow.',
    url: 'https://blog.nik-patel.com/posts/ai-dev-tools-2025',
    source: 'Nik Patel',
    date: 'May 2025',
  },

  // Worth Reading (external)
  {
    id: 'anthropic-long-running-agents',
    type: 'worth-reading',
    title: 'Long-Running Agents: The Next Step in AI',
    description:
      'Anthropic on building agents that operate over hours and days. Architecture patterns, failure recovery, and the infrastructure to support them.',
    url: 'https://www.anthropic.com/engineering/long-running-agents',
    source: 'Anthropic',
    date: '2025',
    featured: true,
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
    date: 'March 2025',
    featured: true,
  },
  {
    id: 'langchain-open-harness',
    type: 'worth-reading',
    title: 'Announcing Open Agent Harness',
    description:
      'A new open-source framework for running large-scale agent evaluations reliably and reproducibly.',
    url: 'https://blog.langchain.dev/announcing-open-agent-harness/',
    source: 'LangChain',
    date: '2025',
  },
  {
    id: 'langchain-gtm-agents',
    type: 'worth-reading',
    title: 'Real World GTM Agent Architectures',
    description:
      'How companies are building AI-powered GTM agents for lead enrichment, outbound personalization, and sales.',
    url: 'https://blog.langchain.dev/real-world-gtm-agent-architectures/',
    source: 'LangChain',
    date: '2025',
  },
  {
    id: 'situational-awareness',
    type: 'worth-reading',
    title: 'Situational Awareness: The Decade Ahead',
    description:
      'Leopold Aschenbrenner on AI systems surpassing human capability by 2028. The most important document in AI strategy right now.',
    url: 'https://situational-awareness.ai/',
    source: 'Leopold Aschenbrenner',
    date: '2024',
  },
  {
    id: 'situational-awareness-2025',
    type: 'worth-reading',
    title: 'Big Picture 2025: The State of AI',
    description:
      'Aschenbrenner\'s annual letter on where AI stands and where it is headed. Essential reading for anyone making bets on AI.',
    url: 'https://situational-awareness.ai/big-picture-2025/',
    source: 'Leopold Aschenbrenner',
    date: 'April 2025',
  },

  // Utilities (coming soon placeholders)
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
