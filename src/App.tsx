import { Footer } from "./components/Footer";
import { PageShell } from "./components/PageShell";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

export default function App() {
  return (
    <>
      <PageShell>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </PageShell>
      <Footer />
    </>
  );
}
