"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export function ContactDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText("lokeshparasa50@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[999999] flex justify-end bg-bg/90 backdrop-blur-sm">
      <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />
      
      <div className="relative z-10 flex h-full w-full md:w-[480px] flex-col justify-center overflow-y-auto border-l-[2px] border-accent bg-bg p-8 md:p-12 shadow-[-20px_0_50px_rgba(232,255,0,0.1)] animate-[slideInRight_300ms_ease-out_both]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-6 top-6 font-display text-xs font-bold uppercase text-muted hover:text-accent transition-colors"
        >
          [ CLOSE ]
        </button>
        
        <h3 className="mb-4 font-display text-xs font-bold uppercase text-accent tracking-widest">
          Start a Conversation
        </h3>
        
        <p className="font-display text-[clamp(1.2rem,4vw,1.8rem)] font-bold leading-tight text-text mb-10 break-words selection:bg-accent selection:text-bg">
          lokeshparasa50@gmail.com
        </p>

        <div className="flex flex-col gap-4 mb-10 border-b border-border pb-10">
          <button
            onClick={handleCopy}
            className={`focus-ring inline-flex min-h-[60px] justify-center items-center border-[2px] font-display text-sm font-bold uppercase transition-all duration-200 ${
              copied 
                ? "border-accent bg-accent text-bg" 
                : "border-accent bg-transparent text-accent hover:bg-accent hover:text-bg"
            }`}
          >
            {copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}
          </button>
          <a
            href="mailto:lokeshparasa50@gmail.com"
            className="focus-ring inline-flex min-h-[60px] justify-center items-center border-[2px] border-accent bg-transparent font-display text-sm font-bold uppercase text-accent transition-all duration-200 hover:bg-accent hover:text-bg"
          >
            OPEN MAIL APP
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-display text-xs font-bold uppercase text-muted tracking-widest">Professional Network</span>
          <a
            href="https://www.linkedin.com/in/lokesh-parasa-66698631a/"
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex h-12 px-6 items-center justify-center border-[2px] border-border bg-surface font-display text-xs font-bold uppercase tracking-widest text-text hover:border-accent hover:text-accent transition-colors"
          >
            LINKEDIN ↗
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block w-full sm:w-auto">
        {children}
      </div>
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
