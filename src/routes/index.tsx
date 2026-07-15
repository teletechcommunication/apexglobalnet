import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Award, Building2, CheckCircle2, ChevronDown, Clock, Cpu, FileCheck, Gamepad2,
  GraduationCap, Headphones, Home, MonitorPlay, Network, Phone, Router, Search, Settings2,
  Shield, Signal, Sparkles, Star, Tv, Users, Wifi, Wrench, Zap,
} from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { canonical, PHONE_HREF } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

import heroFamily from "@/assets/family-streaming-internet-connection.webp";
import fiberBg from "@/assets/fiber-optic-network-background.webp";
import workFromHome from "@/assets/work-from-home-internet-connectivity.webp";
import gamerImg from "@/assets/gaming-low-latency-internet.webp";
import smartHomeImg from "@/assets/smart-home-wifi-connectivity.webp";
import fiberOptic from "@/assets/fiber-optic-strands-broadband.webp";
import cableTvImg from "@/assets/cable-tv-entertainment-setup.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apex Global Net — Fast Internet & Cable Connection Assistance" },
      { name: "description", content: "Explore broadband and cable connection options available in your area. Fast request processing, multiple provider options, dedicated support." },
      { property: "og:title", content: "Apex Global Net — Fast Internet & Cable Connection Assistance" },
      { property: "og:description", content: "Explore broadband and cable connection options available in your area." },
    ],
    links: [canonical("/")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }) },
    ],
  }),
  component: Home_,
});

