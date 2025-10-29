import { Header } from "./Header";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main
      id="top"
      className="relative min-h-dvh bg-bg-page text-fg-primary overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_0%_100%/0.06)_0,transparent_70%)]"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-20
          bg-[linear-gradient(to_right,hsl(0_0%_100%/0.07)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.07)_1px,transparent_1px)]
          bg-size-[24px_24px]
          mask-[radial-gradient(circle_at_center,black_0%,transparent_70%)]
        "
      />

      <Header />

      <div className="page-inner">{children}</div>
    </main>
  );
}
