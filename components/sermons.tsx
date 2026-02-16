import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Download, Calendar } from "lucide-react"
import Image from "next/image"

export function Sermons() {
  const recentSermons = [
    {
      title: "The Mystery of Fellowship",
      speaker: "Apostle Sthelo",
      date: "December 10, 2025",
      image: "/images/sunday-service-poster.jpg",
      duration: "45 min",
    },
    {
      title: "Walking in Kingdom Authority",
      speaker: "Apostle Sthelo",
      date: "December 3, 2025",
      image: "/images/pastor.jpg",
      duration: "52 min",
    },
    {
      title: "The Power of Worship",
      speaker: "Apostle Sthelo",
      date: "November 26, 2025",
      image: "/images/worship-hands.jpeg",
      duration: "48 min",
    },
  ]

  return (
    <section id="sermons" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Recent Messages</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Catch up on recent sermons and be encouraged by the Word of God
            </p>
          </div>

          {/* Sermons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentSermons.map((sermon, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all bg-card group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sermon.image || "/placeholder.svg"}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-secondary-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{sermon.date}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="font-serif text-xl font-bold text-card-foreground mb-2 text-balance">
                    {sermon.title}
                  </h4>
                  <p className="text-muted-foreground mb-1">{sermon.speaker}</p>
                  <p className="text-sm text-muted-foreground mb-4">{sermon.duration}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <Play className="w-4 h-4 mr-2" />
                      Watch
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-foreground hover:bg-primary/10 bg-transparent"
            >
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
