"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Calendar, ArrowRight, Clock } from "lucide-react"

type AnnouncementCategory = "all" | "church-news" | "community" | "ministry-update"

interface Announcement {
  id: string
  title: string
  excerpt: string
  fullText: string
  date: string
  time?: string
  category: Exclude<AnnouncementCategory, "all">
  categoryLabel: string
  image?: string
  featured?: boolean
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Special Sunday Service - The Mystery of Fellowship",
    excerpt:
      "Join us for a powerful Sunday service with Apostle Sthelo as we explore the mystery of fellowship. Come expecting God to move!",
    fullText: "",
    date: "December 10, 2025",
    time: "10:00 AM",
    category: "church-news",
    categoryLabel: "Church News",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNDAY_CHURCH_SERVICE_FINAL-8OJnccybNwA1ek0bhpaUU9l65oaCYy.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Youth Outreach Programme - Snake Park Community",
    excerpt:
      "Our Youth Ministry is organising a community outreach in Snake Park, Soweto. Volunteers needed for food distribution and gospel sharing.",
    fullText: "",
    date: "December 15, 2025",
    time: "9:00 AM",
    category: "community",
    categoryLabel: "Community",
  },
  {
    id: "3",
    title: "New Bible Study Series: Foundations of Faith",
    excerpt:
      "Starting this Wednesday, Apostle Sthelo begins a brand-new Bible study series exploring the foundational truths of our faith.",
    fullText: "",
    date: "December 11, 2025",
    time: "7:00 PM",
    category: "ministry-update",
    categoryLabel: "Ministry Update",
  },
  {
    id: "4",
    title: "End of Year Thanksgiving Service",
    excerpt:
      "Join the entire Kingdom Life & Light family as we come together to give thanks for God's faithfulness throughout the year.",
    fullText: "",
    date: "December 31, 2025",
    time: "6:00 PM",
    category: "church-news",
    categoryLabel: "Church News",
  },
  {
    id: "5",
    title: "Women's Prayer Breakfast",
    excerpt:
      "Calling all women! Join us for a special morning of prayer, fellowship, and encouragement. Breakfast will be served.",
    fullText: "",
    date: "December 20, 2025",
    time: "8:00 AM",
    category: "ministry-update",
    categoryLabel: "Ministry Update",
  },
  {
    id: "6",
    title: "Blanket Drive for Snake Park Residents",
    excerpt:
      "As winter approaches, we are collecting blankets and warm clothing for families in need. Drop off at the church any Sunday.",
    fullText: "",
    date: "Ongoing",
    category: "community",
    categoryLabel: "Community",
  },
]

const categoryTabs: { value: AnnouncementCategory; label: string }[] = [
  { value: "all", label: "All News" },
  { value: "church-news", label: "Church News" },
  { value: "community", label: "Community" },
  { value: "ministry-update", label: "Ministry Updates" },
]

export function Announcements() {
  const [activeCategory, setActiveCategory] = useState<AnnouncementCategory>("all")
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const featured = announcements.find((a) => a.featured)
  const filtered =
    activeCategory === "all"
      ? announcements.filter((a) => !a.featured)
      : announcements.filter((a) => a.category === activeCategory && !a.featured)

  return (
    <section id="announcements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Megaphone className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Announcements & News
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay informed about what is happening at Kingdom Life & Light Ministries and in our community
            </p>
          </div>

          {/* Featured Announcement */}
          {featured && (
            <Card className="border-2 border-primary/30 bg-card overflow-hidden mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto min-h-[300px]">
                  <Image
                    src={featured.image || ""}
                    alt={featured.title}
                    fill
                    className="object-contain bg-secondary"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded w-fit mb-3">
                    {featured.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground mb-3 text-balance">
                    {featured.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featured.date}
                    </span>
                    {featured.time && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featured.time}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          )}

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categoryTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === tab.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Announcement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((announcement) => (
              <Card
                key={announcement.id}
                className="border-2 border-border hover:border-primary/50 transition-all bg-card group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {announcement.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {announcement.date}
                    </div>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-card-foreground mb-3 text-balance group-hover:text-primary transition-colors">
                    {announcement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {announcement.excerpt}
                  </p>
                  {announcement.time && (
                    <div className="flex items-center gap-1 text-sm text-primary mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{announcement.time}</span>
                    </div>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent group-hover:border-primary group-hover:text-primary transition-colors"
                    onClick={() => setExpandedId(expandedId === announcement.id ? null : announcement.id)}
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <Megaphone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-2">No announcements in this category</h3>
              <p className="text-muted-foreground">Check back soon for updates</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
