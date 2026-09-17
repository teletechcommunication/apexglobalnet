import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { canonical, breadcrumbSchema, PHONE_DISPLAY, PHONE_DISPLAY_2 } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apex Global Net Connect Assist" },
      { name: "description", content: "Get in touch with our team for help exploring broadband and cable connection options in your area." },
    ],
    links: [canonical("/contact")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ])) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="pt-40 pb-16 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 300px at 20% 0%, color-mix(in oklab, var(--cyan-brand) 30%, transparent), transparent 60%)" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">We're here to help you explore the right broadband or cable connection for your address.</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Toll Free", value: PHONE_DISPLAY },
              { icon: Phone, title: "Toll Free", value: PHONE_DISPLAY_2 },
              { icon: Mail, title: "Email", value: "hello@apexglobalnet.com" },
              { icon: MapPin, title: "Chandigarh Office", value: "Chandigarh, India" },
            ].map((c) => (
              <div key={`${c.title}-${c.value}`} className="flex items-center gap-4 rounded-2xl bg-surface border border-border p-5">
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-cyan)] grid place-items-center text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
                  <div className="font-semibold text-navy-deep">{c.value}</div>
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground leading-relaxed pt-4">
              Apex Global Net is an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.
            </p>
          </div>
          <form
            className="rounded-3xl bg-white border border-border p-8 space-y-4 shadow-[var(--shadow-soft)]"
            onSubmit={(e) => {
              e.preventDefault();
              trackEvent("form_submit", { form: "contact" });
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full name" className="h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
              <input placeholder="Phone number" className="h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
            </div>
            <input placeholder="Email address" className="w-full h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
            <input placeholder="ZIP code" className="w-full h-12 px-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
            <textarea placeholder="How can we help?" rows={5} className="w-full p-4 rounded-xl border border-input bg-surface focus:outline-none focus:ring-2 focus:ring-cyan-brand/40" />
            <button className="btn-cta w-full h-12 rounded-xl font-semibold">Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
