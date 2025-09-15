"use client"

import { useState } from "react"
import { products } from "@/lib/dummy-data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"

const categories = [
  { id: "all", name: "All Products", count: products.length },
  { id: "electronics", name: "Electronics", count: products.filter((p) => p.category === "Electronics").length },
  { id: "clothing", name: "Clothing", count: products.filter((p) => p.category === "Clothing").length },
  { id: "home", name: "Home & Garden", count: products.filter((p) => p.category === "Home & Garden").length },
  { id: "sports", name: "Sports & Fitness", count: products.filter((p) => p.category === "Sports & Fitness").length },
]

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category.toLowerCase().replace(/\s+/g, "") === selectedCategory.replace(/\s+/g, ""),
        )

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Shop by Categories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Discover our carefully curated collection of products across different categories. Find exactly what you're
            looking for with our organized shopping experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-green-600 hover:bg-green-700"
                  : "border-green-200 text-green-700 hover:bg-green-50"
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category to see more products.</p>
          </div>
        )}
      </div>
    </div>
  )
}
