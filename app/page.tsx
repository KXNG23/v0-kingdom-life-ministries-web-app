import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Sermons } from "@/components/sermons"
import { Events } from "@/components/events"
import { Announcements } from "@/components/announcements"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Sermons />
      <Events />
      <Announcements />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
