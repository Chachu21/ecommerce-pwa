import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { featuredProducts } from "@/lib/dummy-data"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4">
          <ProductGrid products={featuredProducts} title="Featured Products" />
        </div>
      </main>
    </div>
  )
}
