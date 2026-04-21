import { Fragment } from "react";
import Image from "next/image";

const EXPERIENCE = [
  { label: "Interning at Johns Hopkins Applied Physics Laboratory", href: null, date: "Summer 2026" },
  { label: "Interned at Pfizer", href: "https://www.pfizer.com/", date: "Summer 2025" },
  { label: "Studied abroad at Seoul National University", href:"https://www.pfizer.com/" , date: "Spring 2025" },
  { label: "Interned at MIT Lincoln Laboratory", href:"https://www.pfizer.com/" , date: "Summer 2024" },
  { label: "Interned at Northrop Grumman", href: "https://www.ll.mit.edu/", date: "Summer 2023" },
];

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mb-8">
          <div className="grid place-items-center p-3">
            <Image
              src="/image/hiking-headshot.jpg"
              alt="Julian Sanchez"
              width={192}
              height={192}
              className="rounded-full w-48 h-48 object-cover"
              priority
            />
          </div>
          <div className="col-span-4">
            <h1 className="font-bold text-5xl p-3 grid place-items-center mb-4">
              Hi, I&apos;m Julian! 👋
            </h1>
            <div className="text-xl p-3 grid place-items-center">
              <p>
                I&apos;m a 4th year undergraduate at{" "}
                <a href="https://www.fsu.edu/" className="text-sky-600 hover:text-sky-800" target="_blank" rel="noopener noreferrer">
                  Florida State University
                </a>
                , studying computer science. My interests span from aerospace and defense to machine
                learning and healthcare. I&apos;ve interned at{" "}
                <a href="https://www.pfizer.com/" className="text-sky-600 hover:text-sky-800" target="_blank" rel="noopener noreferrer">
                  Pfizer
                </a>
                ,{" "}
                <a href="https://www.ll.mit.edu/" className="text-sky-600 hover:text-sky-800" target="_blank" rel="noopener noreferrer">
                  MIT Lincoln Laboratory
                </a>
                , and{" "}
                <a href="https://www.northropgrumman.com/" className="text-sky-600 hover:text-sky-800" target="_blank" rel="noopener noreferrer">
                  Northrop Grumman
                </a>
                . Outside of work, I enjoy playing video games, listening to R&amp;B and Indie Pop,
                and cooking.
              </p>
            </div>
            <div className="text-lg text-sky-600 p-3 grid place-items-center">
              <div className="space-x-4">
                <a href="mailto:julianwsan@pm.me" className="hover:text-sky-800">[Email]</a>
                <a href="https://github.com/jul-san" className="hover:text-sky-800" target="_blank" rel="noopener noreferrer">[GitHub]</a>
                <a href="https://www.instagram.com/julianwsanchez/" className="hover:text-sky-800" target="_blank" rel="noopener noreferrer">[Instagram]</a>
                <a href="https://x.com/julianwsanchez" className="hover:text-sky-800" target="_blank" rel="noopener noreferrer">[X]</a>
              </div>
            </div>
          </div>
        </div>

        {/* What I've been up to */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">What I&apos;ve been up to:</h2>
          <div className="grid grid-cols-2 gap-2">
            {EXPERIENCE.map((job, i) => (
              <Fragment key={i}>
                <div>
                  {job.href ? (
                    <a href={job.href} className="text-sky-600 hover:text-sky-800" target="_blank" rel="noopener noreferrer">
                      {job.label} ↗
                    </a>
                  ) : (
                    job.label
                  )}
                </div>
                <div>{job.date}</div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* Things I'm interested in */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Things I&apos;m interested in:</h2>
          <ul className="list-disc list-inside">
            <li>Aerospace and defense systems</li>
            <li>Machine learning applications in healthcare</li>
            <li>Systems programming and low-level computing</li>
            <li>Academic research in computer science</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
