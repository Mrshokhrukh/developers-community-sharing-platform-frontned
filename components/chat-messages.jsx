"use client"

import { format } from "date-fns"
import type { Message } from "../types/chats"
import Image from "next/image"

interface ChatMessagesProps {
  messages: Message[]
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      <div className="flex justify-center">
        <div className="rounded-full bg-secondary px-4 py-1.5 font-mono text-xs text-muted-foreground">
          // Session started
        </div>
      </div>

      <div className="flex justify-center">
        <div className="rounded-md bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">10:30</div>
      </div>

      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}>
          <div
            className={`flex max-w-[70%] flex-col space-y-1 ${message.type === "sent" ? "items-end" : "items-start"}`}
          >
            {message.type === "received" && (
              <span className="font-mono text-xs font-semibold text-primary">{message.sender}</span>
            )}
            <div
              className={`rounded-2xl px-4 py-2 ${
                message.type === "sent"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              {message.image && (
                <div className="mt-2 overflow-hidden rounded-lg">
                  <Image
                    src={message.image || "/placeholder.svg"}
                    alt="Shared image"
                    width={300}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className="font-mono text-xs text-muted-foreground">
                {message.type === "sent" ? "Me" : message.sender}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{format(message.timestamp, "HH:mm")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
