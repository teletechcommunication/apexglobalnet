import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LegalHeader } from "./disclaimer";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Apex Global Net Connect Assist" },
      { name: "description", content: "Terms and conditions governing use of Apex Global Net's broadband and cable connection assistance services." },
    ],
    links: [canonical("/terms")],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Nav />
      <LegalHeader title="Terms & Conditions" />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>By using this website, you agree to the following terms. Apex Global Net is an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>
          <p>All information provided is for general guidance. Availability, speeds, pricing and other specifics are determined by the underlying network provider serving your location. Any commitment or contract you enter into is directly with that provider.</p>
          <p>You agree to provide accurate information when submitting a connection request. Apex Global Net is not responsible for outcomes based on inaccurate information supplied by the customer.</p>
          <p>Content, illustrations, and branding on this website are the property of Apex Global Net unless otherwise indicated. Trademarks referenced belong to their respective owners.</p>
        </div>
      </section>
      <Footer />
    </div>
  ),
});
