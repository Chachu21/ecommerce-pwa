"use client"

import { Header } from "@/components/header"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Plus, Minus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
    },
    [dispatch],
  )

  const removeItem = useCallback(
    (id: string) => {
      dispatch({ type: "REMOVE_ITEM", payload: id })
    },
    [dispatch],
  )

  const handleCheckout = useCallback(() => {
    router.push("/checkout")
  }, [router])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-6 bg-card rounded-lg border border-border">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="rounded-md object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <p className="text-lg font-medium text-primary">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="text-lg font-medium w-12 text-center">{item.quantity}</span>

                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold text-card-foreground mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div>
              <CartSummary onCheckout={handleCheckout} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
