import Image from "next/image";

const PROJECTS = [
  {
    name: "Rusteric",
    description: "A linear algebra library built in Rust.",
    banner: "/image/projects/rusteric-banner.png",
    github: "https://github.com/jul-san/rusteric",
  },
  {
    name: "Expense Insight",
    description: "Upload Truist bank statements to track spending and account balance over time.",
    banner: "/image/projects/expense-insight-banner.png",
    github: "https://github.com/jul-san/expense-insight",
  },
  {
    name: "Chess CLI",
    description: "A fully playable chess game in the terminal.",
    banner: "/image/projects/chesscli-banner.png",
    github: "https://github.com/jul-san/chess-cli",
  },
  {
    name: "Starlink Observer",
    description: "Track and visualize Starlink satellites on a 3D globe.",
    banner: "/image/projects/starlink-observer-banner.png",
    github: "https://github.com/jul-san/starlink-observer",
  },
];

export default function Projects() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="rounded-lg overflow-hidden border border-[#e9e9e7] group-hover:opacity-75 transition-opacity">
              <Image
                src={project.banner}
                alt={project.name}
                width={900}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3">
              <p className="font-medium text-sm">{project.name}</p>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
