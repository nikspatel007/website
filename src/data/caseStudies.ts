import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'mcp-multi-agent-orchestration',
    title: 'MCP-Powered Multi-Agent Orchestration Platform',
    client: 'Enterprise Clients',
    industry: 'technology',
    services: ['autonomous-ai-agents', 'software-engineering'],
    challenge:
      'Organizations needed AI agents that could seamlessly interact with diverse tools, APIs, and data sources. Existing solutions lacked standardized protocols for agent-tool communication and cross-system orchestration.',
    solution:
      'Built a production-grade multi-agent platform leveraging Model Context Protocol (MCP) for standardized tool integration. Designed hierarchical agent architectures with supervisor agents coordinating specialized worker agents, enabling complex multi-step reasoning and autonomous task execution.',
    results: [
      { metric: 'Tool Integrations', value: '50+', description: 'Via MCP standard' },
      { metric: 'Task Complexity', value: '10x', description: 'More sophisticated workflows' },
      { metric: 'Agent Reliability', value: '99.5%', description: 'Task completion rate' },
    ],
    technologies: ['MCP', 'Multi-Agent Systems', 'LangGraph', 'Tool Orchestration', 'Supervisor Agents'],
    featuredImage: '/images/case-studies/mcp-agents.jpg',
    featured: true,
  },
  {
    id: '2',
    slug: 'executive-ai-agent-platform',
    title: 'Executive AI Agent Platform for Business Operations',
    client: 'Enterprise Clients',
    industry: 'technology',
    services: ['autonomous-ai-agents', 'software-engineering'],
    challenge:
      'Executive teams struggled to operationalize AI across sales, operations, and strategy. Existing tools were siloed, inconsistent, and unsafe for real business use.',
    solution:
      'Designed and deployed a production-grade AI agent platform that acts as a secure, role-aware digital assistant embedded directly into business workflows. Built AI agents with task orchestration, memory, and tool use, along with RAG over internal documents, CRM, and analytics.',
    results: [
      { metric: 'Operational Work', value: '30-50%', description: 'Reduction achieved' },
      { metric: 'AI Outputs', value: 'Consistent', description: 'Explainable for leadership' },
      { metric: 'Team Adoption', value: 'Safe', description: 'Non-technical teams enabled' },
    ],
    technologies: ['LLM Orchestration', 'RAG', 'Tool Use', 'Memory Systems', 'Guardrails'],
    featuredImage: '/images/case-studies/ai-agents.jpg',
    featured: true,
  },
  {
    id: '3',
    slug: 'healthcare-ai-research',
    title: 'Healthcare AI Research & Clinical Applications',
    client: 'Healthcare Research Institutions',
    industry: 'healthcare',
    services: ['knowledge-systems', 'intelligent-automation'],
    challenge:
      'Healthcare organizations needed AI solutions grounded in rigorous research to improve patient outcomes, clinical decision-making, and operational efficiency—while meeting strict regulatory and ethical standards.',
    solution:
      'Collaborated with leading healthcare researchers to develop AI applications for clinical workflows, diagnostic support, and patient care optimization. Co-authored 3 peer-reviewed research papers contributing to the advancement of AI in healthcare, bridging the gap between academic research and production-ready systems.',
    results: [
      { metric: 'Research Papers', value: '3', description: 'Peer-reviewed & co-authored' },
      { metric: 'Clinical Impact', value: 'Proven', description: 'Research-backed solutions' },
      { metric: 'Compliance', value: 'HIPAA', description: 'Healthcare-grade security' },
    ],
    technologies: ['Clinical AI', 'NLP for Healthcare', 'HIPAA Compliance', 'Research ML', 'Medical Data'],
    featuredImage: '/images/case-studies/healthcare-ai.jpg',
    featured: true,
  },
  {
    id: '4',
    slug: 'complex-problem-solving-ai',
    title: 'AI Systems for Complex Problem Decomposition',
    client: 'Fortune 500 Companies',
    industry: 'enterprise',
    services: ['knowledge-systems', 'intelligent-automation'],
    challenge:
      'Enterprises faced intricate, multi-dimensional problems—supply chain optimization, resource allocation, strategic planning—that required breaking down complexity into manageable, solvable components.',
    solution:
      'Developed AI systems that decompose complex problems into structured sub-tasks, apply specialized reasoning to each component, and synthesize solutions. Implemented chain-of-thought prompting, tree-of-thought exploration, and multi-agent debate for robust problem-solving.',
    results: [
      { metric: 'Problem Complexity', value: 'Enterprise-scale', description: 'Handled effectively' },
      { metric: 'Solution Quality', value: '85%+', description: 'Actionable recommendations' },
      { metric: 'Analysis Time', value: '70%', description: 'Reduction vs manual' },
    ],
    technologies: ['Chain-of-Thought', 'Tree-of-Thought', 'Multi-Agent Debate', 'Reasoning Systems'],
    featuredImage: '/images/case-studies/complex-ai.jpg',
    featured: true,
  },
  {
    id: '5',
    slug: 'patented-smart-building-platform',
    title: 'Patented Smart Building & Digital Twin Platform',
    client: 'PropTech Enterprise',
    industry: 'proptech',
    services: ['intelligent-automation', 'software-engineering'],
    challenge:
      'Generic LLMs failed to understand the complexity of physical spaces, access control, and building automation systems. Smart building data was fragmented across hardware vendors, protocols, and legacy systems.',
    solution:
      'Built domain-specific LLM systems grounded in structured knowledge graphs representing buildings, identities, and devices. Created graph-based digital twins with LLM interfaces capable of reasoning over graph relationships. This innovative approach resulted in 5 USPTO patents for novel methods in smart building technology.',
    results: [
      { metric: 'USPTO Patents', value: '5', description: 'Secured for innovations' },
      { metric: 'Coverage', value: '37M sq ft', description: 'Across 22 cities' },
      { metric: 'Platform Adoption', value: '96%', description: 'Industry-leading rate' },
    ],
    technologies: ['Knowledge Graphs', 'Neo4j', 'Digital Twins', 'Graph Reasoning', 'Patented Tech'],
    featuredImage: '/images/case-studies/smart-building.jpg',
    featured: false,
  },
  {
    id: '6',
    slug: 'ai-integration-protocol-translation',
    title: 'AI-Assisted Integration & Protocol Translation Engine',
    client: 'Enterprise Clients',
    industry: 'technology',
    services: ['knowledge-systems', 'intelligent-automation'],
    challenge:
      'Enterprises needed to integrate dozens of legacy systems and hardware devices—each with different protocols, schemas, and data semantics. Manual integration was slow and error-prone.',
    solution:
      'Created an AI-assisted integration engine that understands, maps, and normalizes unfamiliar systems. Built LLM-powered schema interpretation and mapping, automated data normalization pipelines, and AI-generated documentation and integration summaries.',
    results: [
      { metric: 'Systems Integrated', value: '55+', description: 'Across multiple verticals' },
      { metric: 'Timeline', value: 'Months → Weeks', description: 'Integration speed' },
      { metric: 'Maintenance Cost', value: 'Lowered', description: 'Long-term savings' },
    ],
    technologies: ['LLM Schema Mapping', 'Protocol Translation', 'Data Normalization', 'AI Documentation'],
    featuredImage: '/images/case-studies/integration.jpg',
    featured: false,
  },
  {
    id: '7',
    slug: 'agentic-workflow-automation',
    title: 'Agentic Workflow Automation with Human-in-the-Loop',
    client: 'Mid-Market to Enterprise',
    industry: 'technology',
    services: ['autonomous-ai-agents', 'software-engineering'],
    challenge:
      'Businesses needed AI that could autonomously handle complex workflows while maintaining human oversight for critical decisions. Existing automation was either too rigid or too unpredictable.',
    solution:
      'Designed agentic systems with sophisticated orchestration layers—planning agents, execution agents, and validation agents working in concert. Implemented human-in-the-loop checkpoints, rollback capabilities, and explainable decision trails for full auditability.',
    results: [
      { metric: 'Automation Rate', value: '80%', description: 'Of routine workflows' },
      { metric: 'Human Override', value: 'Seamless', description: 'When needed' },
      { metric: 'Error Recovery', value: 'Automated', description: 'Self-correcting agents' },
    ],
    technologies: ['Agentic AI', 'Workflow Orchestration', 'Human-in-the-Loop', 'LangGraph', 'CrewAI'],
    featuredImage: '/images/case-studies/agentic-workflow.jpg',
    featured: false,
  },
  {
    id: '8',
    slug: 'secure-enterprise-ai-platforms',
    title: 'Secure & Compliant Enterprise AI Platforms',
    client: 'Fortune-Level Enterprises',
    industry: 'enterprise',
    services: ['autonomous-ai-agents', 'software-engineering'],
    challenge:
      'Large enterprises wanted AI capabilities but were blocked by security, compliance, and governance concerns. Procurement and security approvals stalled AI initiatives.',
    solution:
      'Designed AI platforms with security-first architecture aligned to SOC 2 and ISO 27001 requirements. Built secure AI pipelines with data isolation, role-based access to AI outputs, and comprehensive audit trails and usage monitoring.',
    results: [
      { metric: 'Compliance', value: 'Zero Risk', description: 'Enterprise AI deployed safely' },
      { metric: 'Approvals', value: 'Accelerated', description: 'Security sign-off faster' },
      { metric: 'Trust', value: 'Fortune-level', description: 'Long-term customer trust' },
    ],
    technologies: ['SOC 2', 'ISO 27001', 'Data Isolation', 'RBAC', 'Audit Trails'],
    featuredImage: '/images/case-studies/security.jpg',
    featured: false,
  },
  {
    id: '9',
    slug: 'ai-executive-decision-support',
    title: 'AI-Powered Executive Decision Support',
    client: 'C-Suite Leaders',
    industry: 'enterprise',
    services: ['knowledge-systems', 'intelligent-automation'],
    challenge:
      'Executives were overwhelmed by dashboards, reports, and disconnected data sources that slowed decision-making. Critical insights were buried in noise.',
    solution:
      'Built AI agents that synthesize data into concise, decision-ready insights. Created AI-generated executive briefs, cross-system trend analysis, and natural language "what-if" exploration capabilities.',
    results: [
      { metric: 'Decision Cycles', value: 'Faster', description: 'Strategic speed improved' },
      { metric: 'Manual Reporting', value: 'Reduced', description: 'Automated insights' },
      { metric: 'Data-Action Alignment', value: 'Better', description: 'Strategy meets data' },
    ],
    technologies: ['AI Synthesis', 'Trend Analysis', 'Natural Language', 'Executive Dashboards'],
    featuredImage: '/images/case-studies/executive-ai.jpg',
    featured: false,
  },
  {
    id: '10',
    slug: 'ai-concept-to-production',
    title: 'From AI Concept to Production at Scale',
    client: 'Growth-Stage Companies',
    industry: 'technology',
    services: ['autonomous-ai-agents', 'software-engineering'],
    challenge:
      'Many organizations stalled at AI demos and prototypes. Ideas never made it to production, and investments failed to generate ROI.',
    solution:
      'Established a repeatable framework to take AI from idea to production. Delivered AI strategy and feasibility analysis, production-grade agent and LLM architectures, and monitoring, feedback loops, and iteration pipelines.',
    results: [
      { metric: 'Production Status', value: 'Running', description: 'Not demos—real systems' },
      { metric: 'ROI', value: 'Measurable', description: 'Tied to business outcomes' },
      { metric: 'Team Capability', value: 'Empowered', description: 'Extend AI safely' },
    ],
    technologies: ['Agent Architecture', 'LLM Orchestration', 'Evaluation Pipelines', 'Feedback Loops'],
    featuredImage: '/images/case-studies/production-ai.jpg',
    featured: false,
  },
]

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.featured)
}

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.slug === slug)
}

export const getCaseStudiesByService = (serviceId: string): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.services.includes(serviceId))
}

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.industry === industry)
}
