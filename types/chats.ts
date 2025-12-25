export interface Message {
  id: string
  text: string
  sender: string
  timestamp: Date
  type: "sent" | "received"
  image?: string
}

export interface Contact {
  id: string
  name: string
  avatar: string
  status: "online" | "offline" | "away"
  lastSeen: Date
}

export interface User {
  id: string
  username: string
  fullName: string
  email: string
  bio: string
  location: string
  avatar?: string
  status: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}
