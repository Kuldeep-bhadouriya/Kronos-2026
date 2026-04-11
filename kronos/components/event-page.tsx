"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Aperture, CalendarDays, Swords } from "lucide-react";
import EventList from "./event-list";
import EventDetail from "./event-detail";
import Navbar from "@/components/Navbar";
import Hyperspeed from "@/components/Hyperspeed";
import type { Event } from "@/lib/types";
import { preEvents, mainEvents } from "@/lib/data";
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed";

type EventSection = "pre-event" | "main-event";

export default function EventPage() {
  const [activeSection, setActiveSection] = useState<EventSection>("pre-event");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const eventsToShow = activeSection === "pre-event" ? preEvents : mainEvents;

  const currentStats = useMemo(() => {
    const techCount = eventsToShow.filter((event) => event.category === "tech").length;
    const nonTechCount = eventsToShow.length - techCount;

    return [
      {
        label: "Total Events",
        value: String(eventsToShow.length).padStart(2, "0"),
        icon: CalendarDays,
      },
      {
        label: "Tech Tracks",
        value: String(techCount).padStart(2, "0"),
        icon: Aperture,
      },
      {
        label: "Open Arena",
        value: String(nonTechCount).padStart(2, "0"),
        icon: Swords,
      },
    ];
  }, [eventsToShow]);

  const sectionTitle = activeSection === "pre-event" ? "Pre Events" : "Main Events";
  const sectionDescription =
    activeSection === "pre-event"
      ? "Warm-up experiences and qualifier rounds before the grand finale."
      : "Flagship competitions and showdowns at the center stage of KRONOS.";

  const activeTone =
    activeSection === "pre-event"
      ? {
          line: "from-amber-300 via-orange-300 to-red-300",
          pulse: "bg-amber-300",
          panelBorder: "border-amber-200/30",
        }
      : {
          line: "from-red-300 via-orange-300 to-amber-300",
          pulse: "bg-red-300",
          panelBorder: "border-red-200/30",
        };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
      </div>

      <div
        className="relative z-30"
      >
        <Navbar />
      </div>

      <main
        className="container relative z-20 mx-auto px-4 pb-16 pt-28 sm:pt-32"
      >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="grid gap-8 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-md lg:grid-cols-[1.35fr_1fr] lg:items-end lg:p-8"
            >
              <div>
                <h1 className="mt-4 bg-gradient-to-r from-amber-100 via-orange-200 to-red-200 bg-clip-text text-4xl font-bold uppercase tracking-[0.12em] text-transparent sm:text-5xl lg:text-6xl">
                  Events That Build Momentum
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200/90 sm:text-base">
                  Discover every challenge, arena, and performance track in a cleaner mission board. Start with
                  previews, drill into details, and register in seconds.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => setActiveSection("pre-event")}
                    className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                      activeSection === "pre-event"
                        ? "border-amber-300/60 bg-amber-500/20"
                        : "border-white/10 bg-black/35 hover:border-amber-300/35 hover:bg-amber-500/10"
                    }`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100/80">
                      Phase 01
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">Pre Events</div>
                    <p className="mt-1 text-sm text-slate-300">Campus warm-up rounds and buzz-building showcases.</p>
                  </button>

                  <button
                    onClick={() => setActiveSection("main-event")}
                    className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                      activeSection === "main-event"
                        ? "border-red-300/60 bg-red-500/20"
                        : "border-white/10 bg-black/35 hover:border-red-300/35 hover:bg-red-500/10"
                    }`}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-100/80">
                      Phase 02
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">Main Events</div>
                    <p className="mt-1 text-sm text-slate-300">
                      Flagship battles, spotlight stages, and final showdowns.
                    </p>
                  </button>
                </div>
              </div>

              <div
                className={`rounded-2xl border bg-black/45 p-5 backdrop-blur-sm ${activeTone.panelBorder}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/90">Live Snapshot</p>
                <div className="mt-4 space-y-3">
                  {currentStats.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/35 px-4 py-3"
                    >
                      <div className="inline-flex items-center gap-2 text-slate-200">
                        <item.icon className="size-4" />
                        <span className="text-xs uppercase tracking-[0.14em]">{item.label}</span>
                      </div>
                      <span className="text-2xl font-semibold tracking-[0.08em] text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-10"
            >
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${activeTone.pulse}`} />
                <h2 className="text-2xl font-semibold uppercase tracking-[0.12em] text-slate-100">
                  {sectionTitle}
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{sectionDescription}</p>
              <div
                className={`mt-4 h-[2px] w-full rounded-full bg-gradient-to-r ${activeTone.line}`}
                aria-hidden="true"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <EventList
                  events={eventsToShow}
                  onEventClick={setSelectedEvent}
                  activeSection={activeSection}
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {selectedEvent && (
                <EventDetail
                  event={selectedEvent}
                  onClose={() => setSelectedEvent(null)}
                  activeSection={activeSection}
                />
              )}
            </AnimatePresence>
      </main>
    </div>
  );
}
