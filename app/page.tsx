"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  // Page-level slide (applies to the whole view)
  const slidePage = {
    hidden: { y: 40, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Child elements stagger in after the page settles
  const stagger = {
    hidden: {},
    visible: { transition: { delayChildren: 0.05, staggerChildren: 0.18 } },
  };

  const slideChild = {
    hidden: { y: 12, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={slidePage}
      className="min-h-[100svh] overflow-x-hidden" // true viewport height; avoids mobile URL bar issues
      style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
    >
      {/* Constrained, centered container to prevent layout drift on large screens */}
      <motion.div variants={stagger} className="mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-20">
        {/* Hero */}
        <section
          className="
            grid min-h-[100svh] grid-cols-1 lg:grid-cols-12
            items-center gap-y-12 lg:gap-x-16 xl:gap-x-24
          "
        >
          {/* Left: circular profile image */}
          <div className="flex justify-center lg:justify-end col-span-1 lg:col-span-5">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <Image
                src="/image/hiking-headshot.jpg"
                alt="Portrait of Julian Sanchez"
                fill
                priority
                sizes="(min-width:1280px) 20rem, (min-width:1024px) 20rem, (min-width:640px) 18rem, 15rem"
                className="rounded-full object-cover ring-2 ring-black/10 shadow-xl"
              />
            </div>
          </div>

          {/* Right: description + social links */}
          <div className="flex flex-col justify-center col-span-1 lg:col-span-7 lg:pl-12 xl:pl-16 max-w-prose">
            <motion.p variants={slideChild} className="text-lg">
              Hey there!
            </motion.p>

            <motion.p variants={slideChild} className="mt-4 leading-7">
              My name is Julian Sanchez. I&apos;m a 4th year undergraduate at Florida State University, where I&apos;m
              pursuing a degree in computer science.
            </motion.p>

            <motion.p variants={slideChild} className="mt-4 leading-7">
              Throughout my time in undergrad, I&apos;ve explored various applications of computer science including
              aerospace, defense, academia, healthcare, and more!
            </motion.p>

            <motion.p variants={slideChild} className="mt-3 leading-7">
              In my free time I enjoy playing video games (Overwatch 2, Marvel Rivals, and Dead by Daylight), listening to R&amp;B and Indie Pop,
              eating, and cooking (so that I can eat more).
            </motion.p>

            <motion.p variants={slideChild} className="mt-3 leading-7">
              I&apos;d love to meet you — say hello! julianwsan [at] pm [dot] me
            </motion.p>

            {/* Socials */}
            <motion.div variants={slideChild} className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/julianwsanchez/"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaInstagram className="size-7" />
              </a>
              <a
                href="https://x.com/julianwsanchez"
                title="X (Twitter)"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaSquareXTwitter className="size-7" />
              </a>
              <a
                href="https://github.com/jul-san"
                title="GitHub"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaGithubSquare className="size-7" />
              </a>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </motion.main>
  );
}