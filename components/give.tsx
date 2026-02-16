"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Heart,
  CreditCard,
  Smartphone,
  Building2,
  Copy,
  Check,
  BookOpen,
  Users,
  Home,
  Globe,
  HandHeart,
} from "lucide-react"

const bankingDetails = {
  bankName: "FNB (First National Bank)",
  accountName: "Kingdom Life & Light Ministries",
  accountNumber: "62XXXXXXXXX",
  branchCode: "250655",
  accountType: "Cheque Account",
  swiftCode: "FIRNZAJJ",
  reference: "Your Name + Purpose (e.g., John Smith - Tithe)",
}

const givingCategories = [
  {
    icon: BookOpen,
    title: "Tithes",
    description: "Honour God with the first fruits of your increase",
    scripture: "Malachi 3:10 - Bring the whole tithe into the storehouse...",
    reference: "TITHE",
  },
  {
    icon: Heart,
    title: "Offerings",
    description: "A cheerful gift unto the Lord above and beyond the tithe",
    scripture: "2 Corinthians 9:7 - God loves a cheerful giver.",
    reference: "OFFERING",
  },
  {
    icon: Home,
    title: "Building Fund",
    description: "Contributing to the growth and expansion of our church building",
    scripture: "Haggai 1:8 - Build my house, that I may take pleasure in it.",
    reference: "BUILDING",
  },
  {
    icon: Globe,
    title: "Missions",
    description: "Support the spread of the Gospel to the nations",
    scripture: "Matthew 28:19 - Go and make disciples of all nations.",
    reference: "MISSIONS",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Feeding the hungry, clothing the naked, and caring for the community",
    scripture: "Matthew 25:35 - For I was hungry and you gave me something to eat.",
    reference: "OUTREACH",
  },
  {
    icon: HandHeart,
    title: "Pastoral Support",
    description: "Sowing into the life and ministry of your spiritual covering",
    scripture: "Galatians 6:6 - Share all good things with the one who teaches you.",
    reference: "PASTORAL",
  },
]

const quickAmounts = [
  { label: "R100", value: 100 },
  { label: "R250", value: 250 },
  { label: "R500", value: 500 },
  { label: "R1 000", value: 1000 },
  { label: "R2 500", value: 2500 },
  { label: "Custom", value: 0 },
]

const givingMethods = [
  {
    icon: Building2,
    title: "EFT / Bank Transfer",
    description: "Transfer directly using the banking details provided below",
  },
  {
    icon: CreditCard,
    title: "Online Giving",
    description: "Give securely online with your credit or debit card",
  },
  {
    icon: Smartphone,
    title: "Mobile Payment",
    description: "Use SnapScan, Zapper, or mobile banking to give conveniently",
  },
]

export function Give() {
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section id="give" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Give Generously
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your generosity helps us spread the Gospel, support our community, and make a lasting impact for the
              Kingdom of God. Every seed sown is a seed that will produce a harvest.
            </p>
          </div>

          {/* Banking Details - Prominent Card */}
          <Card className="border-2 border-primary/30 bg-secondary mb-12 overflow-hidden">
            <div className="bg-primary/10 p-4 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-primary" />
                <h3 className="font-serif text-xl font-bold text-secondary-foreground">
                  Church Banking Details (EFT)
                </h3>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Bank", value: bankingDetails.bankName, field: "bank" },
                  { label: "Account Name", value: bankingDetails.accountName, field: "name" },
                  { label: "Account Number", value: bankingDetails.accountNumber, field: "account" },
                  { label: "Branch Code", value: bankingDetails.branchCode, field: "branch" },
                  { label: "Account Type", value: bankingDetails.accountType, field: "type" },
                  { label: "SWIFT Code", value: bankingDetails.swiftCode, field: "swift" },
                ].map((item) => (
                  <div
                    key={item.field}
                    className="flex items-center justify-between bg-secondary/50 border border-primary/10 rounded-lg p-4"
                  >
                    <div>
                      <p className="text-xs text-secondary-foreground/60 mb-1">{item.label}</p>
                      <p className="text-secondary-foreground font-semibold">{item.value}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(item.value, item.field)}
                      className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors flex-shrink-0"
                      aria-label={`Copy ${item.label}`}
                    >
                      {copiedField === item.field ? (
                        <Check className="w-4 h-4 text-primary" />
                      ) : (
                        <Copy className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-sm text-secondary-foreground">
                  <span className="font-bold text-primary">Reference:</span>{" "}
                  {bankingDetails.reference}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Giving Categories */}
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Choose How to Sow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {givingCategories.map((category, index) => (
              <Card
                key={index}
                className={`border-2 transition-all cursor-pointer ${
                  selectedCategory === category.reference
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 bg-card"
                }`}
                onClick={() =>
                  setSelectedCategory(selectedCategory === category.reference ? null : category.reference)
                }
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-card-foreground mb-2">{category.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{category.description}</p>
                  <p className="text-xs italic text-primary/80">{category.scripture}</p>
                  {selectedCategory === category.reference && (
                    <p className="mt-3 text-sm font-medium text-primary">
                      Use reference: Your Name - {category.reference}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Amount Selector */}
          <Card className="border-2 border-border bg-card mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-card-foreground mb-6">Quick Give</h3>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount.label}
                    onClick={() => setSelectedAmount(amount.value === 0 ? null : amount.value)}
                    className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all ${
                      selectedAmount === amount.value && amount.value !== 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10 border border-border"
                    }`}
                  >
                    {amount.label}
                  </button>
                ))}
              </div>
              {selectedAmount && (
                <p className="text-muted-foreground mb-6">
                  You selected <span className="text-primary font-bold text-xl">R{selectedAmount.toLocaleString()}</span>
                  {selectedCategory && (
                    <span>
                      {" "}
                      for{" "}
                      <span className="font-semibold">
                        {givingCategories.find((c) => c.reference === selectedCategory)?.title}
                      </span>
                    </span>
                  )}
                </p>
              )}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
              >
                <Heart className="w-5 h-5 mr-2" />
                Give Now
              </Button>
            </CardContent>
          </Card>

          {/* Other Giving Methods */}
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            Other Ways to Give
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {givingMethods.map((method, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/50 transition-all bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-card-foreground mb-3">{method.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scripture Footer */}
          <div className="text-center bg-secondary rounded-lg p-8">
            <p className="font-serif text-xl italic text-secondary-foreground leading-relaxed max-w-2xl mx-auto">
              &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under
              compulsion, for God loves a cheerful giver.&rdquo;
            </p>
            <p className="text-primary font-semibold mt-4">&mdash; 2 Corinthians 9:7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
