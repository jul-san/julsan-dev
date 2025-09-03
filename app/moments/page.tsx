"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const IMAGES_WITH_CAPTIONS = [
  { 
    path: "/image/moments/aug-4-2025.jpg", 
    caption: "Midnight subway photoshoot.", 
    date: "August 4, 2025 - Manhattan, New York" 
  },
  { 
    path: "/image/moments/aug-2-2025.jpg", 
    caption: "20th HEYTEA pit stop 🫩", 
    date: "August 2, 2025 - Queens, New York" 
  },
  { 
    path: "/image/moments/jul-12-2025.jpg", 
    caption: "Williamsburg adventure with Unc 👵", 
    date: "July 12, 2025 - Brooklyn, New York" 
  },
  { 
    path: "/image/moments/jul-11-2025.jpg", 
    caption: "Manhattanhenge Sunset 🌇", 
    date: "July 11, 2025 - Manhattan, New York" 
  },
  { 
    path: "/image/moments/jun-22-2025.jpg", 
    caption: "Cow Photobomb 🐮💣", 
    date: "June 22, 2025 - Macau, China" 
  },
  { 
    path: "/image/moments/jun-21-2025.jpg", 
    caption: "Ruins of Saint Paul's :o", 
    date: "June 21, 2025 - Macau, China" 
  },
  { 
    path: "/image/moments/jun-20-2025.jpg", 
    caption: "Pondering... 🤔", 
    date: "June 20, 2025 - Hong Kong, China" 
  },
  { 
    path: "/image/moments/jun-19-2025.jpg", 
    caption: "Hong Kong Skyline", 
    date: "June 19, 2025 - Hong Kong, China" 
  },
  { 
    path: "/image/moments/jun-16-2025.jpg", 
    caption: "Caught offguard", 
    date: "June 16, 2025 - Taipei, Taiwan" 
  },
  { 
    path: "/image/moments/jun-14-2025.jpg", 
    caption: "Peak of Elephant Mountain 🙌", 
    date: "June 14, 2025 - Taipei, Taiwan" 
  },
  { 
    path: "/image/moments/jun-13-2025.jpg", 
    caption: "Post-1.4 Kilogram dinner", 
    date: "June 13, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/jun-7-2025.jpg", 
    caption: "1.4 Kilogram group dinner", 
    date: "June 7, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/jun-6-2025.jpg", 
    caption: "Final night of clubbing 🕺", 
    date: "June 6, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/jun-5-2025.jpg", 
    caption: "SNU Buddy Farewell Party 🎉", 
    date: "June 5, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/may-19-2025.jpg", 
    caption: "Early morning snorkeling 🤿", 
    date: "May 19, 2025 - Okinawa, Japan" 
  },
  { 
    path: "/image/moments/may-15-2025.jpg", 
    caption: "When your roommate is the MC for SNU Festival 😮", 
    date: "May 15, 2025 - Seoul, South Korea" 
  },
    { 
    path: "/image/moments/may-9-2025.jpg", 
    caption: "Many many lights...", 
    date: "May 9, 2025 - Tokyo, Japan" 
  },
    { 
    path: "/image/moments/may-4-2025.jpg", 
    caption: "5-hour hike COMPLETE (we started at 4am)", 
    date: "May 4, 2025 - Jirisan National Park, South Korea" 
  },
    { 
    path: "/image/moments/apr-27-2025.jpg", 
    caption: "Lotte World suits", 
    date: "April 27, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/apr-26-2025.jpg", 
    caption: "Chicken Jockey 🗣️🐓", 
    date: "April 26, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/apr-25-2025.jpg", 
    caption: "Meerkats 😼", 
    date: "April 25, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/apr-6-2025.jpg", 
    caption: "Group 6 👍✋", 
    date: "April 6, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/mar-28-2025.jpg", 
    caption: "Han River Sunset 🌅", 
    date: "March 28, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/mar-23-2025.jpg", 
    caption: "Pre-Food Festival 🍽️", 
    date: "March 23, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/mar-20-2025.jpg", 
    caption: "Losing at poker", 
    date: "March 20, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/mar-15-2025.jpg", 
    caption: "Gwanaksan Peak!", 
    date: "March 15, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/mar-5-2025.jpg", 
    caption: "Hanbok 💧", 
    date: "March 5, 2025 - Seoul, South Korea" 
  },
  { 
    path: "/image/moments/feb-16-2025.jpg", 
    caption: "Lincoln Lab reunion", 
    date: "February 16, 2025 - St. Louis, Missouri" 
  },
  { 
    path: "/image/moments/oct-13-2024.jpg", 
    caption: "Sleepy 😴", 
    date: "October 13, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/oct-12-2024.jpg", 
    caption: "SASE National Convention 2024!", 
    date: "October 12, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/oct-10-2024.jpg", 
    caption: "Pre-tag bench pic", 
    date: "October 10, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/aug-2-2024.jpg", 
    caption: "Farewell Boston 😢", 
    date: "August 2, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/aug-2-2024-2.jpg", 
    caption: "Chinatown Connoisseurs", 
    date: "August 2, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-28-2024.jpg", 
    caption: "Boda Borg finale", 
    date: "July 28, 2024 - Malden, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-27-2024.jpg", 
    caption: "Charles River Kayaking 🚣", 
    date: "July 27, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-22-2024.jpg", 
    caption: "\"Best Chinese restuarant in North America\"", 
    date: "July 22, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-15-2024.jpg", 
    caption: "We might have over ordered...", 
    date: "July 15, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-13-2024.jpg", 
    caption: "Cadillac Mountain sunset 🌅", 
    date: "July 13, 2024 - Bar Harbor, Maine" 
  },
  { 
    path: "/image/moments/jul-13-2024-2.jpg", 
    caption: "Sand Beach 🏝️", 
    date: "July 13, 2024 - Bar Harbor, Maine" 
  },
    { 
    path: "/image/moments/jul-6-2024.jpg", 
    caption: "Times Square, but with donut hats :o", 
    date: "July 6, 2024 - Manhattan, New York" 
  },
  { 
    path: "/image/moments/jul-5-2024.jpg", 
    caption: "Rockefeller Center + banana pudding", 
    date: "July 5, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jul-4-2024.jpg", 
    caption: "Waited an hour in line for mid tacos", 
    date: "July 4, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-28-2024.jpg", 
    caption: "Back to the Future 🏎️", 
    date: "June 28, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-22-2024.jpg", 
    caption: "Grazie 🍝", 
    date: "June 22, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-21-2024-2.jpg", 
    caption: "Boston Shawarma 😼", 
    date: "June 21, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-21-2024-3.jpg", 
    caption: "Celtics Championship Parade 🍀", 
    date: "June 21, 2024 - Boston, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-19-2024.jpg", 
    caption: "Beach day ☀️", 
    date: "June 19, 2024 - Revere, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-10-2024.jpg", 
    caption: "First time rock climbing :o", 
    date: "June 10, 2024 - Watertown, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-9-2024.jpg", 
    caption: "Dragon Boat Festival 🚣‍♂️", 
    date: "June 9, 2024 - Cambridge, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-8-2024.jpg", 
    caption: "Totally didn't lose a mini golf bet...", 
    date: "June 8, 2024 - Westford, Massachusetts" 
  },
  { 
    path: "/image/moments/jun-1-2024.jpg", 
    caption: "Mount Madonock Hike ⛰️", 
    date: "June 1, 2024 - Jaffrey, New Hampshire" 
  },
  { 
    path: "/image/moments/apr-30-2024.jpg", 
    caption: "Goodbye KBBQ Dinner :(", 
    date: "April 30, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/apr-19-2024.jpg", 
    caption: "K-pop night? 😅", 
    date: "April 19, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/mar-23-2024.jpg", 
    caption: "Holi 🙌", 
    date: "March 23, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/feb-28-2024.jpg", 
    caption: "Before I threw a pie 🥧", 
    date: "February 28, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/feb-25-2024.jpg", 
    caption: "My bigs 😆", 
    date: "February 25, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/feb-3-2024.jpg", 
    caption: "Cheffin' 🧑‍🍳", 
    date: "February 3, 2024 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/jan-14-2024.jpg", 
    caption: "Kanye Bear 🧸", 
    date: "January 14, 2024 - Gainesville, Florida" 
  },
  { 
    path: "/image/moments/jan-13-2024.jpg", 
    caption: "Pho Dinner :D", 
    date: "January 13, 2024 - Gainesville, Florida" 
  },
  { 
    path: "/image/moments/dec-18-2023.jpg", 
    caption: "Bigs grad pics :')", 
    date: "December 18, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/oct-29-2023.jpg", 
    caption: "Halloween 🎃", 
    date: "October 29, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/oct-22-2023.jpg", 
    caption: "Showed up 30 minutes before they closed >:)", 
    date: "October 22, 2023 - Gainesville, Florida" 
  },
  { 
    path: "/image/moments/oct-14-2023.jpg", 
    caption: "SASE 2023!", 
    date: "October 14, 2023 - Atlanta, Georgia" 
  },
  { 
    path: "/image/moments/sep-24-2023.jpg", 
    caption: "SASE Bonding 👽", 
    date: "September 24, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/sep-30-2023.jpg", 
    caption: "Got pied in the face 🤒", 
    date: "September 30, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/apr-25-2023.jpg", 
    caption: "Ken's Fountain Throwing! 🍾", 
    date: "April 25, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/mar-12-2023.jpg", 
    caption: "Bing Chilling", 
    date: "March 12, 2023 - Greensboro, North Carolina" 
  },
  { 
    path: "/image/moments/mar-5-2023.jpg", 
    caption: "🅱️ina & 🅱️ulian", 
    date: "March 5, 2023 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/dec-1-2022.jpg", 
    caption: "Board Gamin'", 
    date: "December 1, 2022 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/nov-19-2022.jpg", 
    caption: "He's definitely sober 🤩", 
    date: "November 19, 2022 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/nov-11-2022.jpg", 
    caption: "North Florida Fair 🎡", 
    date: "November 11, 2022 - Tallahassee, Florida" 
  },
  { 
    path: "/image/moments/oct-9-2022.jpg", 
    caption: "First time at H Mart 🛒", 
    date: "October 9, 2022 - Atlanta, GA" 
  },
  { 
    path: "/image/moments/oct-7-2022-2.jpg", 
    caption: "Centennial Olympic Park 🧩", 
    date: "October 7, 2022 - Atlanta, GA" 
  },
  { 
    path: "/image/moments/oct-7-2022.jpg", 
    caption: "First National Convention! 😆", 
    date: "October 7, 2022 - Atlanta, GA" 
  },
  { 
    path: "/image/moments/aug-27-2022.jpg", 
    caption: "First Friends 🙂", 
    date: "August 27, 2022 - Tallahassee, Florida" 
  },
];

export default function Pics() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-6 md:px-12 lg:px-20 py-12">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="mb-8 text-center">
          <i className="text-lg"> Life&apos;s just about the friends we made along the way.</i>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {IMAGES_WITH_CAPTIONS.map((imageData, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="flex flex-col space-y-3"
            >
              <div className="text-sm">
                <p className="text-gray-800 font-medium">
                  {imageData.caption}
                </p>
                <p className="text-gray-600">
                  {imageData.date}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={imageData.path}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={`${imageData.caption} - ${imageData.date}`}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}