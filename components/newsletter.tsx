"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Stay Connected</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for weekly updates, event announcements, and inspirational content
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-primary-foreground text-foreground"
            />
            <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
