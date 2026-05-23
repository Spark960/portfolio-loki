import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section className="section border-b border-border" id="projects">
      <div className="page-shell">
        <p className="section-label">Selected Work</p>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-none">
            Proof beats polish. These shipped.
          </h2>
          <p className="max-w-md text-base leading-7 text-muted">
            Three systems, each chosen for operational reality: users, institutions,
            payments, streams, and constraints.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
