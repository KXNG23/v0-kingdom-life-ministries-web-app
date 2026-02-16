"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HandHeart } from "lucide-react"

export function PrayerRequests() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Prayer request submitted:", formData)
    // Handle form submission
    alert("Thank you for your prayer request. Our prayer team will lift you up in prayer.")
    setFormData({ name: "", email: "", request: "" })
  }

  return (
    <section id="prayer" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HandHeart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Prayer Requests</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe in the power of prayer. Share your prayer request with us, and our prayer team will stand with
              you in faith
            </p>
          </div>

          {/* Prayer Form */}
          <Card className="border-2 border-border bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="request">Prayer Request</Label>
                  <Textarea
                    id="request"
                    value={formData.request}
                    onChange={(e) => setFormData({ ...formData, request: e.target.value })}
                    placeholder="Share your prayer request..."
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Prayer Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
