import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LegalHeader } from "./disclaimer";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Apex Global Net Connect Assist" },
      { name: "description", content: "How Apex Global Net collects, uses, and protects your information when you request broadband or cable connection assistance." },
    ],
    links: [canonical("/privacy")],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Nav />
      <LegalHeader title="Privacy Policy" />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>This Privacy Policy explains how Apex Global Net collects, uses, and protects information you share while requesting broadband or cable connection assistance.</p>
          <p><strong className="text-navy-deep">Information we collect:</strong> Name, contact details, ZIP code, and city information you voluntarily provide through our availability checker or contact forms.</p>
          <p><strong className="text-navy-deep">How we use it:</strong> To help you explore broadband and cable connection options available in your area and to communicate updates about your request.</p>
          <p><strong className="text-navy-deep">Data sharing:</strong> We share the minimum information necessary with underlying service providers you choose to explore. We do not sell your personal data.</p>
          <p><strong className="text-navy-deep">Your rights:</strong> You may request access, correction, or deletion of your personal information at any time by contacting us.</p>
        </div>
      </section>
      <Footer />
    </div>
  ),
});
