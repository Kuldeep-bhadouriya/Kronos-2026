"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan } from "lucide-react";
import EventList from "./event-list";
import EventDetail from "./event-detail";
import PageHeading from "@/components/page-heading";
import Navbar from "@/components/Navbar";
import Hyperspeed from "@/components/Hyperspeed";
import type { Event } from "@/lib/types";
import { preEvents, mainEvents } from "@/lib/data";
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed";

export default function EventPage() {
  const [activeSection, setActiveSection] = useState("pre-event");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const eventsToShow = activeSection === "pre-event" ? preEvents : mainEvents;

  if (loading) {
    return (
      <div className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none fixed inset-0 z-0">
          <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
        </div>

        <div className="relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Scan className="mx-auto h-16 w-16 text-amber-300" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-amber-400/70"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-amber-100"
          >
            Initializing Event Interface...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
      </div>

      <div className="relative z-30">
        <Navbar />
      </div>

      <header className="container relative z-20 mx-auto px-4 pb-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <PageHeading
            eyebrow="KRONOS 2026"
            title="Events"
            description="Explore pre-event and main-event experiences designed to challenge, inspire, and entertain."
            accentClassName="from-amber-200 via-orange-300 to-red-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => setActiveSection("pre-event")}
            className={`relative overflow-hidden rounded-full border px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
              activeSection === "pre-event"
                ? "border-amber-300/40 bg-amber-500/20 text-amber-100"
                : "border-slate-700/70 bg-black/35 text-slate-200 hover:border-amber-300/35 hover:bg-amber-500/10"
            }`}
          >
            <span>Pre Event</span>
          </button>

          <button
            onClick={() => setActiveSection("main-event")}
            className={`relative overflow-hidden rounded-full border px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
              activeSection === "main-event"
                ? "border-red-300/40 bg-red-500/20 text-red-100"
                : "border-slate-700/70 bg-black/35 text-slate-200 hover:border-red-300/35 hover:bg-red-500/10"
            }`}
          >
            <span>Main Event</span>
          </button>
        </motion.div>
      </header>

      <main className="container relative z-20 mx-auto px-4 pb-16">
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

      <div className="fixed bottom-4 left-4 z-30 text-[11px] uppercase tracking-[0.16em] text-amber-100/70">
        Kronos OS v3.4.2
      </div>

      <div className="fixed bottom-4 right-4 z-30 text-[11px] uppercase tracking-[0.16em] text-amber-100/70">
        {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
