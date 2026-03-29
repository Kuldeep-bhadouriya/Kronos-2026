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

  // Keep home route free from transform/filter wrappers so fixed canvas backgrounds render correctly.
  if (shouldReduceMotion || pathname === "/") {
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