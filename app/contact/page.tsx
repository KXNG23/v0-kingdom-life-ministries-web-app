"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, HandHeart, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "1730 Block 9, Snake Park, Soweto",
    detail: "South Africa",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+27 (0) 11 123 4567",
    detail: "Mon-Fri: 9AM - 5PM",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@kingdomlifelight.org",
    detail: "We respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday",
    detail: "9:00 AM - 5:00 PM",
  },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/KingdomLifeLightMinistries", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const serviceSchedule = [
  { day: "Sunday", time: "10:00 AM", service: "Worship Service" },
  { day: "Wednesday", time: "7:00 PM", service: "Bible Study" },
  { day: "Friday", time: "6:00 PM", service: "Prayer Night" },
  { day: "Saturday", time: "5:00 PM", service: "Youth Service" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-HlwNiaEoFLBRLnFoQCcUsy3NAtEkVT.jpeg"
            alt="Worship hands raised"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary-foreground mb-3">
                Contact Us
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">
                We&apos;d love to hear from you. Reach out with any questions, prayer requests, or visit enquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-card-foreground mb-1">{info.title}</h4>
                  <p className="text-foreground font-medium">{info.content}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border bg-card">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-card-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>

                  {submitted && (
                    <div className="bg-primary/10 border border-primary/30 text-foreground rounded-lg p-4 mb-6">
                      Thank you for your message! We will respond shortly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+27 ..."
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Enquiry</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="visit">Planning a Visit</option>
                          <option value="volunteer">Volunteer</option>
                          <option value="pastoral">Pastoral Care</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        rows={6}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Service Times */}
              <Card className="border-2 border-primary/20 bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-secondary-foreground mb-4">Service Times</h3>
                  <div className="space-y-3">
                    {serviceSchedule.map((s, i) => (
                      <div key={i} className="flex items-center justify-between pb-3 border-b border-primary/10 last:border-0 last:pb-0">
                        <div>
                          <p className="font-semibold text-secondary-foreground">{s.day}</p>
                          <p className="text-sm text-secondary-foreground/70">{s.service}</p>
                        </div>
                        <span className="text-primary font-bold text-sm">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-2 border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-4">Follow Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Stay connected with us on social media for daily updates and encouragement.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Prayer Request Quick Link */}
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <HandHeart className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">Need Prayer?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Select &quot;Prayer Request&quot; as your subject and share your need. Our prayer team will stand with you in faith.
                  </p>
                  <Button
                    variant="outline"
                    className="bg-transparent w-full"
                    onClick={() => {
                      const el = document.getElementById("subject") as HTMLSelectElement
                      if (el) {
                        el.value = "prayer"
                        el.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Submit Prayer Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Find Us</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground">1730 Block 9, Snake Park, Soweto, South Africa</p>
            </div>
            <div className="rounded-xl overflow-hidden border-2 border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d27.85!3d-26.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSnake+Park%2C+Soweto!5e0!3m2!1sen!2sza!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kingdom Life & Light Ministries Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
