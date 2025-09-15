export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books", "Beauty"]

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "/wireless-bluetooth-headphones.jpg",
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "/organic-cotton-t-shirt.jpg",
    category: "Clothing",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    rating: 4.2,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Smart Home Security Camera",
    price: 149.99,
    originalPrice: 199.99,
    image: "/smart-security-camera.jpg",
    category: "Electronics",
    description: "1080p HD security camera with night vision and mobile app control.",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Yoga Mat Premium",
    price: 39.99,
    image: "/premium-yoga-mat.png",
    category: "Sports",
    description: "Non-slip premium yoga mat with extra cushioning and carrying strap.",
    rating: 4.4,
    reviews: 156,
    inStock: true,
  },
  {
    id: "5",
    name: "Coffee Maker Deluxe",
    price: 89.99,
    originalPrice: 119.99,
    image: "/deluxe-coffee-maker.jpg",
    category: "Home & Garden",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    rating: 4.3,
    reviews: 94,
    inStock: true,
  },
  {
    id: "6",
    name: "Running Shoes Pro",
    price: 129.99,
    image: "/professional-running-shoes.png",
    category: "Sports",
    description: "Professional running shoes with advanced cushioning and breathable mesh.",
    rating: 4.6,
    reviews: 267,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Skincare Set Essential",
    price: 59.99,
    originalPrice: 79.99,
    image: "/essential-skincare-set.jpg",
    category: "Beauty",
    description: "Complete skincare routine with cleanser, toner, and moisturizer.",
    rating: 4.1,
    reviews: 72,
    inStock: true,
  },
  {
    id: "8",
    name: "Bestseller Novel Collection",
    price: 19.99,
    image: "/bestseller-novel-collection.jpg",
    category: "Books",
    description: "Collection of three bestselling novels from award-winning authors.",
    rating: 4.8,
    reviews: 341,
    inStock: true,
  },
]

export const featuredProducts = products.filter((product) => product.featured)
