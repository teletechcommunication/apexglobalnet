import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { canonical, PHONE_DISPLAY } from "@/lib/site";
import { LegalHeader } from "./disclaimer";

export const Route = createFileRoute("/advertising-disclosure")({
  head: () => ({
    meta: [
      { title: "Advertising Disclosure — Apex Global Net Connect Assist" },
      { name: "description", content: "How Apex Global Net advertises, how we are compensated, and what our role is as an independent third-party connection assistance service." },
      { name: "robots", content: "index,follow" },
    ],
    links: [canonical("/advertising-disclosure")],
  }),
  component: AdvertisingDisclosurePage,
});

function AdvertisingDisclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <LegalHeader title="Advertising Disclosure" />
      <section className="section-pad">
        <div className="mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
          <p>This page explains who we are, how our advertising works, and how Apex Global Net Connect Assist earns revenue. We want you to know exactly what to expect before you contact us or submit a request.</p>

          <h2>1. Who We Are</h2>
          <p><strong>Apex Global Net is an independent third-party service.</strong> We help households and businesses find broadband and cable connection options at their address and guide them through the request and setup process from start to finish.</p>
          <p>We are <strong>not</strong> an internet service provider, cable operator, or telecommunications carrier. We do not own or operate any network, and we do not install, maintain, or repair service lines or equipment.</p>

          <h2>2. Our Relationship With Providers</h2>
          <p>We are not owned by, affiliated with, or endorsed by any internet or cable provider. Provider names, logos, and trademarks that appear on this website or in our ads belong to their respective owners and are used only to identify the services being discussed. Their appearance does not mean that provider sponsors or endorses us, that we speak for them, or that we have an exclusive arrangement with them.</p>

          <h2>3. How We Are Compensated</h2>
          <p>Our assistance is free to you. We may earn a commission or referral fee from a service provider or its authorized partners when a customer we help completes a sign-up for that provider's service.</p>
          <ul>
            <li>Compensation is paid by the provider, never by you.</li>
            <li>It does not increase the price of your plan or add any charge to your monthly bill.</li>
            <li>Plan pricing is set entirely by the provider.</li>
            <li>You will not receive a bill or fee from Apex Global Net for using our guidance services.</li>
          </ul>

          <h2>4. How We Advertise</h2>
          <p>We pay to run advertisements on search engines, social platforms, and other digital networks so that people looking for internet or cable options can find us. These ads are aimed at people who want to:</p>
          <ul>
            <li>Check which internet or cable services are available at a given address or ZIP code</li>
            <li>Compare options when moving to a new home or setting up an office</li>
            <li>Explore broadband, cable TV, or bundled connection options</li>
          </ul>
          <p>Our ads are <strong>not</strong> meant to reach people who are trying to contact their current provider for customer support, technical help, billing questions, account changes, or cancellations. If that is what you need, please contact your provider directly. Our phone number is not a provider's support line.</p>
          <p>Our ads and landing pages are written to make clear that Apex Global Net is an independent assistance service and not the provider itself.</p>

          <h2>5. Plan and Pricing Information</h2>
          <p>Any plan details, speeds, or prices mentioned on our website or in our ads are general and for information only. They come from what providers publish and can change without notice. Actual availability, speeds, taxes, fees, equipment charges, promotions, and contract terms depend on your address and on the provider, and may differ from what you see here. Please confirm all details with the provider before you commit to a plan.</p>

          <h2>6. What We Do and Don't Do</h2>
          <p><strong>We do:</strong></p>
          <ul>
            <li>Help you explore connection options available at your location</li>
            <li>Answer general questions about plan types and features</li>
            <li>Guide you through the request and setup process</li>
          </ul>
          <p><strong>We do not:</strong></p>
          <ul>
            <li>Provide internet, TV, or phone service ourselves</li>
            <li>Handle billing or payments for your provider account after sign-up</li>
            <li>Offer technical support for active services</li>
            <li>Guarantee availability, speeds, pricing, or service quality</li>
          </ul>

          <h2>7. Trademarks</h2>
          <p>All third-party names, logos, and brands referenced on this website are the property of their respective owners. They are used for identification purposes only and do not imply any partnership or endorsement.</p>

          <h2>8. Changes to This Disclosure</h2>
          <p>We may update this page when our advertising practices, partners, or legal requirements change. The version posted on this page is always the current one, so please check back from time to time.</p>

          <h2>9. Questions</h2>
          <p>If you have questions about our advertising or how we are compensated, contact us:</p>
          <ul>
            <li>Apex Global Net Connect Assist, Chandigarh, India</li>
            <li>Email: hello@apexglobalnet.com</li>
            <li>Toll Free: {PHONE_DISPLAY}</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
