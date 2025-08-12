"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  preorder?: boolean;
}

const books: Book[] = [
  {
    id: "prelaunch-1",
    title: "The Dawn of Imagination",
    description: "A captivating journey into creativity before its official release.",
    image: "/books/prelaunch.jpg",
    preorder: true,
  },
  {
    id: "book-2",
    title: "Shadows of Tomorrow",
    description: "An immersive storytelling experience blending suspense and hope.",
    image: "/books/shadows.jpg",
  },
  {
    id: "book-3",
    title: "Echoes in the Silence",
    description: "A deep exploration of human emotions and resilience.",
    image: "/books/echoes.jpg",
  },
];

export default function BooksCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll horizontally
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1.5;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#171717] py-12 overflow-hidden">
      <h2 className="text-center text-white text-3xl font-bold mb-8">Featured Books</h2>
      <div
        ref={scrollRef}
        className="flex space-x-8 px-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl min-w-[300px] max-w-[300px] shadow-lg snap-start relative"
          >
            {/* Clickable Image */}
            <Link href={`/books#${book.id}`}>
              <motion.img
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                src={book.image}
                alt={book.title}
                className="rounded-t-2xl w-full h-64 object-cover cursor-pointer"
              />
            </Link>

            {/* Book Info */}
            <div className="p-5 flex flex-col justify-between h-60">
              <h3 className="text-lg text-white font-semibold">{book.title}</h3>
              <p className="text-gray-300 text-sm">{book.description}</p>

              {book.preorder ? (
                <Link href={`/books#${book.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #22c55e" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-450"
                  >
                    Preorder Now
                  </motion.button>
                </Link>
              ) : (
                <Link href={`/books#${book.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 px-6 py-2 border border-green-500 text-green-500 font-semibold rounded-full hover:text-white"
                  >
                    View Book
                  </motion.button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
