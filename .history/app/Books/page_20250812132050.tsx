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

  // Auto-scroll effect for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            My Books
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover captivating stories and life-changing lessons from the mind
            of{" "}
            <span className="font-bold text-primary">
              John Doe, Award-winning Author
            </span>
            . Every book is a journey—crafted to inspire, challenge, and
            transform.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/author.jpg"
            alt="Author"
            width={320}
            height={320}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container mx-auto px-6 lg:px-20 mb-16">
        <div className="overflow-hidden relative h-[450px]">
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
                <div className="max-w-lg bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-64 transform transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-700 mb-4">{book.description}</p>
                    <a
                      href={book.link}
                      className="inline-flex items-center px-5 py-3 bg-primary text-white rounded-full font-semibold transition-all duration-300 hover:bg-primary-dark hover:pl-7"
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
            className={`flex flex-col lg:flex-row items-center gap-8 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white ${
              book.prelaunch ? "border-4 border-primary" : ""
            }`}
          >
            <div className="flex-shrink-0">
              <Image
                src={book.image}
                alt={book.title}
                width={250}
                height={350}
                className="rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h3
                className={`text-3xl font-bold mb-4 ${
                  book.prelaunch ? "text-primary" : "text-gray-900"
                }`}
              >
                {book.title}
              </h3>
              <p className="text-gray-700 mb-6">{book.description}</p>
              <a
                href={book.link}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-semibold transition-all duration-300 hover:bg-primary-dark hover:pl-8"
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
