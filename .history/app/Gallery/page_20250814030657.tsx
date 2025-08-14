// app/gallery/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

// Example image arrays (replace with actual image paths in /public/gallery)
const categories = [
  {
    title: "Ministry — Then & Now",
    images: ["/gallery/ministry1.jpg", "/gallery/ministry2.jpg", "/gallery/ministry3.jpg", "/gallery/ministry4.jpg"],
  },
  {
    title: "Daddy & Mummy",
    images: ["/gallery/dad&mum1.jpg", "/gallery/dad&mum2.jpg", "/gallery/dad&mum3.jpg", "/gallery/dad&mum4.jpg"],
  },
  {
    title: "Family Moments",
    images: ["/gallery/family1.jpg", "/gallery/family2.jpg", "/gallery/family3.jpg", "/gallery/family4.jpg"],
  },
  {
    title: "Crusades & Church Events",
    images: ["/gallery/crusade1.jpg", "/gallery/crusade2.jpg", "/gallery/crusade3.jpg"],
  },
  {
    title: "Past Speaking Engagements",
    images: ["/gallery/speaking1.jpg", "/gallery/speaking2.jpg", "/gallery/speaking3.jpg"],
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white font-serif">
      <div className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-[#0a2e5c] to-[#095f4b] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center px-4"
        >
          A Journey in Pictures
        </motion.h1>
      </div>

      {categories.map((cat, i) => (
        <section key={i} className="py-16 px-4 md:px-20">
          <h2 className="text-3xl font-bold mb-8 text-[#0a2e5c]">{cat.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cat.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`${cat.title} ${idx + 1}`}
                  width={500}
                  height={300}
                  className="rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-medium">
                  View Photo
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <Image
            src={selectedImage || ""}
            alt="Selected"
            width={1000}
            height={700}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </Dialog>
    </div>
  );
}
