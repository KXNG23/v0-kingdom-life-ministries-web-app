import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Crown } from "lucide-react"

export function About() {
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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">About Our Ministry</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kingdom Life & Light Ministries is a vibrant community of believers dedicated to experiencing God's
              presence, growing in faith, and making a difference in our world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted/30">
              <Image
                src="/images/pastor.jpg"
                alt="Apostle Sthelo - Lead Pastor"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-3xl font-bold text-foreground mb-4">Meet Our Pastor</h3>
              <h4 className="text-2xl font-semibold text-primary mb-4">Apostle Sthelo</h4>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                With a heart for God's people and a passion for teaching His Word, Apostle Sthelo leads Kingdom Life &
                Light Ministries with wisdom, compassion, and unwavering faith.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under his leadership, our church has grown into a thriving community where believers are equipped to
                walk in their divine purpose and experience the fullness of God's kingdom.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <Card className="mb-12 border-2 border-primary/20 bg-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-center text-card-foreground leading-relaxed">
                To illuminate the world with the light of Christ, empower believers to live kingdom-centered lives, and
                create a community where everyone can encounter God's transforming love and discover their divine
                purpose
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
  )
}
