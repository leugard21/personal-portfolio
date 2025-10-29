import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col gap-4 card-surface transition-transform duration-150 hover:-translate-y-0.5"
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-fg-primary text-sm font-medium tracking-[-0.03em]">
            Let's work together<span className="text-accent">.</span>
          </h2>
          <p className="text-meta text-fg-dim">
            Available for freelance / contract.
          </p>
        </div>

        <Mail className="size-4 text-fg-dim opacity-70" />
      </header>

      <p className="text-body">
        Need a desktop app, a fast UI, or a custom tool? Reach out and tell me
        what you need. I build focused, minimal, performance-first software.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-body">
        <a
          href="mailto:islahulkafaa@gmail.com"
          className="inline-flex items-center gap-2 text-fg-primary hover:underline underline-offset-4"
        >
          <Mail className="size-4 opacity-70" />
          <span>islahulkafaa@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
