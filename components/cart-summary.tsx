"use client"

import { useCart } from "@/lib/cart-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface CartSummaryProps {
  showCheckoutButton?: boolean
  onCheckout?: () => void
}

export function CartSummary({ showCheckoutButton = true, onCheckout }: CartSummaryProps) {
  const { state } = useCart()

  const subtotal = state.total
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal ({state.itemCount} items)</span>
          <span className="text-card-foreground">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-card-foreground">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax</span>
          <span className="text-card-foreground">${tax.toFixed(2)}</span>
        </div>

        <Separator />

        <div className="flex justify-between text-lg font-semibold">
          <span className="text-card-foreground">Total</span>
          <span className="text-primary">${total.toFixed(2)}</span>
        </div>

        {subtotal < 50 && (
          <p className="text-sm text-muted-foreground">Add ${(50 - subtotal).toFixed(2)} more for free shipping!</p>
        )}

        {showCheckoutButton && (
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onCheckout}
            disabled={state.items.length === 0}
          >
            Proceed to Checkout
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
