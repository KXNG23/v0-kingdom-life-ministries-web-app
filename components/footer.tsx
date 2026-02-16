import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:info@kingdomlifelight.org", label: "Email" },
  ]

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Plan Your Visit", href: "#new-visitors" },
    { label: "Service Times", href: "#services" },
    { label: "Sermon Library", href: "/sermons" },
    { label: "Daily Devotionals", href: "#devotionals" },
    { label: "News & Announcements", href: "#announcements" },
    { label: "Ministries", href: "#ministries" },
    { label: "What We Believe", href: "#beliefs" },
    { label: "Give", href: "#give" },
    { label: "Prayer Requests", href: "#prayer" },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Image
                src="/images/church-logo.png"
                alt="Kingdom Life & Light Ministries"
                width={200}
                height={80}
                className="h-16 w-auto mb-4"
              />
              <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                Illuminating the world with Christ's light and empowering believers to live kingdom-centered lives.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.slice(0, 5).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Get Involved</h3>
              <ul className="space-y-2">
                {quickLinks.slice(5).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4 text-secondary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>1730 Block 9, Snake Park, Soweto</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>+27 (0) 11 123 4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>info@kingdomlifelight.org</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold text-secondary-foreground mb-2">Service Times</h4>
                <ul className="space-y-1 text-sm text-secondary-foreground/80">
                  <li>Sunday: 10:00 AM</li>
                  <li>Wednesday: 7:00 PM</li>
                  <li>Friday: 6:00 PM</li>
                  <li>Saturday: 5:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/70 text-sm text-center md:text-left">
                © {currentYear} Kingdom Life & Light Ministries. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
