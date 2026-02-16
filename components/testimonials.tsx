import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Member since 2020",
      content:
        "Kingdom Life & Light Ministries has transformed my life. The teaching is powerful, the community is loving, and I've grown so much in my faith journey.",
    },
    {
      name: "David K.",
      role: "Youth Ministry Leader",
      content:
        "This church has given me purpose and direction. The youth ministry is incredible, and I've found my calling in serving the next generation.",
    },
    {
      name: "Grace T.",
      role: "New Member",
      content:
        "As a new believer, I was welcomed with open arms. The discipleship program helped me understand the Bible and grow in my relationship with God.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">Testimonies</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Hear from our church family about how God is working in their lives
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-primary/20 bg-background/95 hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">{testimonial.content}</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
