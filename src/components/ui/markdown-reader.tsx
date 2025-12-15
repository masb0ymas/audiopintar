import '~/styles/hljs-github.css'

import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

import { cn } from '~/lib/utils'

interface MarkdownReaderProps {
  markdown: string
  className?: string
}

export default function MarkdownReader({ markdown, className }: MarkdownReaderProps) {
  return (
    <div
      className={cn(
        'prose prose-gray dark:prose-invert',
        'prose-headings:scroll-mt-24',
        'prose-h1:mb-4 prose-h1:mt-0',
        'prose-h2:mb-3 prose-h2:mt-8',
        'prose-h3:mb-2 prose-h3:mt-6',
        'prose-h4:mb-2 prose-h4:mt-4',
        'prose-p:my-2',
        'prose-ul:my-2 prose-ol:my-2',
        'prose-li:my-1',
        'prose-hr:my-6',
        'prose-a:font-medium prose-a:no-underline hover:prose-a:underline',
        'prose-pre:my-3 prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:p-4',
        'prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5',
        'prose-code:before:content-none prose-code:after:content-none',
        'prose-table:my-4 prose-th:border prose-td:border prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2',
        'w-full max-w-none',
        'whitespace-normal',
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
