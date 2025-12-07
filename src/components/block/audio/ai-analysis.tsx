import { Send } from 'lucide-react'
import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

interface AIAnalysisProps {
  summary: string
}

export default function AIAnalysis({ summary }: AIAnalysisProps) {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!message.trim()) return
    // TODO: Implement chat functionality
    console.log('Sending message:', message)
    setMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="h-[calc(100vh-14rem)] lg:sticky lg:top-24 lg:self-start">
      <div className="from-card to-secondary/30 border-primary/20 flex h-full flex-col rounded-lg border bg-gradient-to-br">
        {/* Header */}
        <div className="border-border/50 flex items-center gap-2 border-b p-6 pb-4">
          <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
            <span className="text-primary text-sm font-bold">AI</span>
          </div>
          <div>
            <h2 className="text-foreground text-lg font-semibold">AI Summary</h2>
            <p className="text-muted-foreground text-xs">Powered by ChatGPT</p>
          </div>
        </div>

        {/* Scrollable Summary Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose prose-invert prose-sm max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {summary.split('\n').map((line, index) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-foreground mt-4 mb-2 font-semibold">
                      {line.replace(/\*\*/g, '')}
                    </h3>
                  )
                }
                if (line.startsWith('**')) {
                  const parts = line.split('**')
                  return (
                    <p key={index} className="mb-1">
                      <strong className="text-foreground">{parts[1]}</strong>
                      {parts[2]}
                    </p>
                  )
                }
                if (line.trim().startsWith('-')) {
                  return (
                    <p key={index} className="mb-1 ml-4">
                      {line}
                    </p>
                  )
                }
                return line ? (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ) : null
              })}
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="border-border/50 border-t p-4">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about this summary..."
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={!message.trim()}
              size="icon"
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
