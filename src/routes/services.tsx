import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Building2, CheckCircle2, Cpu, GraduationCap, Headphones, Home as HomeIcon,
  MonitorPlay, Network, Router, Settings2, Signal, Sparkles, Star, Tv, Users, Wifi, Zap, Award,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { canonical, breadcrumbSchema } from "@/lib/site";

import fiberBg from "@/assets/fiber-optic-network-background.webp";
import fiberOptic from "@/assets/fiber-optic-strands-broadband.webp";
import cableTvImg from "@/assets/cable-tv-entertainment-setup.webp";
import smartHomeImg from "@/assets/smart-home-wifi-connectivity.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Apex Global Net" },
      { name: "description", content: "Broadband speed guidance, cable TV options, smart home connectivity, and business support from Apex Global Net." },
    ],
    links: [canonical("/services")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ])) },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav solid />
      <ServicesHero />
      <SpeedRecommend />
      <FeatureSplit />
      <PopularOptions />
      <CableTv />
      <SmartHome />
      <Footer />
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="relative pt-40 pb-16">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-brand/10 text-xs font-medium tracking-wide uppercase text-cyan-brand">
            <Sparkles className="h-3.5 w-3.5" /> What We Help With
          </span>
          <h1 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy-deep">Our Services</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From picking the right speed to cable TV, smart home setup, and business connectivity — here's how we guide you through it all.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SPEED RECOMMEND ---------------- */
