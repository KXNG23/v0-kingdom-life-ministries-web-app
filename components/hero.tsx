import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-secondary pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-background" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/church-logo.png"
              alt="Kingdom Life & Light Ministries"
              width={300}
              height={300}
              className="w-64 md:w-80 h-auto"
              priority
            />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6 text-balance">
            Welcome to Kingdom Life & Light Ministries
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-secondary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {
              "A place where faith comes alive, community thrives, and lives are transformed through the power of God's love"
            }
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              asChild
            >
              <a href="#services">
                Service Times
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-secondary-foreground hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Decorative Element */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
