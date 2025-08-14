"use client";

import React from 'react';
import TestimonyForm from '@/components/TestimonyForm';
import { motion } from 'framer-motion';

export default function SubmitTestimony() {
  return (
    <></>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-4">
      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-green-400">
          Share Your Story
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          We invite you to celebrate the incredible impact of Pastor Samuel Oluwole Akinbo. 
          Your heartfelt testimonies honor his legacy and inspire countless others. 
          Speak from your heart and let your words shine as a tribute to his remarkable life of service.
        </p>
        <p className="mt-4 text-gray-400 italic">
          Every story matters — your voice can touch hearts and celebrate decades of faithful ministry.
        </p>
      </motion.div>

      {/* Testimony Form */}
      <TestimonyForm />
    </div>
  );
}
