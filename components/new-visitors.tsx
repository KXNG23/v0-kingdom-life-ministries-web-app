import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Users, Coffee } from "lucide-react"

export function NewVisitors() {
  const whatToExpect = [
    {
      icon: MapPin,
      title: "Easy to Find",
      description: "We're located at 1730 Block 9, Snake Park, Soweto with ample parking available",
    },
    {
      icon: Clock,
      title: "Service Duration",
      description: "Our services typically last 90 minutes with powerful worship and teaching",
    },
    {
      icon: Users,
      title: "Friendly Atmosphere",
      description: "Come as you are! Our greeters will welcome you and help you feel at home",
    },
    {
      icon: Coffee,
      title: "Connect After",
      description: "Stay for refreshments and fellowship after the service",
    },
  ]

  return (
    <section id="new-visitors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Plan Your Visit</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              First time visiting? We're excited to meet you! Here's what you can expect when you join us
            </p>
          </div>

          {/* What to Expect Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whatToExpect.map((item, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-card-foreground mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              I'm Planning to Visit
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Have questions? Contact us and we'll be happy to help!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
