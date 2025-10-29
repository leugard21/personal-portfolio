import { Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 text-meta">
        <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
        <span>Available for freelance</span>
      </div>

      <header className="flex flex-col gap-4">
        <h1 className="text-display text-fg-primary">
          Muhammad Islahul Kafa
          <span className="text-accent">.</span>
        </h1>

        <p className="text-body max-w-prose">
          Frontend / UI engineer focused on clean interfaces, performance, and
          delightful detail.
        </p>
      </header>

      <div className="flex items-center gap-4 text-body text-fg-dim">
        <a
          href="#"
          aria-label="Open GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 hover:text-fg-primary transition-colors"
        >
          <Github className="size-4 opacity-70 group-hover:opacity-100" />
          <span>Github</span>
        </a>

        <span className="text-fg-dim/40 select-none text-meta">•</span>

        <a
          href="#"
          aria-label="Open LinkedIn profile"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 hover:text-fg-primary transition-colors"
        >
          <Linkedin className="size-4 opacity-70 group-hover:opacity-100" />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
