import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Crown, Book, Globe, Cross } from "lucide-react"

const values = [
  {
    icon: Crown,
    title: "Kingdom Focused",
    description: "We prioritize advancing God's kingdom through worship, service, and discipleship",
  },
  {
    icon: Heart,
    title: "Love & Compassion",
    description: "We demonstrate Christ's love through genuine care and support for one another",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build meaningful relationships and foster a welcoming family atmosphere",
  },
  {
    icon: BookOpen,
    title: "Biblical Truth",
    description: "We are grounded in Scripture and committed to teaching God's Word faithfully",
  },
]

const beliefs = [
  {
    icon: Book,
    title: "The Bible",
    description:
      "We believe the Bible is the inspired, infallible Word of God and our ultimate authority for all matters of faith and practice. It is God-breathed and useful for teaching, rebuking, correcting and training in righteousness.",
    scripture: "2 Timothy 3:16",
  },
  {
    icon: Cross,
    title: "Salvation",
    description:
      "We believe in salvation through faith in Jesus Christ and His sacrifice on the cross. Salvation is a gift from God, not earned by works, but received through grace by faith in the finished work of Christ.",
    scripture: "Ephesians 2:8-9",
  },
  {
    icon: Heart,
    title: "The Holy Spirit",
    description:
      "We believe in the baptism of the Holy Spirit and the manifestation of spiritual gifts for today. The Holy Spirit empowers, guides, and transforms believers into the image of Christ.",
    scripture: "Acts 1:8",
  },
  {
    icon: Users,
    title: "The Church",
    description:
      "We believe in the importance of the local church as the body of Christ. The church is called to worship God, equip the saints, and be a light in the community through fellowship and love.",
    scripture: "Hebrews 10:25",
  },
  {
    icon: Globe,
    title: "The Great Commission",
    description:
      "We believe in spreading the Gospel to all nations and making disciples. Every believer is called to be a witness for Christ in their community and beyond.",
    scripture: "Matthew 28:19-20",
  },
  {
    icon: Crown,
    title: "Christ's Return",
    description:
      "We believe in the second coming of Jesus Christ and eternal life. We live in anticipation of His glorious return and the establishment of His eternal Kingdom.",
    scripture: "Revelation 22:20",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_850432867_6ZhXzUIKXiGY6YB64puyjUr81L8uhNNV-PHtp157MrWONZYbBhRKCb4tZBMfblr.jpg"
            alt="Woman in worship"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary-foreground mb-3">
                About Our Ministry
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">
                Learn about our vision, values, and what we believe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PASTOR_A-QLqxAReeFvOSPjqm8naHwJm8kOUP2P.jpg"
                  alt="Apostle Sthelo - Lead Pastor"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Meet Our Pastor</h2>
                <h3 className="text-2xl font-semibold text-primary mb-4">Apostle Sthelo</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  With a heart for God&apos;s people and a passion for teaching His Word, Apostle Sthelo leads Kingdom
                  Life & Light Ministries with wisdom, compassion, and unwavering faith.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Under his leadership, our church has grown into a thriving community where believers are equipped to
                  walk in their divine purpose and experience the fullness of God&apos;s kingdom.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Apostle Sthelo&apos;s ministry is marked by a deep commitment to the Word of God, powerful teachings
                  on Kingdom principles, and a heart for raising up leaders who will impact their generation.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="mb-16 border-2 border-primary/20 bg-card">
              <CardContent className="p-8 md:p-12">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-center text-card-foreground leading-relaxed">
                  To illuminate the world with the light of Christ, empower believers to live kingdom-centered lives,
                  and create a community where everyone can encounter God&apos;s transforming love and discover their
                  divine purpose.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {values.map((value, index) => (
                <Card key={index} className="border-2 border-border hover:border-primary/50 transition-colors bg-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl font-bold text-card-foreground mb-2">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What We Believe</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our faith is built on the solid foundation of biblical truth and the transforming power of the Gospel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beliefs.map((belief, index) => (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card group"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <belief.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-card-foreground mb-3">{belief.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-3">{belief.description}</p>
                    <p className="text-sm font-semibold text-primary">{belief.scripture}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worship Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Life at KLLM</h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-HlwNiaEoFLBRLnFoQCcUsy3NAtEkVT.jpeg"
                  alt="Worship with raised hands"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/360_F_850432867_6ZhXzUIKXiGY6YB64puyjUr81L8uhNNV-PHtp157MrWONZYbBhRKCb4tZBMfblr.jpg"
                  alt="Woman in prayer"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/137345643_f6c12034a2_o-V1rH5fW8idPVR2wnj4RgswedwcBCCQ.webp"
                  alt="Congregation in worship"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
