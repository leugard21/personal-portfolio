export type ExperienceInfo = {
  role: string;
  company: string;
  period: string;
  desc: string;
  stack: string[];
};

export const experienceData: ExperienceInfo[] = [
  {
    role: "Independent Developer",
    company: "Freelance",
    period: "2020 – Present",
    desc: "Building open-source desktop utilities and custom software for Linux environments.",
    stack: ["C++", "Qt 6", "Java", "Next.js"],
  },
  {
    role: "Personal Projects",
    company: "Self-initiated",
    period: "Ongoing",
    desc: "Creating Whisper (Linux WhatsApp client) and Download Manager to explore native networking and UI frameworks.",
    stack: ["C++", "Qt 6", "HTTP", "WebSockets"],
  },
];
