"use client";

import { useState, useEffect } from "react";
import { isMobileDevice } from "@/lib/is-mobile-device";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (!isMobileDevice()) return;
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowPrompt(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    }
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
  };

  if (!showPrompt || !isMobileDevice()) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 bg-card border-border shadow-lg md:left-auto md:right-4 md:max-w-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Download className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-card-foreground">
              Install ShopEasy
            </h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Install our app for a better shopping experience with offline access
          and faster loading.
        </p>
        <div className="flex space-x-2">
          <Button
            onClick={handleInstall}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Install
          </Button>
          <Button variant="outline" size="sm" onClick={handleDismiss}>
            Not now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
