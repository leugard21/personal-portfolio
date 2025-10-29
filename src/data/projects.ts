export type ProjectInfo = {
  title: string;
  blurb: string;
  stack: string[];
  href: string;
};

export const projectsData: ProjectInfo[] = [
  {
    title: "Whisper",
    blurb:
      "WhatsApp Web client for Linux. Native-style UI, focused on performance, desktop integration, and running without Electron bloat.",
    stack: ["C++", "Qt 6", "WebView"],
    href: "#",
  },
  {
    title: "Download Manager",
    blurb:
      "High-speed download manager inspired by IDM / XDM. Supports multi-connection, pause & resume, queueing, and per-file speed stats.",
    stack: ["C++", "Qt 6", "HTTP(S)"],
    href: "#",
  },
];
