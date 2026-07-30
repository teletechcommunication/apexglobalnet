import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "FAQ", hash: "/#faq" },
  { label: "Contact", to: "/contact" },
];

export function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolled = solid || scrolledPast;
  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolledPast(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[0_4px_20px_-8px_rgba(11,31,58,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="leading-tight">
            <div className={`font-display font-bold text-lg ${scrolled ? "text-navy-deep" : "text-white"}`}>Apex Global Net</div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>Connect Assist</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled ? "text-navy-deep hover:text-orange-brand" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.hash}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled ? "text-navy-deep hover:text-orange-brand" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#check"
            className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
              scrolled
                ? "bg-navy text-white hover:bg-navy-deep"
                : "btn-ghost-light"
            }`}
          >
            Check Availability
          </a>
          <a
            href={PHONE_HREF}
            onClick={() => trackEvent("phone_click", { location: "nav" })}
            className="btn-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            <Phone className="h-4 w-4" /> Call Now: {PHONE_DISPLAY}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-navy-deep" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) =>
              l.to ? (
                <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="px-3 py-2.5 text-navy-deep font-medium rounded-lg hover:bg-muted">
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.hash} onClick={() => setOpen(false)} className="px-3 py-2.5 text-navy-deep font-medium rounded-lg hover:bg-muted">
                  {l.label}
                </a>
              )
            )}
            <div className="flex gap-2 pt-3">
              <a href="#check" onClick={() => setOpen(false)} className="flex-1 text-center px-4 py-2.5 rounded-full bg-navy text-white text-sm font-semibold">Check Availability</a>
              <a href={PHONE_HREF} onClick={() => trackEvent("phone_click", { location: "nav_mobile" })} className="flex-1 text-center btn-cta px-4 py-2.5 rounded-full text-sm font-semibold">Call Now: {PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
