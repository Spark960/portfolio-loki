export function About() {
  return (
    <section className="section" id="about">
      <div className="page-shell">
        <p className="section-label">About</p>
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <div className="md:flex-[2]">
            <h2 className="max-w-3xl font-display text-[clamp(2.3rem,5vw,4.8rem)] font-bold leading-none">
              I build web infrastructure and AI tooling that people actually use.
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-muted-strong">
              <p>
                I&apos;m Lokesh, a second-year Computer and Communication
                Engineering student at MIT Manipal.
              </p>
              <p>
                At E-Cell MIT Manipal, I&apos;ve worked on systems for events,
                submissions, payments, and cross-college coordination.
              </p>
              <p>
                My current focus is full-stack product engineering and AI
                evaluation systems that work under real constraints.
              </p>
            </div>
          </div>
          <div className="border border-border bg-surface p-6 md:flex-1 md:p-8">
            <StackGroup
              label="Daily"
              items={["Next.js", "React", "FastAPI", "Supabase", "Python", "Java"]}
            />
            <StackGroup
              label="AI Systems"
              items={["Local LLMs", "Multimodal evals", "Ollama", "SSE", "Agents"]}
            />
            <StackGroup
              label="Close to Metal"
              items={["Node.js", "TypeScript", "C", "DSA"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StackGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0">
      <p className="font-display text-xs font-bold uppercase text-muted">{label}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            className="border border-border bg-bg px-3 py-2 font-display text-xs font-bold uppercase text-muted-strong"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
