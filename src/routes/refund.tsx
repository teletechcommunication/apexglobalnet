import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { LegalHeader } from "./disclaimer";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Apex Global Net Connect Assist" },
      { name: "description", content: "Refund policy for services offered by Apex Global Net Connect Assist." },
    ],
    links: [canonical("/refund")],
  }),
  component: () => (
    <div className="min-h-screen bg-background">
      <Nav />
      <LegalHeader title="Refund Policy" />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>Apex Global Net offers assistance services for broadband and cable connection requests. Any refund inquiries related to third-party provider plans, installation charges, or subscription fees must be addressed directly with the underlying service provider, as Apex Global Net does not collect payments on their behalf.</p>
          <p>If you have paid Apex Global Net directly for an assistance service and wish to request a refund, please contact us within 7 days of the transaction. Each request is reviewed on a case-by-case basis.</p>
          <p>Apex Global Net is an independent third-party service provider and is not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>
        </div>
      </section>
      <Footer />
    </div>
  ),
});
