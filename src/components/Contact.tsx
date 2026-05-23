const links = [
  {
    label: "Email",
    href: "mailto:your@email.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Spark960",
  },
  {
    label: "LinkedIn",
    href: "#",
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
              ) : (
                <a
                  className="focus-ring inline-flex min-h-11 cursor-pointer items-center font-display text-sm font-bold uppercase text-text transition-colors duration-200 hover:text-accent"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
