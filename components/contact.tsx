"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kingdomlifelight.org",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1730 Block 9, Snake Park, Soweto",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 9:00 AM - 5:00 PM",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Reach out with any questions or prayer requests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="border-2 border-primary/30 bg-secondary">
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-bold text-secondary-foreground mb-3">First Time Visitor?</h4>
                  <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                    We can't wait to meet you! Let us know you're coming so we can prepare a warm welcome.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    Plan Your Visit
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
