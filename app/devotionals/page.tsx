"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ChevronLeft, ChevronRight, Facebook, ExternalLink, Share2 } from "lucide-react"

const dailyDevotionals = [
  {
    day: "Monday",
    title: "Walking in the Light",
    scripture: "1 John 1:7",
    verse:
      "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.",
    reflection:
      "As children of God, we are called to walk in His glorious light. When we embrace transparency before God and each other, true fellowship is birthed. Today, let the light of Christ illuminate every area of your life. There is power in walking in the light -- it brings healing, freedom, and deep connection with your brothers and sisters in Christ.",
    prayer:
      "Lord, help me to walk in Your light today. Remove every shadow of darkness from my heart and let Your truth guide my steps. Amen.",
  },
  {
    day: "Tuesday",
    title: "The Power of Prayer",
    scripture: "James 5:16",
    verse:
      "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.",
    reflection:
      "Never underestimate the power of your prayers. God hears every word you speak and every cry of your heart. When we pray with faith and righteousness, mountains move. Today, commit to spending quality time in prayer. Pray for your family, your church, your community, and your nation.",
    prayer:
      "Father, ignite a fresh fire of prayer within me. Let my prayers rise as sweet incense before Your throne. I declare that every mountain must move in Jesus' name. Amen.",
  },
  {
    day: "Wednesday",
    title: "Faith Over Fear",
    scripture: "2 Timothy 1:7",
    verse: "For God has not given us a spirit of fear, but of power, love, and a sound mind.",
    reflection:
      "Fear is not from God. Every time fear tries to grip your heart, remember that the Spirit within you is greater than any challenge before you. You have been given power to overcome, love to conquer, and a sound mind to make wise decisions. Walk boldly today, knowing that God is with you.",
    prayer:
      "Holy Spirit, fill me with Your power and love. I reject every spirit of fear and I walk in the boldness You have given me. Amen.",
  },
  {
    day: "Thursday",
    title: "Abiding in Christ",
    scripture: "John 15:5",
    verse:
      "I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    reflection:
      "Fruitfulness in the Kingdom is not about our own efforts but about our connection to the vine. When we abide in Christ through worship, prayer, and the Word, we naturally produce fruit that glorifies the Father. Today, draw closer to Jesus. Let His life flow through you.",
    prayer:
      "Jesus, I choose to abide in You today. Let Your life flow through me and produce fruit that glorifies the Father. Apart from You I can do nothing. Amen.",
  },
  {
    day: "Friday",
    title: "Kingdom Authority",
    scripture: "Luke 10:19",
    verse:
      "I have given you authority to trample on snakes and scorpions and to overcome all the power of the enemy; nothing will harm you.",
    reflection:
      "You carry Kingdom authority! Jesus has given you power over every work of the enemy. Do not live as a victim when you are a victor. Rise up in the authority that has been given to you and declare the Word of God over every situation. The enemy must bow at the name of Jesus.",
    prayer:
      "Lord Jesus, I take up the authority You have given me. I declare victory over every scheme of the enemy. Nothing shall harm me because You are my shield. Amen.",
  },
  {
    day: "Saturday",
    title: "Gratitude and Praise",
    scripture: "Psalm 100:4",
    verse:
      "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    reflection:
      "Gratitude opens the gates of heaven. When we come before God with a thankful heart, we position ourselves to receive His blessings. No matter what you are going through today, find reasons to praise God. He is worthy, He is faithful, and He is working all things together for your good.",
    prayer:
      "Father, I enter Your gates with thanksgiving and Your courts with praise. I am grateful for Your goodness, mercy, and faithfulness. You are worthy of all honour. Amen.",
  },
  {
    day: "Sunday",
    title: "The Mystery of Fellowship",
    scripture: "Acts 2:42",
    verse:
      "They devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer.",
    reflection:
      "Fellowship is not optional for the believer -- it is essential. The early church understood that there is power when believers gather together in unity. As you prepare for today's service, come with an expectant heart. God is about to move in a mighty way among His people at Kingdom Life & Light Ministries.",
    prayer:
      "Lord, as I prepare for fellowship today, open my heart to receive from You. Let Your Spirit move powerfully among us as we gather in Your name. Amen.",
  },
]

