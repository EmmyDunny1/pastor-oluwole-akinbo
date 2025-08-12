"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

type Book = {
  id: number;
  title: string;
  description: string;
  cover: string;
  link: string;
  prelaunch?: boolean;
};

const placeholder = "/books/placeholder.jpg";

const books: Book[] = [
  {
    id: 1,
    title: "Vengeful Vow (Pre-Launch)",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Pre-launch copies include exclusive bonus content — secure yours now.",
    cover: "/books/vengeful-vow.jpg",
    link: "/order/vengeful-vow",
    prelaunch: true,
  },
  {
    id: 2,
    title: "Shadows of Paris",
    description:
      "In the city of lights, secrets run deep. A breathless tale of betrayal, romance, and the price of redemption.",
    cover: "/books/shadows-of-paris.jpg",
    link: "/order/shadows-of-paris",
  },
  {
    id: 3,
    title: "The Last Heir",
    description:
      "A royal scandal, a hidden child, and a race to protect a legacy. A family saga full of twists.",
    cover: "/books/last-heir.jpg",
    link: "/order/the-last-heir",
  },
];

/** Small image component with fallback support */
function FallbackImage({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 400}
      height={height ?? 600}
      className={className}
      onError={() => setImgSrc(placeholder)}
      unoptimized
    />
  );
}

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#171717] to-gray-800 text-white">
      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Heading + Intro (TEXT LEFT) */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            My Books
          </h1>
          <p className="text-gray-300 max-w-2xl mb-6">
            Welcome — here are the stories I’ve poured my heart into. From
            pulse-pounding romance to family sagas and mysteries, each book is
            designed to move you. Scroll down to learn more or pre-order the
            special pre-launch edition.
          </p>

          <div className="flex gap-4 items-center">
            <a
              href="#books"
              className="inline-flex items-center bg-white text-[#171717] px-5 py-3 rounded-md font-semibold shadow-sm hover:shadow-md transition"
            >
              Browse books
              <FaArrowRight className="ml-3" />
            </a>

            <a
              href="/newsletter"
              className="text-white/90 underline hover:text-white transition"
            >
              Join newsletter
            </a>
          </div>
        </div>

        {/* Right: Author Image */}
        <div className="flex justify-end">
          <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/5">
            <FallbackImage
              src="/author.jpg"
              alt="Author"
              width={320}
              height={320}
              className="object-cover w-[320px] h-[320px]"
            />
          </div>
        </div>
      </header>

      {/* BOOKS LIST */}
      <section id="books" className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
        {books.map((book) => (
          <article
            key={book.id}
            className={`group flex flex-col md:flex-row items-center gap-6 rounded-2xl p-6 border border-gray-700 shadow-lg transition-transform duration-300 hover:shadow-2xl ${
              book.prelaunch ? "bg-[#171717]" : "bg-[#171717]/80"
            }`}
          >
            {/* LEFT: TEXT (about book) */}
            <div className="w-full md:w-2/3 text-left">
              {/* badge for prelaunch */}
              {book.prelaunch && (
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white text-[#171717] font-semibold text-sm">
                  PRE-LAUNCH
                </span>
              )}

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {book.title}
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl">{book.description}</p>

              {/* Buttons: Order / Pre-Order (with extend-on-hover effect) */}
              <div>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center bg-white text-[#171717] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:pr-12 shadow-sm ${
                    book.prelaunch ? "outline outline-2 outline-white/10" : ""
                  }`}
                >
                  <span className="relative z-10">
                    {book.prelaunch ? "Pre-Order Now" : "Order Now"}
                  </span>
                  <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-3" />
                </a>
              </div>
            </div>

            {/* RIGHT: BOOK COVER IMAGE */}
            <div className="w-full md:w-1/3">
              <div className="overflow-hidden rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:saturate-125">
                <FallbackImage
                  src={book.cover}
                  alt={book.title}
                  width={380}
                  height={560}
                  className="object-cover w-full h-64 md:h-48 lg:h-64"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
