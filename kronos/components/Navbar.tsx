"use client";

import type React from "react";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navigationItems = [
  { name: "HOME", path: "/", section: "hero" },
  { name: "ABOUT", path: "/about", section: null },
  { name: "EVENTS", path: "/events", section: null },
  { name: "SCHEDULE", path: "/schedule", section: null },
  { name: "CONTACT", path: "/contact", section: null },
  { name: "OUR TEAM", path: "/team", section: null },
  { name: "DEVELOPER", path: "/developers", section: null },
];

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "hero" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(activeSection);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
      if (!path.startsWith("/#") || pathname !== "/") return;

      e.preventDefault();
      const targetId = path.substring(2);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setMobileMenuOpen(false);
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", path);
        setActive(targetId);
      }
    },
    [pathname]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg shadow-purple-500/10 glow-border"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image
              src="/itm_logo.png" // Path to the image in the public folder
              alt="Kronos Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <Link href="/">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-text-shimmer font-orbitron tracking-wider">
              KRONOS
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigationItems.map((item) => {
            const isActive = item.section
              ? active === item.section && pathname === "/"
              : pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={(e) => handleHashLinkClick(e, item.path)}
                className={`text-sm transition-all duration-300 hover:text-purple-500 relative font-orbitron tracking-wider px-2 py-1 rounded ${
                  isActive
                    ? "text-purple-500 bg-purple-500/10"
                    : "text-white/80"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-500 animate-expand-width"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/events">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
              Register Now
            </Button>
          </Link>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen
            ? "max-h-[500px] border-b border-purple-500/20"
            : "max-h-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navigationItems.map((item) => {
            const isActive = item.section
              ? active === item.section && pathname === "/"
              : pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={(e) => handleHashLinkClick(e, item.path)}
                className={`text-sm py-2 px-4 rounded-lg transition-all duration-300 font-orbitron tracking-wider ${
                  isActive
                    ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-500 border border-purple-500/30"
                    : "text-white/80 hover:bg-gray-800/50"
                }`}
              >
                <span className="flex items-center">
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                  )}
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
      <style jsx>{`
        .glow-border {
          box-shadow: 0 0 10px 2px rgba(128, 0, 128, 0.5),
            0 0 20px 4px rgba(255, 20, 147, 0.5);
        }
      `}</style>
    </header>
  );
}

