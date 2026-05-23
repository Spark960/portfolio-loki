import { proofMetrics } from "@/lib/projects";

const contactHref = "mailto:your@email.com";

export function Hero() {
  return (
    <section className="min-h-screen border-b border-border">
      <div className="page-shell flex min-h-screen flex-col justify-end pb-10 pt-8 md:pb-14">
        <p className="mb-7 font-display text-sm font-bold uppercase text-muted">
          Lokesh · BTech @ MIT Manipal · Full-Stack & AI Systems
        </p>
        <div className="max-w-4xl">
          <h1 className="animate-[fadeUp_500ms_ease-out_both] font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight">
            Second-year undergrad.
            <br />
            Shipping real systems.
          </h1>
          <p className="mt-6 max-w-2xl animate-[fadeUp_500ms_ease-out_120ms_both] text-lg leading-relaxed text-muted-strong md:text-xl md:leading-8">
            Full-stack and AI systems builder working on ticketing infrastructure,
            cross-college platforms, and multimodal evaluation tooling.
          </p>
          <div className="mt-10 flex animate-[fadeUp_500ms_ease-out_220ms_both] flex-col sm:flex-row sm:items-center gap-4">
            <a
              className="focus-ring inline-flex min-h-12 w-full sm:w-auto justify-center cursor-pointer items-center rounded bg-accent px-6 py-3 font-display text-sm font-bold uppercase text-bg transition-all duration-300 hover:bg-transparent hover:text-accent border border-accent hover:shadow-[0_0_15px_rgba(232,255,0,0.3)]"
              href="#projects"
            >
              See Work
            </a>
            <a
              className="focus-ring inline-flex min-h-12 w-full sm:w-auto justify-center cursor-pointer items-center rounded border border-border bg-surface px-6 py-3 font-display text-sm font-bold uppercase text-text transition-all duration-300 hover:border-accent hover:text-accent hover:bg-surface-strong"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="focus-ring inline-flex min-h-12 w-full sm:w-auto justify-center cursor-pointer items-center px-4 py-3 font-display text-sm font-bold uppercase text-muted transition-colors duration-200 hover:text-accent"
              href={contactHref}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-14 flex animate-[fadeUp_500ms_ease-out_320ms_both] flex-col border-y border-border md:flex-row">
          {proofMetrics.map((metric) => (
            <div
              className="flex-1 border-b border-border py-4 font-display text-sm font-bold uppercase text-muted-strong md:border-b-0 md:border-r md:px-5 first:md:pl-0 last:md:border-r-0"
              key={metric}
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
