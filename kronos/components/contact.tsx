import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import PageHeading from "@/components/page-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactChannels = [
  {
    label: "Email",
    value: "kronos@itmgoi.in",
    href: "mailto:kronos@itmgoi.in",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 74711 68868",
    href: "tel:+917471168868",
    icon: Phone,
  },
] as const;

const contactMeta = [
  {
    label: "Campus",
    value: "ITM Gwalior",
  },
  {
    label: "Response Window",
    value: "Within 24 hours",
  },
  {
    label: "Support Hours",
    value: "10:00 AM - 6:00 PM",
  },
] as const;

export default function ContactUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <PageHeading
        eyebrow="KRONOS 2026"
        title="Contact Kronos"
        description="Reach the organizing team, find the venue quickly, and share feedback for a sharper 2026 experience."
        className="items-start text-left"
        align="left"
        accentClassName="from-amber-200 via-orange-300 to-red-400"
        descriptionClassName="max-w-2xl text-slate-200"
      />

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-3xl border border-amber-800/35 bg-black/35 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Venue</p>
              <h2 className="mt-1 text-xl font-semibold text-slate-100">ITM Gwalior Campus</h2>
              <p className="mt-1 text-sm text-slate-400">Sithouli Railway Station Road, NH-75, Gwalior</p>
            </div>

            <a
              href="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=ITM+Gwalior+Madhya+Pradesh&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/15 px-4 py-2 text-sm font-medium text-red-100 transition-all duration-300 hover:border-red-300/65 hover:bg-red-500/25"
            >
              <MapPin size={15} />
              Open Directions
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

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {contactMeta.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-black/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200/95">{item.label}</p>
                <p className="mt-2 text-sm text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-6">
          <article className="rounded-3xl border border-white/15 bg-black/35 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <h2 className="bg-gradient-to-r from-amber-200 via-orange-300 to-red-300 bg-clip-text text-2xl font-semibold uppercase tracking-[0.08em] text-transparent">
              Reach The Team
            </h2>

            <div className="mt-5 space-y-3">
              {contactChannels.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 transition-colors duration-300 hover:border-amber-300/40"
                  >
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-slate-300">
                      <Icon size={15} />
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-slate-100">{item.value}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/35 bg-amber-500/10 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-amber-100">
              <Clock3 size={13} />
              Priority replies during active festival weeks
            </div>
          </article>

          <article className="rounded-3xl border border-red-700/35 bg-black/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
            <h2 className="bg-gradient-to-r from-amber-200 via-orange-300 to-red-300 bg-clip-text text-2xl font-semibold uppercase tracking-[0.08em] text-transparent">
              Send Feedback
            </h2>
            <p className="mt-2 text-sm text-slate-300">Tell us what worked and what can be better in this edition.</p>

            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="h-11 rounded-xl border-amber-500/30 bg-black/45 text-slate-100 placeholder:text-slate-500 focus-visible:ring-amber-400/60"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-11 rounded-xl border-amber-500/30 bg-black/45 text-slate-100 placeholder:text-slate-500 focus-visible:ring-amber-400/60"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-slate-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  className="h-32 resize-none rounded-xl border-amber-500/30 bg-black/45 text-slate-100 placeholder:text-slate-500 focus-visible:ring-amber-400/60"
                />
              </div>

              <Button
                type="submit"
                className="h-11 w-full rounded-xl border border-amber-300/30 bg-gradient-to-r from-red-700 via-red-600 to-amber-500 text-sm font-semibold uppercase tracking-[0.1em] text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:from-red-600 hover:to-amber-400"
              >
                Submit Feedback
              </Button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