export default function DevotionalsPage() {
  const today = new Date()
  const dayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1
  const [currentIndex, setCurrentIndex] = useState(dayIndex)
  const fbContainerRef = useRef<HTMLDivElement>(null)
  const [fbWidth, setFbWidth] = useState(340)

  const devotional = dailyDevotionals[currentIndex]

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % dailyDevotionals.length)
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + dailyDevotionals.length) % dailyDevotionals.length)

  useEffect(() => {
    const updateWidth = () => {
      if (fbContainerRef.current) {
        const w = fbContainerRef.current.offsetWidth - 32
        setFbWidth(Math.min(w, 500))
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_850432867_6ZhXzUIKXiGY6YB64puyjUr81L8uhNNV-PHtp157MrWONZYbBhRKCb4tZBMfblr.jpg"
            alt="Woman in prayer"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary-foreground mb-3">
                Daily Devotionals
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">
                Start each day with the Word of God. Be encouraged, strengthened, and inspired.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day Selector Bar */}
      <section className="bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 flex-wrap">
            {dailyDevotionals.map((d, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === currentIndex
                    ? "bg-primary text-primary-foreground shadow-md"
                    : i === dayIndex
                      ? "bg-primary/20 text-foreground hover:bg-primary/30 ring-1 ring-primary/40"
                      : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {d.day}
                {i === dayIndex && <span className="ml-1 text-xs opacity-75">(Today)</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Devotional Card - 2 columns */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/30 bg-card overflow-hidden">
                {/* Header */}
                <div className="bg-secondary p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-primary font-medium text-sm">{devotional.day}&apos;s Devotional</p>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-secondary-foreground mt-1">
                        {devotional.title}
                      </h2>
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
                  <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg mb-8">
                    <p className="font-serif text-lg italic text-foreground leading-relaxed">
                      &ldquo;{devotional.verse}&rdquo;
                    </p>
                    <p className="text-primary font-semibold mt-3">&mdash; {devotional.scripture}</p>
                  </div>

                  {/* Reflection */}
                  <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">Reflection</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{devotional.reflection}</p>

                  {/* Prayer */}
                  <div className="bg-secondary rounded-lg p-6 mb-6">
                    <h3 className="font-serif text-lg font-bold text-secondary-foreground mb-3">
                      Prayer for Today
                    </h3>
                    <p className="text-secondary-foreground/80 italic leading-relaxed">{devotional.prayer}</p>
                  </div>

                  {/* Share */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">Share this devotional with someone</p>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Facebook Feed Sidebar */}
            <div className="lg:col-span-1" ref={fbContainerRef}>
              <Card className="border-2 border-border bg-card overflow-hidden sticky top-40">
                <div className="bg-secondary p-4 flex items-center gap-3">
                  <Facebook className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg font-bold text-secondary-foreground">Live Facebook Feed</h3>
                </div>
                <CardContent className="p-4">
                  <div className="w-full min-h-[600px] bg-muted/50 rounded-lg flex items-center justify-center overflow-hidden">
                    <iframe
                      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FKingdomLifeLightMinistries&tabs=timeline&width=${fbWidth}&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
                      width={fbWidth}
                      height="600"
                      style={{ border: "none", overflow: "hidden" }}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Kingdom Life & Light Ministries Facebook Page"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Follow us for daily devotionals, announcements, and live updates
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
      </section>

      {/* All Week Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                This Week&apos;s Devotionals
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dailyDevotionals.map((d, i) => (
                <Card
                  key={i}
                  className={`border-2 transition-all cursor-pointer ${
                    i === currentIndex
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border hover:border-primary/50 bg-card"
                  }`}
                  onClick={() => {
                    setCurrentIndex(i)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          i === dayIndex
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {d.day}
                        {i === dayIndex ? " (Today)" : ""}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-card-foreground mb-2">{d.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{d.scripture}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{d.reflection}</p>
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
