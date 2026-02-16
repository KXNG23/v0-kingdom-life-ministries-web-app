"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/sermons", label: "Sermons" },
    { href: "/devotionals", label: "Devotionals" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/98 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-secondary/95 backdrop-blur-sm"
      } border-b border-primary/20`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/church-logo.png"
              alt="Kingdom Life & Light Ministries"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-secondary-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Give CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/give">
                <Heart className="w-4 h-4 mr-2" />
                Give
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary-foreground p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/20 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-secondary-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-primary/20">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <Link href="/give">
                    <Heart className="w-4 h-4 mr-2" />
                    Give
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
