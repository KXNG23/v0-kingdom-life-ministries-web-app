"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Play,
  Pause,
  Download,
  Search,
  Mic,
  Video,
  FileText,
  Calendar,
  Clock,
  User,
  Upload,
  Plus,
  ChevronLeft,
  Filter,
  BookOpen,
  X,
  Users,
  Baby,
  Music,
  Handshake,
  GraduationCap,
  Globe,
} from "lucide-react"

const ministries = [
  {
    icon: Users,
    name: "Adult Ministry",
    description: "Bible studies, fellowship groups, and spiritual growth opportunities for adults of all ages",
  },
  {
    icon: GraduationCap,
    name: "Youth Ministry",
    description: "Engaging programs for teens to grow in faith and build lasting friendships",
  },
  {
    icon: Baby,
    name: "Children's Ministry",
    description: "Fun, age-appropriate lessons that help children discover God's love",
  },
  {
    icon: Music,
    name: "Worship Ministry",
    description: "Choir, praise team, and musicians leading the congregation in worship",
  },
  {
    icon: Handshake,
    name: "Outreach Ministry",
    description: "Community service, missions, and evangelism to share God's love",
  },
  {
    icon: Globe,
    name: "Missions",
    description: "Supporting local and international missions to spread the Gospel worldwide",
  },
]

interface Sermon {
  id: string
  title: string
  speaker: string
  date: string
  duration: string
  category: "audio" | "video" | "document"
  series: string
  description: string
  thumbnail: string
  fileUrl?: string
}

const sampleSermons: Sermon[] = [
  {
    id: "1",
    title: "The Mystery of Fellowship",
    speaker: "Apostle Sthelo",
    date: "December 10, 2025",
    duration: "45:23",
    category: "video",
    series: "Kingdom Living",
    description:
      "An in-depth teaching on the power and purpose of fellowship in the body of Christ. Discover what true biblical fellowship looks like and how it transforms lives.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUNDAY_CHURCH_SERVICE_FINAL-8OJnccybNwA1ek0bhpaUU9l65oaCYy.jpg",
  },
  {
    id: "2",
    title: "Walking in Kingdom Authority",
    speaker: "Apostle Sthelo",
    date: "December 3, 2025",
    duration: "52:10",
    category: "audio",
    series: "Kingdom Living",
    description:
      "Understanding the authority given to every believer through Christ. Learn how to exercise your spiritual authority with confidence and wisdom.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PASTOR_A-QLqxAReeFvOSPjqm8naHwJm8kOUP2P.jpg",
  },
  {
    id: "3",
    title: "The Power of Worship",
    speaker: "Apostle Sthelo",
    date: "November 26, 2025",
    duration: "48:35",
    category: "audio",
    series: "Deeper Worship",
    description:
      "Exploring the transformative power of authentic worship. When we worship in spirit and truth, heaven opens and breakthrough comes.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-HlwNiaEoFLBRLnFoQCcUsy3NAtEkVT.jpeg",
  },
  {
    id: "4",
    title: "Study Guide: Kingdom Living Series",
    speaker: "Apostle Sthelo",
    date: "December 2025",
    duration: "24 pages",
    category: "document",
    series: "Kingdom Living",
    description:
      "A comprehensive study guide accompanying the Kingdom Living sermon series. Includes discussion questions, key scriptures, and notes.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_850432867_6ZhXzUIKXiGY6YB64puyjUr81L8uhNNV-PHtp157MrWONZYbBhRKCb4tZBMfblr.jpg",
  },
  {
    id: "5",
    title: "Unlocking the Mysteries of Prayer",
    speaker: "Apostle Sthelo",
    date: "November 19, 2025",
    duration: "55:42",
    category: "video",
    series: "Prayer Warriors",
    description:
      "A powerful teaching on the secrets to effective prayer. Discover how to break through in prayer and see results in your life.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/137345643_f6c12034a2_o-V1rH5fW8idPVR2wnj4RgswedwcBCCQ.webp",
  },
  {
    id: "6",
    title: "Faith That Moves Mountains",
    speaker: "Apostle Sthelo",
    date: "November 12, 2025",
    duration: "50:18",
    category: "audio",
    series: "Foundations of Faith",
    description:
      "Understanding the kind of faith that moves mountains and changes circumstances. God is looking for people who will dare to believe.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-HlwNiaEoFLBRLnFoQCcUsy3NAtEkVT.jpeg",
  },
  {
    id: "7",
    title: "Sermon Notes: Prayer Warriors Series",
    speaker: "Apostle Sthelo",
    date: "November 2025",
    duration: "18 pages",
    category: "document",
    series: "Prayer Warriors",
    description:
      "Detailed sermon notes from the Prayer Warriors series. Perfect for personal study and small group discussions.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_850432867_6ZhXzUIKXiGY6YB64puyjUr81L8uhNNV-PHtp157MrWONZYbBhRKCb4tZBMfblr.jpg",
  },
  {
    id: "8",
    title: "The Heart of a Worshipper",
    speaker: "Apostle Sthelo",
    date: "November 5, 2025",
    duration: "47:55",
    category: "video",
    series: "Deeper Worship",
    description:
      "What does God look for in a worshipper? This message explores the heart posture that attracts God's presence and favour.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PASTOR_A-QLqxAReeFvOSPjqm8naHwJm8kOUP2P.jpg",
  },
]

