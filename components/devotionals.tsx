"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, ChevronLeft, ChevronRight, Facebook } from "lucide-react"

const dailyDevotionals = [
  {
    day: "Monday",
    date: "February 16, 2026",
    title: "Walking in the Light",
    scripture: "1 John 1:7",
    verse:
      "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.",
    reflection:
      "As children of God, we are called to walk in His glorious light. When we embrace transparency before God and each other, true fellowship is birthed. Today, let the light of Christ illuminate every area of your life. There is power in walking in the light — it brings healing, freedom, and deep connection with your brothers and sisters in Christ.",
  },
  {
    day: "Tuesday",
    date: "February 17, 2026",
    title: "The Power of Prayer",
    scripture: "James 5:16",
    verse:
      "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
    reflection:
      "Never underestimate the power of your prayers. God hears every word you speak and every cry of your heart. When we pray with faith and righteousness, mountains move. Today, commit to spending quality time in prayer. Pray for your family, your church, your community, and your nation.",
  },
  {
    day: "Wednesday",
    date: "February 18, 2026",
    title: "Faith Over Fear",
    scripture: "2 Timothy 1:7",
    verse:
      "For God has not given us a spirit of fear, but of power, love, and a sound mind.",
    reflection:
      "Fear is not from God. Every time fear tries to grip your heart, remember that the Spirit within you is greater than any challenge before you. You have been given power to overcome, love to conquer, and a sound mind to make wise decisions. Walk boldly today, knowing that God is with you.",
  },
  {
    day: "Thursday",
    date: "February 19, 2026",
    title: "Abiding in Christ",
    scripture: "John 15:5",
    verse:
      "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    reflection:
      "Fruitfulness in the Kingdom is not about our own efforts but about our connection to the vine. When we abide in Christ through worship, prayer, and the Word, we naturally produce fruit that glorifies the Father. Today, draw closer to Jesus. Let His life flow through you.",
  },
  {
    day: "Friday",
    date: "February 20, 2026",
    title: "Kingdom Authority",
    scripture: "Luke 10:19",
    verse:
      "I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you.",
    reflection:
      "You carry Kingdom authority! Jesus has given you power over every work of the enemy. Do not live as a victim when you are a victor. Rise up in the authority that has been given to you and declare the Word of God over every situation. The enemy must bow at the name of Jesus.",
  },
  {
    day: "Saturday",
    date: "February 21, 2026",
    title: "Gratitude and Praise",
    scripture: "Psalm 100:4",
    verse:
      "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    reflection:
      "Gratitude opens the gates of heaven. When we come before God with a thankful heart, we position ourselves to receive His blessings. No matter what you are going through today, find reasons to praise God. He is worthy, He is faithful, and He is working all things together for your good.",
  },
  {
    day: "Sunday",
    date: "February 22, 2026",
    title: "The Mystery of Fellowship",
    scripture: "Acts 2:42",
    verse:
      "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
    reflection:
      "Fellowship is not optional for the believer — it is essential. The early church understood that there is power when believers gather together in unity. As you prepare for today's service, come with an expectant heart. God is about to move in a mighty way among His people at Kingdom Life & Light Ministries.",
  },
]

export function Devotionals() {
  const today = new Date()
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1
  const [currentIndex, setCurrentIndex] = useState(dayIndex)

  const devotional = dailyDevotionals[currentIndex]

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dailyDevotionals.length)
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dailyDevotionals.length) % dailyDevotionals.length)
  }

  return (
    <section id="devotionals" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Daily Devotional</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Start each day with the Word of God. Be encouraged, strengthened, and inspired for the day ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Devotional Card */}
            <div className="lg:col-span-3">
              <Card className="border-2 border-primary/30 bg-card overflow-hidden">
                <div className="bg-secondary p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-primary font-medium text-sm">{devotional.day}</p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary-foreground mt-1">
                        {devotional.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={goPrev}
                        className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
                        aria-label="Previous devotional"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={goNext}
                        className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
                        aria-label="Next devotional"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  {/* Scripture */}
                  <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-6">
                    <p className="font-serif text-lg italic text-foreground leading-relaxed">
                      &ldquo;{devotional.verse}&rdquo;
                    </p>
                    <p className="text-primary font-semibold mt-3">&mdash; {devotional.scripture}</p>
                  </div>

                  {/* Reflection */}
                  <h4 className="font-serif text-lg font-bold text-card-foreground mb-3">Reflection</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">{devotional.reflection}</p>

                  {/* Day Selector */}
                  <div className="flex flex-wrap gap-2">
                    {dailyDevotionals.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                          i === currentIndex
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-primary/10"
                        }`}
                      >
                        {d.day.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Facebook Feed Embed */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border bg-card overflow-hidden h-full">
                <div className="bg-secondary p-4 flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg font-bold text-secondary-foreground">Follow Us on Facebook</h3>
                </div>
                <CardContent className="p-4">
                  <div className="w-full min-h-[500px] bg-muted/50 rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKingdomLifeLightMinistries&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="100%"
                      height="500"
                      style={{ border: "none", overflow: "hidden" }}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Kingdom Life & Light Ministries Facebook Page"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Stay connected for daily devotionals, announcements, and updates
                    </p>
                    <Button asChild variant="outline" className="bg-transparent w-full">
                      <a
                        href="https://www.facebook.com/KingdomLifeLightMinistries"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Our Facebook Page
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
