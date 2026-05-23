import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`group flex min-h-[520px] flex-col border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent md:p-8 ${
        project.featured
          ? "md:flex-[1_1_100%]"
          : "md:flex-[1_1_calc(50%-10px)]"
      }`}
    >
      <div className="mb-10 flex items-start justify-between gap-5">
        <p className="font-display text-[clamp(3.2rem,8vw,6rem)] font-bold leading-none text-muted transition-colors duration-200 group-hover:text-accent">
          {project.number}
        </p>
        <div className="flex flex-wrap justify-end gap-2">
          {project.metrics.map((metric) => (
            <span
              className="border border-border bg-bg px-3 py-2 font-display text-xs font-bold uppercase text-muted-strong"
              key={metric}
            >
              {metric}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="max-w-3xl font-display text-[clamp(2rem,4vw,3.6rem)] font-bold leading-none">
          {project.name}
        </h3>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-strong">
          {project.outcome}
        </p>
      </div>

      <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
        {project.proof.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <p className="font-display text-xs font-bold uppercase text-muted">
          Role
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-strong">{project.role}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="border border-border px-3 py-2 font-display text-xs font-bold uppercase text-muted"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4 pt-9">
        {project.links.map((link) =>
          link.href ? (
            <a
              className="focus-ring inline-flex min-h-11 cursor-pointer items-center font-display text-sm font-bold uppercase text-text transition-colors duration-200 hover:text-accent"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ) : (
            <span
              className="font-display text-sm font-bold uppercase text-muted"
              key={link.label}
            >
              {link.label}
            </span>
          ),
        )}
      </div>
    </article>
  );
}
