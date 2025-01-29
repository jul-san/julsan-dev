"use client";

import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Link from "next/link";
import JobCard from "./components/Work/JobCard";
import { motion } from "framer-motion";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Home() {
  const slideUp = {
    hidden: { y: -20, opacity: 0, filter: "blur(10px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger}>
      <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
        <Image
          src="/image/mountain.jpg"
          alt="banner"
          width={1000}
          height={250}
          className="rounded"
        />
      </motion.div>

      <motion.hr
        variants={slideUp}
        transition={{ duration: 0.9 }}
        className="border-t-100 border-solid border-black p-1"
      />

      <motion.div className="text-left" variants={stagger}>
        <motion.p variants={slideUp} transition={{ duration: 0.9 }}>
          I'm a student at{" "}
          <a href="https://www.fsu.edu/" className="underline">
            Florida State University
          </a>{" "}
          ('26) interested in Human-Computer Interaction (HCI), specifically in
          healthcare.
        </motion.p>
        <br />

        <motion.p variants={slideUp} transition={{ duration: 0.9 }}>
          I currently do research at{" "}
          <a
            href="https://www.cs.fsu.edu/~twu/makex/index.html"
            className="underline"
          >
            FSUs MakeX Laboratory
          </a>{" "}
          where I'm helping to build a wearable device used to track ECG
          signals. Previously, I was at{" "}
          <a href="https://www.ll.mit.edu/" className="underline">
            MIT Lincoln Laboratory
          </a>{" "}
          working on a similar project. My first internship was at{" "}
          <a href="https://www.northropgrumman.com/" className="underline">
            Northrop Grumman
          </a>{" "}
          where I worked on the{" "}
          <a
            href="https://www.northropgrumman.com/what-we-do/air/b-21-raider"
            className="underline"
          >
            B-21 Raider
          </a>
          .
        </motion.p>
        <br />

        <motion.p variants={slideUp} transition={{ duration: 0.9 }}>
          In my free time, I enjoy playing video games (Overwatch 2, Marvel
          Rivals, Dead by Daylight), listening to R&B, eating, and cooking
          so that I can eat more.
        </motion.p>
        <br />

        <motion.p variants={slideUp} transition={{ duration: 0.9 }}>
          Feel free to contact me on{" "}
          <a href="https://www.linkedin.com/in/jul-san/" className="underline">
            LinkedIn
          </a>
          , or at{" "}
          <a href="mailto:julianwsan@gmail.com" className="underline">
            julianwsan@gmail.com
          </a>
          !
        </motion.p>
        <br />
      </motion.div>

      <motion.div variants={slideUp} transition={{ duration: 0.9, delay: 0.9 }}>
        {" "}
        <div className="flex flex-items-center justify-items-start">
          <a
            href="https://www.instagram.com/julianwsanchez/"
            title="Instagram Logo"
            className="pr-2"
          >
            <FaInstagram className="size-6" />
          </a>
          <a
            href="https://x.com/julianwsanchez"
            title="X Logo"
            className="pr-2"
          >
            <FaSquareXTwitter className="size-6" />
          </a>
          <a
            href="https://github.com/jul-san"
            title="GitHub Logo"
            className="pr-2"
          >
            <FaGithubSquare className="size-6" />
          </a>
        </div>
        <br />
      </motion.div>

      <motion.div variants={slideUp} transition={{ duration: 0.9, delay: 0.9 }}>
        {" "}
        <p className="font-dohyeon text-xl">Work</p>
        <JobCard />
      </motion.div>

      <motion.div variants={slideUp} transition={{ duration: 0.9, delay: 0.9 }}>
        {" "}
        <div className="flex flex-col items-center justify-center items-center py-5">
          <p>© 2025 Julian Sanchez. All Rights Reserved.</p>
          <p>Last Modified 01/19/2025</p>
        </div>
        <br />
      </motion.div>
    </motion.div>
  );
}