function Home_() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <AvailabilityCheck />
      <WhyChoose />
      <ForEveryNeed />
      <ProcessTimeline />
      <SpeedRecommend />
      <FeatureSplit />
      <PopularOptions />
      <CableTv />
      <SmartHome />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden text-white">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <img src={fiberBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
      <div className="absolute inset-0 bg-navy-deep/40" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-medium tracking-wide uppercase text-cyan-brand">
              <Sparkles className="h-3.5 w-3.5" /> Connection Assistance Made Effortless
            </span>
            <h1 className="mt-6 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
              Fast Internet & Cable Connection Assistance{" "}
              <span className="gradient-text">Made Simple</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              We help you explore broadband and cable connection options available in your location and guide you through the entire request process — from checking availability to staying connected.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#check" className="btn-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold">
                Check Availability <ArrowRight className="h-4 w-4" />
              </a>
              <a href={PHONE_HREF} onClick={() => trackEvent("phone_click", { location: "hero" })} className="btn-ghost-light inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold">
                <Phone className="h-4 w-4" /> Speak to an Expert
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: "Fast Connection Assistance" },
                { icon: Network, label: "Multiple Network Options" },
                { icon: Headphones, label: "Dedicated Customer Support" },
                { icon: FileCheck, label: "Simple Application Process" },
              ].map((t, i) => (
                <Reveal key={t.label} delay={i * 100}>
                  <div className="flex items-start gap-2.5">
                    <div className="h-9 w-9 rounded-xl grid place-items-center bg-white/10 border border-white/15 text-cyan-brand shrink-0">
                      <t.icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs text-white/85 leading-tight pt-1">{t.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-[var(--gradient-cyan)] opacity-30 blur-2xl animate-float" />
            <div className="relative rounded-[28px] overflow-hidden shadow-[var(--shadow-glow)] border border-white/15">
              <img src={heroFamily} alt="Family streaming content at home" width={1600} height={1200} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="relative h-10 w-10 rounded-xl bg-[var(--gradient-cyan)] grid place-items-center">
                <Signal className="h-5 w-5 text-white" />
                <span className="absolute inset-0 rounded-xl ring-2 ring-cyan-brand/50 animate-wifi" />
              </div>
              <div className="leading-tight">
                <div className="text-navy-deep font-semibold text-sm">Signal Strong</div>
                <div className="text-xs text-muted-foreground">1 Gbps ready</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 glass-card rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#00B8FF", "#FF7A00", "#0B1F3A"].map((c) => (
                    <span key={c} className="h-7 w-7 rounded-full ring-2 ring-white" style={{ background: c }} />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="text-navy-deep font-semibold text-xs">12,400+ requests</div>
                  <div className="text-[10px] text-muted-foreground">handled this month</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- AVAILABILITY CHECK ---------------- */
function AvailabilityCheck() {
  return (
    <section id="check" className="relative -mt-16 mb-8 z-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-[28px] bg-white shadow-[var(--shadow-soft)] border border-border p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
                  <Search className="h-4 w-4" /> Availability Checker
                </div>
                <h2 className="mt-2 text-2xl font-bold text-navy-deep">Check broadband options in your area</h2>
                <p className="mt-2 text-sm text-muted-foreground">Enter your details — we'll show you the connection options available at your address.</p>
              </div>
              <form
                className="lg:w-2/3 grid sm:grid-cols-4 gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  trackEvent("form_submit", { form: "availability_check" });
                }}
              >
                <input type="text" placeholder="ZIP Code" className="sm:col-span-1 h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
                <input type="text" placeholder="City" className="sm:col-span-1 h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
                <input type="tel" placeholder="Phone number" className="sm:col-span-1 h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
                <button className="btn-cta sm:col-span-1 h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                  Check Now <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE ---------------- */
function WhyChoose() {
  const items = [
    { icon: Zap, title: "Fast Request Processing", desc: "Your connection request is reviewed and forwarded to available providers without delay." },
    { icon: Network, title: "Multiple Provider Options", desc: "Compare options from multiple networks and choose what fits your address and needs." },
    { icon: Headphones, title: "Dedicated Customer Support", desc: "Real people, real answers — our specialists stay with you from start to finish." },
    { icon: FileCheck, title: "Simple Documentation", desc: "Clear guidance on required documents so your paperwork is never a bottleneck." },
    { icon: Settings2, title: "Flexible Solutions", desc: "Home internet, business connectivity, or gaming — we tailor suggestions to your usage." },
    { icon: Shield, title: "Reliable Assistance", desc: "Consistent follow-through and status updates on every step of your connection." },
  ];
  return (
    <section id="support" className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={workFromHome} alt="Specialist assisting a customer" loading="lazy" className="w-full h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-cyan)] grid place-items-center">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cyan-brand">Trusted Guidance</div>
                  <div className="font-semibold">98% customer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
              <span className="h-px w-8 bg-orange-brand" /> Why Choose Us
            </div>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-navy-deep">A calmer, faster way to get connected</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Six reasons customers trust Apex Global Net with their broadband and cable requests.
            </p>
            <div className="mt-8 space-y-5">
              {items.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-cyan-brand/10 grid place-items-center text-cyan-brand shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-deep">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOR EVERY NEED ---------------- */
function ForEveryNeed() {
  const cards = [
    { img: heroFamily, icon: Home, title: "Home Internet", desc: "Everyday browsing, smart home, and family streaming — comfortably." },
    { img: gamerImg, icon: Gamepad2, title: "Gaming", desc: "Low-latency options built for competitive, cloud, and console gaming." },
    { img: workFromHome, icon: Building2, title: "Business Connectivity", desc: "Reliable uplinks, static IPs, and support tailored to teams." },
    { img: cableTvImg, icon: MonitorPlay, title: "Streaming Entertainment", desc: "4K streaming, sports, and multi-device households without buffering." },
  ];
  return (
    <section id="needs" className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Internet for Every Need" title="One connection. Every kind of life." desc="From spirited weekend gamers to remote-first teams — we help find the fit." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative rounded-3xl overflow-hidden h-80 cursor-pointer">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <div className="h-11 w-11 rounded-xl glass-dark grid place-items-center mb-3">
                    <c.icon className="h-5 w-5 text-cyan-brand" />
                  </div>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS TIMELINE ---------------- */
function ProcessTimeline() {
  const steps = [
    { icon: Search, title: "Check Availability", desc: "Enter your location to see what's available." },
    { icon: CheckCircle2, title: "Choose Preferred Option", desc: "Compare and pick what suits you." },
    { icon: FileCheck, title: "Submit Request", desc: "Share details — we handle the paperwork." },
    { icon: Wrench, title: "Connection Assistance", desc: "We coordinate setup and installation." },
    { icon: Wifi, title: "Stay Connected", desc: "Ongoing support whenever you need it." },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How It Works" title="Five simple steps to a smooth connection" desc="A guided journey, not a phone tree." />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-cyan-brand to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((st, i) => (
              <Reveal key={st.title} delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-16 w-16 rounded-2xl bg-white border-2 border-cyan-brand/30 grid place-items-center shadow-[var(--shadow-soft)]">
                    <st.icon className="h-6 w-6 text-orange-brand" />
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-[var(--gradient-cta)] text-white text-xs font-bold grid place-items-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-deep">{st.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground max-w-[200px]">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
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
    { tag: "Starter", icon: Home, desc: "Ideal for small households and light users — comfortable browsing and streaming." },
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
                  <a href="#check" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep group-hover:text-orange-brand transition-colors">
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
            <a href="#check" className="mt-8 btn-cta inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold">
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

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { n: 85000, s: "+", label: "Happy Customers" },
    { n: 1200, s: "+", label: "Service Areas Covered" },
    { n: 240000, s: "+", label: "Successful Connection Requests" },
    { n: 98, s: "%", label: "Customer Satisfaction" },
  ];
  return (
    <section className="section-pad bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 300px at 50% 0%, color-mix(in oklab, var(--cyan-brand) 30%, transparent), transparent 70%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading dark eyebrow="Impact by the Numbers" title="Trusted by thousands across the country" desc="A snapshot of how much we help — every single week." />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="glass-dark rounded-3xl p-8 text-center">
                <div className="text-5xl lg:text-6xl font-bold font-display gradient-text">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-3 text-sm font-medium text-white/80 uppercase tracking-wider">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const reviews = [
    { name: "Priya S.", role: "Homeowner", text: "The team walked me through every step. I went from confused to connected in a single afternoon — impressive support." },
    { name: "Marcus L.", role: "Small Business Owner", text: "Comparing providers was overwhelming until Apex Global Net helped narrow it down. Setup was quick and stable." },
    { name: "Ava R.", role: "Student", text: "As a student living off-campus, I needed something fast and easy. Their guidance was clear and honest." },
    { name: "Daniel K.", role: "Remote Engineer", text: "Zero pressure, actual expertise. My work-from-home connection has been flawless since." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Real Feedback" title="Customers who love how easy this feels" desc="Honest reviews from people we've helped connect." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <div className="glass-card rounded-3xl p-7 h-full flex flex-col">
                <div className="flex gap-1 text-orange-brand">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm text-navy-deep leading-relaxed flex-1">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-[var(--gradient-cta)] text-white grid place-items-center font-bold">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold text-navy-deep text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "How do I check if broadband is available at my address?", a: "Enter your ZIP code, city, and phone number in our availability checker above. We'll review network coverage in your area and share the options available at your address." },
  { q: "How does the broadband request process work?", a: "Once you pick a preferred option, we help you submit the request, guide you through required documentation, and coordinate the connection setup with the service provider." },
  { q: "Can Apex Global Net help with cable TV connection requests too?", a: "Yes. Alongside broadband, we help you explore cable TV options supported in your area — including regional channels, sports, and entertainment packages." },
  { q: "Do you support business connectivity?", a: "Absolutely. We help small teams and growing businesses explore business-grade uplinks, static IP availability, and dedicated support tailored to their operations." },
  { q: "What documentation is required?", a: "Requirements vary slightly by provider and location, but typically include a valid ID and address proof. Our specialists will walk you through the exact list for your case." },
  { q: "What kind of support can I expect?", a: "Dedicated customer assistance — a real person guiding you from availability check to installation and beyond, with follow-ups throughout the process." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title="Everything you're likely wondering" desc="Common questions we hear from customers exploring broadband and cable options." />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div className={`rounded-2xl border transition-all ${open === i ? "border-cyan-brand/60 bg-white shadow-[var(--shadow-soft)]" : "border-border bg-white"}`}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold text-navy-deep">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-brand transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="pb-24 pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative rounded-[36px] overflow-hidden p-10 lg:p-16 text-white text-center"
            style={{ background: "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 40%, oklch(0.35 0.13 240) 100%)" }}
          >
            <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(500px 300px at 15% 20%, color-mix(in oklab, var(--cyan-brand) 40%, transparent), transparent 60%), radial-gradient(500px 300px at 85% 80%, color-mix(in oklab, var(--orange-brand) 35%, transparent), transparent 60%)" }} />
            <div className="relative max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-medium uppercase tracking-widest text-cyan-brand mb-6">
                <Clock className="h-3.5 w-3.5" /> Response within minutes
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Find the best broadband or cable option <span className="gradient-text">for your location</span>
              </h2>
              <p className="mt-5 text-white/80 text-lg">
                Our specialists are ready to walk you through options available at your address. No pressure. Just clear, honest guidance.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="#check" className="btn-cta inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold">
                  Check Availability <ArrowRight className="h-4 w-4" />
                </a>
                <a href={PHONE_HREF} onClick={() => trackEvent("phone_click", { location: "final_cta" })} className="btn-ghost-light inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
