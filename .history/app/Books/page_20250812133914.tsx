"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  prelaunch?: boolean;
}

const books: Book[] = [
  {
    id: 1,
    title: "The Dawn of Dreams",
    description:
      "An upcoming masterpiece that will challenge the way you see the world. Secure your copy ahead of time and be among the first to dive in!",
    image: "/books/prelaunch.jpg",
    link: "#",
    prelaunch: true,
  },
  {
    id: 2,
    title: "Whispers of the Wind",
    description:
      "A poetic journey that takes you through love, loss, and redemption. Every page is a breath of fresh inspiration.",
    image: "/books/book1.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Beyond the Horizon",
    description:
      "An exploration of resilience and hope, perfect for anyone facing life’s storms and seeking light.",
    image: "/books/book2.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Threads of Destiny",
    description:
      "A thrilling tale of choices, fate, and the invisible threads that shape our lives.",
    image: "/books/book3.jpg",
    link: "#",
  },
];

export default function BooksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#171717] to-gray-800 min-h-screen text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-20 py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            My Books
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore captivating worlds, inspiring journeys, and transformative
            ideas penned by{" "}
            <span className="font-bold text-white">John Doe</span>.  
            Every story is crafted to inspire, challenge, and leave a lasting
            mark.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/author.jpg"
            alt="Author"
            width={420}
            height={420}
            className="rounded-2xl shadow-2xl border-4 border-gray-700 object-cover"
          />
        </div>
      </section>

      {/* Carousel */}
      <section className="container mx-auto px-6 lg:px-20 mb-20">
        <div className="overflow-hidden relative h-[550px] rounded-xl">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="min-w-full flex justify-center items-center"
              >
                <div
                  className={`max-w-5xl rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${
                    book.prelaunch
                      ? "border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                      : "border border-gray-700"
                  }`}
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={900}
                    height={500}
                    className="object-cover w-full h-[350px] transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-8 bg-[#171717]">
                    <h3 className="text-3xl font-bold mb-4">{book.title}</h3>
                    <p className="text-gray-300 mb-6">{book.description}</p>
                    <a
                      href={book.link}
                      className="inline-flex items-center px-7 py-3 bg-white text-[#171717] rounded-full font-semibold transition-all duration-300 hover:bg-gray-300 hover:pl-9"
                    >
                      {book.prelaunch ? "Pre-order Now" : "Order Now"}
                      <FaArrowRight className="ml-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Books Listing */}
      <section className="container mx-auto px-6 lg:px-20 grid gap-12">
        {books.map((book) => (
          <div
            key={book.id}
            className={`flex flex-col lg:flex-row items-center gap-10 p-8 rounded-xl shadow-lg transition-all duration-300 bg-[#171717] border ${
              book.prelaunch
                ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                : "border-gray-700"
            }`}
          >
            <div className="flex-shrink-0">
              <Image
                src={book.image}
                alt={book.title}
                width={320}
                height={450}
                className="rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h3
                className={`text-4xl font-bold mb-6 ${
                  book.prelaunch ? "text-white" : "text-gray-200"
                }`}
              >
                {book.title}
              </h3>
              <p className="text-gray-300 mb-8">{book.description}</p>
              <a
                href={book.link}
                className="inline-flex items-center px-8 py-3 bg-white text-[#171717] rounded-full font-semibold transition-all duration-300 hover:bg-gray-300 hover:pl-10"
              >
                {book.prelaunch ? "Pre-order Now" : "Order Now"}
                <FaArrowRight className="ml-3" />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
