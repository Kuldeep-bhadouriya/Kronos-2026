import type React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeading from "@/components/page-heading";

const ContactUs: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-32 sm:px-6">
      <PageHeading
        eyebrow="KRONOS 2026"
        title="Contact Us"
        description="Reach the organizing team, find the venue, and share your feedback for this edition."
        className="items-start text-left"
        align="left"
        accentClassName="from-amber-200 via-orange-300 to-red-400"
        descriptionClassName="max-w-2xl text-slate-300"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-amber-700/35 bg-black/35 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Venue</p>
              <h3 className="text-lg font-semibold text-slate-100">ITM Gwalior Campus</h3>
              <p className="text-sm text-slate-400">Gwalior, Madhya Pradesh</p>
            </div>
            <a
              href="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ITM+Gwalior+Madhya+Pradesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-400/35 bg-red-500/15 px-4 py-2 text-sm text-red-100 transition-colors hover:border-red-300/60 hover:bg-red-500/25"
            >
              <MapPin size={14} />
              Directions
            </a>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10">
            <iframe
              className="h-[360px] w-full min-h-[300px]"
              title="ITM Gwalior map"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ITM+Gwalior+Madhya+Pradesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Address</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                ITM Campus, Opp. Sithouli Railway Station, NH-75, Gwalior, Madhya Pradesh 474001
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/45 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Contact</p>
              <a
                href="mailto:kronos@itmgoi.in"
                className="mt-2 inline-flex items-center gap-2 text-sm text-red-200 transition-colors hover:text-red-100"
              >
                <Mail size={14} />
                kronos@itmgoi.in
              </a>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-300">
                <Phone size={14} />
                +91 74711 68868
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-red-700/35 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
          <h2 className="bg-gradient-to-r from-amber-200 via-orange-300 to-red-300 bg-clip-text text-2xl font-semibold uppercase tracking-[0.08em] text-transparent">
            Feedback
          </h2>
          <p className="mt-2 text-sm text-slate-300">Tell us what you loved and what we should improve.</p>

          <form className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-amber-500/35 bg-black/45 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-red-400/70"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-amber-500/35 bg-black/45 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-red-400/70"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="h-32 w-full resize-none rounded-xl border border-amber-500/35 bg-black/45 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-colors focus:border-red-400/70"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl border border-amber-300/25 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:from-red-600 hover:to-amber-400"
            >
              Submit
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default ContactUs;
