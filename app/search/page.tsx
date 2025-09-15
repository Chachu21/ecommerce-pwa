"use client"

import { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { products } from "@/lib/dummy-data"
import { ProductGrid } from "@/components/product-grid"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return []

    const searchTerm = query.toLowerCase().trim()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm),
    )
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Search Results</h1>
        <p className="text-muted-foreground">
          {query ? (
            <>
              Found {filteredProducts.length} result{filteredProducts.length !== 1 ? "s" : ""} for "{query}"
            </>
          ) : (
            "Enter a search term to find products"
          )}
        </p>
      </div>

      {query && filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-foreground mb-2">No products found</h2>
          <p className="text-muted-foreground">Try searching with different keywords or browse our categories</p>
        </div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mb-2"></div>
            <div className="h-4 bg-muted rounded w-64 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80"></div>
              ))}
            </div>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  )
}
