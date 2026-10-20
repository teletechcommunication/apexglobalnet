import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
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
    <LegalPage title="Privacy Policy" intro="How we collect, use, and protect the information you share with us.">
      <p>This Privacy Policy explains how Apex Global Net collects, uses, and protects information you share while requesting broadband or cable connection assistance.</p>

      <h2>Information We Collect</h2>
      <p>Name, contact details, ZIP code, and city information you voluntarily provide through our availability checker or contact forms.</p>

      <h2>How We Use It</h2>
      <p>To help you explore broadband and cable connection options available in your area and to communicate updates about your request.</p>

      <h2>Data Sharing</h2>
      <p>We share the minimum information necessary with underlying service providers you choose to explore. <strong>We do not sell your personal data.</strong></p>

      <h2>Your Rights</h2>
      <p>You may request access, correction, or deletion of your personal information at any time by contacting us.</p>
    </LegalPage>
  ),
});
