import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Orbitron, Rajdhani } from "next/font/google";

// Define the main heading font (for titles like "EVENTS", "HOLI PARTY", etc.)
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

// Define the body font
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Kronos Tech Events",
  description: "Experience the future of technology",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/title_logo.png" />
      </head>
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}
