"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { Coordinator } from "@/lib/types";

type Accent = "amber" | "red";

interface CoordinatorCardProps {
  coordinator: Coordinator;
  accentColor: Accent;
}

const accentStyles: Record<
  Accent,
  {
    heading: string;
    line: string;
    lineFrom: string;
    icon: string;
    hoverIconBg: string;
    imageBorder: string;
    imageShadow: string;
    glow: string;
  }
> = {
  amber: {
    heading: "text-amber-300",
    line: "bg-amber-500",
    lineFrom: "from-amber-500",
    icon: "text-amber-300",
    hoverIconBg: "group-hover/item:bg-amber-900/50",
    imageBorder: "border-amber-400/60",
    imageShadow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    glow: "from-amber-500/10",
  },
  red: {
    heading: "text-red-300",
    line: "bg-red-500",
    lineFrom: "from-red-500",
    icon: "text-red-300",
    hoverIconBg: "group-hover/item:bg-red-900/50",
    imageBorder: "border-red-400/60",
    imageShadow: "shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    glow: "from-red-500/10",
  },
};

export default function CoordinatorCard({ coordinator, accentColor }: CoordinatorCardProps) {
  const accent = accentStyles[accentColor];

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5 backdrop-blur-md">
      <div className={`absolute inset-0 bg-gradient-to-b ${accent.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      <motion.div
        className="absolute inset-0 h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={{ top: "-50%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className={`absolute left-0 top-0 h-1 w-10 ${accent.line}`} />
      <div className={`absolute right-0 top-0 h-1 w-5 ${accent.line}`} />

      <h3 className={`relative z-10 mb-5 text-lg font-semibold uppercase tracking-[0.16em] ${accent.heading}`}>
        Coordinator
      </h3>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`relative mb-5 h-32 w-32 overflow-hidden rounded-full border-2 ${accent.imageBorder} ${accent.imageShadow}`}
        >
          <Image src={coordinator.avatar || "/placeholder.svg"} alt={coordinator.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900/25 mix-blend-overlay" />
        </motion.div>

        <h4 className="mb-1 text-center text-xl font-medium text-white">{coordinator.name}</h4>
        <p className={`mb-5 text-center text-sm ${accent.heading}`}>{coordinator.role}</p>

        <div className="w-full space-y-4">
          <div className="group/item flex items-center gap-3 text-slate-300">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 transition-colors ${accent.hoverIconBg}`}>
              <Phone size={14} className={accent.icon} />
            </div>
            <span className="font-mono text-sm">{coordinator.phone}</span>
          </div>

          <div className="group/item flex items-center gap-3 text-slate-300">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 transition-colors ${accent.hoverIconBg}`}>
              <Mail size={15} className={accent.icon} />
            </div>
            <span className="break-all font-mono text-sm">{coordinator.email}</span>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r ${accent.lineFrom} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
    </div>
  );
}
