"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

const events = [
  {
    id: 1,
    title: "RANG RUSH",
    date: "09-MAR-25",
    description: "Celebrate the festival of colors with music and joy",
    category: "pre",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 2,
    title: "FLASH MOB",
    date: "25-MAR-25",
    description: "A flash mob is a surprise group performance in public.",
    category: "pre",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },

  {
    id: 3,
    title: "WORKSHOPS",
    date: "07-APR-25 - 20-APR-24",
    description: "Various skill development workshops",
    category: "pre",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 4,
    title: "CRICKET",
    date: "09-APR-25",
    description: "Cricket is a bat-and-ball game of runs and wickets.",
    category: "pre",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },

  {
    id: 5,
    title: "ARM WRESTLING",
    date: "09-APR-25",
    description: "Arm wrestling is a strength duel of locked hands.",
    category: "pre",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 6,
    title: "BEYOND THE LENS",
    date: "09-APR-25",
    description: "Photography competition screening round",
    category: "pre",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 7,
    title: "FOOTBALL",
    date: "15-17-APR-25",
    description: "Football is a team sport of goals and passes.",
    category: "pre",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 8,
    title: "AD-MAD",
    date: "17-APR-25",
    description: "Creative advertising competition",
    category: "pre",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 9,
    title: "TUG OF WAR",
    date: "17-APR-25",
    description: " Ultimate Test of Strength and Teamwork!",
    category: "pre",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 10,
    title: "E-SPORTS",
    date: "18-APR-25 - 20-APR-25",
    description: "Gaming tournaments and competitions",
    category: "pre",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 11,
    title: "ITM GOT TALENT",
    date: "21-APR-25 - 22-APR-25",
    description: "Talent showcase competition",
    category: "pre",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 12,
    title: "LAUGHATHON",
    date: "23-APR-25",
    description: "Stand-up comedy is live humor on stage.",
    category: "pre",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },

  {
    id: 13,
    title: "ROADIES",
    date: "25-APR-25",
    description: "Adventure and challenge based competition",
    category: "main",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 14,
    title: "ESCAPE ROOM",
    date: "25-APR-25",
    description: "Interactive puzzle solving challenge",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 15,
    title: "FIESTA",
    date: "25-APR-25",
    description: "Cultural celebration and performances",
    category: "main",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
  {
    id: 16,
    title: "COSPLAY",
    date: "25-APR-25",
    description: "Costume play and character portrayal competition",
    category: "main",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 17,
    title: "GOONJ",
    date: "25-APR-25 - 26-APR-25",
    description: "First day of band performances",
    category: "main",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 18,
    title: "FASHION RUNWAY",
    date: "26-APR-25",
    description: "Style and fashion showcase",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 19,
    title: "CHROMAVERSE",
    date: "26-APR-25",
    description: "Creative arts and design exhibition",
    category: "main",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 20,
    title: "TREASURE HUNT",
    date: "26-APR-25",
    description: "Adventure quest with clues and prizes",
    category: "main",
    gradient: "from-[#A8E6CF] to-[#3D84A8]",
  },
  {
    id: 21,
    title: "INNOVATIVE-X",
    date: "26-APR-25",
    description: "Discussions and debates on artificial intelligence",
    category: "main",
    gradient: "from-[#FFD93D] to-[#FF6B6B]",
  },
  {
    id: 22,
    title: "TECH-BLITZ",
    date: "26-APR-25 - 27-APR-25",
    description: "24-36 hour coding competition",
    category: "main",
    gradient: "from-[#FF61D2] to-[#FE9090]",
  },
  {
    id: 23,
    title: "INTERSTELLAR TALK",
    date: "27-APR-25",
    description: "Technology and innovation discussions",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 24,
    title: "TECH TALK",
    date: "27-APR-25",
    description: "Technology and innovation discussions",
    category: "main",
    gradient: "from-[#4158D0] to-[#C850C0]",
  },
  {
    id: 25,
    title: "STARTUP SHOWCASE",
    date: "27-APR-25",
    description: "Presentation of innovative business ideas",
    category: "main",
    gradient: "from-[#0093E9] to-[#80D0C7]",
  },
  {
    id: 26,
    title: "DJ NIGHT",
    date: "27-APR-25",
    description: "Music and dance celebration",
    category: "main",
    gradient: "from-[#FF6B6B] to-[#4ECDC4]",
  },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("pre")
  const [isChangingCategory, setIsChangingCategory] = useState(false)
  const [animatedEvents, setAnimatedEvents] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
  const handleEventAppear = (id: number) => {
    if (!animatedEvents.includes(id)) {
      setAnimatedEvents((prev) => [...prev, id])
    }
  }

  // Canvas background animation (similar to team page)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      alphaSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.color = this.getRandomColor()
        this.alpha = Math.random() * 0.5 + 0.1
        this.alphaSpeed = Math.random() * 0.01 + 0.005
      }

      getRandomColor() {
        const colors = [
          "rgba(168, 85, 247, 0.7)", // Purple
          "rgba(236, 72, 153, 0.7)", // Pink
          "rgba(255, 255, 255, 0.7)", // White
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }

        // Pulsate alpha
        this.alpha += this.alphaSpeed
        if (this.alpha > 0.7 || this.alpha < 0.1) {
          this.alphaSpeed = -this.alphaSpeed
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace("0.7", this.alpha.toString())
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Connect particles with lines
    function connect() {
      if (!ctx) return
      const maxDistance = 150
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 10, 20, 1)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0f1117] text-white p-5 relative overflow-hidden">
        {/* Canvas Background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ position: "fixed" }} />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 pointer-events-none"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          <div className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-blob top-1/4 -left-48"></div>
          <div className="absolute w-96 h-96 rounded-full bg-pink-500/10 blur-3xl animate-blob animation-delay-2000 top-3/4 -right-48"></div>
          <div className="absolute w-80 h-80 rounded-full bg-purple-700/10 blur-3xl animate-blob animation-delay-4000 top-1/2 left-1/3"></div>
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
              rgba(156, 107, 223, 0.1) 0%,
              rgba(156, 107, 223, 0.3) 50%,
              rgba(156, 107, 223, 0.1) 100%
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
              text-shadow: 0 0 8px rgba(156, 107, 223, 0.5);
            }
            50% {
              text-shadow: 0 0 15px rgba(156, 107, 223, 0.8),
                0 0 30px rgba(156, 107, 223, 0.4);
            }
          }

          .text-glow-purple {
            animation: text-glow 2s infinite;
          }

          .card-hover {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .card-hover:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 40px rgba(156, 107, 223, 0.2),
              0 0 20px rgba(156, 107, 223, 0.1),
              0 0 0 1px rgba(156, 107, 223, 0.1);
          }
        `}</style>

        <div className="max-w-7xl mx-auto py-12 relative z-20">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl rotate-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl rotate-animation"
            style={{ animationDirection: "reverse" }}
          ></div>

          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] mb-8 sm:mb-10 md:mb-12 text-[#9c6bdf] shimmer-effect p-4 floating-animation">
            SCHEDULE
          </h1>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12 sm:mb-16">
            <button
              className={cn(
                "relative group px-8 py-4 overflow-hidden rounded-lg transition-all duration-500",
                activeCategory === "pre" ? "text-white" : "text-white/70 hover:text-white",
              )}
              onClick={() => handleCategoryChange("pre")}
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/30 transition-all duration-500 group-hover:border-purple-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "pre" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,107,223,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                  activeCategory === "pre" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "pre" ? "text-glow-purple" : "",
                )}
              >
                PRE EVENT
                {activeCategory === "pre" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-purple-400 animate-pulse">
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
              <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-lg border border-purple-500/30 transition-all duration-500 group-hover:border-purple-500/70"></div>
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500",
                  activeCategory === "main" ? "opacity-100" : "group-hover:opacity-40",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,107,223,0.3),transparent_70%)]"></div>
              </div>

              {/* Animated corners */}
              <span
                className={cn(
                  "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>
              <span
                className={cn(
                  "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all duration-500",
                  activeCategory === "main" ? "w-8 h-8" : "group-hover:w-6 group-hover:h-6",
                )}
              ></span>

              {/* Animated underline */}
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500",
                  activeCategory === "main" ? "w-full" : "group-hover:w-3/4",
                )}
              ></span>

              {/* Text with glow effect */}
              <span
                className={cn(
                  "relative z-10 font-bold tracking-widest text-lg transition-all duration-500",
                  activeCategory === "main" ? "text-glow-purple" : "",
                )}
              >
                MAIN EVENT
                {activeCategory === "main" && (
                  <span className="absolute inset-0 flex items-center justify-center blur-sm text-purple-400 animate-pulse">
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
