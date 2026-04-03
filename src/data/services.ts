import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agent Development',
    shortTitle: 'AI Agents',
    description:
      'Build autonomous AI agents that handle complex tasks end-to-end. From multi-agent orchestration to tool-calling workflows, we build agents that think, decide, and execute.',
    icon: 'Bot',
    features: [
      'Multi-agent orchestration systems',
      'Tool-calling autonomous agents',
      'Human-in-the-loop workflows',
      'Agent monitoring and observability',
      'Custom agent frameworks',
      'Production deployment and scaling',
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
          'We assess your workflows and identify where autonomous agents can deliver the highest impact.',
      },
      {
        title: 'Align',
        description:
          'Design the agent architecture, select the right tools, and define success metrics with your team.',
      },
      {
        title: 'Build',
        description:
          'Develop agents with rigorous testing, guardrails, and human-in-the-loop checkpoints.',
      },
      {
        title: 'Deliver',
        description:
          'Production deployment with full observability, documentation, and ongoing support.',
      },
    ],
    faqs: [
      {
        question: 'What makes an AI agent different from a chatbot?',
        answer:
          'An AI agent can autonomously take actions, use tools, make decisions, and complete multi-step workflows. A chatbot just responds to messages. Our agents handle entire business processes end-to-end.',
      },
      {
        question: 'How do you ensure agents behave reliably?',
        answer:
          'We implement guardrails, validation layers, human-in-the-loop checkpoints, and comprehensive monitoring. Every agent has defined boundaries and fallback behaviors.',
      },
      {
        question: 'Which agent framework do you recommend?',
        answer:
          'It depends on your use case. CrewAI excels at role-based multi-agent teams, LangGraph for complex stateful workflows, and AutoGen for conversational agents. We pick the right tool for the job.',
      },
    ],
  },
  {
    id: 'llm-solutions',
    slug: 'llm-solutions',
    title: 'LLM & RAG Solutions',
    shortTitle: 'LLM/RAG',
    description:
      'Custom LLM integrations, RAG pipelines, and intelligent assistants built on your data. We turn your documents and knowledge into AI-powered products.',
    icon: 'Brain',
    features: [
      'RAG pipeline development',
      'LLM fine-tuning and optimization',
      'Prompt engineering and evaluation',
      'Document processing and extraction',
      'Semantic search implementation',
      'AI-powered chatbots and assistants',
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
          'Identify the highest-impact LLM opportunity and validate feasibility with your data.',
      },
      {
        title: 'Align',
        description:
          'Define the RAG architecture, model selection, and success criteria with your team.',
      },
      {
        title: 'Build',
        description:
          'Develop and test with your actual data, iterating to production-grade quality.',
      },
      {
        title: 'Deliver',
        description:
          'Deploy with guardrails, monitoring, cost optimization, and ongoing model improvements.',
      },
    ],
    faqs: [
      {
        question: 'What is RAG and why do we need it?',
        answer:
          'RAG (Retrieval Augmented Generation) connects LLMs to your proprietary data, enabling accurate answers about your specific content without expensive fine-tuning. Essential for enterprise AI.',
      },
      {
        question: 'OpenAI vs Claude vs open-source — which should we use?',
        answer:
          'Each has tradeoffs in capability, cost, and privacy. We help you evaluate based on your requirements and can build multi-provider solutions for reliability and cost optimization.',
      },
      {
        question: 'How do you handle data privacy with LLMs?',
        answer:
          'We implement privacy-preserving architectures including self-hosted models, data anonymization, and careful prompt engineering. We work within your compliance requirements (HIPAA, SOC2, etc.).',
      },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Workflow Automation',
    shortTitle: 'Automation',
    description:
      'Connect your tools, automate your processes, and 10x your team with AI-powered workflows. We turn manual processes into intelligent automated systems.',
    icon: 'Workflow',
    features: [
      'End-to-end process automation with AI',
      'Tool integration and API orchestration',
      'Intelligent document workflows',
      'Data pipeline automation',
      'AI-powered decision systems',
      'Legacy system modernization with AI',
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
          'Map your current workflows, identify bottlenecks, and quantify automation opportunities.',
      },
      {
        title: 'Align',
        description:
          'Design AI-powered workflows with the right balance of automation and human oversight.',
      },
      {
        title: 'Build',
        description:
          'Build integrations, deploy agents, and connect your tools into seamless automated pipelines.',
      },
      {
        title: 'Deliver',
        description:
          'Launch to production, monitor performance, and continuously improve automation accuracy.',
      },
    ],
    faqs: [
      {
        question: 'What kinds of workflows can you automate?',
        answer:
          'Anything repetitive that involves data processing, document handling, communication, or decision-making. Common examples: lead qualification, invoice processing, report generation, customer support triage.',
      },
      {
        question: 'How long does it take to see results?',
        answer:
          'Most automation projects show measurable ROI within 4-8 weeks. We start with the highest-impact workflow and expand from there.',
      },
      {
        question: 'Will this replace our team?',
        answer:
          'No — it amplifies your team. AI automation handles the repetitive work so your people can focus on strategy, relationships, and creative problem-solving.',
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug)
}
