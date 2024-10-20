"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  const text = " Chaerul Anwar";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative flex items-center justify-center">
  <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative mix-blend-lighten">
    <Image src="/profile.png" alt="" className="w-[215px] h-[250px] xl:w-[478px] xl:h-[478px] flex items-center justify-center m-auto self-center" />
    <motion.svg
      className="absolute top-0 left-0 w-full h-full"
      fill="transparent"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="48"
        stroke="#00ff99"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  </div>
</div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hello, <br/>I am
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <br/> a Fullstack Developer
          </h1>
          </div>
          {/* DESC */}
          <p className="md:text-xl">
           I&apos;m a web developer with extensive exprience for 1 years. 
           expertise is to create and website design, frontend design and many more. 
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <a 
            href="/cv/CV_Chaerul_Anwar.pdf"
            download="CV_Chaerul_Anwar.pdf"
            className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Download CV
            </a>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
