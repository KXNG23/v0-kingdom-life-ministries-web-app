import { Card, CardContent } from "@/components/ui/card"
import { Book, Cross, Heart, Users, Globe, Crown } from "lucide-react"

export function Beliefs() {
  const beliefs = [
    {
      icon: Book,
      title: "The Bible",
      description: "We believe the Bible is the inspired, infallible Word of God and our ultimate authority",
    },
    {
      icon: Cross,
      title: "Salvation",
      description: "We believe in salvation through faith in Jesus Christ and His sacrifice on the cross",
    },
    {
      icon: Heart,
      title: "The Holy Spirit",
      description: "We believe in the baptism of the Holy Spirit and the manifestation of spiritual gifts",
    },
    {
      icon: Users,
      title: "The Church",
      description: "We believe in the importance of the local church as the body of Christ",
    },
    {
      icon: Globe,
      title: "The Great Commission",
      description: "We believe in spreading the Gospel to all nations and making disciples",
    },
    {
      icon: Crown,
      title: "Christ's Return",
      description: "We believe in the second coming of Jesus Christ and eternal life",
    },
  ]

  return (
    <section id="beliefs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">What We Believe</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our faith is built on the solid foundation of biblical truth and the transforming power of the Gospel
            </p>
          </div>

          {/* Beliefs Grid */}
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
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
