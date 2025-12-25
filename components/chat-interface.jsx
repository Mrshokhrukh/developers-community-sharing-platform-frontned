"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import ChatHeader from "./chat-header"
import ChatMessages from "./chat-messages"
import ChatInput from "./chat-input"
import type { Message, Contact } from "../types/chats"

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hey, did you check the new PR?",
      sender: "Sarah_Dev",
      timestamp: new Date("2024-12-25T10:30:00"),
      type: "received",
    },
    {
      id: "2",
      text: "Yeah, looks clean 👍",
      sender: "Me",
      timestamp: new Date("2024-12-25T10:32:00"),
      type: "sent",
    },
    {
      id: "3",
      text: "Hey, look at the latest design updates I pushed.",
      sender: "Sarah_Dev",
      timestamp: new Date("2024-12-25T10:35:00"),
      type: "received",
      image: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    },
    {
      id: "4",
      text: "Looks beautiful! Great job on the colors 🎨",
      sender: "Me",
      timestamp: new Date("2024-12-25T10:36:00"),
      type: "sent",
    },
    {
      id: "5",
      text: "Hey, did you like the new design?",
      sender: "Sarah_Dev",
      timestamp: new Date("2024-12-25T10:38:00"),
      type: "received",
    },
    {
      id: "6",
      text: "The new design is sleek and user-friendly. Great work!",
      sender: "Me",
      timestamp: new Date("2024-12-25T10:40:00"),
      type: "sent",
    },
  ])

  const [activeContact] = useState<Contact>({
    id: "1",
    name: "Sarah_Dev",
    avatar: "/developer-woman-avatar.jpg",
    status: "online",
    lastSeen: new Date(),
  })

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "Me",
      timestamp: new Date(),
      type: "sent",
    }
    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar activeContactId={activeContact.id} />
      <div className="flex flex-1 flex-col">
        <ChatHeader contact={activeContact} />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}
