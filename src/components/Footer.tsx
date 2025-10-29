export function Footer() {
  return (
    <footer
      className="
        border-t border-white/10 mt-[var(--space-section)]
        bg-bg-page
      "
    >
      <div
        className="
          relative mx-auto max-w-3xl px-6 py-8
          flex flex-col items-start gap-3
          text-meta text-fg-dim
        "
      >
        <div className="flex flex-col gap-1">
          <span className="text-fg-primary text-sm font-medium tracking-[-0.03em]">
            Muhammad Islahul Kafa<span className="text-accent">.</span>
          </span>
          <span>Linux-focused developer. C++ / Qt / UI engineering.</span>
        </div>

        <div className="text-meta flex flex-col sm:flex-row sm:items-center gap-2">
          <span>Built with React + Tailwind</span>
          <span className="hidden sm:inline text-fg-dim/40 select-none">•</span>
          <span>Also building native tools in C++ / Qt 6</span>
        </div>

        <div className="text-meta flex flex-col sm:flex-row sm:items-center gap-2">
          <a
            href="mailto:islahulkafaa@gmail.com"
            className="hover:text-fg-primary transition-colors underline-offset-4 hover:underline"
          >
            islahulkafaa@gmail.com
          </a>
          <span className="hidden sm:inline text-fg-dim/40 select-none">•</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
