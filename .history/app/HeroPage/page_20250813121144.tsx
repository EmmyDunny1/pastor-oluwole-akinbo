'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Animation variants for the image
const imageVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } },
  scroll: {
    y: [0, -20, 0],
    transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' as const },
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
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-6 sm:mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Celebrating the Life and Legacy of Pastor Samuel Oluwole Akinbo
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center md:text-left">
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
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:w-[600px] lg:h-[450px] bg-[#171717] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/others/Hero.jpg"
              alt="Pastor Retirement"
              layout="fill"
              sizes="100vw, (min-width: 1024px) 600px"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <span className="text-base sm:text-lg md:text-xl text-white font-semibold">
                Image Placeholder
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}