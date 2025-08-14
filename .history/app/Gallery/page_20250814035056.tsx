"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

const categories = [
  {
    title: "Ministry — Then & Now",
    images: [
      "/gallery/ministry1.jpg",
      "/gallery/ministry2.jpg",
      "/gallery/ministry3.jpg",
      "/gallery/ministry4.jpg",
      "/gallery/ministry5.jpg",
      "/gallery/ministry6.jpg",
      "/"
    ],
  },
  {
    title: "Daddy & Mummy",
    images: [
      "/gallery/dad&mum1.jpg",
      "/gallery/dad&mum2.jpg",
      "/gallery/dad&mum3.jpg",
      "/gallery/dad&mum4.jpg",
    ],
  },
  {
    title: "Family Moments",
    images: [
      "/gallery/family1.jpg",
      "/gallery/family2.jpg",
      "/gallery/family3.jpg",
      "/gallery/family4.jpg",
    ],
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (catIdx: number, imgIdx: number) => {
    setCurrentCategory(catIdx);
    setCurrentIndex(imgIdx);
    setSelectedImage(categories[catIdx].images[imgIdx]);
  };

  const nextImage = () => {
    const images = categories[currentCategory].images;
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(images[nextIdx]);
  };

  const prevImage = () => {
    const images = categories[currentCategory].images;
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(images[prevIdx]);
  };

  return (
    <div suppressHydrationWarning className="bg-gray-100 font-serif min-h-screen">
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
                onClick={() => openLightbox(i, idx)}
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
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center p-4">
          <div className="relative flex items-center justify-center w-full max-w-4xl">
            <button
              onClick={prevImage}
              className="absolute left-0 z-20 p-3 rounded-full bg-gray-700/70 hover:bg-green-600 transition text-white"
            >
              <FaChevronLeft size={24} />
            </button>

            {selectedImage && (
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Selected"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-lg shadow-2xl w-full max-h-[80vh] object-contain"
              />
            )}

            <button
              onClick={nextImage}
              className="absolute right-0 z-20 p-3 rounded-full bg-gray-700/70 hover:bg-green-600 transition text-white"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          <button
            onClick={() => setSelectedImage(null)}
            className="mt-6 px-6 py-2 bg-white text-[#171717] rounded-full font-semibold shadow-lg hover:bg-gray-300 transition"
          >
            Back to Gallery
          </button>
        </div>
      </Dialog>
    </div>
  );
}
