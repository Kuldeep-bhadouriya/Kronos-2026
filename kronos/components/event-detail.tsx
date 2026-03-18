"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Event } from "@/lib/types";
import CoordinatorCard from "@/components/coordinator-card";

interface EventDetailProps {
  event: Event;
  onClose: () => void;
  activeSection: string;
}

export default function EventDetail({
  event,
  onClose,
  activeSection,
}: EventDetailProps) {
  const accentColor = activeSection === "pre-event" ? "blue" : "red";

  // Function to preserve line breaks in description
  const formatDescription = (description: string) => {
    return description.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < description.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`bg-slate-900/90 backdrop-blur-md rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-800 shadow-[0_0_30px_rgba(${
          accentColor === "blue" ? "59,130,246" : "239,68,68"
        },0.2)]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Interface elements */}
        <div
          className={`absolute top-0 left-0 w-20 h-1 bg-${accentColor}-500`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-10 h-1 bg-${accentColor}-500`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-10 h-1 bg-${accentColor}-500`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-20 h-1 bg-${accentColor}-500`}
        ></div>

        <div className="relative h-64 sm:h-72">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent mix-blend-multiply`}
          />

          {/* Holographic scan effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-${accentColor}-500/20 to-transparent h-20`}
            initial={{ top: "-50%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-${accentColor}-400 hover:bg-slate-800/80 transition-colors border border-slate-700/50 hover:border-${accentColor}-500/30 hover:shadow-[0_0_15px_rgba(${
              accentColor === "blue" ? "59,130,246" : "239,68,68"
            },0.3)]`}
          >
            <X size={18} />
          </motion.button>

          <div className="absolute bottom-0 left-0 p-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`text-3xl font-['Orbitron'] text-white mb-2`}
            >
              {event.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`text-${accentColor}-400 font-mono`}
            >
              {event.date}
            </motion.div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-1"
          >
            <CoordinatorCard
              coordinator={event.coordinator}
              accentColor={accentColor}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="mb-6 relative">
              {/* Corner accent */}
              <div
                className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-${accentColor}-500/50 rounded-tr-lg`}
              ></div>

              <h3
                className={`text-xl font-['Orbitron'] mb-3 text-${accentColor}-400`}
              >
                MISSION BRIEFING
              </h3>
              <p className="text-slate-300/90 leading-relaxed whitespace-pre-line">
                {formatDescription(event.description)}
              </p>
            </div>

            <div className="mb-6">
              <h3
                className={`text-xl font-['Orbitron'] mb-3 text-${accentColor}-400`}
              >
                LOCATION
              </h3>
              <p className="text-slate-300/90 text-xl">{event.venue}</p>
            </div>

            <div className="mb-6">
              <h3
                className={`text-xl font-['Orbitron'] mb-3 text-${accentColor}-400`}
              >
                TIMEFRAME
              </h3>
              <div
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full bg-${accentColor}-400`}
                  ></div>
                  <span className="text-slate-300 font-mono text-xl">
                    {event.timing || `${event.startTime} - ${event.endTime}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Techy Register Button */}
            <div className="mt-8">
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-blue-500 to-red-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div
                  className={`relative flex items-center justify-between px-6 py-4 bg-slate-900 rounded-lg border border-${accentColor}-500/30 overflow-hidden group-hover:bg-slate-800 transition-all duration-300`}
                >
                  <div className="flex-1">
                    <div
                      className={`font-['Orbitron'] text-lg text-${accentColor}-400`}
                    >
                      REGISTER NOW
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      SECURE YOUR POSITION // ACCESS GRANTED
                    </div>
                  </div>

                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-${accentColor}-900/50 border border-${accentColor}-500/30 relative`}
                  >
                    {/* Animated circle */}
                    <div
                      className={`absolute inset-0 border border-${accentColor}-500 rounded-full animate-ping opacity-20`}
                    ></div>

                    {/* Arrow icon */}
                    <svg
                      className={`w-4 h-4 text-${accentColor}-400`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>

                  {/* Tech elements */}
                  <div
                    className={`absolute top-0 left-0 w-14 h-1 bg-${accentColor}-500/70`}
                  ></div>
                  <div
                    className={`absolute bottom-0 right-0 w-14 h-1 bg-${accentColor}-500/70`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-10 h-8 w-1 bg-${accentColor}-500/30`}
                  ></div>
                  <div
                    className={`absolute top-0 right-10 h-8 w-1 bg-${accentColor}-500/30`}
                  ></div>

                  {/* Holographic scan effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-${accentColor}-500/10 to-transparent w-20 opacity-30 group-hover:opacity-70`}
                    initial={{ left: "-40%" }}
                    animate={{ left: "100%" }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* HUD elements */}
        {/* <div className="absolute bottom-3 left-3 text-xs text-slate-500 font-mono"> */}
        {/* EVENT_ID: {event.id} */}
        {/* </div> */}
      </motion.div>
    </motion.div>
  );
}
