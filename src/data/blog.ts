import type { BlogPost, TeamMember } from '@/types'
import { teamMembers } from './team'

const getAuthor = (name: string): TeamMember => {
  return teamMembers.find((t) => t.name === name) || teamMembers[0]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-rag',
    title: 'Getting Started with RAG: A Practical Guide for Enterprises',
    excerpt:
      'Retrieval Augmented Generation is transforming how businesses leverage AI. Learn the fundamentals and best practices for implementing RAG in your organization.',
    content: `
# Getting Started with RAG: A Practical Guide for Enterprises

Retrieval Augmented Generation (RAG) has emerged as one of the most practical applications of large language models for enterprise use cases. Unlike fine-tuning, RAG allows you to ground AI responses in your proprietary data without expensive retraining.

## What is RAG?

RAG combines the power of large language models with your organization's knowledge base. When a user asks a question, the system:

1. **Retrieves** relevant documents from your knowledge base
2. **Augments** the user's query with this context
3. **Generates** a response grounded in your data

## Why RAG Matters for Enterprises

- **Data Privacy**: Your data stays in your control
- **Accuracy**: Responses cite actual sources
- **Freshness**: No need to retrain when content updates
- **Cost**: Much cheaper than fine-tuning

## Implementation Best Practices

### 1. Start with Quality Data

Your RAG system is only as good as the documents it retrieves. Invest time in:
- Cleaning and structuring your content
- Breaking documents into appropriate chunks
- Adding metadata for better filtering

### 2. Choose the Right Vector Database

Consider factors like:
- Scale requirements
- Query latency needs
- Filtering capabilities
- Managed vs. self-hosted

### 3. Optimize Retrieval

- Experiment with chunk sizes
- Use hybrid search (semantic + keyword)
- Implement re-ranking for better precision

## Getting Started

The fastest path to a working RAG system:

1. Pick a vector database (Pinecone, Weaviate, or Chroma)
2. Use a framework like LangChain or LlamaIndex
3. Start with OpenAI embeddings (easy) or open-source (customizable)
4. Build a simple prototype and iterate

## Conclusion

RAG is the most practical way to bring AI to your enterprise data. Start small, measure results, and scale what works.
    `,
    author: getAuthor('Priya Sharma'),
    publishedAt: '2024-01-15',
    category: 'ai-ml',
    tags: ['RAG', 'LLM', 'Enterprise AI', 'Vector Database'],
    featuredImage: '/images/blog/rag-guide.jpg',
    featured: true,
  },
  {
    id: '2',
    slug: 'modern-data-stack-2024',
    title: 'The Modern Data Stack in 2024: What Actually Matters',
    excerpt:
      'With so many tools and platforms available, building a data stack can feel overwhelming. Here is our practical guide to choosing the right technologies.',
    content: `
# The Modern Data Stack in 2024: What Actually Matters

The data tooling landscape has exploded. With hundreds of vendors and open-source projects, how do you build a stack that actually works?

## The Core Components

### 1. Data Ingestion
- **Fivetran/Airbyte** for SaaS connectors
- **Custom pipelines** for proprietary sources
- **CDC tools** for database replication

### 2. Transformation
- **dbt** has become the standard
- SQL-first approach scales with your team
- Version control and testing built-in

### 3. Data Warehouse
- **Snowflake** for ease of use
- **Databricks** for ML-heavy workloads
- **BigQuery** if you're in GCP

### 4. Orchestration
- **Airflow** (self-hosted or Astronomer)
- **Dagster** for asset-centric workflows
- **Prefect** for Python-native teams

## What Actually Matters

1. **Start simple** - You don't need 20 tools
2. **Optimize for iteration** - Choose tools your team can maintain
3. **Data quality first** - Invest early in testing and monitoring
4. **Documentation** - Your future self will thank you

## Our Recommended Stack

For most mid-market companies:
- Fivetran + custom Python for ingestion
- Snowflake for warehousing
- dbt for transformation
- Airflow for orchestration
- Looker or Preset for visualization

The best stack is the one your team can actually use and maintain.
    `,
    author: getAuthor('Marcus Johnson'),
    publishedAt: '2024-01-08',
    category: 'data',
    tags: ['Data Engineering', 'Modern Data Stack', 'dbt', 'Snowflake'],
    featuredImage: '/images/blog/modern-data-stack.jpg',
    featured: true,
  },
  {
    id: '3',
    slug: 'hubspot-vs-salesforce',
    title: 'HubSpot vs Salesforce: Making the Right Choice for Your Business',
    excerpt:
      'The CRM decision is critical for revenue operations. We break down the real differences and help you choose the right platform.',
    content: `
# HubSpot vs Salesforce: Making the Right Choice

After implementing both platforms dozens of times, here's our honest take on the HubSpot vs Salesforce debate.

## The Short Answer

- **HubSpot**: Best for SMB to mid-market, marketing-led growth, teams wanting simplicity
- **Salesforce**: Best for enterprise, complex sales processes, extensive customization needs

## Detailed Comparison

### Ease of Use
- **HubSpot wins**: Intuitive interface, minimal training needed
- **Salesforce**: Steeper learning curve, requires admin support

### Customization
- **Salesforce wins**: Nearly unlimited customization possibilities
- **HubSpot**: Good flexibility, but has boundaries

### Total Cost of Ownership
- **HubSpot**: Lower upfront, predictable costs
- **Salesforce**: Higher base cost + implementation + admin

### Integration Ecosystem
- **Tie**: Both have extensive marketplaces

## Our Recommendation

Choose HubSpot if:
- You're under 200 employees
- Marketing is a key growth driver
- You want quick time-to-value

Choose Salesforce if:
- You're enterprise scale
- You need complex workflow automation
- You have dedicated admin resources

## The Migration Question

If you're already on one platform, migration is significant work. Only migrate if:
- Current platform is truly blocking growth
- You have resources for 3-6 month transition
- Entire organization is committed to change

Both platforms can work well. The right choice depends on your specific context.
    `,
    author: getAuthor('Carlos Rivera'),
    publishedAt: '2024-01-02',
    category: 'crm',
    tags: ['CRM', 'HubSpot', 'Salesforce', 'RevOps'],
    featuredImage: '/images/blog/hubspot-vs-salesforce.jpg',
    featured: false,
  },
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

export const getFeaturedBlogPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured)
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category)
}
