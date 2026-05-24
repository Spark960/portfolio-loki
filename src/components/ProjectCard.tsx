import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className={`group flex min-h-[360px] flex-col border border-border bg-surface p-6 cursor-pointer brutalist-card-hover md:p-8 ${
        project.featured
          ? "md:flex-[1_1_100%]"
          : "md:flex-[1_1_calc(50%-10px)]"
      }`}
    >
      <div className="mb-8 flex items-start justify-between gap-5">
        <p className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-none text-muted transition-colors duration-200 group-hover:text-accent">
          {project.number}
        </p>
        <div className="flex flex-wrap justify-end gap-2">
          {project.metrics.slice(0, 2).map((metric) => (
            <span
              className="border border-border bg-bg px-3 py-1 font-display text-xs font-bold uppercase text-muted-strong"
              key={metric}
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="max-w-3xl font-display text-[clamp(1.5rem,3vw,2.4rem)] font-bold leading-tight group-hover:text-text transition-colors duration-300">
          {project.name}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted line-clamp-3">
          {project.outcome}
        </p>
      </div>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center justify-between border-t border-border pt-6">
        <div className="flex flex-wrap gap-3">
          {project.stack.slice(0, 3).map((item) => (
            <span key={item} className="text-xs font-bold uppercase text-muted-strong">
              {item}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs font-bold uppercase text-muted">+{project.stack.length - 3}</span>
          )}
        </div>
        <span className="font-display text-sm font-bold uppercase text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center gap-2">
          View Details
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </article>
  );
}
