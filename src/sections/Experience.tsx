import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-4">
      {experienceData.map((exp) => (
        <div
          key={exp.role}
          className="card-surface transition-transform duration-150 hover:-translate-y-0.5"
        >
          <header className="flex flex-col gap-1">
            <h2 className="text-fg-primary text-sm font-medium tracking-[-0.02em]">
              {exp.role} <span className="text-accent">@ {exp.company}</span>
            </h2>
            <p className="text-meta text-fg-dim">{exp.period}</p>
          </header>

          <p className="text-body mt-2">{exp.desc}</p>

          <ul className="mt-3 flex flex-wrap gap-2 text-meta text-fg-dim">
            {exp.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-bg-card/60 px-2 py-1 leading-none"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
