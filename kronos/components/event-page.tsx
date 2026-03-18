"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventList from "@/components/event-list";
import EventDetail from "@/components/event-detail";
import type { Event } from "@/lib/types";
import { preEvents, mainEvents } from "@/lib/data";
import { Scan } from "lucide-react";
import Navbar from "./Navbar";

export default function EventPage() {
  const [activeSection, setActiveSection] = useState("pre-event");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the futuristic effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleCloseDetail = () => {
    setSelectedEvent(null);
  };

  const eventsToShow = activeSection === "pre-event" ? preEvents : mainEvents;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Scan className="w-16 h-16 text-blue-500" />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-500"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-blue-400 font-mono"
        >
          INITIALIZING KRONOS INTERFACE...
        </motion.p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-slate-200 overflow-hidden">
        {/* Background effects */}
        <div className="fixed inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-red-950/10"></div>

        {/* Grid overlay */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBmMTczMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>

        {/* Holographic scan line effect */}
        <motion.div
          className="fixed inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-40 pointer-events-none"
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <header className="container mx-auto py-12 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-center tracking-wider font-['Orbitron'] mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500"
          >
            EVENTS
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-8 gap-6"
          >
            <button
              onClick={() => setActiveSection("pre-event")}
              className={`px-6 py-3 rounded-md transition-all duration-300 backdrop-blur-sm relative overflow-hidden group ${
                activeSection === "pre-event"
                  ? "bg-blue-950/30 text-blue-400 border border-blue-500/30"
                  : "bg-slate-900/30 border border-slate-800/50 hover:border-blue-800/50"
              }`}
            >
              <span className="relative z-10">PRE EVENT</span>
              {activeSection === "pre-event" && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-700/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => setActiveSection("main-event")}
              className={`px-6 py-3 rounded-md transition-all duration-300 backdrop-blur-sm relative overflow-hidden group ${
                activeSection === "main-event"
                  ? "bg-red-950/30 text-red-400 border border-red-500/30"
                  : "bg-slate-900/30 border border-slate-800/50 hover:border-red-800/50"
              }`}
            >
              <span className="relative z-10">MAIN EVENT</span>
              {activeSection === "main-event" && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-700/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        </header>

        <main className="container mx-auto px-4 pb-16 relative z-10">
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
                onEventClick={handleEventClick}
                activeSection={activeSection}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {selectedEvent && (
              <EventDetail
                event={selectedEvent}
                onClose={handleCloseDetail}
                activeSection={activeSection}
              />
            )}
          </AnimatePresence>
        </main>

        {/* HUD elements */}
        <div className="fixed bottom-4 left-4 text-xs text-blue-400 font-mono opacity-70">
          KRONOS_OS v3.4.2
        </div>

        <div className="fixed bottom-4 right-4 text-xs text-blue-400 font-mono opacity-70">
          {new Date().toLocaleTimeString()}
        </div>
      </div>
    </>
  );
}