function SpeedRecommend() {
  const speeds = [
    { s: "100", u: "Mbps", tag: "Everyday", desc: "Ideal for 1–3 devices, browsing, HD streaming, and video calls." },
    { s: "300", u: "Mbps", tag: "Family", desc: "Great for 4–6 devices, 4K streaming, and remote learning." },
    { s: "500", u: "Mbps", tag: "Power User", desc: "Smooth gaming, large downloads, and multi-user households." },
    { s: "1", u: "Gbps", tag: "Ultra", desc: "Best for creators, smart homes, and businesses that never wait." },
  ];
  return (
    <section id="plans" className="section-pad bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <img src={fiberBg} alt="" aria-hidden className="h-full w-full object-cover" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading dark eyebrow="Broadband Speed Guide" title="Pick the speed that fits your world" desc="A quick reference — no prices, just the right speed for the right use." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speeds.map((sp, i) => (
            <Reveal key={sp.s} delay={i * 80}>
              <div className="glass-dark rounded-3xl p-8 hover:border-cyan-brand/60 hover:-translate-y-1 transition-all duration-300">
                <div className="text-xs uppercase tracking-widest text-cyan-brand font-semibold">{sp.tag}</div>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold font-display">{sp.s}</span>
                  <span className="text-lg font-semibold text-white/70">{sp.u}</span>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-[var(--gradient-cyan)]" style={{ width: `${[25, 55, 75, 100][i]}%` }} />
                </div>
                <p className="mt-5 text-sm text-white/75 leading-relaxed">{sp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE SPLIT ---------------- */
function FeatureSplit() {
  const features = [
    { icon: Zap, title: "Ultra-Fast Speeds" },
    { icon: Signal, title: "Stable Connectivity" },
    { icon: Wifi, title: "Unlimited Browsing" },
    { icon: MonitorPlay, title: "HD Streaming" },
    { icon: Building2, title: "Work From Home" },
    { icon: GraduationCap, title: "Online Learning" },
    { icon: Cpu, title: "Multi-Device Support" },
    { icon: Headphones, title: "Dedicated Assistance" },
  ];
  return (
    <section id="broadband" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={fiberOptic} alt="Fiber optic strands" loading="lazy" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-cyan)] grid place-items-center">
                  <Signal className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cyan-brand">Fiber Ready</div>
                  <div className="font-semibold">Next-gen connectivity in your area</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
              <Sparkles className="h-4 w-4" /> Built for how you actually live
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">Everything you need from a modern broadband connection</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We help match your household or business with connection options built for real-world use — streaming, gaming, working, learning, and everything in between.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.title} className="flex items-center gap-3 rounded-2xl bg-white border border-border p-4 hover:border-cyan-brand/50 hover:shadow-[0_10px_30px_-15px_rgba(0,184,255,0.4)] transition-all">
                  <div className="h-10 w-10 rounded-xl bg-cyan-brand/10 grid place-items-center text-cyan-brand shrink-0">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-navy-deep text-sm">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- POPULAR OPTIONS ---------------- */
function PopularOptions() {
  const opts = [
    { tag: "Starter", icon: HomeIcon, desc: "Ideal for small households and light users — comfortable browsing and streaming." },
    { tag: "Family", icon: Users, desc: "Made for busy homes with multiple devices, 4K streaming, and daily video calls." },
    { tag: "Premium", icon: Award, desc: "For power users, creators, and gamers who need top-tier speed and stability." },
    { tag: "Business", icon: Building2, desc: "Business-grade uplinks with priority support and connectivity for growing teams." },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Popular Broadband Options" title="Categories most customers explore" desc="Availability and specifics vary by location. Check what's available at your address." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opts.map((o, i) => (
            <Reveal key={o.tag} delay={i * 90}>
              <div className="group relative rounded-3xl bg-white border border-border p-8 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_2px_20px_-10px_rgba(11,31,58,0.1)] hover:shadow-[var(--shadow-glow)] overflow-hidden">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[var(--gradient-cyan)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-navy-deep grid place-items-center text-cyan-brand">
                    <o.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-widest text-orange-brand font-semibold">{o.tag}</div>
                  <h3 className="mt-1 text-xl font-bold text-navy-deep">{o.tag} Options</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                  <a href="/#check" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep group-hover:text-orange-brand transition-colors">
                    Check Availability <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CABLE TV ---------------- */
function CableTv() {
  const items = ["Regional Channels", "Live Sports", "Movies & Series", "Kids Programming", "News & Entertainment", "HD & 4K Support"];
  return (
    <section id="cable" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
              <Tv className="h-4 w-4" /> Cable TV Assistance
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">Explore cable options available in your neighborhood</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Regional channels, sports, movies, kids' programming and everyday entertainment — we help you compare cable TV options supported in your area and guide you through the request process.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {items.map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-brand shrink-0" />
                  <span className="text-sm font-medium text-navy-deep">{i}</span>
                </div>
              ))}
            </div>
            <a href="/#check" className="mt-8 btn-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold">
              Explore Cable Options <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-[var(--shadow-soft)]">
              <img src={cableTvImg} alt="Modern entertainment setup" loading="lazy" className="w-full h-[520px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 max-w-[240px]">
              <div className="flex items-center gap-2 text-orange-brand mb-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="text-navy-deep font-semibold text-sm">200+ channels available across supported networks</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SMART HOME ---------------- */
function SmartHome() {
  const items = [
    { icon: Router, title: "Router Setup Assistance" },
    { icon: Wifi, title: "Wi-Fi Optimization" },
    { icon: Network, title: "Mesh Networking" },
    { icon: Building2, title: "Home Office Connectivity" },
    { icon: Cpu, title: "Device Configuration" },
    { icon: Settings2, title: "Modern Networking Support" },
  ];
  return (
    <section id="smart-home" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-soft)] order-2 lg:order-1">
            <img src={smartHomeImg} alt="Smart home living room" loading="lazy" className="w-full h-[540px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
              <Signal className="h-5 w-5 text-cyan-brand animate-wifi" />
              <div className="text-navy-deep font-semibold text-sm">18 devices connected</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
              <Router className="h-4 w-4" /> Smart Home Connectivity
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">A home network that just works — in every room</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From first-time router setup to full mesh coverage, we help you get the most out of your connection with hands-on guidance for a modern smart home.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map((it) => (
                <div key={it.title} className="flex items-start gap-3 rounded-2xl bg-surface p-4 border border-border hover:border-cyan-brand/50 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-white grid place-items-center text-cyan-brand border border-cyan-brand/20 shrink-0">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-navy-deep pt-2">{it.title}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
