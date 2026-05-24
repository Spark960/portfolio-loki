"use client";

import { useEffect } from "react";
import type { Project } from "@/lib/projects";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Brutalist Backdrop: Solid black, mostly opaque */}
      <div 
        className="absolute inset-0 bg-black/80 transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div className="relative z-10 flex h-full w-full md:w-[600px] flex-col overflow-hidden bg-bg border-l-[3px] border-accent animate-[slideInRight_300ms_ease-out_both] shadow-[-20px_0_50px_rgba(232,255,0,0.05)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b-[2px] border-border p-6 md:p-8 bg-surface">
          <div className="flex flex-col gap-1">
            <span className="font-display text-xl font-bold text-accent uppercase tracking-widest">
              Project // {project.number}
            </span>
            <h3 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center border-[2px] border-border bg-bg text-text transition-all hover:border-accent hover:text-accent hover:shadow-[4px_4px_0px_var(--accent)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mb-10">
            <h4 className="font-display text-xs font-bold uppercase text-muted mb-3 border-b border-border pb-2">Outcome</h4>
            <p className="text-lg leading-relaxed text-text">
              {project.outcome}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h4 className="font-display text-xs font-bold uppercase text-muted mb-4 border-b border-border pb-2">
                Proof Points
              </h4>
              <ul className="space-y-4 text-base leading-relaxed text-muted-strong">
                {project.proof.map((item) => (
                  <li className="flex gap-4 items-start" key={item}>
                    <span className="mt-2 h-2 w-2 shrink-0 bg-accent rounded-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h4 className="font-display text-xs font-bold uppercase text-muted mb-4 border-b border-border pb-2">
                  Metrics
                </h4>
                <div className="flex flex-col gap-3">
                  {project.metrics.map((metric) => (
                    <span
                      className="border border-border bg-surface px-3 py-2 font-display text-xs font-bold uppercase text-text"
                      key={metric}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-display text-xs font-bold uppercase text-muted mb-4 border-b border-border pb-2">
                  Role
                </h4>
                <p className="text-sm leading-6 text-muted-strong">{project.role}</p>
              </div>
            </div>

            <div>
              <h4 className="font-display text-xs font-bold uppercase text-muted mb-4 border-b border-border pb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="bg-text text-bg px-3 py-1 font-display text-xs font-bold uppercase tracking-wide"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Links */}
        <div className="border-t-[2px] border-border bg-surface p-6 md:p-8 flex gap-4">
          {project.links.map((link) =>
            link.href ? (
              <a
                className="focus-ring flex-1 inline-flex min-h-[52px] cursor-pointer items-center justify-center border-[2px] border-accent bg-transparent font-display text-sm font-bold uppercase text-accent brutalist-button"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <span
                className="flex-1 inline-flex min-h-[52px] items-center justify-center border-[2px] border-border bg-bg font-display text-sm font-bold uppercase text-muted cursor-not-allowed"
                key={link.label}
              >
                {link.label}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
