import { Fragment } from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/image/resume/jhu-apl-logo.jpg",    alt: "JHU APL",                  offset: 0  },
  { src: "/image/resume/pfizer-logo-new.jpg", alt: "Pfizer",                   offset: 64 },
  { src: "/image/resume/snu-logo.jpg",        alt: "Seoul National University", offset: 0  },
  { src: "/image/resume/mitll-logo.jpg",      alt: "MIT Lincoln Laboratory",    offset: 64 },
  { src: "/image/resume/ng-logo.jpg",         alt: "Northrop Grumman",          offset: 0  },
];

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
          <div className="w-full flex justify-center p-3 sm:pl-3 pl-16">
            <Image
              src="/image/hiking-headshot.jpg"
              alt="Julian Sanchez"
              width={192}
              height={192}
              className="object-cover rounded-full w-48 h-48"
              priority
            />
          </div>
          <div className="col-span-4">
            <h1 className="font-bold text-[clamp(1.5rem,4vw,3rem)] p-3 grid place-items-center mb-4 whitespace-nowrap">
              Hi, I&apos;m Julian! 👋
            </h1>
            <div className="text-xl p-3 grid place-items-center">
              <p>
                I&apos;m an undergraduate at{" "} Florida State University (go 'Noles!), studying computer science. 
                My interests span from aerospace and defense to machine learning and healthcare. Outside of work, I 
                enjoy playing video games, listening to R&amp;B and Indie Pop, and cooking.
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
          <div className="flex flex-col sm:flex-row gap-10 items-start">
          {/* Experience list */}
          <div className="flex-1 min-w-0">
            <div className="grid gap-x-6 gap-y-2 text-xl" style={{ gridTemplateColumns: "1fr auto" }}>
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
                  <div className="whitespace-nowrap">{job.date}</div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* Staggered logos — right on desktop, centered below on mobile */}
          <div className="flex flex-row items-start gap-3 w-full justify-center sm:w-auto sm:justify-start shrink-0 sm:-mt-3">
            {LOGOS.map((logo, i) => (
              <div key={i} style={{ marginTop: logo.offset }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Things I'm interested in */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 text-left pt-20">
            <h2 className="text-3xl font-bold mb-4">Things I&apos;m interested in:</h2>
            <ul className="list-none text-xl">
              <li>Aerospace and defense systems</li>
              <li>Machine learning applications in healthcare</li>
              <li>Systems programming and low-level computing</li>
              <li>Academic research in computer science</li>
            </ul>
          </div>
          <div className="w-full sm:w-[42rem] shrink-0 order-last sm:order-first">
            <Image
              src="/image/han-river.jpeg"
              alt="Han River"
              width={672}
              height={944}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
