"use client";

export function GridBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1]"
    >
      <div 
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--muted-strong) 1.5px, transparent 1.5px)`,
          backgroundSize: "36px 36px",
          animation: "pan 120s linear infinite",
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pan {
          0% { background-position: 0 0; }
          100% { background-position: -1280px 1280px; }
        }
      `}} />
      {/* Soft gradient mask to fade the grid out slightly towards the bottom if desired, or keep it stark. Brutalism favors stark, so we'll keep the mask very subtle. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg/80" />
    </div>
  );
}
