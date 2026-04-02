"use client";

import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Sparkles,
  Ticket,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import Hyperspeed from "@/components/Hyperspeed";
import { hyperspeedPresets } from "@/components/HyperSpeedPresets";
import { CardStack, type CardStackItem } from "@/components/card-stack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { mainEvents, preEvents } from "@/lib/data";
import type { Event } from "@/lib/types";

const pastCelebrities: CardStackItem[] = [
  {
    id: "piyush-mishra",
    title: "Piyush Mishra",
    description: "Indian actor, singer, lyricist, playwright, musician, and screenwriter.",
    imageSrc: "/piyushmishra.jpg",
    tag: "Actor and Singer",
  },
  {
    id: "ankit-tiwari",
    title: "Ankit Tiwari",
    description: "Indian playback singer, live performer, music director, and composer.",
    imageSrc: "/ankit-tiwari.jpg",
    tag: "Playback Singer",
  },
  {
    id: "papon",
    title: "Papon",
    description: "Indian playback singer and composer from Assam.",
    imageSrc: "/Papon.jpg",
    tag: "Singer and Composer",
  },
  {
    id: "jubin-nautiyal",
    title: "Jubin Nautiyal",
    description: "Indian playback singer and live performer.",
    imageSrc: "/jubnialnutial.jpg",
    tag: "Playback Singer",
  },
  {
    id: "kunal-bojewar",
    title: "Kunal Bojewar",
    description: "Singer, composer, and power-packed live performer.",
    imageSrc: "/kunal.jpg",
    tag: "Singer",
  },
  {
    id: "arijit-singh",
    title: "Arijit Singh",
    description: "Indian playback singer known for iconic Bollywood vocals.",
    imageSrc: "/Arijit-Singh.png",
    tag: "Playback Singer",
  },
  {
    id: "neeti-mohan",
    title: "Neeti Mohan",
    description: "Indian singer with hits across major film soundtracks.",
    imageSrc: "/neeti-mohan.jpg",
    tag: "Singer",
  },
  {
    id: "kk",
    title: "KK",
    description: "Legendary Indian playback singer remembered for timeless songs.",
    imageSrc: "/kk.jpg",
    tag: "Playback Singer",
  },
  {
    id: "shilpa-rao",
    title: "Shilpa Rao",
    description: "Indian singer known for soulful Hindi tracks.",
    imageSrc: "/shilpa-rao.jpg",
    tag: "Singer",
  },
];

