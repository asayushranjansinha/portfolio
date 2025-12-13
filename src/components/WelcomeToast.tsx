"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export function WelcomeToast() {
  useEffect(() => {
    // Check if the user has already seen the welcome toast
    const hasSeenToast = localStorage.getItem("welcome-toast-seen");

    if (hasSeenToast) return;

    // Set the timer for 1 minute (60,000ms)
    const timer = setTimeout(() => {
      toast("Looking for a developer?", {
        description: "I'm available for new projects or roles. Let's connect!",
        action: {
          label: "Connect",
          onClick: () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.hash = "contact";
            }
          },
        },
        duration: 8000, // Show for a bit longer so they don't miss it
      });

      // Mark as seen so it doesn't show again
      localStorage.setItem("welcome-toast-seen", "true");
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
