import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { PHONE_DISPLAY, PHONE_DISPLAY_2 } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(600px 300px at 10% 0%, color-mix(in oklab, var(--cyan-brand) 25%, transparent), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <div className="font-display font-bold text-lg">Apex Global Net</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Connect Assist</div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-sm leading-relaxed">
              We help households and businesses explore broadband and cable connection options available in their location with dedicated guidance from start to finish.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/80">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-brand" /> Toll Free: {PHONE_DISPLAY}</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-cyan-brand" /> Toll Free: {PHONE_DISPLAY_2}</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-cyan-brand" /> hello@apexglobalnet.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-cyan-brand" /> Chandigarh, India</div>
            </div>
            <div className="mt-6 flex gap-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-cyan-brand hover:text-navy-deep transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={[
            { label: "Home", to: "/" },
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "FAQ", href: "/#faq" },
            { label: "Contact", to: "/contact" },
          ]} />

          <FooterCol title="Services" items={[
            { label: "Internet Plans", href: "/services#plans" },
            { label: "Home & Business", href: "/#needs" },
            { label: "Cable TV", href: "/services#cable" },
            { label: "Smart Home", href: "/services#smart-home" },
          ]} />

          <FooterCol title="Legal" items={[
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms & Conditions", to: "/terms" },
            { label: "Refund Policy", to: "/refund" },
            { label: "Disclaimer", to: "/disclaimer" },
            { label: "Contact", to: "/contact" },
          ]} />
        </div>

        <div className="mt-14 rounded-3xl bg-white/5 border border-white/10 p-6 text-xs text-white/60 leading-relaxed">
          <strong className="text-white/80">Disclaimer:</strong> Apex Global Net is an independent third-party service provider offering assistance with broadband and cable connection requests. We are not affiliated with, endorsed by, or representing any internet service provider, cable operator, or telecommunications company. All trademarks, logos, and brand names mentioned belong to their respective owners. Our role is limited to helping customers explore available options and guiding them through the application process.
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Apex Global Net Connect Assist. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to?: string; href?: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">{title}</h3>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            {i.to ? (
              <Link to={i.to} className="text-white/70 hover:text-cyan-brand transition-colors">{i.label}</Link>
            ) : (
              <a href={i.href} className="text-white/70 hover:text-cyan-brand transition-colors">{i.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
