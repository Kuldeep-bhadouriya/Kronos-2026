"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import type { Coordinator } from "@/lib/types";
import { motion } from "framer-motion";

interface CoordinatorCardProps {
  coordinator: Coordinator;
  accentColor: string;
}

export default function CoordinatorCard({
  coordinator,
  accentColor,
}: CoordinatorCardProps) {
  return (
    <div
      className={`bg-slate-900/60 backdrop-blur-md rounded-lg p-5 border border-slate-800 h-full relative overflow-hidden group`}
    >
      {/* Holographic effects */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-${accentColor}-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-${accentColor}-500/10 to-transparent h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        initial={{ top: "-50%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Interface elements */}
      <div
        className={`absolute top-0 left-0 w-10 h-1 bg-${accentColor}-500`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-5 h-1 bg-${accentColor}-500`}
      ></div>

      <h3
        className={`text-lg font-['Orbitron'] mb-5 text-${accentColor}-400 relative z-10`}
      >
        COORDINATOR
      </h3>

      <div className="flex flex-col items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`relative w-32 h-32 mb-5 rounded-full overflow-hidden border-2 border-${accentColor}-500/50 shadow-[0_0_20px_rgba(${
            accentColor === "blue" ? "59,130,246" : "239,68,68"
          },0.3)]`}
        >
          <Image
            src={coordinator.avatar || "/placeholder.svg"}
            alt={coordinator.name}
            fill
            className="object-cover"
          />

          {/* Holographic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900/20 mix-blend-overlay"></div>
          <div
            className={`absolute inset-0 border-4 border-${accentColor}-500/10 rounded-full`}
          ></div>

          {/* Scan lines */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic2NhbmxpbmVzIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgMSBMIDEwMCAxIE0gMCAzIEwgMTAwIDMgTSAwIDUgTCAxMDAgNSBNIDAgNyBMIDEwMCA3IE0gMCA5IEwgMTAwIDkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc2NhbmxpbmVzKSIgLz48L3N2Zz4=')] opacity-20 mix-blend-overlay"></div>
        </motion.div>

        <h4 className="text-xl font-medium text-white mb-1 font-['Orbitron'] text-center">
          {coordinator.name}
        </h4>

        <p className={`text-${accentColor}-400 text-sm mb-5 text-center`}>
          {coordinator.role}
        </p>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-3 text-slate-300 group/item">
            <div
              className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/item:bg-${accentColor}-900/50 transition-colors`}
            >
              <Phone size={14} className={`text-${accentColor}-400`} />
            </div>
            <span className="font-mono">{coordinator.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300 group/item">
            <div
              className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover/item:bg-${accentColor}-900/50 transition-colors`}
            >
              <Mail size={15} className={`text-${accentColor}-400`} />
            </div>
            <span className="text-[14px] break-all font-mono">
              {coordinator.email}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-${accentColor}-600 to-${accentColor}-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>
    </div>
  );
}
