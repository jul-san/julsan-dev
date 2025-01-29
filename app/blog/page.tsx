"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Blog() {
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
    <>
      {/*<div className='pb-2'>
            <p className='text-gray-500 text-sm'>february 2, 2024</p>
            <Link href="/blog/i-think-my-biggest-fear-is-true" className='hover:underline'>i think my biggest fear is true ↗</Link>
  </div>*/}
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        <motion.div className="text-left" variants={stagger}>
          <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">January 18, 2024</p>
              <Link href="/blog/serc-shenanigans" className="hover:underline">
                SERC Shenanigans ↗
              </Link>
            </div>
          </motion.div>
          <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">December 20, 2023</p>
              <Link
                href="/blog/my-top-five-video-game-list"
                className="hover:underline"
              >
                My Top 5 Video Game List ↗
              </Link>
            </div>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">October 25, 2023</p>
              <Link
                href="/blog/a-weekend-in-atlanta"
                className="hover:underline"
              >
                A Weekend In Atlanta ↗
              </Link>
            </div>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">October 4, 2023</p>
              <Link
                href="/blog/the-importance-of-having-a-big"
                className="hover:underline"
              >
                The Importance of Having a Big ↗
              </Link>
            </div>
          </motion.div>

          <motion.div variants={slideUp} transition={{ duration: 0.9 }}>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">July 23, 2023</p>
              <Link
                href="/blog/evolution-of-my-music-taste"
                className="hover:underline"
              >
                Evolution of My Music Taste ↗
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
