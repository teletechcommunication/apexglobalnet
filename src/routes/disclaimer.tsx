import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Apex Global Net Connect Assist" },
      { name: "description", content: "Apex Global Net is an independent third-party service provider offering broadband and cable connection assistance." },
      { name: "robots", content: "index,follow" },
    ],
    links: [canonical("/disclaimer")],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <LegalHeader title="Disclaimer" />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
          <p><strong>Apex Global Net is an independent third-party service provider</strong> offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>
          <p>Our role is limited to helping customers explore connection options available in their area and guiding them through the application and setup process. All trademarks, brand names, and logos referenced on this website belong to their respective owners.</p>
          <p>Availability of services, speeds, coverage, channels, and any specific plan details depends solely on the underlying network providers operating in a given location. Apex Global Net does not guarantee availability, uptime, pricing, or any specific outcome related to third-party services.</p>
          <p>Information published on this website is for general awareness purposes only and does not constitute an offer, endorsement, or commercial arrangement with any telecom operator. Customers are advised to independently verify plan details, terms, and conditions with the underlying service provider prior to making any commitment.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export function LegalHeader({ title }: { title: string }) {
  return (
    <section className="pt-40 pb-14 bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 300px at 20% 0%, color-mix(in oklab, var(--cyan-brand) 30%, transparent), transparent 60%)" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
