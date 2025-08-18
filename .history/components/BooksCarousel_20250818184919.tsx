"use client";

import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  image: string;
  link: string;
  description?: string;
};

const books: Book[] = [
  {
    title: "Old Testament Saints",
    author: "This book is the first part of the Systematic and Expository Teachings on the Old Testament Saints, beginning from Abraham the Father of  Faith and God’s Friend. ",
    image: "/books/Old_Test_Saints.png",
    link: "https://wa.me/2349165750991",
  },
  {
    title: "The Book Of Nehmiah",
    author: "Nehemiah is a gem of a book in the spiritual lessons which it teaches us. It tells how, under the leadership of Nehemiah, the walls of Jerusalem were re-built by the returned remnant and how the people themselves were reinstructured in the law which God has given to their nation long before, through Moses. The rebuilding of the City wall is like a graphic object lessons illustrating those truths which lie at the heart of all true servants for God He",
    image: "/books/Book_Of_Neh.png",
    link: "https://selar.co/m/samuel-oluwole1458878?currency=NGN",
  },
  {
    title: "Secret Of A Happy Home",
    author: "The plan of God from the beginning is that each family would be in peace, beacause this is what will ensure the fulfilment of God's plan on earth. Marriage started in the garden of Eden. God the creator of all thingd, the one who reigns in heaven and on earth, established the first marriag",
    image: "/books/Secrets_Of__HM.png",
    link: "https://wa.me/2349165750991",
  },
];

export default function BooksCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === books.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? books.length - 1 : prev - 1));

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        Featured Books
      </h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center gap-10 p-10"
        >
          {/* Book Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,90,255,0.4)]"
            >
              <Image
                src={books[current].image}
                alt={books[current].title}
                width={320}
                height={420}
                className="object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {/* Book Details */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {books[current].title}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {books[current].author}
            </motion.p>
            <motion.a
              href={books[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white shadow-lg hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
            >
              Order Now
            </motion.a>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-md"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-md"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-3">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-pink-500 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
