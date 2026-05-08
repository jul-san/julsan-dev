import Image from "next/image";

const EXPERIENCE = [
  { company: "Johns Hopkins Applied Physics Laboratory", href: "https://www.jhuapl.edu/", date: "Summer 2026", logo: "/image/resume/jhu-apl-logo.jpg" },
  { company: "Pfizer", href: "https://www.pfizer.com/", date: "Summer 2025", logo: "/image/resume/pfizer-logo-new.jpg" },
  { company: "MIT Lincoln Laboratory", href: "https://www.ll.mit.edu/", date: "Summer 2024", logo: "/image/resume/mitll-logo.jpg" },
  { company: "Northrop Grumman", href: "https://www.northropgrumman.com/", date: "Summer 2023", logo: "/image/resume/ng-logo.jpg" },
];

const EDUCATION = [
  { school: "Florida State University", degree: "BSc in Computer Science", href: "https://www.fsu.edu/", date: "Expected May 2027", logo: "/image/resume/fsu-logo-seal.jpg" },
  { school: "Seoul National University", degree: "Exchange Semester", href: "https://www.snu.ac.kr/", date: "Spring 2025", logo: "/image/resume/snu-logo.jpg" },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-16 py-12">

      {/* Hero */}
      <section className="relative mb-12">
        <div className="md:pr-52">
          <h1 className="text-4xl font-semibold mb-4">Hi, I&apos;m Julian!</h1>
          <p className="leading-relaxed mb-5">
            I&apos;m an undergraduate at Florida State University
            (go &apos;Noles!), studying computer science. My recent interests span aerospace, defense,
            govtech, and robotics, though I&apos;m always open to exploring new domains. I enjoy working
            primarily in compiled languages (C++, Java, Rust, some C#), along with Python. I&apos;m
            especially interested in building internal tools that support engineers across other disciplines.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:julianwsan@pm.me" className="underline hover:opacity-60">Email</a>
            <a href="https://github.com/jul-san" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">GitHub</a>
            <a href="https://www.instagram.com/julianwsanchez/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">Instagram</a>
            <a href="https://x.com/julianwsanchez" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">X</a>
          </div>
        </div>

        {/* Profile image — desktop */}
        <div className="hidden md:block absolute top-0 right-0">
          <Image
            src="/image/hiking-headshot.jpg"
            alt="Julian Sanchez"
            width={168}
            height={168}
            className="object-cover rounded-full"
            priority
          />
        </div>

        {/* Profile image — mobile */}
        <div className="md:hidden mt-6 flex justify-center">
          <Image
            src="/image/hiking-headshot.jpg"
            alt="Julian Sanchez"
            width={140}
            height={140}
            className="object-cover rounded-full"
            priority
          />
        </div>
      </section>

      {/* Work */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Work</h2>
        <div className="space-y-3">
          {EXPERIENCE.map((job, i) => (
            <div key={i} className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image src={job.logo} alt={job.company} width={24} height={24} className="object-contain shrink-0" />
                <a href={job.href} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">
                  {job.company}
                </a>
              </div>
              <span className="text-sm whitespace-nowrap text-gray-400">{job.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-3">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="flex justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image src={edu.logo} alt={edu.school} width={24} height={24} className="object-contain shrink-0" />
                <span>
                  <a href={edu.href} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">
                    {edu.school}
                  </a>
                  <span className="text-sm text-gray-400"> ({edu.degree})</span>
                </span>
              </div>
              <span className="text-sm whitespace-nowrap text-gray-400">{edu.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outside of Work */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Outside of Work</h2>
        <p className="leading-relaxed mb-3">
          In my free time, I enjoy playing video games! Overwatch is my most played game, where I&apos;ve ranked Top 500
          globally, and Dead by Daylight, where I&apos;ve reached Rank 1 in both Killer and Survivor
          (which is about as useful as it sounds). Some other games that I enjoy are Fallout 4, Minecraft, Stardew Valley, and Rainbow Six Siege.
        </p>
        <p className="leading-relaxed">
          I also love hiking and exploring new places. I&apos;ve summited 지리산 (Jirisan), mainland South
          Korea&apos;s tallest mountain, and solo traveled to Thailand. I&apos;ve even eaten at every restaurant 
          in Boston&apos;s Chinatown and am always hunting for something new. You can find my takes on my{" "}
          <a href="https://beliapp.co/app/julianwsanchez" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">
            Beli
          </a>{" "}
          account.
        </p>
      </section>

      {/* Footer note */}
      <section className="border-t border-[#e9e9e7] pt-6 text-sm text-gray-400">
        <p>
          I&apos;m always happy to connect — whether it&apos;s for career advice, finding the best food spots,
          or anything in between. Feel free to reach out! You're also welcome to look at my{" "}
          <a href="/JulianSanchezResumeWebsite.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">resume</a>
          {""}, if you like that kind of stuff.
        </p>
      </section>

    </div>
  );
}
