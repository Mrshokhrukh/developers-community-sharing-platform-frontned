"use client"

import { useState } from "react"
import { X, Mail, Github, Linkedin, Twitter, Globe, Edit2, Save } from "lucide-react"
import { Button } from "./ui/button"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: "currentUser",
    fullName: "Alex Developer",
    email: "alex.dev@devtalk.com",
    bio: "Full-stack developer | Open source enthusiast | Coffee addict",
    location: "San Francisco, CA",
    github: "github.com/alexdev",
    linkedin: "linkedin.com/in/alexdev",
    twitter: "@alexdev",
    website: "alexdev.io",
    status: "Building cool stuff" as string,
  })

  if (!isOpen) return null

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-xl border border-border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="font-mono text-2xl font-bold text-foreground">User Profile</h2>
          <button onClick={onClose} className="rounded-lg p-2 transition-colors hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start gap-6 border-b border-border pb-6">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary font-mono text-3xl font-bold text-primary-foreground">
                {profile.username.substring(0, 2).toUpperCase()}
              </div>
              <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full border-4 border-card bg-accent"></div>
            </div>

            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-lg outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ) : (
                <>
                  <h3 className="font-mono text-2xl font-bold">{profile.fullName}</h3>
                  <p className="font-mono text-sm text-muted-foreground">@{profile.username}</p>
                </>
              )}

              <div className="mt-3 flex items-center gap-2 font-mono text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{profile.email}</span>
              </div>
            </div>

            <Button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4" /> Save
                </>
              ) : (
                <>
                  <Edit2 className="h-4 w-4" /> Edit
                </>
              )}
            </Button>
          </div>

          {/* Bio & Status */}
          <div className="space-y-4 border-b border-border py-6">
            <div>
              <label className="mb-2 block font-mono text-sm font-semibold text-muted-foreground">Bio</label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <p className="font-mono text-sm leading-relaxed">{profile.bio}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-mono text-sm font-semibold text-muted-foreground">Status</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.status}
                  onChange={(e) => setProfile({ ...profile, status: e.target.value })}
                  className="w-full rounded-lg border border-border bg-secondary px-3 py-2 font-mono text-sm outline-none focus:ring-2 focus:ring-primary"
                />
              ) : (
                <p className="font-mono text-sm text-accent">{profile.status}</p>
              )}
            </div>
          </div>

          <div className="py-6">
            <h4 className="mb-4 font-mono text-sm font-semibold text-muted-foreground">Social Links</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <Github className="h-5 w-5 text-primary" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.github}
                    onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                    className="flex-1 bg-transparent font-mono text-sm outline-none"
                  />
                ) : (
                  <span className="font-mono text-sm">{profile.github}</span>
                )}
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <Linkedin className="h-5 w-5 text-primary" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.linkedin}
                    onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                    className="flex-1 bg-transparent font-mono text-sm outline-none"
                  />
                ) : (
                  <span className="font-mono text-sm">{profile.linkedin}</span>
                )}
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <Twitter className="h-5 w-5 text-primary" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.twitter}
                    onChange={(e) => setProfile({ ...profile, twitter: e.target.value })}
                    className="flex-1 bg-transparent font-mono text-sm outline-none"
                  />
                ) : (
                  <span className="font-mono text-sm">{profile.twitter}</span>
                )}
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-secondary p-3">
                <Globe className="h-5 w-5 text-primary" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="flex-1 bg-transparent font-mono text-sm outline-none"
                  />
                ) : (
                  <span className="font-mono text-sm">{profile.website}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
