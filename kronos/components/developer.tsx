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
  blurb: string;
  socials: SocialLink[];
};

const developers: DeveloperProfile[] = [
  {
    name: "Atharva Bhargava",
    role: "Frontend Developer",
    image: "/WhatsApp Image 2025-03-21 at 15.34.21_000b1ee1.jpg",
    blurb: "Crafting immersive interfaces with speed, polish, and attention to detail.",
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
    name: "Kuldeep Singh Bhadouriya",
    role: "Full Stack Developer",
    image: "/WhatsApp Image 2025-03-21 at 15.34.16_9d399998.jpg",
    blurb: "Building reliable product flows across frontend, backend, and deployment.",
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
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6">
      <PageHeading
        eyebrow="KRONOS 2026"
        title="Developers Team"
        description="The engineers shaping registrations, event discovery, and the complete digital journey of KRONOS."
        className="items-start text-left"
        align="left"
        accentClassName="from-amber-200 via-orange-300 to-red-400"
        descriptionClassName="max-w-2xl text-slate-300"
      />

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center rounded-full border border-amber-200/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-100">
          Core Build Team
        </span>
        <span className="inline-flex items-center rounded-full border border-slate-100/15 bg-slate-800/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
          {developers.length} Engineers
        </span>
      </div>

      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {developers.map((member) => (
          <article
            key={member.name}
            className="group relative overflow-hidden rounded-[28px] border border-amber-300/25 bg-[linear-gradient(145deg,rgba(12,18,34,0.9),rgba(10,14,25,0.62))] p-[1px] shadow-[0_18px_50px_rgba(2,6,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-red-300/55 hover:shadow-[0_22px_64px_rgba(190,50,28,0.3)]"
          >
            <div className="relative h-full rounded-[27px] bg-slate-950/75 backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(245,168,83,0.16),transparent_45%),radial-gradient(circle_at_90%_90%,rgba(236,72,34,0.14),transparent_48%)]" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-t-[27px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex rounded-full border border-amber-200/35 bg-slate-950/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-100">
                  Kronos Dev
                </span>
              </div>

              <div className="relative px-5 pb-6 pt-5 sm:px-6">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-amber-200">{member.role}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-100 sm:text-2xl">{member.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{member.blurb}</p>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {member.socials
                    .filter((social) => social.href.startsWith("http"))
                    .map((social) => (
                      <a
                        key={`${member.name}-${social.label}`}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} ${social.label}`}
                        className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-amber-200/25 bg-amber-400/10 px-4 text-sm font-medium text-amber-50 transition-all duration-300 hover:border-red-200/60 hover:bg-red-500/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      >
                        <span className="text-base">{social.icon}</span>
                        <span>{social.label}</span>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-sm uppercase tracking-[0.24em] text-slate-300">
        Turning Event Energy Into Digital Experiences
      </p>
    </section>
  );
};

export default DeveloperTeam;
