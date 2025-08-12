"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa"; // Font Awesome


interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Power Within",
    description: "An inspiring journey into personal transformation and success.",
    image: "/images/book1.jpg",
    link: "/books#power-within",
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    description: "Explore the boundaries of courage and human potential.",
    image: "/images/book2.jpg",
    link: "/books#beyond-horizon",
  },
  {
    id: 3,
    title: "Prelaunch: The Awakening",
    description: "Exclusive pre-order — be the first to own this masterpiece.",
    image: "/images/prelaunch.jpg",
    link: "/books#awakening",
  },
];

export default function BookCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % books.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + books.length) % books.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 py-12 px-4 flex flex-col items-center relative">
      <h2 className="text-white text-3xl font-bold mb-6">Featured Books</h2>
      <div className="relative w-full max-w-3xl">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-green-600 transition z-10"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Carousel Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={books[current].id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-[#171717] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <motion.img
              src={books[current].image}
              alt={books[current].title}
              className="w-64 h-80 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition"
              onClick={() => (window.location.href = books[current].link)}
              whileHover={{ scale: 1.05 }}
            />
            <h3 className="text-xl font-bold text-white">
              {books[current].title}
            </h3>
            <p className="text-gray-300 mt-2">{books[current].description}</p>
            <a
              href={books[current].link}
              className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-green-400 hover:bg-green-500 transition duration-300 animate-pulse"
            >
              Preorder Now
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-green-600 transition z-10"
        >
          <FaArrowRight size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}
