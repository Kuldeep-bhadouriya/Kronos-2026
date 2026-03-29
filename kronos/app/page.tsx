"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, ChevronRight, ArrowRight, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import Hyperspeed, { type HyperspeedOptions } from "@/components/Hyperspeed";
import { CardStack, type CardStackItem } from "@/components/card-stack";
import { preEvents, mainEvents } from "@/lib/data";
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

export default function KronosTechFest() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileView, setIsMobileView] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const eventsRef = useRef<HTMLElement | null>(null);
  const speakersRef = useRef<HTMLElement | null>(null);
  const scheduleRef = useRef<HTMLElement | null>(null);
  const sponsorsRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      about: aboutRef,
      events: eventsRef,
      speakers: speakersRef,
      schedule: scheduleRef,
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

  const homeHyperspeedEffect = useMemo<Partial<HyperspeedOptions>>(
    () => ({
      roadWidth: isMobileView ? 7 : 10,
      lanesPerRoad: isMobileView ? 2 : 3,
      fov: isMobileView ? 105 : 95,
      speedUp: isMobileView ? 2.2 : 3,
      movingAwaySpeed: isMobileView ? [65, 95] : [95, 125],
      movingCloserSpeed: isMobileView ? [-125, -170] : [-185, -245],
      colors: {
        roadColor: 0x080808,
        islandColor: 0x0a0a0a,
        background: 0x04030a,
        shoulderLines: 0x2f2a42,
        brokenLines: 0x2f2a42,
        leftCars: [0xff4dcd, 0xcd4fff, 0xff7b4d],
        rightCars: [0x5de7ff, 0x6ba8ff, 0xb3f7ff],
        sticks: 0x7af4ff,
      },
    }),
    [isMobileView]
  );

  const featuredEvents = useMemo(
    () =>
      [preEvents[0], preEvents[2], mainEvents[0]].filter(
        (event): event is Event => Boolean(event)
      ),
    []
  );

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

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const scrollPosition = window.scrollY + 100;
      const sections = Object.keys(sectionRefs) as Array<keyof typeof sectionRefs>;

      for (const section of sections) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  // Countdown timer

  return (
    <div className="min-h-screen text-white overflow-hidden relative isolate">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0">
          <Hyperspeed effectOptions={homeHyperspeedEffect} />
        </div>
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(147,51,234,0.14),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.12),transparent_55%)]" />
      </div>

      <div className="relative z-10">

        {/* Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Hero Section */}
        <section
        id="hero"
        ref={sectionRefs.hero}
        className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="max-w-3xl space-y-6 animate-fade-in-up">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium backdrop-blur-sm">
                TECH FEST 2025
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">KRONOS</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-text-shimmer">
                  TECH REVOLUTION
                </span>
              </h1>
              <p className="text-gray-400 max-w-md">
                Experience the future of technology at the most anticipated tech
                festival of the year. Powered by innovation, driven by
                brilliance.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span>April 25-27, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  <span>Institute of Technology and Management Gwalior</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/events">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                    Explore Events
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  className="border-purple-500/50 text-white hover:bg-purple-950/30 hover:text-grey transition-all duration-300 hover:border-purple-500 group"
                >
                  Explore Events
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <div className="text-xs text-gray-400 mb-2">Scroll Down</div>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-scroll-down"></div>
          </div>
        </div>
        </section>

        {/* Countdown Timer */}
        <Countdown />

        {/* Events Section */}
        <section
        id="events"
        ref={sectionRefs.events}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              FEATURED EVENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tech-title bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-text-shimmer">
              EVENTS
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Step into a realm of groundbreaking events that spark creativity,
              ignite learning, and drive transformation..
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <Card
                key={`${event.id}-${event.title}`}
                className="group relative h-full overflow-hidden rounded-2xl border-purple-500/20 bg-slate-900/45 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-purple-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />

                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    <Badge className="border-purple-400/40 bg-purple-500/20 text-purple-100">
                      {event.id.startsWith("PRE") ? "Pre-Event" : "Main Event"}
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-950/60 text-slate-100">
                      {event.category === "tech" ? "Tech" : "Non-Tech"}
                    </Badge>
                  </div>

                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-100 transition-colors group-hover:text-purple-300">
                      {event.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-slate-300/85">
                      {getDescriptionPreview(event.description)}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-300/80 sm:grid-cols-2">
                    <div className="inline-flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Clock3 className="w-3.5 h-3.5" />
                      <span>{getEventTime(event)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-700/70 pt-4">
                    <div className="flex min-w-0 items-center gap-2">
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
                      <div className="min-w-0 text-xs">
                        <p className="truncate font-medium text-slate-100">{event.coordinator.name}</p>
                        <p className="truncate text-slate-400">{event.venue}</p>
                      </div>
                    </div>

                    <Link href="/events">
                      <Button
                        variant="outline"
                        className="border-purple-500/40 text-white hover:bg-purple-950/30"
                      >
                        View
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <Link href="/events">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group">
                View All Events
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
        </section>

        {/* Speakers Section */}
        <section
        id="speakers"
        ref={sectionRefs.speakers}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              TECH VISIONARIES
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Past Celebrity
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              HERE ARE SOME OF THE PAST CELEBRITY SPEAKERS WHO HAVE GRACED OUR
              STAGES
            </p>
          </div>

          <CardStack
            items={pastCelebrities}
            cardHeight={360}
            cardWidth={560}
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
            className="mx-auto"
          />
        </div>
        </section>

        {/* Sponsors Section */}
        <section
        id="sponsors"
        ref={sectionRefs.sponsors}
        className="relative z-10 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/30 text-purple-500 text-xs font-medium mb-4 backdrop-blur-sm">
              OUR PARTNERS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Past Sponsors & Partners
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Kronos Tech Fest is made possible by these innovative companies
              shaping the future of technology.
            </p>
          </div>

          <div className="space-y-12">
            {/* Platinum Sponsors */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-500">
                Platinum Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {[
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
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-8 flex items-center justify-center transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 group"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Sponsor Image */}
                      <Image
                        src={sponsor.image || "/placeholder.svg"}
                        alt={sponsor.name}
                        width={300}
                        height={120}
                        className="max-h-32 w-auto transition-transform duration-500 group-hover:scale-110 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="animate-fade-in-up animation-delay-300">
              <h3 className="text-2xl font-bold mb-6 text-center text-yellow-500">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
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
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-yellow-500/20 rounded-xl p-6 flex items-center justify-center transition-all duration-300 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/20 group"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Sponsor Image */}
                      <Image
                        src={sponsor.image || "/placeholder.svg"}
                        alt={sponsor.name}
                        width={300}
                        height={120}
                        className="max-h-28 w-auto transition-transform duration-500 group-hover:scale-110 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="animate-fade-in-up animation-delay-500">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-400">
                Silver Sponsors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
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
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-500/20 rounded-xl p-4 flex items-center justify-center transition-all duration-300 hover:border-gray-500/40 hover:shadow-lg hover:shadow-gray-500/20 group"
                  >
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-400/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Sponsor Image */}
                      <Image
                        src={sponsor.image || "/placeholder.svg"}
                        alt={sponsor.name}
                        width={300}
                        height={120}
                        className="max-h-24 w-auto transition-transform duration-500 group-hover:scale-110 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in animation-delay-700">
            <h3 className="text-xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Join these innovative companies in supporting the future of
              technology at Kronos Tech Fest.
            </p>
            <Link href="https://drive.google.com/file/d/1f-ZGJsn3BNd6VJ3X551p0xs7SCezE5qV/view?usp=sharing">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                Download Sponsor Deck
              </Button>
            </Link>
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}
