"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Entry = {
  logoSrc: string;
  alt: string;
  name: string;
  description: string;
};

type Section = {
  header: string;
  items: Entry[];
};

// --- Data ---
const SECTIONS: Section[] = [
  {
    header: "Education",
    items: [
      {
        logoSrc: "/image/resume/fsu-logo-seal.jpg",
        alt: "Florida State University Logo",
        name: "Florida State University",
        description: "Bachelor of Science in Computer Science",
      },
      {
        logoSrc: "/image/resume/snu-logo.jpg",
        alt: "Seoul National University Logo",
        name: "Seoul National University",
        description: "Exchange Semester in Computer Science",
      },
    ],
  },
  {
    header: "Experience",
    items: [
      {
        logoSrc: "/image/resume/jhu-apl-logo.jpg",
        alt: "Pfizer Logo",
        name: "Johns Hopkins Applied Physics Laboratory",
        description: "Research Engineering Intern",
      },
      {
        logoSrc: "/image/resume/syntech-systems-logo.jpg",
        alt: "Pfizer Logo",
        name: "Syntech Systems",
        description: "Software Test Engineering Intern",
      },
      {
        logoSrc: "/image/resume/pfizer-logo-new.jpg",
        alt: "Pfizer Logo",
        name: "Pfizer",
        description: "Software Engineering Intern",
      },
      {
        logoSrc: "/image/resume/mitll-logo.jpg",
        alt: "MIT Lincoln Laboratory Logo",
        name: "MIT Lincoln Laboratory",
        description: "Research Engineering Intern",
      },
      {
        logoSrc: "/image/resume/ng-logo.jpg",
        alt: "Northrop Grumman Logo",
        name: "Northrop Grumman",
        description: "Software Engineering Intern",
      },
    ],
  },
];

// ---- Motion variants ----
const slideUp = {
  hidden: { y: -20, opacity: 0, filter: "blur(10px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

function EntryRow({ item }: { item: Entry }) {
  return (
    <motion.div
      variants={slideUp}
      transition={{ duration: 0.9 }}
      className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-16 py-8 md:py-12"
    >
      {/* Logo */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
          <Image
            src={item.logoSrc}
            alt={item.alt}
            width={128}
            height={128}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 text-center md:text-left md:ml-6 lg:ml-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-2">
          {item.name}
        </h3>
        <p className="text-base md:text-lg text-gray-600">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="min-h-screen bg-white px-6 md:px-10 lg:px-12 py-10 md:py-14"
    >
      <div className="max-w-4xl mx-auto">
        {SECTIONS.map((section) => (
          <motion.section
            key={section.header}
            variants={slideUp}
            transition={{ duration: 0.9 }}
            className="mb-16 md:mb-20"
          >
            {/* Add Resume Link Above Education */}
            {section.header === "Education" && (
              <motion.div
                variants={slideUp}
                transition={{ duration: 0.9 }}
                className="mb-4 text-center md:text-left"
              >
                <Link
                  href="https://docsend.com/v/bkncd/julians-resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-semibold text-blue-600 hover:text-blue-800 underline"
                >
                  View My Resume Here!
                </Link>
              </motion.div>
            )}

            <motion.h1
              variants={slideUp}
              transition={{ duration: 0.9 }}
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 md:mb-12 text-center md:text-left"
            >
              {section.header}
            </motion.h1>

            {/* Indent only on md+ so mobile stays centered */}
            <motion.div variants={stagger} className="md:pl-10 lg:pl-16">
              {section.items.map((item) => (
                <EntryRow key={item.name} item={item} />
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}