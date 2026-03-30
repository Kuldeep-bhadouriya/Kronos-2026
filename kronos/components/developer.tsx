"use client";

import React from "react";
import Image from "next/image";
import PageHeading from "@/components/page-heading";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type DeveloperProfile = {
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
};

const developers: DeveloperProfile[] = [
  {
    name: "Atharva Bhargava",
    role: "Developer",
    image: "/WhatsApp Image 2025-03-21 at 15.34.21_000b1ee1.jpg",
    socials: [
      { label: "GitHub", href: "#", icon: <FaGithub /> },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/atharva-bhargava-684617276",
        icon: <FaLinkedinIn />,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/atharva__bhargava",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    name: "Kartik Sharma",
    role: "Developer",
    image: "/WhatsApp Image 2025-03-14 at 11.26.25_42aaba9c[1].jpg",
    socials: [
      { label: "GitHub", href: "https://github.com/sharmaxkartik", icon: <FaGithub /> },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sharmaxkartik",
        icon: <FaLinkedinIn />,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/wickedkartik",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    name: "Kuldeep Singh Bhadouriya",
    role: "Developer",
    image: "/WhatsApp Image 2025-03-21 at 15.34.16_9d399998.jpg",
    socials: [
      { label: "GitHub", href: "https://github.com/Kuldeep-bhadouriya", icon: <FaGithub /> },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311",
        icon: <FaLinkedinIn />,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/wtf.kuldeepz",
        icon: <FaInstagram />,
      },
    ],
  },
];

const DeveloperTeam: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-8 sm:px-6">
      <PageHeading
        eyebrow="KRONOS 2026"
        title="Developers Team"
        description="The engineers behind registrations, updates, and the digital experience across Kronos."
        className="items-start text-left"
        align="left"
        accentClassName="from-amber-200 via-orange-300 to-red-400"
        descriptionClassName="max-w-2xl text-slate-300"
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {developers.map((member) => (
          <article
            key={member.name}
            className="group rounded-2xl border border-amber-700/35 bg-black/35 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-400/50 hover:shadow-[0_22px_70px_rgba(185,28,28,0.22)]"
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-2 border-amber-300/45 transition-colors duration-300 group-hover:border-red-300/55">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-lg font-semibold text-slate-100">{member.name}</h3>
              <p className="text-sm uppercase tracking-[0.14em] text-amber-200">{member.role}</p>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              {member.socials.map((social) => (
                <a
                  key={`${member.name}-${social.label}`}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/35 bg-amber-500/10 text-amber-100 transition-all hover:border-red-300/55 hover:bg-red-500/15 hover:text-red-100"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm uppercase tracking-[0.2em] text-slate-300">
        Turning Chaos Into Code Since 2022
      </p>
    </section>
  );
};

export default DeveloperTeam;
