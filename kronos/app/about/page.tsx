"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Facebook,
  Instagram,
  Sparkles,
  Trophy,
  Twitter,
  Users,
  Youtube,
  type LucideIcon,
} from "lucide-react"
import Navbar from "@/components/Navbar"
import Hyperspeed from "@/components/Hyperspeed"
import PageHeading from "@/components/page-heading"
import { Button } from "@/components/ui/button"
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed"

type StatItem = {
  value: string
  label: string
  detail: string
}

type PillarItem = {
  title: string
  description: string
  icon: LucideIcon
}

type MilestoneItem = {
  year: string
  title: string
  description: string
}

type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

const stats: StatItem[] = [
  {
    value: "18,000+",
    label: "Annual Attendees",
    detail: "Students, creators, and innovators from across India.",
  },
  {
    value: "40+",
    label: "Competitions",
    detail: "Technical and cultural events spread across three days.",
  },
  {
    value: "3 Days",
    label: "Festival Duration",
    detail: "High-energy schedule with workshops, contests, and pro nights.",
  },
  {
    value: "2010",
    label: "Legacy Started",
    detail: "More than a decade of youth-driven momentum.",
  },
]

const pillars: PillarItem[] = [
  {
    title: "Compete",
    description:
      "Hackathons, engineering challenges, and strategy-based contests sharpen real-world problem solving.",
    icon: Trophy,
  },
  {
    title: "Create",
    description:
      "Design, performance, and storytelling experiences let students express talent beyond the classroom.",
    icon: Sparkles,
  },
  {
    title: "Connect",
    description:
      "Industry experts, alumni, and campus communities come together to build opportunities and friendships.",
    icon: Users,
  },
]

const journey: MilestoneItem[] = [
  {
    year: "2010",
    title: "The First Spark",
    description:
      "Kronos launched with a bold ambition: give students a stage where ambition meets action.",
  },
  {
    year: "2016",
    title: "Regional Recognition",
    description:
      "Participation expanded rapidly, turning Kronos into a flagship youth techno-cultural festival in Central India.",
  },
  {
    year: "2022",
    title: "Experience Upgrade",
    description:
      "Bigger production, richer event formats, and stronger partnerships raised the quality of every edition.",
  },
  {
    year: "2026",
    title: "Future in Motion",
    description:
      "This edition is focused on deeper participation, stronger community impact, and unforgettable memories.",
  },
]

