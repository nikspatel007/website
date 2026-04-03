import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'autonomous-ai-agents',
    slug: 'autonomous-ai-agents',
    title: 'Autonomous AI Agents',
    shortTitle: 'AI Agents',
    description:
      'Agents that research, decide, execute, and report back. They handle entire workflows end to end so your team focuses on growth, not grunt work.',
    icon: 'Bot',
    features: [
      'Multi-agent orchestration for complex business processes',
      'Tool-calling agents that integrate with your existing systems',
      'Human-in-the-loop workflows for high-stakes decisions',
      'Real-time monitoring and observability across every agent action',
      'Custom agent frameworks tailored to your domain',
      'Production-grade reliability with built-in guardrails and fallbacks',
    ],
    technologies: [
      'CrewAI',
      'AutoGen',
      'LangGraph',
      'OpenAI',
      'Claude',
      'Python',
      'FastAPI',
      'Docker',
    ],
    process: [
      {
        title: 'Advise',
        description:
          'We map your operations and pinpoint where autonomous agents will drive the most measurable impact.',
      },
      {
        title: 'Build',
        description:
          'We develop, test, and harden your agents with rigorous guardrails and real-world validation.',
      },
      {
        title: 'Launch',
        description:
          'Your agents go live with full observability, logging, and seamless integration into daily operations.',
      },
      {
        title: 'Evolve',
        description:
          'We expand agent capabilities, onboard new workflows, and keep performance ahead of the curve.',
      },
    ],
    faqs: [
      {
        question: 'What makes an AI agent different from a chatbot?',
        answer:
          'A chatbot responds to messages. An agent takes action. Our agents autonomously research, make decisions, use tools, and complete multi-step workflows without constant human input.',
      },
      {
        question: 'How do you ensure agents behave reliably in production?',
        answer:
          'Every agent ships with validation layers, human-in-the-loop checkpoints, structured logging, and defined fallback behaviors. We monitor continuously and tune proactively.',
      },
      {
        question: 'Which agent framework do you use?',
        answer:
          'We maintain an opinionated but flexible stack. CrewAI for role-based agent teams, LangGraph for stateful workflows, AutoGen for conversational agents. We pick the right tool for the problem.',
      },
    ],
  },
  {
    id: 'knowledge-systems',
    slug: 'knowledge-systems',
    title: 'Knowledge Systems',
    shortTitle: 'Knowledge',
    description:
      'Every document, process, and institutional decision your company has ever made, accessible instantly through intelligent assistants with real memory and context.',
    icon: 'Brain',
    features: [
      'Intelligent assistants grounded in your proprietary data',
      'Persistent memory systems that learn and retain context over time',
      'Advanced retrieval architectures beyond basic search',
      'Automated document processing, extraction, and enrichment',
      'Evaluation frameworks that measure accuracy and trust',
      'Enterprise-grade security with your compliance requirements',
    ],
    technologies: [
      'LangChain',
      'LlamaIndex',
      'OpenAI',
      'Claude',
      'Pinecone',
      'Weaviate',
      'Hugging Face',
      'Python',
    ],
    process: [
      {
        title: 'Advise',
        description:
          'We audit your knowledge landscape and identify the highest-value opportunities for intelligent retrieval.',
      },
      {
        title: 'Build',
        description:
          'We architect and develop knowledge systems using your actual data, with rigorous evaluation at every stage.',
      },
      {
        title: 'Launch',
        description:
          'Your knowledge system goes live with monitoring, access controls, and seamless integration into existing tools.',
      },
      {
        title: 'Evolve',
        description:
          'We continuously improve retrieval quality, expand data sources, and introduce new capabilities as models advance.',
      },
    ],
    faqs: [
      {
        question: 'How is this different from enterprise search?',
        answer:
          'Enterprise search finds documents. Knowledge systems understand them. Our assistants synthesize information across sources, maintain context across conversations, and deliver answers with citations.',
      },
      {
        question: 'How do you measure if the AI is giving accurate answers?',
        answer:
          'We build evaluation frameworks into every system. Automated accuracy testing, human review pipelines, and continuous monitoring ensure your knowledge system earns and keeps trust.',
      },
      {
        question: 'Can this work with sensitive or regulated data?',
        answer:
          'Yes. We deploy on your infrastructure, support self-hosted models, and build within your compliance framework. HIPAA, SOC2, on-prem, air-gapped environments included.',
      },
    ],
  },
  {
    id: 'intelligent-automation',
    slug: 'intelligent-automation',
    title: 'Intelligent Automation',
    shortTitle: 'Automation',
    description:
      'Connect your tools, automate your workflows, and build systems that evaluate their own performance, learn from outcomes, and improve without manual intervention.',
    icon: 'Workflow',
    features: [
      'End-to-end process automation powered by AI decision-making',
      'API orchestration connecting your entire tool ecosystem',
      'Self-evaluating systems that measure and improve their own output',
      'Intelligent document and data pipeline automation',
      'AI-powered routing, triage, and escalation workflows',
      'Legacy system modernization with AI integration layers',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'n8n',
      'Airflow',
      'AWS Lambda',
      'GCP Cloud Functions',
      'Docker',
      'Kubernetes',
    ],
    process: [
      {
        title: 'Advise',
        description:
          'We map your current workflows, quantify inefficiencies, and identify the highest-ROI automation targets.',
      },
      {
        title: 'Build',
        description:
          'We build integrations, deploy intelligent agents, and connect your tools into cohesive automated pipelines.',
      },
      {
        title: 'Launch',
        description:
          'Your automations go live with full monitoring, alerting, and operational dashboards from day one.',
      },
      {
        title: 'Evolve',
        description:
          'We expand automation coverage, improve accuracy through built-in evaluation loops, and unlock new workflows.',
      },
    ],
    faqs: [
      {
        question: 'What kinds of workflows can you automate?',
        answer:
          'Anything repetitive that involves data processing, document handling, communication routing, or decision-making. Lead qualification, invoice processing, report generation, and customer support triage are common starting points.',
      },
      {
        question: 'How quickly will we see results?',
        answer:
          'Most automation projects deliver measurable ROI within four to eight weeks. We start with the highest-impact workflow and expand from there.',
      },
      {
        question: 'Will this replace our team?',
        answer:
          'It amplifies your team. AI automation handles the repetitive work so your people can focus on strategy, relationships, and the problems that require human judgment.',
      },
    ],
  },
  {
    id: 'software-engineering',
    slug: 'software-engineering',
    title: 'Software & Systems Engineering',
    shortTitle: 'Engineering',
    description:
      'Web apps, mobile apps, APIs, data platforms, integrations. Full stack engineering with AI-first development practices that ship faster and scale smarter.',
    icon: 'Code2',
    features: [
      'Full stack web and mobile application development',
      'API design, development, and integration',
      'Data platform architecture and engineering',
      'Cloud infrastructure on AWS, GCP, and Azure',
      'AI-assisted development for faster delivery cycles',
      'System modernization and technical debt reduction',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'Python',
      'TypeScript',
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
    ],
    process: [
      {
        title: 'Advise',
        description:
          'We assess your technical landscape, define requirements, and architect a solution built for where you are going.',
      },
      {
        title: 'Build',
        description:
          'We develop iteratively with continuous feedback, automated testing, and AI-accelerated engineering workflows.',
      },
      {
        title: 'Launch',
        description:
          'We deploy with CI/CD pipelines, monitoring, and documentation so your team can operate with confidence.',
      },
      {
        title: 'Evolve',
        description:
          'We support ongoing feature development, performance optimization, and scaling as your business grows.',
      },
    ],
    faqs: [
      {
        question: 'Can you work with our existing codebase and team?',
        answer:
          'Absolutely. We embed with your engineering team, ramp up on your stack, and deliver alongside your people with full knowledge transfer throughout.',
      },
      {
        question: 'What does AI-first development mean in practice?',
        answer:
          'We use AI agents and tools throughout our development process for code generation, testing, review, and deployment. This means faster delivery, fewer bugs, and more consistent output.',
      },
      {
        question: 'What technologies do you work with?',
        answer:
          'We are stack-agnostic but opinionated. React, Next.js, Python, Node.js, TypeScript are our core. We build on AWS, GCP, or Azure depending on your environment.',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug)
}