const sponsorTiers = [
  {
    tier: "Platinum Partners",
    headingClass: "text-amber-100",
    borderClass: "border-amber-700/35",
    glowClass: "from-amber-500/18 to-orange-500/12",
    gridClass: "grid-cols-2 md:grid-cols-3",
    sponsors: [
      {
        name: "Google",
        image:
          "https://images.yourstory.com/cs/images/companies/lenskaart-33-1587990847871.png?fm=png&auto=formatar=1:1&mode=fill&fill=solid",
      },
      {
        name: "Microsoft",
        image:
          "https://logos-marcas.com/wp-content/uploads/2021/03/Honda-Logotipo-2000-presente.jpg",
      },
      {
        name: "Amazon",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.TLxP6eAGKN4bWUZ0aF46zwHaHa&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    tier: "Gold Partners",
    headingClass: "text-orange-200",
    borderClass: "border-orange-700/35",
    glowClass: "from-orange-500/18 to-red-500/12",
    gridClass: "grid-cols-2 md:grid-cols-4",
    sponsors: [
      {
        name: "IBM",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.rmApNlkmt1XV52d2RWl1ggHaEK&pid=Api&P=0&h=180",
      },
      {
        name: "Intel",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.KDPTy05azia6fr42nA689gHaD4&pid=Api&P=0&h=180",
      },
      {
        name: "Oracle",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.kkvPd39_KtkGavl6rbrgNAHaE8&pid=Api&P=0&h=180",
      },
      {
        name: "Cisco",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.tO-AQAR5s_MUgpoPDrT7BQAAAA&pid=Api&P=0&h=180",
      },
    ],
  },
  {
    tier: "Ecosystem Partners",
    headingClass: "text-rose-100",
    borderClass: "border-red-900/30",
    glowClass: "from-red-500/14 to-amber-300/8",
    gridClass: "grid-cols-2 md:grid-cols-5",
    sponsors: [
      {
        name: "Adobe",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.K1op1wSh4Iv0l0ib8skRwwHaEK&pid=Api&P=0&h=180",
      },
      {
        name: "Nvidia",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.bYVxvwq-4t530u24ooiadAHaDA&pid=Api&P=0&h=180",
      },
      {
        name: "Salesforce",
        image:
          "https://tse3.mm.bing.net/th?id=OIP.8-9dRYU-fKR5arZeCcJnSAHaDr&pid=Api&P=0&h=180",
      },
      {
        name: "SAP",
        image:
          "https://tse4.mm.bing.net/th?id=OIP.-erQrffKB1yp91EKAnKrhAAAAA&pid=Api&P=0&h=180",
      },
      {
        name: "VMware",
        image:
          "https://tse2.mm.bing.net/th?id=OIP.84yghb8dXKRfsliVHAM-ZQHaB7&pid=Api&P=0&h=180",
      },
    ],
  },
] as const;

export default function KronosTechFest() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileView, setIsMobileView] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);
  const speakersRef = useRef<HTMLElement | null>(null);
  const sponsorsRef = useRef<HTMLElement | null>(null);

  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      events: eventsRef,
      speakers: speakersRef,
      sponsors: sponsorsRef,
    }),
    []
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateView = () => setIsMobileView(mediaQuery.matches);

    updateView();
    mediaQuery.addEventListener("change", updateView);
    return () => mediaQuery.removeEventListener("change", updateView);
  }, []);

  useEffect(() => {
    const sections = Object.entries(sectionRefs) as Array<
      [keyof typeof sectionRefs, RefObject<HTMLElement | null>]
    >;

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisible = [...entries]
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (topVisible?.target?.id) {
          setActiveSection(topVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.2, 0.4, 0.7],
      }
    );

    sections.forEach(([_, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  const homeHyperspeedEffect = hyperspeedPresets.six;

  const featuredEvents = useMemo(() => {
    const picks = [mainEvents[0], preEvents[4], preEvents[2], preEvents[0]];
    return picks.filter((event): event is Event => Boolean(event)).slice(0, 3);
  }, []);

  const eventStats = useMemo(() => {
    const allEvents = [...preEvents, ...mainEvents];
    const coordinatorCount = new Set(allEvents.map((event) => event.coordinator.name)).size;

    return [
      {
        label: "Events",
        value: `${allEvents.length}+`,
        helper: "Across tech and culture",
        icon: Ticket,
      },
      {
        label: "Coordinators",
        value: `${coordinatorCount}+`,
        helper: "Student-led execution",
        icon: Users,
      },
      {
        label: "Festival Days",
        value: "03",
        helper: "High-energy campus takeover",
        icon: Sparkles,
      },
    ];
  }, []);

  const getEventTime = (event: Event) => {
    if (event.timing) return event.timing;
    if (event.startTime && event.endTime) return `${event.startTime} - ${event.endTime}`;
    if (event.startTime) return event.startTime;
    return "Time TBD";
  };

  const getDescriptionPreview = (description: string) => {
    return (
      description
        .split("\n")
        .map((line) => line.trim())
        .find(Boolean) || "Event details will be announced soon."
    );
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0">
          <Hyperspeed effectOptions={homeHyperspeedEffect} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <section
          id="hero"
          ref={sectionRefs.hero}
          className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40"
        >
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
              <div className="max-w-3xl space-y-7 animate-fade-in-up">
                

                <h1 className="text-balance text-4xl font-black uppercase leading-[0.9] tracking-[0.08em] sm:text-6xl lg:text-7xl">
                  <span className="block text-slate-50">KRONOS 2026</span>
                  <span className="mt-2 block bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 bg-clip-text text-transparent">
                    Build. Battle. Break Through.
                  </span>
                </h1>

                <p className="max-w-2xl text-base text-slate-300/90 sm:text-lg">
                  A three-day campus takeover built around innovation, creator culture, competitive events,
                  and performances. Explore new ideas, form teams, and ship unforgettable moments.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-slate-200/90">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/10 px-4 py-2 backdrop-blur-xl">
                    <CalendarDays className="h-4 w-4 text-amber-200" />
                    <span>April 21-23, 2026</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-red-400/35 bg-red-500/10 px-4 py-2 backdrop-blur-xl">
                    <MapPin className="h-4 w-4 text-red-200" />
                    <span>ITM Gwalior Campus</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/events">
                    <Button className="h-12 rounded-full border border-amber-300/25 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 px-6 text-base font-semibold text-white shadow-lg shadow-red-950/35 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-amber-400">
                      Explore Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/team">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-amber-300/40 bg-black/35 px-6 text-base text-slate-100 backdrop-blur-xl transition-all duration-300 hover:border-red-300/45 hover:bg-red-500/20"
                    >
                      Meet Core Team
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {eventStats.map((stat, index) => {
                    const StatIcon = stat.icon;

                    return (
                      <Card
                        key={stat.label}
                        className="animate-fade-in-up rounded-2xl border border-amber-800/35 bg-black/35 p-4 backdrop-blur-md"
                        style={{ animationDelay: `${index * 110}ms` }}
                      >
                        <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/30 bg-amber-500/10">
                          <StatIcon className="h-4 w-4 text-amber-100" />
                        </div>
                        <p className="text-2xl font-bold tracking-wide text-slate-100">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.16em] text-slate-300/90">{stat.label}</p>
                        <p className="mt-2 text-xs text-slate-400">{stat.helper}</p>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div className="animate-fade-in-right">
                <Card className="relative overflow-hidden rounded-3xl border border-amber-800/35 bg-black/40 p-6 backdrop-blur-xl">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-red-500/20 blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-amber-500/15 blur-3xl" />

                  <div className="relative space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Festival Pulse</p>
                      <h2 className="mt-2 text-2xl font-bold text-slate-50 sm:text-3xl">
                        Where creators, coders, and performers collide.
                      </h2>
                    </div>

                    <div className="space-y-3">
                      <Link
                        href="/#events"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3 transition-colors hover:border-amber-400/45 hover:bg-amber-500/15"
                      >
                        <span className="text-sm font-semibold tracking-wide text-slate-200">
                          Featured Competitions
                        </span>
                        <ChevronRight className="h-4 w-4 text-amber-100 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/#speakers"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3 transition-colors hover:border-red-400/45 hover:bg-red-500/15"
                      >
                        <span className="text-sm font-semibold tracking-wide text-slate-200">
                          Past Celebrity Nights
                        </span>
                        <ChevronRight className="h-4 w-4 text-red-100 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/#sponsors"
                        className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/45 px-4 py-3 transition-colors hover:border-amber-400/45 hover:bg-amber-500/15"
                      >
                        <span className="text-sm font-semibold tracking-wide text-slate-200">
                          Brand Collaborations
                        </span>
                        <ChevronRight className="h-4 w-4 text-amber-100 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300">
                      Join teams. Compete hard. Learn faster. KRONOS is designed for people who want
                      more than passive attendance.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex">
              <span className="mb-2 text-xs tracking-[0.16em] text-slate-400">SCROLL TO EXPLORE</span>
                <span className="h-10 w-6 rounded-full border border-amber-300/35 p-1">
                  <span className="block h-2 w-2 animate-scroll-down rounded-full bg-amber-300" />
              </span>
            </div>
          </div>
        </section>

        <Countdown />

        <section id="events" ref={sectionRefs.events} className="relative z-10 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-4 animate-fade-in-left">
                <p className="text-xs uppercase tracking-[0.22em] text-amber-100">Featured Events</p>
                <h2 className="text-balance text-3xl font-bold uppercase tracking-[0.06em] text-slate-50 md:text-5xl">
                  Pick your arena and own the stage.
                </h2>
                <p className="text-base text-slate-300">
                  Technical challenges, creator showcases, and crowd-packed competitions are curated for
                  students who want to build real momentum.
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-amber-100 transition-colors hover:text-red-100"
              >
                Full Event Catalog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredEvents.map((event, index) => (
                <Card
                  key={`${event.id}-${event.title}`}
                    className="group relative h-full overflow-hidden rounded-3xl border border-amber-900/35 bg-black/40 shadow-2xl shadow-slate-950/35 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-400/45 animate-fade-in-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                      <Badge className="border-amber-400/40 bg-amber-500/15 text-amber-100">
                        {event.id.startsWith("PRE") ? "Pre Event" : "Main Event"}
                      </Badge>
                      <Badge className="border-red-400/35 bg-red-500/15 text-red-100">
                        {event.category === "tech" ? "Tech" : "Non-Tech"}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex h-full flex-col gap-4 p-5">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold uppercase tracking-[0.04em] text-slate-100">
                        {event.title}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-300/90">
                        {getDescriptionPreview(event.description)}
                      </p>
                    </div>

                    <div className="grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
                      <div className="inline-flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5 text-amber-200" />
                        <span>{event.date}</span>
                      </div>
                      <div className="inline-flex items-center gap-2">
                        <Clock3 className="h-3.5 w-3.5 text-red-200" />
                        <span>{getEventTime(event)}</span>
                      </div>
                    </div>

                      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex min-w-0 items-center gap-2">
                        <Avatar className="size-9 border border-slate-500/70">
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
                        <div className="min-w-0 text-xs">
                          <p className="truncate font-semibold text-slate-100">{event.coordinator.name}</p>
                          <p className="truncate text-slate-400">{event.venue}</p>
                        </div>
                      </div>

                      <Link href="/events">
                        <Button
                          variant="outline"
                            className="rounded-full border-amber-300/40 bg-black/35 text-slate-100 hover:border-red-300/45 hover:bg-red-500/20"
                        >
                          View
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center animate-fade-in">
              <Link href="/events">
                  <Button className="h-11 rounded-full border border-amber-300/25 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 px-7 text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-amber-400">
                  View All Events
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="speakers" ref={sectionRefs.speakers} className="relative z-10 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto mb-10 max-w-3xl space-y-5 text-center animate-fade-in">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Legacy Stage</p>
                <h2 className="text-balance text-3xl font-bold uppercase tracking-[0.06em] text-slate-50 md:text-4xl">
                  Artists who have already lit up KRONOS.
                </h2>
                <p className="text-base leading-relaxed text-slate-300">
                  Our stage has hosted voices that move crowds and stories that stay with students long
                  after the festival ends. Explore some of the standout appearances from previous editions.
                </p>
                <div className="inline-flex rounded-full border border-red-400/35 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-red-100">
                  Celebrity showcase archive
                </div>
              </div>

              <CardStack
                items={pastCelebrities}
                cardHeight={isMobileView ? 300 : 360}
                cardWidth={isMobileView ? 340 : 620}
                maxVisible={5}
                overlap={0.56}
                spreadDeg={44}
                depthPx={160}
                activeScale={1.04}
                inactiveScale={0.9}
                activeLiftPx={28}
                autoAdvance
                intervalMs={3200}
                pauseOnHover
                className="mx-auto w-full"
              />
            </div>
          </div>
        </section>

        <section id="sponsors" ref={sectionRefs.sponsors} className="relative z-10 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center animate-fade-in">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Partners</p>
              <h2 className="mt-3 text-balance text-3xl font-bold uppercase tracking-[0.06em] text-slate-50 md:text-5xl">
                Backed by companies building what comes next.
              </h2>
              <p className="mt-4 text-base text-slate-300">
                KRONOS happens because visionary brands support student-led innovation and community-driven
                execution.
              </p>
            </div>

            <div className="space-y-10">
              {sponsorTiers.map((tier, tierIndex) => (
                <div
                  key={tier.tier}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${tierIndex * 100}ms` }}
                >
                  <h3 className={`mb-5 text-center text-2xl font-bold tracking-[0.05em] ${tier.headingClass}`}>
                    {tier.tier}
                  </h3>

                  <div className={`grid gap-5 ${tier.gridClass}`}>
                    {tier.sponsors.map((sponsor) => (
                      <Card
                        key={sponsor.name}
                        className={`group relative overflow-hidden rounded-2xl border bg-black/40 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tier.borderClass}`}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tier.glowClass} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                        />
                        <div className="relative flex min-h-[120px] items-center justify-center">
                          <Image
                            src={sponsor.image || "/placeholder.svg"}
                            alt={sponsor.name}
                            width={280}
                            height={120}
                            className="max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Card className="mx-auto mt-14 max-w-3xl animate-fade-in-up rounded-3xl border border-amber-900/30 bg-black/35 p-8 text-center backdrop-blur-lg">
              <h3 className="text-2xl font-bold uppercase tracking-[0.06em] text-slate-50">
                Become a KRONOS Partner
              </h3>
              <p className="mt-3 text-base text-slate-300">
                Reach high-intent student communities and position your brand at the center of one of the
                most energetic tech-culture fests in the region.
              </p>
              <div className="mt-6">
                <Link
                  href="https://drive.google.com/file/d/1f-ZGJsn3BNd6VJ3X551p0xs7SCezE5qV/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="h-11 rounded-full border border-amber-300/25 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 px-7 text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-red-600 hover:to-amber-400">
                    Download Sponsor Deck
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>

        <section className="relative z-10 pb-20 pt-8 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl border border-amber-700/35 bg-gradient-to-r from-red-950/40 via-black/55 to-amber-950/35 p-8 text-center backdrop-blur-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-100">Ready for launch</p>
              <h2 className="text-balance text-3xl font-bold uppercase tracking-[0.06em] text-slate-50 md:text-4xl">
                Build your team and lock your KRONOS weekend.
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/events">
                  <Button className="h-11 rounded-full bg-gradient-to-r from-red-700 via-red-600 to-amber-500 px-6 text-white hover:from-red-600 hover:to-amber-400">
                    Explore Events
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="h-11 rounded-full border-white/30 bg-black/35 px-6 text-white hover:bg-white/10 hover:text-white"
                  >
                    Contact Organizers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
