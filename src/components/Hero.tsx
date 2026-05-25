"use client";

import { TypeAnimation } from 'react-type-animation';
import { proofMetrics } from "@/lib/projects";
import { ContactDialog } from "@/components/ContactDialog";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <header className="page-shell flex justify-between items-center py-6 md:py-8 w-full">
        <span className="font-display font-bold text-accent text-xl">L.</span>
        <div className="flex gap-6">
          <a 
            href="https://github.com/Spark960" 
            target="_blank" 
            rel="noreferrer" 
            className="font-display text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/lokesh-parasa-66698631a/" 
            target="_blank" 
            rel="noreferrer" 
            className="font-display text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </header>
      <div className="page-shell flex-1 flex flex-col justify-end pb-10 md:pb-14 w-full">
        <div className="max-w-4xl">
          <h1 className="animate-[fadeUp_500ms_ease-out_both] font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight min-h-[120px] sm:min-h-0">
            <TypeAnimation
              sequence={[
                'Second-year undergrad.',
                1500,
                'Full-stack developer.',
                1500,
                'AI Integrator.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <br />
            Shipping real systems.
          </h1>
          <p className="mt-6 max-w-2xl animate-[fadeUp_500ms_ease-out_120ms_both] text-lg leading-relaxed text-muted-strong md:text-xl md:leading-8">
            Hi, I&apos;m Lokesh, a 2nd year CS student at MIT Manipal building scalable web platforms,robust backend infrastructure, and multimodal AI systems.
          </p>
          <div className="mt-10 flex animate-[fadeUp_500ms_ease-out_220ms_both] flex-col sm:flex-row sm:items-center gap-4">
            <a
              className="focus-ring inline-flex min-h-[52px] w-full sm:w-auto justify-center cursor-pointer items-center border-[2px] border-accent bg-transparent px-8 font-display text-sm font-bold uppercase text-accent brutalist-button"
              href="#projects"
            >
              See Work
            </a>
            <a
              className="focus-ring inline-flex min-h-[52px] w-full sm:w-auto justify-center cursor-pointer items-center border-[2px] border-border bg-surface px-8 font-display text-sm font-bold uppercase text-text brutalist-button"
              href="https://drive.google.com/file/d/1a0xeFUNWwuBknHYx0w5XAL2WT2o7tjBN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <ContactDialog>
              <button className="focus-ring inline-flex min-h-[52px] w-full sm:w-auto justify-center cursor-pointer items-center px-4 font-display text-sm font-bold uppercase text-muted transition-colors duration-200 hover:text-accent border-[2px] border-transparent">
                Contact
              </button>
            </ContactDialog>
          </div>
        </div>
        <div className="mt-14 pt-8 animate-[fadeUp_500ms_ease-out_320ms_both]">
          <h2 className="mb-6 font-display text-xs font-bold uppercase text-muted tracking-wider">
            Scale & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {proofMetrics.map((metric) => (
              <div
                className="flex flex-col gap-2 p-5 border border-border bg-surface transition-colors duration-300 hover:border-accent hover:bg-surface-strong"
                key={metric.label}
              >
                <span className="font-display text-4xl font-bold text-accent">
                  {metric.value}
                </span>
                <span className="font-display text-sm font-bold uppercase text-text">
                  {metric.label}
                </span>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
