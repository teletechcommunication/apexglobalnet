import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
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
  component: () => (
    <LegalPage title="Disclaimer" intro="Please read this notice about our role and the limits of our services.">
      <p><strong>Apex Global Net is an independent third-party service provider</strong> offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>

      <h2>Our Role</h2>
      <p>Our role is limited to helping customers explore connection options available in their area and guiding them through the application and setup process. All trademarks, brand names, and logos referenced on this website belong to their respective owners.</p>

      <h2>Availability and Pricing</h2>
      <p>Availability of services, speeds, coverage, channels, and any specific plan details depends solely on the underlying network providers operating in a given location. Apex Global Net does not guarantee availability, uptime, pricing, or any specific outcome related to third-party services.</p>

      <h2>General Information Only</h2>
      <p>Information published on this website is for general awareness purposes only and does not constitute an offer, endorsement, or commercial arrangement with any telecom operator. Customers are advised to independently verify plan details, terms, and conditions with the underlying service provider prior to making any commitment.</p>
    </LegalPage>
  ),
});
