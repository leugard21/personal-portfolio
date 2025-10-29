export function Header() {
  const navItems = [
    { href: "#top", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="
        fixed left-0 right-0 top-4 z-50
        flex justify-center px-4
      "
    >
      <nav
        className="
          flex items-center gap-4 sm:gap-6
          rounded-full border border-white/10 bg-bg-card/60
          backdrop-blur-sm
          px-4 py-2 text-meta text-fg-dim
          shadow-[0_20px_60px_hsl(0_0%_0%/.8)]
        "
        aria-label="Primary"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="
              group relative inline-flex items-center gap-2
              hover:text-fg-primary transition-colors
              focus-visible:outline-none focus-visible:text-fg-primary
            "
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
