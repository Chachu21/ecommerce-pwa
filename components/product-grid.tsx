import type { Product } from "@/lib/dummy-data"
import { ProductCard } from "./product-card"
import { memo } from "react"

interface ProductGridProps {
  products: Product[]
  title?: string
}

export const ProductGrid = memo(function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-8">
      {title && <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
})
