"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
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
              festival of the year. Powered by innovation, driven by brilliance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>April 15-17, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-purple-500" />
                <span>Tech City Arena</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                Register Now
              </Button>
              <Button
                variant="outline"
                className="border-purple-500/50 text-white hover:bg-purple-950/30 transition-all duration-300 hover:border-purple-500 group"
              >
                Explore Events
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 relative animate-fade-in-up animation-delay-300">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-4 border-purple-500/20 animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-pink-500/20 animate-spin-slow-reverse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-purple-500/10 animate-spin-slow"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse-slow"></div>

              <div className="relative z-10 w-full h-full rounded-lg border border-purple-500/30 overflow-hidden group transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                <Image
                  src="/slider-6.jpg"
                  alt="Kronos Tech Fest"
                  width={500}
                  height={500}
                  className="absolute w-full h-full object-cover opacity-[0.6] transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3">
                    <div className="text-xs text-purple-500 mb-1">
                      KRONOS TECH FEST
                    </div>
                    <div className="text-sm">
                      The ultimate tech experience of 2025
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse-slow animation-delay-500"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
          <div className="text-xs text-gray-400 mb-2">Scroll Down</div>
          <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
