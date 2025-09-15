"use client"

import { useState, useEffect } from "react"
import { WifiOff, Wifi } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    const updateOnlineStatus = () => {
      const online = navigator.onLine
      setIsOnline(online)

      if (!online) {
        setShowIndicator(true)
      } else {
        // Show "back online" message briefly
        if (!isOnline) {
          setShowIndicator(true)
          setTimeout(() => setShowIndicator(false), 3000)
        }
      }
    }

    window.addEventListener("online", updateOnlineStatus)
    window.addEventListener("offline", updateOnlineStatus)

    // Initial check
    updateOnlineStatus()

    return () => {
      window.removeEventListener("online", updateOnlineStatus)
      window.removeEventListener("offline", updateOnlineStatus)
    }
  }, [isOnline])

  if (!showIndicator) return null

  return (
    <Card
      className={`fixed top-20 left-4 right-4 z-40 shadow-lg md:left-auto md:right-4 md:max-w-sm ${
        isOnline ? "bg-primary/10 border-primary" : "bg-destructive/10 border-destructive"
      }`}
    >
      <CardContent className="p-3">
        <div className="flex items-center space-x-2">
          {isOnline ? <Wifi className="h-4 w-4 text-primary" /> : <WifiOff className="h-4 w-4 text-destructive" />}
          <span className={`text-sm font-medium ${isOnline ? "text-primary" : "text-destructive"}`}>
            {isOnline ? "Back online!" : "You are offline"}
          </span>
        </div>
        {!isOnline && <p className="text-xs text-muted-foreground mt-1">Some features may be limited while offline.</p>}
      </CardContent>
    </Card>
  )
}
