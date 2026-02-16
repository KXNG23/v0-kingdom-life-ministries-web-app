import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export function Events() {
  const upcomingEvents = [
    {
      title: "Annual Revival Conference",
      date: "March 15-17, 2024",
      time: "6:00 PM Daily",
      location: "Main Sanctuary",
      description: "Three days of powerful worship, teaching, and spiritual renewal",
    },
    {
      title: "Community Outreach Day",
      date: "March 23, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "City Center",
      description: "Join us as we serve our community with food, clothing, and prayer",
    },
    {
      title: "Youth Camp 2024",
      date: "April 5-7, 2024",
      time: "Weekend Retreat",
      location: "Mountain View Camp",
      description: "An unforgettable weekend of fun, fellowship, and spiritual growth for teens",
    },
  ]

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay connected with what's happening at Kingdom Life & Light Ministries
            </p>
          </div>

          <Card className="mb-12 border-2 border-primary/30 bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative bg-muted/50 flex items-center justify-center p-4 lg:p-8">
                  <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
                    <Image
                      src="/images/sunday-service-poster.jpg"
                      alt="Sunday Service - The Mystery of Fellowship"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl font-bold text-card-foreground mb-4">Join Us This Sunday!</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg">Sunday, December 10, 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg">10:00 AM (Morning Service)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-lg">1730 Block 9, Snake Park, Soweto</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg mb-6">
                    <p className="text-sm font-semibold text-primary mb-1">This Week's Theme:</p>
                    <p className="text-xl font-bold text-card-foreground">The Mystery of Fellowship</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Events List */}
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all bg-card">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-card-foreground mb-4">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                    <div className="md:flex-shrink-0">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full md:w-auto">
                        Register Now
                      </Button>
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
