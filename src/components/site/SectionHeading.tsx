import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, desc, dark = false }: { eyebrow: string; title: string; desc: string; dark?: boolean }) {
  return (
    <Reveal>
      <div className="max-w-2xl mx-auto text-center">
        <div className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest ${dark ? "text-cyan-brand" : "text-orange-brand"}`}>
          <span className={`h-px w-8 ${dark ? "bg-cyan-brand" : "bg-orange-brand"}`} /> {eyebrow}
        </div>
        <h2 className={`mt-4 text-3xl lg:text-4xl font-bold ${dark ? "text-white" : "text-navy-deep"}`}>{title}</h2>
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{desc}</p>
      </div>
    </Reveal>
  );
}
