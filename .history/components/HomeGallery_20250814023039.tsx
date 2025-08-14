// components/HomeGallery.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeGallery() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center font-serif overflow-hidden">
      {/* Background hero image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <Image
          src="/gallery/ministry1.jpg"
          alt="Gallery Teaser"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          A Journey of Faith, Family & Impact
        </motion.h2>
        <p className="text-lg mb-6">
          Relive the moments that defined a lifetime of ministry, service, and love.
        </p>
        <Link href="/Gallery">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-green-600 to-green-400 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
          >
            View Full Gallery
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
