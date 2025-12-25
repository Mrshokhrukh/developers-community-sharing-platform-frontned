"use client"

import type React from "react"

import { useState } from "react"
import { Send, Paperclip, Smile } from "lucide-react"

interface ChatInputProps {
  onSendMessage: (text: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <div className="border-t border-border bg-card p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <button type="button" className="rounded-lg p-2 transition-colors hover:bg-secondary">
          <Paperclip className="h-5 w-5" />
          <span className="sr-only">Attach file</span>
        </button>
        <button type="button" className="rounded-lg p-2 transition-colors hover:bg-secondary">
          <Smile className="h-5 w-5" />
          <span className="sr-only">Add emoji</span>
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=">>send()"
          className="flex-1 rounded-lg bg-secondary px-4 py-3 font-mono text-sm outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="rounded-lg bg-primary p-3 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </button>
      </form>
    </div>
  )
}
