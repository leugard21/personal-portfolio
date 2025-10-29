import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="grid gap-4 sm:grid-cols-2">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
