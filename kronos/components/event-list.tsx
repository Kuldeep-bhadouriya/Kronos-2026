"use client";

import { motion } from "framer-motion";
import type { Event } from "@/lib/types";
import Image from "next/image";

interface EventListProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  activeSection: string;
}

export default function EventList({
  events,
  onEventClick,
  activeSection,
}: EventListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const accentColor = activeSection === "pre-event" ? "blue" : "red";

  // Function to get first line of description for card preview
  const getDescriptionPreview = (description: string) => {
    const firstLine = description.split("\n")[0];
    return firstLine;
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {events.map((event) => (
        <motion.div
          key={event.id}
          variants={item}
          whileHover={{
            y: -8,
            transition: { duration: 0.2 },
            boxShadow:
              accentColor === "blue"
                ? "0 0 25px rgba(59, 130, 246, 0.3)"
                : "0 0 25px rgba(239, 68, 68, 0.3)",
          }}
          className={`bg-slate-900/40 backdrop-blur-md rounded-lg overflow-hidden border border-slate-800 hover:border-${accentColor}-500/50 transition-all cursor-pointer group`}
          onClick={() => onEventClick(event)}
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent mix-blend-multiply`}
            />

            {/* Holographic scan effect */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-b from-transparent via-${accentColor}-500/20 to-transparent h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              initial={{ top: "-50%" }}
              animate={{ top: "100%" }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Tech interface elements */}
            <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-start">
              <div
                className={`h-1 w-12 bg-${accentColor}-500/70 rounded-full`}
              ></div>
              <div
                className={`h-1 w-6 bg-${accentColor}-500/70 rounded-full`}
              ></div>
            </div>
          </div>

          <div className="p-4 relative">
            {/* Corner accent */}
            <div
              className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-${accentColor}-500/50 rounded-tr-lg`}
            ></div>

            <h3
              className={`text-xl font-['Orbitron'] mb-2 text-slate-100 group-hover:text-${accentColor}-400 transition-colors`}
            >
              {event.title}
            </h3>

            <p className="text-slate-400 text-sm line-clamp-2 mb-3">
              {getDescriptionPreview(event.description)}
            </p>

            <div className={`text-xs text-${accentColor}-400 font-mono`}>
              {event.date}
            </div>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-${accentColor}-600 to-${accentColor}-400 transition-all duration-300`}
            ></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
