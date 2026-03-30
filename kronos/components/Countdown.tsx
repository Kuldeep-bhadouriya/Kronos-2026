"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const TARGET_DATE = new Date("2026-04-25T00:00:00Z").getTime();

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

const INITIAL_COUNTDOWN: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isLive: false,
};

export default function Countdown() {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isLive: false };
  }, []);

  const [countdown, setCountdown] = useState<CountdownState>(INITIAL_COUNTDOWN);

  useEffect(() => {
    // Start from mount time to avoid server/client time drift during hydration.
    setCountdown(calculateTimeLeft());

    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <section className="relative z-10 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="animate-fade-in overflow-hidden rounded-3xl border border-purple-800/35 bg-black/40 p-6 backdrop-blur-xl md:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-purple-500/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-purple-100">
                <CalendarDays className="h-3.5 w-3.5" />
                Festival Countdown
              </div>

              <h3 className="text-2xl font-bold uppercase tracking-[0.06em] text-slate-50 md:text-3xl">
                {countdown.isLive ? "Kronos is live now" : "The next edition starts in"}
              </h3>

              <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                {countdown.isLive
                  ? "The countdown has ended. Jump into the schedule and catch every active segment."
                  : "Time is ticking. Get your team ready and lock your game plan before day one."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "DAYS", value: countdown.days },
                { label: "HOURS", value: countdown.hours },
                { label: "MINUTES", value: countdown.minutes },
                { label: "SECONDS", value: countdown.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-[90px] flex-col items-center justify-center rounded-2xl border border-purple-900/35 bg-black/45 px-3 py-4 backdrop-blur-lg"
                >
                  <div className="text-3xl font-bold text-slate-100 sm:text-4xl">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] tracking-[0.2em] text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="lg:justify-self-end">
              <Link href={countdown.isLive ? "/events" : "/schedule"}>
                <Button className="h-11 rounded-full border border-purple-300/25 bg-gradient-to-r from-purple-600 to-pink-600 px-6 text-white transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500">
                  {countdown.isLive ? "View Live Events" : "Open Schedule"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
