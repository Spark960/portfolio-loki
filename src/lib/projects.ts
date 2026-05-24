export type ProjectLink = {
  label: string;
  href?: string;
};

export type Project = {
  number: string;
  name: string;
  outcome: string;
  role: string;
  metrics: string[];
  proof: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    name: "MES Event Ticketing System",
    outcome:
      "End-to-end campus summit ticketing with payment integration, QR delivery, and one-time scan validation.",
    role: "Tech member on a 5-person team. Owned QR generation and scanning controller.",
    metrics: ["1,500+ registrations", "1,000+ verified tickets"],
    proof: [
      "OTP-based email authentication flow",
      "Atom Payment Gateway integration with AES-secured payloads",
      "Dynamic QR tickets invalidated after successful scan",
    ],
    stack: ["Next.js", "Supabase", "Node.js", "AES", "Atom Payments"],
    links: [
      { label: "Internal System" },
      { label: "Private Repo" },
    ],
  },
  {
    number: "02",
    name: "IPC Cross-College Submission Portal",
    outcome:
      "Authenticated submission dashboard for cross-college coordination across 15+ institutions.",
    role: "Solo engineer.",
    metrics: ["15+ colleges", "Realtime sync"],
    proof: [
      "Per-user authenticated file upload with access control",
      "Supabase Realtime sync for institution-level coordination",
      "Minimal submitter UI to reduce operational friction",
    ],
    stack: ["Next.js", "Supabase", "TypeScript"],
    links: [
      { label: "Live App", href: "https://ipc-demo-ochre.vercel.app/" },
      { label: "Repo", href: "https://github.com/Spark960/ipc-demo" },
    ],
  },
  {
    number: "03",
    name: "Multimodal AI Evaluation Framework",
    outcome:
      "Unified FastAPI backend for benchmarking text, vision, audio, and agent models with live logs.",
    role: "Solo build.",
    metrics: ["Text, vision, audio, agents", "SSE streaming"],
    proof: [
      "Orchestrates lmms-eval, faster-whisper, and inspect-ai through subprocesses",
      "Streams live evaluation logs through Server-Sent Events",
      "Normalizes engine outputs into one JSON result schema",
    ],
    stack: ["FastAPI", "React", "Python", "Ollama", "SSE", "lmms-eval"],
    links: [
      { label: "Repo", href: "https://github.com/Spark960/ai-eval" },
    ],
    featured: true,
  },
];

export type ProofMetric = {
  value: string;
  label: string;
  context: string;
};

export const proofMetrics: ProofMetric[] = [
  {
    value: "1,500+",
    label: "Peak Registrations",
    context: "Handled securely for the MES Summit ticketing system.",
  },
  {
    value: "15+",
    label: "Cross-College Sync",
    context: "Unified submission flow used concurrently by teams across 15 institutions.",
  },
  {
    value: "4 Modes",
    label: "AI Modalities Evaluated",
    context: "Benchmarking text, vision, audio, and agentic workflows.",
  },
];
