"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="section" id="projects">
      <div className="page-shell">
        <p className="section-label">Selected Work</p>
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-none">
            Proof beats polish. These shipped.
          </h2>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
          {projects.map((project) => (
            <ProjectCard 
              key={project.number} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
