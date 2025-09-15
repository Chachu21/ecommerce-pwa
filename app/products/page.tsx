import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { products } from "@/lib/dummy-data"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">All Products</h1>
        <ProductGrid products={products} />
      </main>
    </div>
  )
}
