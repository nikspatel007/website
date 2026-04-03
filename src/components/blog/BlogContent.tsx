import { cn } from '@/lib/utils'

interface BlogContentProps {
  content: string
  className?: string
}

export function BlogContent({ content, className }: BlogContentProps) {
  // Simple markdown-like rendering
  // In production, you might use a proper markdown parser like marked or remark
  const renderContent = () => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let currentParagraph: string[] = []
    let inCodeBlock = false
    let codeContent: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim()
        if (text) {
          elements.push(
            <p key={elements.length} className="mb-4 leading-relaxed">
              {text}
            </p>
          )
        }
        currentParagraph = []
      }
    }

    lines.forEach((line) => {
      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={elements.length}
              className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100"
            >
              <code>{codeContent.join('\n')}</code>
            </pre>
          )
          codeContent = []
          inCodeBlock = false
        } else {
          flushParagraph()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeContent.push(line)
        return
      }

      // Headers
      if (line.startsWith('# ')) {
        flushParagraph()
        elements.push(
          <h1 key={elements.length} className="mb-4 mt-8 text-3xl font-bold">
            {line.slice(2)}
          </h1>
        )
        return
      }

      if (line.startsWith('## ')) {
        flushParagraph()
        elements.push(
          <h2 key={elements.length} className="mb-4 mt-8 text-2xl font-bold">
            {line.slice(3)}
          </h2>
        )
        return
      }

      if (line.startsWith('### ')) {
        flushParagraph()
        elements.push(
          <h3 key={elements.length} className="mb-3 mt-6 text-xl font-bold">
            {line.slice(4)}
          </h3>
        )
        return
      }

      // Lists
      if (line.startsWith('- ')) {
        flushParagraph()
        elements.push(
          <li key={elements.length} className="mb-2 ml-6 list-disc">
            {line.slice(2)}
          </li>
        )
        return
      }

      if (/^\d+\.\s/.test(line)) {
        flushParagraph()
        elements.push(
          <li key={elements.length} className="mb-2 ml-6 list-decimal">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        )
        return
      }

      // Empty line = paragraph break
      if (line.trim() === '') {
        flushParagraph()
        return
      }

      // Regular text
      currentParagraph.push(line)
    })

    flushParagraph()

    return elements
  }

  return (
    <div
      className={cn(
        'prose prose-gray max-w-none',
        'prose-headings:text-gray-900',
        'prose-p:text-gray-600',
        'prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline',
        'prose-strong:text-gray-900',
        className
      )}
    >
      {renderContent()}
    </div>
  )
}
