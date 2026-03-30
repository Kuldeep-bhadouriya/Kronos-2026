"use client";

import { motion, type Variants } from "framer-motion";
import type { Event } from "@/lib/types";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";

interface EventListProps {
  events: Event[];
  onEventClick: (event: Event) => void;
  activeSection: "pre-event" | "main-event";
}

export default function EventList({
  events,
  onEventClick,
  activeSection,
}: EventListProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const accentStyles =
    activeSection === "pre-event"
      ? {
          line: "from-amber-300 via-orange-300 to-red-300",
          glow: "group-hover:shadow-[0_20px_60px_-26px_rgba(251,191,36,0.55)]",
          heading: "group-hover:text-amber-100",
          action: "text-amber-200",
          dot: "bg-amber-300",
        }
      : {
          line: "from-red-300 via-orange-300 to-amber-300",
          glow: "group-hover:shadow-[0_20px_60px_-26px_rgba(248,113,113,0.55)]",
          heading: "group-hover:text-red-100",
          action: "text-red-200",
          dot: "bg-red-300",
        };

  const getEventTime = (event: Event) => {
    if (event.timing) return event.timing;
    if (event.startTime && event.endTime) return `${event.startTime} - ${event.endTime}`;
    if (event.startTime) return event.startTime;
    return "Time TBD";
  };

  // Function to get first line of description for card preview
  const getDescriptionPreview = (description: string) => {
    return description
      .split("\n")
      .map((line) => line.trim())
      .find(Boolean) || "Event details will be announced soon.";
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {events.map((event, index) => (
        <motion.div
          key={`${event.id}-${index}`}
          variants={item}
          className={cn("group", index % 7 === 0 ? "lg:col-span-2" : "")}
        >
          <Card
            className={cn(
              "relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-md transition-all duration-300",
              accentStyles.glow,
              "hover:-translate-y-1"
            )}
          >
            <button
              type="button"
              onClick={() => onEventClick(event)}
              className="w-full text-left"
              aria-label={`View details for ${event.title}`}
            >
              <div
                className={cn(
                  "relative overflow-hidden",
                  index % 7 === 0 ? "aspect-[16/8]" : "aspect-[16/9]"
                )}
              >
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-100">
                  <span>{activeSection === "pre-event" ? "Pre Event" : "Main Event"}</span>
                  <span className={cn("h-1.5 w-1.5 rounded-full", accentStyles.dot)} />
                  <span>{event.category === "tech" ? "Tech" : "Open"}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className={cn("h-[2px] w-full rounded-full bg-gradient-to-r", accentStyles.line)} />
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div className="space-y-2">
                  <h3
                    className={cn(
                      "text-2xl font-semibold leading-tight tracking-[0.03em] text-slate-100 transition-colors",
                      accentStyles.heading
                    )}
                  >
                    {event.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-slate-300/85">
                    {getDescriptionPreview(event.description)}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2 text-xs text-slate-300/80 sm:grid-cols-2">
                  <div className="inline-flex items-center gap-2">
                    <CalendarDays className="size-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Clock3 className="size-3.5" />
                    <span>{getEventTime(event)}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 sm:col-span-2">
                    <MapPin className="size-3.5" />
                    <span className="truncate">{event.venue || "Venue TBD"}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8 border border-slate-600/70">
                      <AvatarImage src={event.coordinator.avatar} alt={event.coordinator.name} />
                      <AvatarFallback>
                        {event.coordinator.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-xs">
                      <span className="font-medium text-slate-100">{event.coordinator.name}</span>
                      <span className="text-slate-400">{event.coordinator.role}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-mono text-[11px] text-slate-400">{event.id}</p>
                    <p className={cn("mt-1 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em]", accentStyles.action)}>
                      Open Brief
                      <ArrowUpRight className="size-3.5" />
                    </p>
                  </div>
                </div>

                <div className={cn("h-[1px] w-full bg-gradient-to-r", accentStyles.line)} aria-hidden="true" />
              </div>
            </button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
