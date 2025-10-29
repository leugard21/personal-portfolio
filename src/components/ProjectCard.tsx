import type { ProjectInfo } from "../data/projects";

export function ProjectCard({ title, blurb, stack, href }: ProjectInfo) {
  return (
    <a
      href={href}
      className="card-surface group block no-underline outline-none transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_hsl(0_0%_0%/.8)] focus-visible:-translate-y-0.5 focus-visible:shadow-[0_20px_60px_hsl(0_0%_0%/.8)]"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-fg-primary text-sm font-medium leading-tight tracking-[-0.03em]">
            {title}
            <span className="text-accent">.</span>
          </h2>
          <span className="text-meta text-fg-dim opacity-60 group-hover:opacity-100 transition-opacity">
            ↗
          </span>
        </div>

        <p className="text-body">{blurb}</p>

        <ul className="flex flex-wrap gap-2 text-meta text-fg-dim">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-bg-card/60 px-2 py-1 leading-none"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
