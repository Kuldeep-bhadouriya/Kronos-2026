import React from "react";
import Developer from "@/components/developer"; // '@/' points to root, adjust if needed
import Navbar from "@/components/Navbar";
import Hyperspeed from "@/components/Hyperspeed";
import { homeLikeHyperspeedEffect } from "@/lib/hyperspeed";

const DeveloperPage = () => {
  return (
    <main className="min-h-screen text-white p-4 relative isolate overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Hyperspeed effectOptions={homeLikeHyperspeedEffect} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/80" />
      </div>

      <div className="relative z-40">
        <Navbar />
      </div>
      <div className="relative z-20">
        <Developer />
      </div>
    </main>
  );
};

export default DeveloperPage;
