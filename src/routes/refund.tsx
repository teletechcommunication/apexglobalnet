import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
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
    <LegalPage title="Refund Policy" intro="How refund requests are handled.">
      <p>Apex Global Net offers assistance services for broadband and cable connection requests.</p>

      <h2>Provider Plans and Charges</h2>
      <p>Any refund inquiries related to third-party provider plans, installation charges, or subscription fees must be addressed directly with the underlying service provider, as Apex Global Net does not collect payments on their behalf.</p>

      <h2>Payments Made to Us</h2>
      <p>If you have paid Apex Global Net directly for an assistance service and wish to request a refund, please contact us <strong>within 7 days</strong> of the transaction. Each request is reviewed on a case-by-case basis.</p>

      <h2>Our Role</h2>
      <p>Apex Global Net is an independent third-party service provider and is not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>
    </LegalPage>
  ),
});
