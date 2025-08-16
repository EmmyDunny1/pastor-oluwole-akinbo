'use client';

import React from 'react';
import { motion } from 'framer-motion';

const imageVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.4 } },
  scroll: {
    y: [0, -15, 0],
    transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export default function HeroPage() {
  return (
    <div className="relative min-h-screen bg-gray-800 flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="w-full px-4 py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center relative z-10">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
            Celebrating the Life and Legacy of{' '}
            <span className="text-green-400">Pastor Samuel Oluwole Akinbo</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4">
            Join us in honoring a faithful servant of God as he retires after over
          </p>

          {/* Highlight 40 years */}
          <div className="mb-4">
            <span className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-green-400">
              40
            </span>
            <span className="ml-2 text-xl sm:text-2xl md:text-3xl text-gray-200 font-semibold">
              years of impactful ministry
            </span>
          </div>

          {/* Note about turning 70 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            He also just turned{' '}
            <span className="text-green-400 font-bold text-2xl sm:text-3xl md:text-4xl">
              70
            </span>{' '}
            in July
          </p>

          <motion.a
            href="#books"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-green-400 transition"
          >
            Explore His Books
          </motion.a>
        </motion.div>

        {/* Image with Animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariants}
          initial="initial"
          whileHover="hover"
          animate="scroll"
        >
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:w-[600px] lg:h-[500px] bg-[#171717] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/others/BooksImage.jpg"
              alt="Pastor Retirement"
              className="w-full h-full object-cover object-top"
            />
            {/* Overlay with glow and age */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-4">
              <span className="text-lg sm:text-xl md:text-2xl text-white font-semibold drop-shadow-lg">
            
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
