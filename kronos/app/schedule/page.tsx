"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Hyperspeed from "@/components/Hyperspeed"
import PageHeading from "@/components/page-heading"
import { preEvents, mainEvents } from "@/lib/data"

const gradients = [
  "from-[#FF6B6B] to-[#4ECDC4]",
  "from-[#A8E6CF] to-[#3D84A8]",
  "from-[#FFD93D] to-[#FF6B6B]",
  "from-[#0093E9] to-[#80D0C7]",
  "from-[#FF61D2] to-[#FE9090]",
  "from-[#4158D0] to-[#C850C0]",
]

const events = [
  ...preEvents.map((event, index) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    description: event.description,
    category: "pre",
    gradient: gradients[index % gradients.length],
  })),
  ...mainEvents.map((event, index) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    description: event.description,
    category: "main",
    gradient: gradients[(index + preEvents.length) % gradients.length],
  })),
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("pre")
  const [isChangingCategory, setIsChangingCategory] = useState(false)
  const [animatedEvents, setAnimatedEvents] = useState<string[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return

    setIsChangingCategory(true)
    setTimeout(() => {
      setActiveCategory(category)
      setAnimatedEvents([])
      setTimeout(() => {
        setIsChangingCategory(false)
      }, 100)
    }, 500)
  }

  // Add intersection observer for timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-timeline-appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineElements = document.querySelectorAll(".timeline-item")
    timelineElements.forEach((el) => observer.observe(el))

    return () => {
      timelineElements.forEach((el) => observer.unobserve(el))
    }
  }, [activeCategory, isChangingCategory])

  // Add event to animated list when it appears
  const handleEventAppear = (id: string) => {
    if (!animatedEvents.includes(id)) {
      setAnimatedEvents((prev) => [...prev, id])
    }
  }

  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white p-5 relative isolate overflow-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>

        <div className="relative z-40">
          <Navbar />
        </div>

        <style jsx global>{`
          @keyframes movedown {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes moveup {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0px);
            }
          }

          @keyframes moveleft {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          @keyframes moveright {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0px);
            }
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(0.95);
            }
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -100% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes blob {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            25% {
              transform: translate(20px, -20px) scale(1.1);
            }
            50% {
              transform: translate(0, 20px) scale(1);
            }
            75% {
              transform: translate(-20px, -20px) scale(0.9);
            }
          }

          .animate-timeline-appear {
            animation: fadeIn 0.8s forwards;
          }

          .category-fade-out {
            animation: fadeOut 0.5s forwards;
          }

          .category-fade-in {
            animation: fadeIn 0.5s forwards;
          }

          .shimmer-effect {
            background: linear-gradient(
              90deg,
              rgba(245, 158, 11, 0.1) 0%,
              rgba(156, 107, 223, 0.3) 50%,
              rgba(245, 158, 11, 0.1) 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
          }

          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }

          .rotate-animation {
            animation: rotate 20s linear infinite;
          }

          .animate-blob {
            animation: blob 10s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          @keyframes text-glow {
            0%,
            100% {
              text-shadow: 0 0 8px rgba(245, 158, 11, 0.45);
            }
            50% {
              text-shadow: 0 0 15px rgba(245, 158, 11, 0.7),
                0 0 30px rgba(220, 38, 38, 0.25);
            }
          }

          .text-glow-amber {
            animation: text-glow 2s infinite;
          }

          .card-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .card-hover:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(156, 107, 223, 0.2),
              0 0 20px rgba(245, 158, 11, 0.1),
              0 0 0 1px rgba(245, 158, 11, 0.1);
          }
        `}</style>

        <div className="max-w-7xl mx-auto py-12 relative z-20">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-amber-500/10 blur-3xl rotate-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-red-500/10 blur-3xl rotate-animation"
            style={{ animationDirection: "reverse" }}
          ></div>

          <PageHeading
            eyebrow="KRONOS 2026"
            title="Schedule"
            description="Browse the complete timeline for pre-events and main events so you never miss a key moment."
            className="mb-8 px-4 sm:mb-10 md:mb-12 floating-animation"
            accentClassName="from-amber-300 via-orange-200 to-red-300"
          />

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 sm:mb-16">
            <button
              className={cn(
                "relative group px-8 py-4 overflow-hidden rounded-lg transition-all duration-500",
                activeCategory === "pre" ? "text-white" : "text-white/70 hover:text-white",
              )}
              onClick={() => handleCategoryChange("pre")}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-amber-500/30 transition-all duration-500 group-hover:border-amber-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "pre" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "pre" ? "text-glow-amber" : "",
                )}
              >
                PRE EVENT
                {activeCategory === "pre" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-amber-400 animate-pulse">
                    PRE EVENT
                  </span>
                )}
              </span>
            </button>

            <button
              className={cn(
                "relative group px-8 py-4 overflow-hidden rounded-lg transition-all duration-500",
                activeCategory === "main" ? "text-white" : "text-white/70 hover:text-white",
              )}
              onClick={() => handleCategoryChange("main")}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-amber-500/30 transition-all duration-500 group-hover:border-amber-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "main" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-amber-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-amber-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-500",
                  activeCategory === "main" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "main" ? "text-glow-amber" : "",
                )}
              >
                MAIN EVENT
                {activeCategory === "main" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-amber-400 animate-pulse">
                    MAIN EVENT
                  </span>
                )}
              </span>
            </button>
          </div>

          <div
            ref={timelineRef}
            className={cn(
              "relative max-w-full sm:max-w-4xl mx-auto min-h-[300px] sm:min-h-[400px]",
              isChangingCategory ? "category-fade-out" : "category-fade-in",
            )}
          >
            {/* Static vertical timeline line without animations */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] sm:w-[2px] bg-slate-600">
              <div className="absolute inset-0 opacity-50 blur-[1px] bg-slate-500"></div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {events
                .filter((event) => event.category === activeCategory)
                .map((event, index) => {
                  const isEven = index % 2 === 0
                  const animationClass = isEven
                    ? isEven
                      ? "animate-[moveright_0.8s_ease-out_forwards]"
                      : "animate-[moveleft_0.8s_ease-out_forwards]"
                    : isEven
                      ? "animate-[movedown_0.8s_ease-out_forwards]"
                      : "animate-[moveup_0.8s_ease-out_forwards]"

                  return (
                    <div
                      key={event.id}
                      className={cn(
                        "flex flex-col sm:flex-row items-start timeline-item opacity-0",
                        isEven ? "sm:justify-start" : "sm:justify-end",
                      )}
                      style={{ animationDelay: `${index * 0.15}s` }}
                      onAnimationEnd={() => handleEventAppear(event.id)}
                    >
                      {/* Static timeline bullet without animations */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-slate-500 z-10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      </div>

                      <Card
                        className={cn(
                          "w-full sm:w-[calc(50%-1.5rem)] p-6 sm:p-8 relative card-hover group",
                          "bg-gradient-to-br from-slate-800 to-slate-900",
                          "border border-slate-700 hover:border-slate-600",
                          "rounded-xl overflow-hidden shadow-lg shadow-slate-900/50",
                          "backdrop-blur-xl transition-all duration-500",
                          animationClass,
                        )}
                      >
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-700",
                            event.gradient,
                          )}
                        />

                        {/* Top border */}
                        <div className={cn("absolute top-0 left-0 w-full h-1 bg-slate-600")} />

                        {/* Corner accents - all four corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-0 w-2 h-8 bg-slate-500"></div>
                          <div className="absolute top-0 left-0 w-8 h-2 bg-slate-500"></div>
                        </div>

                        <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 right-0 w-2 h-8 bg-slate-500"></div>
                          <div className="absolute top-0 right-0 w-8 h-2 bg-slate-500"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 left-0 w-2 h-8 bg-slate-500"></div>
                          <div className="absolute bottom-0 left-0 w-8 h-2 bg-slate-500"></div>
                        </div>

                        <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 right-0 w-2 h-8 bg-slate-500"></div>
                          <div className="absolute bottom-0 right-0 w-8 h-2 bg-slate-500"></div>
                        </div>

                        {/* Tech scan lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(148,163,184,0.03)_50%)] bg-[length:100%_4px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                          <h2
                            className={cn(
                              "text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-wide sm:tracking-wider text-slate-200 transform transition-transform duration-500 group-hover:scale-105 origin-left",
                            )}
                          >
                            {event.title}
                          </h2>
                          <div className="flex items-center gap-2 mb-2 sm:mb-4">
                            <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                            <small className="text-xs sm:text-sm font-medium text-slate-400 block tracking-wide sm:tracking-wider transform transition-all duration-500 group-hover:text-slate-300">
                              {event.date}
                            </small>
                          </div>
                          <p className="text-slate-300 text-sm sm:text-base leading-relaxed transform transition-all duration-500 group-hover:text-slate-200 group-hover:translate-x-1">
                            {event.description}
                          </p>

                          {/* Animated reveal line */}
                          <div className="w-0 h-[1px] bg-slate-600 mt-4 group-hover:w-full transition-all duration-700"></div>
                        </div>
                      </Card>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
