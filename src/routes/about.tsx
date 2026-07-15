import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles, Target, Users } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { canonical, breadcrumbSchema } from "@/lib/site";

import fiberBg from "@/assets/fiber-optic-network-background.webp";
import workFromHome from "@/assets/work-from-home-internet-connectivity.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Apex Global Net" },
      { name: "description", content: "Learn who Apex Global Net is and how we help households and businesses explore broadband and cable connection options." },
    ],
    links: [canonical("/about")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])) },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <AboutHero />
      <Mission />
      <Values />
      <Stats />
      <Footer />
    </div>
  );
}

function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-navy-deep text-white overflow-hidden">
      <img src={fiberBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
      <div className="absolute inset-0 bg-navy-deep/50" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-medium tracking-wide uppercase text-cyan-brand">
            <Sparkles className="h-3.5 w-3.5" /> About Apex Global Net
          </span>
          <h1 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Making broadband decisions <span className="gradient-text">simple, not stressful</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            We're a dedicated connection-assistance team helping households and businesses compare broadband and cable options available in their area — without the runaround.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={workFromHome} alt="Team supporting a customer" loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/50 via-transparent to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-orange-brand">
              <Target className="h-4 w-4" /> Our Mission
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-deep">Cut through the confusion of getting connected</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Shopping for internet or cable shouldn't mean hours on hold or confusing paperwork. Apex Global Net was built to give people a single, honest place to check what's available at their address and get guided support from request to installation.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're an independent assistance service — not tied to a single provider — so our only job is helping you find the option that actually fits your home or business.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  const items = [
    { icon: Heart, title: "Customer First", desc: "Every recommendation starts with what actually fits your household or business, not a sales quota." },
    { icon: ShieldCheck, title: "Honest Guidance", desc: "Clear answers about availability, process, and timelines — no surprises along the way." },
    { icon: Users, title: "Real Support", desc: "A dedicated specialist stays with your request from availability check through installation." },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What We Stand For" title="The values behind every request we handle" desc="Simple principles that shape how we work with every customer." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="h-full rounded-3xl bg-white border border-border p-8 hover:border-cyan-brand/60 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_20px_-10px_rgba(11,31,58,0.1)]">
                <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-cyan)] grid place-items-center text-white shadow-[var(--shadow-glow)]">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-deep">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
