"use client";
import VideoPlayer from "@/components/videoPlayer";
import { useEffect, useState, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import PosterSlider from "@/components/posterSlider";

const particleData = [
  {
    top: "4%",
    left: "55%",
    animation: "float-particle 10s linear infinite",
    animationDelay: "0.3s",
  },
  {
    top: "23%",
    left: "81%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.2s",
  },
  {
    top: "69%",
    left: "65%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "3.4s",
  },
  {
    top: "38%",
    left: "9%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "0.6s",
  },
  {
    top: "44%",
    left: "49%",
    animation: "float-particle 11s linear infinite",
    animationDelay: "2.5s",
  },
  {
    top: "7%",
    left: "57%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.6s",
  },
  {
    top: "14%",
    left: "98%",
    animation: "float-particle 13s linear infinite",
    animationDelay: "2.5s",
  },
  {
    top: "5%",
    left: "50%",
    animation: "float-particle 11s linear infinite",
    animationDelay: "1.4s",
  },
  {
    top: "41%",
    left: "31%",
    animation: "float-particle 12s linear infinite",
    animationDelay: "1.3s",
  },
  {
    top: "18%",
    left: "3%",
    animation: "float-particle 6s linear infinite",
    animationDelay: "3.3s",
  },
  {
    top: "48%",
    left: "98%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "2.6s",
  },
  {
    top: "71%",
    left: "14%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.1s",
  },
  {
    top: "49%",
    left: "34%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "4.6s",
  },
  {
    top: "0%",
    left: "37%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "0.3s",
  },
  {
    top: "46%",
    left: "27%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.7s",
  },
  {
    top: "11%",
    left: "82%",
    animation: "float-particle 9s linear infinite",
    animationDelay: "0.2s",
  },
  {
    top: "4%",
    left: "68%",
    animation: "float-particle 9s linear infinite",
    animationDelay: "1.3s",
  },
  {
    top: "6%",
    left: "58%",
    animation: "float-particle 7s linear infinite",
    animationDelay: "0.6s",
  },
  {
    top: "47%",
    left: "40%",
    animation: "float-particle 8s linear infinite",
    animationDelay: "3.2s",
  },
  {
    top: "7%",
    left: "95%",
    animation: "float-particle 14s linear infinite",
    animationDelay: "3.9s",
  },
  {
    top: "34%",
    left: "67%",
    animation: "float-particle 20s linear infinite",
    animationDelay: "3.9s",
  },
];

export default function KronosTechFest() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 42,
    hours: 18,
    minutes: 24,
    seconds: 56,
  });
  const [activeSection, setActiveSection] = useState("hero");
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    events: useRef(null),
    speakers: useRef(null),
    schedule: useRef(null),
    sponsors: useRef(null),
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const scrollPosition = window.scrollY + 100;

      for (const section in sectionRefs) {
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
  }, []);

  // Countdown timer

  function AutomaticImageSlider() {
    const images = [
      "/slider-6.jpg",
      "/slider-1.jpg",
      "/slider-2.jpg",
      "/slider-3.jpg",
      "/slider-4.jpg",
      "/slider-5.jpg",
      // Add more image paths as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative w-full h-[300px] md:h-[500px] sm:h-[300px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Slider image ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        {/* Arc reactor glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(138,43,226,0.15)_0%,transparent_70%)] animate-pulse-slow"></div>

        {/* Updated colors for purple/pink theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(186,85,211,0.1),transparent_70%)] animate-move-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,112,219,0.1),transparent_70%)] animate-move-slow-reverse"></div>

        {/* Tech grid pattern */}
        <div
          className="absolute inset-0 bg-cover opacity-20"
          style={{ backgroundImage: "url('/slider-1.jpg')" }}
        ></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particleData.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-500 opacity-70"
              style={{
                top: particle.top,
                left: particle.left,
                animation: particle.animation,
                animationDelay: particle.animationDelay,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <Navbar isScrolled={isScrolled} activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
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
            <div className="md:w-1/2 mt-10 md:mt-0 relative animate-fade-in-up animation-delay-300">
              <div className="relative w-full h-[400px] md:h-[500px]">
                {/* Arc reactor inspired design with updated colors */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-4 border-purple-500/20 animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-pink-500/20 animate-spin-slow-reverse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-purple-500/10 animate-spin-slow"></div>

                {/* Glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg blur-xl animate-pulse-slow"></div>

                <div className="relative z-10 w-full h-full rounded-lg border border-purple-500/30 overflow-hidden group transition-all duration-500 hover:border-purple-500/70 hover:shadow-lg hover:shadow-purple-500/20">
                  {/* Replace with this automatic slider implementation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  {/* Automatic Image Slider */}
                  <AutomaticImageSlider />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 animate-pulse-slow animation-delay-500"></div>
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

      {/* Video Section */}
      <section id="video" className="relative z-10 py-10 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Watch Our Featured Video
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Dive into the highlights of our tech fest with this exclusive
              videos and trailers.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2 aspect-video">
              <Suspense fallback={<div>Loading component...</div>}></Suspense>
              <VideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Poster Slider Section */}
      <section id="posters" className="relative z-10 main-h-screen py-10">
        <div className="container mx-auto px-4 h-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Watch Our Featured Posts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Posts and trailers from our ongoing events.
            </p>
          </div>
          <div className="flex justify-center">
            <div className=" w-full h-full md:w-3/4 lg:w-1/2">
              <PosterSlider />
            </div>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "HOLI PARTY",
                desc: "Engage in thought-provoking discussions on the ethical implications of advanced AI systems.",
                badge: "PRE EVENT",
                badgeColor: "bg-purple-600/90",
                day: "Day 1",
                time: "MARCH 09, 2025",
                image: "/holiparty.jpeg", // Unique image for this event
              },
              {
                title: "BEYOND THE LENS",
                desc: "Explore how nature's designs can inspire technological innovation. This interdisciplinary forum brings together experts.",
                badge: "MAIN EVENT",
                badgeColor: "bg-pink-600/90",
                day: "Day 2",
                time: "APRIL 01, 2025",
                image: "/beyondthelens.jpeg", // Unique image for this event
              },
              {
                title: "AD-MAD",
                desc: "Envision the societal implications of emerging technologies in this forward-thinking symposium.",
                badge: "MAIN EVENT",
                badgeColor: "bg-purple-600/90",
                day: "Day 3",
                time: "APRIL 07, 2025",
                image: "/admad.jpeg", // Unique image for this event
              },
            ].map((event, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image} // Use the unique image here
                    alt={event.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                  {/* HUD elements */}
                  <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg"></div>
                  </div>

                  <div
                    className={`absolute bottom-4 left-4 ${event.badgeColor} text-white text-xs font-medium px-2 py-1 rounded event-badge`}
                  >
                    {event.badge}
                  </div>
                </div>
                <div className="p-6 relative">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors duration-300 event-title">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{event.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="event-date">{event.time}</span>
                    </div>
                  </div>
                  <Link href="/events">
                    <Button
                      variant="outline"
                      className="w-full border-purple-500/30 text-white hover:bg-purple-950/30 group-hover:border-purple-500/70 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
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

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}
          >
            {[
              {
                name: "Piyush Mishra",
                role: "Indian Actor and Singer",
                bio: "Piyush Mishra is an Indian actor, singer, lyricist, playwright, musician, and screenwriter",
                image: "/piyushmishra.jpg",
              },
              {
                name: "Ankit Tiwari",
                role: "Indian playback singer",
                bio: "Ankit Tiwari is an Indian playback singer, live performer, music director, composer.",
                image: "/ankit-tiwari.jpg",
              },
              {
                name: "Papon",
                role: "Indian playback singer and composer",
                bio: "Angaraag Mahanta, known by his stagename Papon, is an Indian playback singer and composer from Assam.",
                image: "/Papon.jpg",
              },
              {
                name: "Jubin Nautiyal",
                role: "Indian playback singer",
                bio: "Jubin Nautiyal is an Indian playback singer and live performer.",
                image: "/jubnialnutial.jpg",
              },
              {
                name: "Kunal Bojewar",
                role: "Singer",
                bio: "Kunal Bojewar, is an intense Singer, Composer and a power-packed Performer.",
                image: "/kunal.jpg",
              },
              {
                name: "Arijit Singh",
                role: "Indian playback singer",
                bio: "Arijit Singh is an Indian playback singer.",
                image: "/Arijit-Singh.png",
              },
              {
                name: "Neeti Mohan",
                role: "Indian Singer",
                bio: "Neeti Mohan Sharma is an Indian singer.",
                image: "/neeti-mohan.jpg",
              },
              {
                name: "KK",
                role: "Indian Playback Singer",
                bio: "Krishnakumar Kunnath, popularly known as KK, was an Indian playback singer.",
                image: "/kk.jpg",
              },
              {
                name: "Shilpa Rao",
                role: "Indian Singer",
                bio: "Shilpa Rao is an Indian singer who primarily records songs in Hindi language.",
                image: "/shilpa-rao.jpg",
              },
            ].map((speaker, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {/* HUD elements */}
                  <div className="absolute inset-0 z-20 border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 z-20 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-full h-full border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg"></div>
                  </div>

                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.05)_50%)] bg-[length:100%_4px] z-10 pointer-events-none"></div>

                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6 relative">
                  {/* Tech scan lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(147,112,219,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                  <h3 className="text-xl font-bold group-hover:text-purple-500 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-purple-500 text-sm mb-2">{speaker.role}</p>
                  <p className="text-gray-400 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
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
  );
}
