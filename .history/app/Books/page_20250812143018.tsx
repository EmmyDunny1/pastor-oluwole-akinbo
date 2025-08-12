"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "The Dawn of Wisdom",
      description:
        "A compelling journey into the mind of a visionary author. Pre-order now to be among the first to dive in.",
      cover: "/images/prelaunch-book.jpg",
      link: "#preorder",
      prelaunch: true,
    },
    {
      id: 2,
      title: "Echoes of Eternity",
      description:
        "An epic narrative that transcends time and space, weaving together destiny and choice.",
      cover: "/images/book1.jpg",
      link: "#order-echoes",
    },
    {
      id: 3,
      title: "Shadows of Tomorrow",
      description:
        "A thrilling ride into the unknown, where the future is as unpredictable as the human heart.",
      cover: "/images/book2.jpg",
      link: "#order-shadows",
    },
  ];

  return (
    <div className="bg-[#171717] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex-1"
        >
          <div className="absolute -top-8 -left-8 border-4 border-white w-60 h-80 hidden lg:block"></div>
          <Image
            src="/images/author.jpg"
            alt="Author"
            width={400}
            height={500}
            className="relative z-10 rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-20 bg-gray-800 p-8 rounded-lg shadow-xl lg:-ml-20"
        >
          <h1 className="text-4xl font-bold mb-4">My Books</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to my collection of literary journeys. Each book carries a
            piece of my heart, woven into stories meant to inspire, challenge,
            and ignite your imagination.
          </p>
        </motion.div>
      </section>

      {/* Books List */}
      <section className="container mx-auto px-4 py-10 grid gap-10">
        {books.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80, // alternate directions
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg shadow-lg transition-all duration-500 ${
              book.prelaunch
                ? "bg-gradient-to-br from-[#171717] via-gray-800 to-[#171717] border-2 border-yellow-400"
                : "bg-gray-800"
            }`}
          >
            <motion.div
              whileHover={{ rotate: -1, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full md:w-1/3"
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={300}
                height={400}
                className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:brightness-110 cursor-pointer"
              />
            </motion.div>

            <div className="flex-1">
              <h2
                className={`text-2xl font-bold mb-3 ${
                  book.prelaunch ? "text-yellow-400" : "text-white"
                }`}
              >
                {book.title}
              </h2>
              <p className="text-gray-300 mb-6">{book.description}</p>
              <a
                href={book.link}
                className={`inline-block px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                  book.prelaunch
                    ? "bg-yellow-400 text-[#171717] hover:bg-yellow-500"
                    : "bg-white text-[#171717] hover:bg-gray-300"
                }`}
              >
                {book.prelaunch ? "Pre-Order Now" : "Order Now"}
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default BooksPage;
