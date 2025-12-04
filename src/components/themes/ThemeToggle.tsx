"use client";
import { useSound } from "@/hooks/useSound";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const playClick = useSound("/audio/mouse-click.wav");

  const switchTheme = useCallback(() => {
    playClick(0.5);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme, playClick]);

  return (
    <Button variant="ghost" size="icon" onClick={switchTheme}>
      <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
      <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
