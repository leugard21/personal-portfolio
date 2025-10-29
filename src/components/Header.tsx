export function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full border-white/10 bg-bg-card/60 backdrop-blur-sm px-4 py-2 text-meta text-fg-dim shadow-[0_20px_60px_hsl(0_0%_0%/.8)]">
        <a href="#top" className="hover:text-fg-primary transition-colors">
          Home
        </a>
        <a href="#projects" className="hover:text-fg-primary transition-colors">
          Projects
        </a>
        <a
          href="#experience"
          className="hover:text-fg-primary transition-colors"
        >
          Experience
        </a>
        <a href="#contact" className="hover:text-fg-primary transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}
