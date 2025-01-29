import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    image: "/image/resume/vth-logo.jpg",
    alt: "VitalTrack Health Logo",
    company: "VitalTrack Health",
    title: "Engineering",
    date: "Present",
  },
  {
    image: "/image/resume/fsu-logo.jpg",
    alt: "FSU Logo",
    company: "FSU MakeX Lab",
    title: "Research",
    date: "Present",
  },
  {
    image: "/image/resume/mit-ll-logo.jpeg",
    alt: "MIT LL Logo",
    company: "MIT Lincoln Lab",
    title: "Research, Engineering",
    date: "2024",
  },
  {
    image: "/image/resume/dmc.jpg",
    alt: "DMC Logo",
    company: "DeVoe. L Moore Center",
    title: "Analytics",
    date: "2024",
  },
  {
    image: "/image/resume/ng-logo.jpg",
    alt: "NG Logo",
    company: "Northrop Grumman",
    title: "Engineering",
    date: "2023",
  },
];

const JobCard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      {EXPERIENCE.map((job, index) => (
        <motion.div
          key={index}
          variants={item}
        >
          <motion.hr 
            className="border-t-100 border-dashed border-black p-1"
            variants={item}
          />
          <div className="flex items-center justify-items-start pb-2 text-xs">
            <Image
              src={job.image}
              alt={job.alt}
              width={25}
              height={25}
              className="rounded"
            />
            <p className="px-2 font-extrabold">{job.company}</p>
            <p className="px-2 text-gray-500">{job.title}</p>
            <p className="px-2 text-gray-500 ml-auto">{job.date}</p>
          </div>
        </motion.div>
      ))}
      <motion.hr 
        className="border-t-100 border-dashed border-black p-1"
        variants={item}
      />
    </motion.div>
  );
};

export default JobCard;