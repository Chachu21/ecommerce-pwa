import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Header } from "@/components/header"

export default function AboutPage() {
  const features = [
    {
      icon: "🚀",
      title: "Fast & Reliable",
      description: "Lightning-fast performance with 99.9% uptime guarantee",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Optimized for all devices with PWA capabilities",
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Committed to sustainable and environmentally conscious practices",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Carefully curated products from trusted brands worldwide",
    },
    {
      icon: "🤝",
      title: "24/7 Support",
      description: "Round-the-clock customer service to help you anytime",
    },
  ]

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Products" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">About EcoShop</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-balance">Your Trusted Shopping Partner</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 text-pretty">
            We're passionate about bringing you the best products with exceptional service. Our mission is to make
            online shopping simple, secure, and sustainable for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EcoShop?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
              We're committed to providing you with the best shopping experience through innovation, quality, and
              exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-green-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Founded on Trust & Quality</h3>
                <p className="text-gray-600 mb-6 text-pretty">
                  EcoShop was born from a simple idea: online shopping should be easy, secure, and sustainable. Founded
                  in 2020, we've grown from a small startup to a trusted platform serving thousands of customers
                  worldwide.
                </p>
                <p className="text-gray-600 mb-6 text-pretty">
                  Our team is passionate about curating high-quality products while maintaining our commitment to
                  environmental responsibility and exceptional customer service.
                </p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/categories">Explore Products</Link>
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
                  <p className="text-green-50 text-pretty">
                    "To create a sustainable shopping ecosystem that connects conscious consumers with quality products
                    while supporting responsible business practices."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <div className="font-semibold">EcoShop Team</div>
                      <div className="text-green-100 text-sm">Founders & Visionaries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Shopping?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of satisfied customers who trust EcoShop for their online shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
            >
              <Link href="/categories">Shop by Category</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