function AudioPlayer({ sermon }: { sermon: Sermon }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            setIsPlaying(false)
            return 0
          }
          return prev + 0.5
        })
      }, 200)
    }
  }

  return (
    <Card className="border-2 border-border hover:border-primary/50 transition-all bg-card group">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-40 h-40 sm:h-auto flex-shrink-0 overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
            <Image
              src={sermon.thumbnail}
              alt={sermon.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center">
              <Mic className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="flex-1 p-5">
            <div className="flex items-start justify-between gap-2 mb-1">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                {sermon.series}
              </span>
              <span className="text-xs text-muted-foreground">{sermon.duration}</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-card-foreground mb-1 text-balance">{sermon.title}</h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {sermon.speaker}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {sermon.date}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{sermon.description}</p>
            {/* Audio Player Bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-primary-foreground" />
                ) : (
                  <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                )}
              </button>
              <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Button size="sm" variant="outline" className="bg-transparent flex-shrink-0">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function VideoCard({ sermon }: { sermon: Sermon }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <Card className="border-2 border-border hover:border-primary/50 transition-all bg-card group overflow-hidden">
      <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => setShowPlayer(!showPlayer)}>
        {showPlayer ? (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <div className="text-center">
              <Video className="w-16 h-16 text-primary mx-auto mb-3" />
              <p className="text-secondary-foreground text-sm">Video player placeholder</p>
              <p className="text-secondary-foreground/60 text-xs mt-1">Connect your media hosting to stream</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-3 bg-transparent text-secondary-foreground"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowPlayer(false)
                }}
              >
                <X className="w-3 h-3 mr-1" />
                Close
              </Button>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={sermon.thumbnail}
              alt={sermon.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-secondary/30 group-hover:bg-secondary/50 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-secondary/80 text-secondary-foreground text-xs px-2 py-1 rounded">
              {sermon.duration}
            </div>
          </>
        )}
      </div>
      <CardContent className="p-5">
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{sermon.series}</span>
        <h4 className="font-serif text-lg font-bold text-card-foreground mt-2 mb-1 text-balance">{sermon.title}</h4>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {sermon.speaker}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {sermon.date}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{sermon.description}</p>
      </CardContent>
    </Card>
  )
}

function DocumentCard({ sermon }: { sermon: Sermon }) {
  return (
    <Card className="border-2 border-border hover:border-primary/50 transition-all bg-card group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">{sermon.series}</span>
            <h4 className="font-serif text-lg font-bold text-card-foreground mt-2 mb-1 text-balance">
              {sermon.title}
            </h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {sermon.speaker}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {sermon.date}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {sermon.duration}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{sermon.description}</p>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AdminUploadPanel() {
  const [dragActive, setDragActive] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Upload className="w-4 h-4 mr-2" />
          Upload Sermon
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-card-foreground">Upload New Sermon</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Title</label>
              <Input placeholder="Sermon title" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Speaker</label>
              <Input placeholder="Speaker name" defaultValue="Apostle Sthelo" className="bg-background" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Series</label>
              <Input placeholder="Sermon series" className="bg-background" />
            </div>
            <div>
              <label className="text-sm font-medium text-card-foreground mb-1.5 block">Category</label>
              <select className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground">
                <option value="audio">Audio Clip</option>
                <option value="video">Video Clip</option>
                <option value="document">Document (PDF)</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-card-foreground mb-1.5 block">Description</label>
            <textarea
              rows={3}
              placeholder="Brief description of the sermon..."
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground resize-none"
            />
          </div>
          {/* Drag & Drop Upload Zone */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border"
            }`}
            onDragOver={(e) => {
              e.preventDefault()
              setDragActive(true)
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => {
              e.preventDefault()
              setDragActive(false)
            }}
          >
            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-1">
              Drag and drop your file here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supports MP3, MP4, PDF (Max 500MB)
            </p>
            <Button variant="outline" size="sm" className="mt-4 bg-transparent">
              Browse Files
            </Button>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Upload Sermon
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function SermonsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeries, setSelectedSeries] = useState("all")

  const allSeries = [...new Set(sampleSermons.map((s) => s.series))]

  const filterSermons = (category?: string) => {
    return sampleSermons.filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sermon.series.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSeries = selectedSeries === "all" || sermon.series === selectedSeries
      const matchesCategory = !category || sermon.category === category
      return matchesSearch && matchesSeries && matchesCategory
    })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-HlwNiaEoFLBRLnFoQCcUsy3NAtEkVT.jpeg"
            alt="Worship service"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary-foreground mb-3">
                Sermon Library
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">
                Explore our collection of teachings, messages, and study materials from Apostle Sthelo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search sermons by title, speaker, or series..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="h-9 rounded-md border border-input bg-card px-3 text-sm text-foreground w-full sm:w-auto"
              >
                <option value="all">All Series</option>
                {allSeries.map((series) => (
                  <option key={series} value={series}>
                    {series}
                  </option>
                ))}
              </select>
            </div>
            <AdminUploadPanel />
          </div>
        </div>
      </section>

      {/* Sermon Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-8 bg-muted">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  All ({sampleSermons.length})
                </TabsTrigger>
                <TabsTrigger value="audio" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Mic className="w-4 h-4 mr-1.5" />
                  Audio ({filterSermons("audio").length})
                </TabsTrigger>
                <TabsTrigger value="video" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Video className="w-4 h-4 mr-1.5" />
                  Video ({filterSermons("video").length})
                </TabsTrigger>
                <TabsTrigger value="document" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Docs ({filterSermons("document").length})
                </TabsTrigger>
              </TabsList>

              {/* All Sermons */}
              <TabsContent value="all">
                <div className="grid gap-6">
                  {filterSermons().length > 0 ? (
                    filterSermons().map((sermon) => {
                      if (sermon.category === "audio") return <AudioPlayer key={sermon.id} sermon={sermon} />
                      if (sermon.category === "video") return <VideoCard key={sermon.id} sermon={sermon} />
                      return <DocumentCard key={sermon.id} sermon={sermon} />
                    })
                  ) : (
                    <div className="text-center py-16">
                      <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">No sermons found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Audio Tab */}
              <TabsContent value="audio">
                <div className="grid gap-6">
                  {filterSermons("audio").length > 0 ? (
                    filterSermons("audio").map((sermon) => (
                      <AudioPlayer key={sermon.id} sermon={sermon} />
                    ))
                  ) : (
                    <div className="text-center py-16">
                      <Mic className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">No audio sermons found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Video Tab */}
              <TabsContent value="video">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filterSermons("video").length > 0 ? (
                    filterSermons("video").map((sermon) => (
                      <VideoCard key={sermon.id} sermon={sermon} />
                    ))
                  ) : (
                    <div className="text-center py-16 col-span-2">
                      <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">No video sermons found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="document">
                <div className="grid gap-6">
                  {filterSermons("document").length > 0 ? (
                    filterSermons("document").map((sermon) => (
                      <DocumentCard key={sermon.id} sermon={sermon} />
                    ))
                  ) : (
                    <div className="text-center py-16">
                      <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">No documents found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Ministries</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover opportunities to serve, grow, and connect through our various ministries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministries.map((ministry, index) => (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <ministry.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-card-foreground mb-3">{ministry.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{ministry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
