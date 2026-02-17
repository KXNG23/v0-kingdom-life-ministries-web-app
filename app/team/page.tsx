import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Crown, Users, Music, BookOpen, Baby, Heart } from "lucide-react"

const leadershipTeam = [
  {
    name: "Apostle Sthelo",
    role: "Senior Pastor & Founder",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PASTOR_A-QLqxAReeFvOSPjqm8naHwJm8kOUP2P.jpg",
    bio: "Apostle Sthelo is the visionary leader of Kingdom Life & Light Ministries. With a deep passion for the Word of God and a heart for His people, he leads with wisdom, integrity, and unwavering faith. His ministry is marked by powerful Kingdom teachings and a commitment to raising up leaders.",
    featured: true,
  },
]

const ministryLeaders = [
  {
    name: "Ministry Leader",
    role: "Worship Director",
    icon: Music,
    description: "Leading the congregation into the presence of God through powerful worship and praise.",
  },
  {
    name: "Ministry Leader",
    role: "Youth Pastor",
    icon: Users,
    description: "Guiding and mentoring the next generation to discover their purpose in Christ.",
  },
  {
    name: "Ministry Leader",
    role: "Children's Ministry Director",
    icon: Baby,
    description: "Creating a fun, safe, and nurturing environment for children to learn about God's love.",
  },
  {
    name: "Ministry Leader",
    role: "Bible Study Coordinator",
    icon: BookOpen,
    description: "Facilitating in-depth study of Scripture to build strong foundations of faith.",
  },
  {
    name: "Ministry Leader",
    role: "Outreach Coordinator",
    icon: Heart,
    description: "Organizing community outreach programmes and missions to spread God's love.",
  },
  {
    name: "Ministry Leader",
    role: "Intercessory Prayer Leader",
    icon: Crown,
    description: "Leading the prayer ministry and standing in the gap for the church and community.",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-64 md:h-80 overflow-hidden bg-secondary">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/137345643_f6c12034a2_o-V1rH5fW8idPVR2wnj4RgswedwcBCCQ.webp"
            alt="Congregation in worship"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary-foreground mb-3">
                Our Team
              </h1>
              <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">
                Meet the dedicated leaders serving at Kingdom Life & Light Ministries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Pastor - Featured */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {leadershipTeam.map((leader) => (
              <div key={leader.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[550px] rounded-2xl overflow-hidden bg-muted/30 border-2 border-primary/20">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Crown className="w-4 h-4" />
                    Senior Leadership
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-3">
                    {leader.name}
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-6">{leader.role}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{leader.bio}</p>

                  <Card className="border-2 border-primary/20 bg-secondary">
                    <CardContent className="p-6">
                      <h4 className="font-serif text-lg font-bold text-secondary-foreground mb-4">
                        Connect with Apostle Sthelo
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Send a Message
                        </Button>
                        <Button
                          variant="outline"
                          className="bg-transparent text-secondary-foreground border-primary/30 flex-1"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Church Office
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leaders */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ministry Leaders
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our dedicated ministry leaders serve faithfully to build up the body of Christ and impact our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ministryLeaders.map((leader, index) => (
                <Card
                  key={index}
                  className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                      <leader.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-card-foreground mb-1">{leader.role}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed mb-8">
              We believe every member has a role to play in the body of Christ. Whether you&apos;re called to lead
              worship, work with children, serve in outreach, or support behind the scenes, there&apos;s a place for you
              at Kingdom Life & Light Ministries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Volunteer Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-secondary-foreground border-primary/30 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
