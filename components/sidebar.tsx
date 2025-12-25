"use client"

import { Users, Settings } from "lucide-react"
import { useState } from "react"
import ProfileModal from "./profile-modal"

interface SidebarProps {
  activeContactId: string
}

const contacts = [
  {
    id: "1",
    name: "Sarah_Dev",
    message: "git push --force?",
    unread: false,
  },
  {
    id: "2",
    name: "Team_Backend",
    message: "DB migration failed",
    unread: true,
  },
  {
    id: "3",
    name: "Project_Manager",
    message: "deadline_update.json",
    unread: false,
  },
]

export default function Sidebar({ activeContactId }: SidebarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className="flex w-80 flex-col border-r border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-4">
        <h1 className="font-mono text-xl font-bold text-primary">&lt;DevTalk /&gt;</h1>
        <div className="flex gap-2">
          <button className="rounded-md p-2 hover:bg-secondary transition-colors">
            <Users className="h-5 w-5" />
          </button>
          <button className="rounded-md p-2 hover:bg-secondary transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full rounded-lg bg-secondary px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`flex cursor-pointer items-center gap-3 border-b border-border p-4 transition-colors hover:bg-secondary/80 ${
              contact.id === activeContactId ? "bg-secondary" : ""
            }`}
          >
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-semibold text-primary">
                {contact.name.substring(0, 2)}
              </div>
              {contact.unread && (
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent border-2 border-card"></div>
              )}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm font-semibold">{contact.name}</h3>
              </div>
              <p className="truncate font-mono text-xs text-muted-foreground">{contact.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border p-4">
        <div
          className="flex items-center gap-3 cursor-pointer rounded-lg p-2 transition-colors hover:bg-secondary"
          onClick={() => setIsProfileOpen(true)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
            CU
          </div>
          <div className="flex-1">
            <h3 className="font-mono text-sm font-semibold">currentUser</h3>
            <p className="font-mono text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>

      <ProfileModal isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </div>
  )
}
