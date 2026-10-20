import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Apex Global Net Connect Assist" },
      { name: "description", content: "Terms governing the use of the Apex Global Net website and connection assistance services." },
    ],
    links: [canonical("/terms")],
  }),
  component: () => (
    <LegalPage title="Terms & Conditions" intro="The terms that apply when you use our website and services.">
      <p>By using this website, you agree to the following terms. Apex Global Net is an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company.</p>

      <h2>General Guidance</h2>
      <p>All information provided is for general guidance. Availability, speeds, pricing and other specifics are determined by the underlying network provider serving your location. Any commitment or contract you enter into is directly with that provider.</p>

      <h2>Accurate Information</h2>
      <p>You agree to provide accurate information when submitting a connection request. Apex Global Net is not responsible for outcomes based on inaccurate information supplied by the customer.</p>

      <h2>Intellectual Property</h2>
      <p>Content, illustrations, and branding on this website are the property of Apex Global Net unless otherwise indicated. Trademarks referenced belong to their respective owners.</p>
    </LegalPage>
  ),
});
