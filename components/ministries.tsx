import { Card, CardContent } from "@/components/ui/card"
import { Users, Baby, Music, Handshake, GraduationCap, Globe } from "lucide-react"

export function Ministries() {
  const ministries = [
    {
      icon: Users,
      name: "Adult Ministry",
      description: "Bible studies, fellowship groups, and spiritual growth opportunities for adults",
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

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Ministries</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover opportunities to serve, grow, and connect through our various ministries
            </p>
          </div>

          {/* Ministries Grid */}
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
  )
}
