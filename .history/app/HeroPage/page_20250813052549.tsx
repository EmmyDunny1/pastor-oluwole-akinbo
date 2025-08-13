import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for the image
const imageVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
  scroll: {
    y: [0, -20, 0],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' as const }, // Explicitly type ease as a literal
  },
};

// Animation variants for text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Celebrating the Life and Legacy of Pastor ...
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Join us in honoring a faithful servant of God as he retires after over
            40 years of impactful ministry.
          </p>
        </motion.div>

        {/* Image Placeholder with Animation */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
          animate="scroll"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-[#171717] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder-pastor.jpg" // Replace with actual image path
              alt="Pastor Retirement"
              layout="fill"
              objectFit="cover"
              className="opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <span className="text-white text-lg font-semibold">
                Image Placeholder
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}