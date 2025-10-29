import { PageShell } from "./components/PageShell";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

export default function App() {
  return (
    <PageShell>
      <Hero />
      <Projects />
      <Experience />
    </PageShell>
  );
}
