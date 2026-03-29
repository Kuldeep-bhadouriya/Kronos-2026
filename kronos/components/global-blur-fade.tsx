"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

interface GlobalBlurFadeProps {
  children: React.ReactNode;
}

export default function GlobalBlurFade({ children }: GlobalBlurFadeProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const normalizedPathname = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  const disableBlurFadeRoutes = new Set(["/", "/about", "/schedule", "/team", "/developers"]);

  // Keep fixed-background routes free from transform/filter wrappers so fixed canvas backgrounds and navbar layering render correctly.
  if (shouldReduceMotion || disableBlurFadeRoutes.has(normalizedPathname)) {
    return <>{children}</>;
  }

  return (
    <BlurFade
      key={pathname}
      inView
      delay={0.05}
      duration={0.55}
      offset={14}
      blur="10px"
      inViewMargin="0px"
      className="min-h-screen"
    >
      {children}
    </BlurFade>
  );
}