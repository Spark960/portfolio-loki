import { ContactDialog } from "@/components/ContactDialog";

const links = [
  {
    label: "Email",
    href: "mailto:lokeshparasa50@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Spark960",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lokesh-parasa-66698631a/",
  },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="page-shell">
        <p className="section-label">Contact</p>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-4xl font-display text-[clamp(2.8rem,8vw,7rem)] font-bold leading-none">
              Let&apos;s build.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              If you&apos;re building something serious, useful, or weirdly
              ambitious, let&apos;s talk.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 md:justify-end">
            {links.map((link) =>
              link.href === "#" ? (
                <span
                  className="font-display text-sm font-bold uppercase text-muted"
                  key={link.label}
                >
                  {link.label} pending
                </span>
              ) : link.label === "Email" ? (
                <ContactDialog key={link.label}>
                  <button className="focus-ring inline-flex min-h-11 cursor-pointer items-center font-display text-sm font-bold uppercase text-text transition-colors duration-200 hover:text-accent border-[2px] border-transparent">
                    Email
                  </button>
                </ContactDialog>
              ) : (
                <a
                  className="focus-ring inline-flex min-h-11 cursor-pointer items-center font-display text-sm font-bold uppercase text-text transition-colors duration-200 hover:text-accent border-[2px] border-transparent"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
