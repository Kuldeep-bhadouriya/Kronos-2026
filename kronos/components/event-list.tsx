"use client";

import { motion, type Variants } from "framer-motion";
import type { Event } from "@/lib/types";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CalendarDays, Clock3, MapPin, Eye } from "lucide-react";

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
          hoverBorder: "hover:border-blue-500/50",
          hoverShadow: "hover:shadow-blue-500/20",
          heading: "group-hover:text-blue-300",
          actionButton: "bg-blue-500 text-blue-50 shadow-blue-500/30",
          tag: "bg-blue-500/20 text-blue-100 border-blue-400/40",
        }
      : {
          hoverBorder: "hover:border-rose-500/50",
          hoverShadow: "hover:shadow-rose-500/20",
          heading: "group-hover:text-rose-300",
          actionButton: "bg-rose-500 text-rose-50 shadow-rose-500/30",
          tag: "bg-rose-500/20 text-rose-100 border-rose-400/40",
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {events.map((event, index) => (
        <motion.div
          key={`${event.id}-${index}`}
          variants={item}
          className="group"
        >
          <Card
            className={cn(
              "relative h-full overflow-hidden rounded-2xl border-slate-700/70 bg-slate-900/45 backdrop-blur-md transition-all duration-300 shadow-xl",
              accentStyles.hoverBorder,
              accentStyles.hoverShadow
            )}
          >
            <button
              type="button"
              onClick={() => onEventClick(event)}
              className="w-full text-left"
              aria-label={`View details for ${event.title}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  <Badge className={cn("border", accentStyles.tag)}>
                    {activeSection === "pre-event" ? "Pre-Event" : "Main Event"}
                  </Badge>
                  <Badge variant="secondary" className="bg-slate-950/60 text-slate-100">
                    {event.category === "tech" ? "Tech" : "Non-Tech"}
                  </Badge>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg",
                      accentStyles.actionButton
                    )}
                  >
                    <Eye className="size-4" />
                    View Details
                  </motion.div>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-5">
                <div className="space-y-2">
                  <h3
                    className={cn(
                      "text-xl font-semibold leading-tight tracking-tight text-slate-100 transition-colors",
                      accentStyles.heading
                    )}
                  >
                    {event.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-slate-300/85">
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

                <div className="flex items-center justify-between border-t border-slate-700/70 pt-4">
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

                  <Badge variant="outline" className="border-slate-600/80 text-slate-200">
                    {event.id}
                  </Badge>
                </div>
              </div>
            </button>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
