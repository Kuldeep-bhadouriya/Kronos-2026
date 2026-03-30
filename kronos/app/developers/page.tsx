import React from "react";
import Developer from "@/components/developer";
import Navbar from "@/components/Navbar";
import Hyperspeed from "@/components/Hyperspeed";
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed";

const DeveloperPage = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(220,68,24,0.2),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(245,200,96,0.16),transparent_50%)]" />
      </div>

      <div className="relative z-40">
        <Navbar />
      </div>
      <div className="relative z-20 px-4 pb-16 pt-24 sm:px-6">
        <Developer />
      </div>
    </main>
  );
};

export default DeveloperPage;
