import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Refund Policy", to: "/refund" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Advertising Disclosure", to: "/advertising-disclosure" },
] as const;

const BODY_STYLES = [
  "text-[15.5px] leading-relaxed text-muted-foreground",
  "[&_h2]:font-display [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-navy-deep [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-3 [&_h2]:border-b [&_h2]:border-border [&_h2:first-child]:mt-0",
  "[&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-navy-deep [&_h3]:mt-6 [&_h3]:mb-2",
  "[&_p]:mb-4",
  "[&_strong]:text-navy-deep [&_strong]:font-semibold",
  "[&_ul]:my-4 [&_ul]:space-y-2.5 [&_ul]:pl-0",
  "[&_li]:relative [&_li]:pl-6 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-1 [&_li]:before:top-[0.65em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-cyan-brand",
  "[&_a]:text-orange-deep [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2",
].join(" ");

export function LegalPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface">
      <Nav />
      <section className="pt-40 pb-16 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(600px 300px at 20% 0%, color-mix(in oklab, var(--cyan-brand) 30%, transparent), transparent 60%)" }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-cyan-brand">Legal</div>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold">{title}</h1>
          {intro && <p className="mt-4 text-white/75 max-w-2xl mx-auto">{intro}</p>}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 lg:grid-cols-[220px_1fr] items-start">
          <aside className="hidden lg:block sticky top-28">
            <div className="text-xs font-semibold uppercase tracking-widest text-navy-deep mb-3">Legal</div>
            <ul className="space-y-1 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    activeProps={{ className: "bg-white text-navy-deep font-semibold shadow-sm border-border" }}
                    className="block rounded-lg border border-transparent px-3 py-2 text-muted-foreground hover:text-navy-deep transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0">
            <article className={`rounded-3xl bg-white border border-border shadow-sm p-6 sm:p-10 ${BODY_STYLES}`}>
              {children}
            </article>

            <div className="mt-6 rounded-3xl bg-navy-deep text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <div className="font-display font-semibold text-lg">Questions about this page?</div>
                <p className="text-sm text-white/70 mt-1">Our team is happy to help.</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2 text-sm">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-cyan-brand"><Phone className="h-4 w-4 text-cyan-brand" /> {PHONE_DISPLAY}</a>
                <a href="mailto:hello@apexglobalnet.com" className="inline-flex items-center gap-2 hover:text-cyan-brand"><Mail className="h-4 w-4 text-cyan-brand" /> hello@apexglobalnet.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
