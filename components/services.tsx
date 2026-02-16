import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

export function Services() {
  const serviceSchedule = [
    {
      name: "Sunday Worship Service",
      time: "10:00 AM - 12:00 PM",
      description: "Join us for powerful worship, inspiring messages, and fellowship",
    },
    {
      name: "Wednesday Bible Study",
      time: "7:00 PM - 8:30 PM",
      description: "Dive deeper into God's Word with interactive study and discussion",
    },
    {
      name: "Friday Prayer Night",
      time: "6:00 PM - 8:00 PM",
      description: "Experience the power of corporate prayer and intercession",
    },
    {
      name: "Youth Service",
      time: "Saturday 5:00 PM - 7:00 PM",
      description: "Dynamic service designed for teens and young adults",
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Service Times</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us for worship, prayer, and fellowship. All are welcome!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/worship-hands.jpeg"
                alt="Worship with raised hands"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/woman-praying.jpg"
                alt="Woman in prayer"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/congregation-worship.webp"
                alt="Congregation in worship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <Card className="mb-12 border-2 border-primary/30 bg-secondary">
            <CardContent className="p-8 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-secondary-foreground mb-2">Visit Us</h3>
              <p className="text-secondary-foreground/80 text-lg">1730 Block 9, Snake Park, Soweto</p>
            </CardContent>
          </Card>

          {/* Service Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceSchedule.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-xl font-bold text-card-foreground mb-2">{service.name}</h4>
                      <div className="flex items-center gap-2 text-primary mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{service.time}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