const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/168WTPYfCP/",
    icon: Facebook,
  },
  {
    label: "X",
    href: "https://x.com/techfestkonos?s=09",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thekronosclub",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCl_gmIaw0e5lzyYwPfy-y2Q",
    icon: Youtube,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative isolate overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
      </div>

      <div className="relative z-40">
        <Navbar />
      </div>

      <main className="relative z-20 pb-24">
        <section className="pt-32 px-4">
          <div className="mx-auto max-w-6xl rounded-3xl border border-amber-800/35 bg-black/35 backdrop-blur-xl p-6 sm:p-10 md:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <PageHeading
              eyebrow="KRONOS 2026"
              title="About Kronos"
              description="Central India&apos;s biggest youth techno-cultural festival where competition, creativity, and community come alive."
              className="items-start text-left"
              align="left"
              descriptionClassName="text-slate-200 max-w-2xl"
            />

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-slate-100/95 leading-relaxed animate-fade-in-up opacity-0">
                  Kronos began in 2010 with one clear belief: students grow faster when ideas are tested in public, not
                  just discussed in classrooms. Since then, it has evolved into an annual festival where technology,
                  culture, and youth leadership collide.
                </p>
                <p
                  className="text-base sm:text-lg text-slate-200/90 leading-relaxed animate-fade-in-up opacity-0"
                  style={{ animationDelay: "120ms" }}
                >
                  Hosted at ITM Gwalior, Kronos welcomes thousands of participants for a packed three-day experience of
                  hackathons, stage events, workshops, performances, and high-impact networking.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/10 px-4 py-2 text-sm text-amber-100">
                    <CalendarDays className="h-4 w-4" />
                    3 days of non-stop events
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-400/35 bg-red-500/10 px-4 py-2 text-sm text-red-100">
                    <Compass className="h-4 w-4" />
                    Tech + culture in one stage
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild className="bg-gradient-to-r from-amber-600 to-red-600 text-white hover:from-amber-500 hover:to-red-500">
                    <Link href="/events">
                      Explore Events
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-amber-300/40 bg-black/35 text-slate-100 hover:bg-amber-500/20 hover:text-white"
                  >
                    <Link href="/team">Meet the Team</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200/90">Why Students Come Back</p>
                <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                  <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    Competitive format that pushes practical skills.
                  </li>
                  <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    A rare mix of coding, creativity, and live energy.
                  </li>
                  <li className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    Memorable pro nights and meaningful networking.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-16">
          <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <article
                key={item.label}
                className="rounded-2xl border border-amber-800/35 bg-black/35 backdrop-blur-md p-6 hover:border-red-400/50 transition-colors duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-3xl md:text-4xl font-bold text-amber-200">{item.value}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pt-16" aria-labelledby="festival-pillars">
          <div className="mx-auto max-w-6xl">
            <h2 id="festival-pillars" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.08em] text-white uppercase">
              What Makes Kronos Different
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300 text-base sm:text-lg">
              Every edition is designed around three core experiences that keep the festival useful, exciting, and
              unforgettable.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon

                return (
                  <article
                    key={pillar.title}
                    className="group rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-400/55 hover:-translate-y-1 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-amber-300/30 bg-amber-500/10 p-3 text-amber-100 group-hover:border-red-300/50 group-hover:bg-red-500/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">{pillar.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 pt-16" aria-labelledby="journey-heading">
          <div className="mx-auto max-w-6xl rounded-3xl border border-amber-900/30 bg-black/35 p-6 sm:p-10 backdrop-blur-lg">
            <h2 id="journey-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.08em] text-white">
              Kronos Journey
            </h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              A timeline of how Kronos became a campus movement that blends ambition, entertainment, and opportunity.
            </p>

            <div className="mt-8 space-y-5">
              {journey.map((step, index) => (
                <article
                  key={step.year}
                  className="relative grid gap-4 rounded-2xl border border-white/10 bg-black/45 p-5 sm:grid-cols-[120px_1fr] sm:items-start animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 130}ms` }}
                >
                  <p className="text-lg sm:text-xl font-semibold text-amber-200">{step.year}</p>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pt-16" aria-labelledby="partners-heading">
          <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-6 sm:p-8 backdrop-blur-md">
              <h2 id="partners-heading" className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] text-white">
                Powered by ITM Gwalior
              </h2>
              <p className="mt-3 text-slate-300 max-w-xl">
                Kronos is built by a student-first ecosystem where faculty, volunteers, and partners work together to
                create one of the most anticipated youth festivals in Central India.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-amber-900/35 bg-black/45 p-4 sm:p-5 h-44 flex items-center justify-center">
                  <Image
                    src="/ITMGOILogo.png"
                    alt="ITM Group of Institutions logo"
                    width={260}
                    height={120}
                    className="h-auto w-auto max-h-28 object-contain"
                  />
                </div>
                <div className="rounded-2xl border border-amber-900/35 bg-black/45 p-4 sm:p-5 h-44 flex items-center justify-center">
                  <Image
                    src="/itm_logo.png"
                    alt="ITM University logo"
                    width={220}
                    height={120}
                    className="h-auto w-auto max-h-28 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold uppercase tracking-[0.08em] text-white">Stay Connected</h3>
                <p className="mt-3 text-slate-300 text-sm sm:text-base">
                  Follow updates, announcements, and highlights from the official Kronos channels.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-amber-500/10 px-4 py-2 text-sm text-amber-100 transition-all hover:border-red-400/45 hover:bg-red-500/15"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/45 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Contact</p>
                <p className="mt-3 text-sm sm:text-base text-slate-200">
                  GDSC Office, Nuemman Block, ITM Gwalior, Madhya Pradesh, India
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-200">+91 91311 60239</p>
                <a href="mailto:kronos@itmgoi.in" className="mt-2 inline-block text-sm sm:text-base text-amber-200 hover:text-red-200">
                  kronos@itmgoi.in
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pt-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-amber-700/35 bg-gradient-to-r from-amber-950/40 via-black/55 to-red-950/35 p-8 sm:p-12 text-center backdrop-blur-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.08em]">Ready to be part of it?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-200 text-base sm:text-lg">
              Join the students, artists, and innovators shaping this edition of Kronos. Build memories, win big, and
              leave inspired.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-gradient-to-r from-amber-600 to-red-600 text-white hover:from-amber-500 hover:to-red-500">
                <Link href="/events">
                  Browse Events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 bg-black/35 text-white hover:bg-white/10 hover:text-white">
                <Link href="/contact">Contact Organizers</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

