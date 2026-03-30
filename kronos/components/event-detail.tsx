"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";
import CoordinatorCard from "@/components/coordinator-card";
import type { Event } from "@/lib/types";

type Accent = "amber" | "red";

interface EventDetailProps {
  event: Event;
  onClose: () => void;
  activeSection: string;
}

const accentStyles: Record<
  Accent,
  {
    text: string;
    border: string;
    dot: string;
    buttonBg: string;
    buttonText: string;
    buttonHover: string;
    line: string;
    ring: string;
    overlay: string;
    shadow: string;
  }
> = {
  amber: {
    text: "text-amber-300",
    border: "border-amber-400/30",
    dot: "bg-amber-400",
    buttonBg: "bg-amber-600/20",
    buttonText: "text-amber-100",
    buttonHover: "hover:bg-amber-500/25",
    line: "bg-amber-500",
    ring: "ring-amber-400/40",
    overlay: "from-amber-500/10",
    shadow: "0 0 30px rgba(245, 158, 11, 0.2)",
  },
  red: {
    text: "text-red-300",
    border: "border-red-400/30",
    dot: "bg-red-400",
    buttonBg: "bg-red-600/20",
    buttonText: "text-red-100",
    buttonHover: "hover:bg-red-500/25",
    line: "bg-red-500",
    ring: "ring-red-400/40",
    overlay: "from-red-500/10",
    shadow: "0 0 30px rgba(239, 68, 68, 0.2)",
  },
};

export default function EventDetail({ event, onClose, activeSection }: EventDetailProps) {
  const [isMounted, setIsMounted] = useState(false);
  const accentColor: Accent = activeSection === "pre-event" ? "amber" : "red";
  const accent = accentStyles[accentColor];

  useEffect(() => {
    setIsMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:items-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 24, stiffness: 280 }}
        className="relative my-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/90 shadow-xl sm:my-0 sm:max-h-[90vh]"
        style={{ boxShadow: accent.shadow }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`absolute left-0 top-0 h-1 w-20 ${accent.line}`} />
        <div className={`absolute right-0 top-0 h-1 w-10 ${accent.line}`} />
        <div className={`absolute bottom-0 left-0 h-1 w-10 ${accent.line}`} />
        <div className={`absolute bottom-0 right-0 h-1 w-20 ${accent.line}`} />

        <div className="relative h-64 sm:h-72">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-transparent" />

          <motion.div
            className={`absolute inset-0 h-20 bg-gradient-to-b from-transparent ${accent.overlay} to-transparent`}
            initial={{ top: "-50%" }}
            animate={{ top: "100%" }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/70 bg-slate-800/60 text-slate-200 transition-colors ${accent.buttonHover}`}
          >
            <X size={18} />
          </motion.button>

          <div className="absolute bottom-0 left-0 p-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mb-2 text-3xl font-bold text-white"
            >
              {event.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className={`text-sm font-semibold uppercase tracking-[0.14em] ${accent.text}`}
            >
              {event.date}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="md:col-span-1"
          >
            <CoordinatorCard coordinator={event.coordinator} accentColor={accentColor} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="md:col-span-2"
          >
            <section className="mb-6 rounded-xl border border-slate-700/70 bg-black/20 p-4">
              <h3 className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${accent.text}`}>
                Mission Briefing
              </h3>
              <p className="whitespace-pre-line leading-relaxed text-slate-300/90">{event.description}</p>
            </section>

            <section className="mb-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700/70 bg-black/20 p-4">
                <h3 className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${accent.text}`}>Location</h3>
                <p className="text-base text-slate-200">{event.venue || "Venue TBD"}</p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-black/20 p-4">
                <h3 className={`mb-2 text-xs font-semibold uppercase tracking-[0.14em] ${accent.text}`}>Timeframe</h3>
                <div className="flex items-center gap-2 text-slate-200">
                  <div className={`h-2 w-2 rounded-full ${accent.dot}`} />
                  <span className="text-sm">
                    {event.timing || `${event.startTime || "TBD"} - ${event.endTime || "TBD"}`}
                  </span>
                </div>
              </div>
            </section>

            <div className="mt-6">
              <a href={event.registerLink} target="_blank" rel="noopener noreferrer" className="group relative block">
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-amber-500/40 via-orange-400/25 to-red-500/40 opacity-30 blur transition duration-300 group-hover:opacity-70" />

                <div
                  className={`relative flex items-center justify-between gap-3 rounded-xl border bg-slate-900 px-5 py-4 ring-1 ${accent.border} ${accent.ring} ${accent.buttonBg} ${accent.buttonHover}`}
                >
                  <div>
                    <div className={`text-sm font-semibold uppercase tracking-[0.16em] ${accent.buttonText}`}>Register Now</div>
                    <div className="mt-1 text-xs text-slate-400">Secure your position for this event.</div>
                  </div>

                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${accent.border} bg-black/30`}>
                    <svg
                      className={accent.buttonText}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12H3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
