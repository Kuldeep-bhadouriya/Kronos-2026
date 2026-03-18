"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TARGET_DATE = new Date("2025-04-25T00:00:00Z").getTime();

export default function Countdown() {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = TARGET_DATE - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, []);

  const [countdown, setCountdown] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <section className="relative z-10 py-10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-purple-500/20 rounded-xl p-8 transform hover:scale-[1.01] transition-all duration-300 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Event Countdown</h3>
              <p className="text-gray-400">The future of tech begins in:</p>
            </div>
            <div className="flex gap-4">
              {[
                { label: "DAYS", value: countdown.days },
                { label: "HOURS", value: countdown.hours },
                { label: "MINUTES", value: countdown.minutes },
                { label: "SECONDS", value: countdown.seconds },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-md blur-sm"></div>
                    <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-gray-900 border border-purple-500/30 rounded-md">
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Get Tickets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
