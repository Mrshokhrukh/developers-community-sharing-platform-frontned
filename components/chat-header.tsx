"use client"

import { Video, Phone, MoreVertical } from "lucide-react"
import type { Contact } from "../types/chats"

interface ChatHeaderProps {
  contact: Contact
}

export default function ChatHeader({ contact }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card p-4">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-semibold text-primary">
            {contact.name.substring(0, 2)}
          </div>
          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-green-500"></div>
        </div>
        <div>
          <h2 className="font-mono text-sm font-semibold">{contact.name}</h2>
          <p className="font-mono text-xs text-muted-foreground">
            {"import{"}
            {contact.name}
            {"}from'./contacts'"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 transition-colors hover:bg-secondary" aria-label="call()">
          <Phone className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 transition-colors hover:bg-secondary" aria-label="video()">
          <Video className="h-5 w-5" />
        </button>
        <button className="rounded-lg p-2 transition-colors hover:bg-secondary" aria-label="profile()">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
