// app/books/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  cover: string;
  description: string;
  link: string;
};

type Testimonial = {
  id: number;
  name: string;
  review: string;
};

const placeholderImage = "/books/placeholder.jpg";

const books: Book[] = [
  {
    id: 1,
    title: "Vengeful Vow",
    cover: "/books/vengeful-vow.jpg",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Love wasn’t supposed to be part of the deal.",
    link: "#",
  },
  {
    id: 2,
    title: "Shadows of Paris",
    cover: "/books/shadows-of-paris.jpg",
    description:
      "In the city of lights, secrets run deep. A breathtaking tale of betrayal, romance, and redemption.",
    link: "#",
  },
  {
    id: 3,
    title: "The Last Heir",
    cover: "/books/last-heir.jpg",
    description:
      "A royal scandal, a hidden child, and the race to protect a legacy that could change everything.",
    link: "#",
  },
];

const testimonials: Testimonial[] = [
  { id: 1, name: "Emily R.", review: "Absolutely captivating! Couldn’t put it down." },
  { id: 2, name: "David K.", review: "A masterpiece of romance and suspense." },
  { id: 3, name: "Sophia L.", review: "Beautifully written — I felt every emotion." },
  { id: 4, name: "James P.", review: "Twists and turns that kept me guessing until the end!" },
];

export default function BooksPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#171717] text-white min-h-screen">
      {/* Featured Book Section */}
      <section className="relative bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured: Vengeful Vow
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              A love story forged in fire and betrayal. Discover the novel that
              readers are calling “absolutely unputdownable.”
            </p>
            <button className="bg-white text-[#171717] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition hover:scale-105">
              Buy Now
            </button>
          </div>
          <div className="flex-1 group overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={books[0].cover || placeholderImage}
              alt="Vengeful Vow Cover"
              width={400}
              height={600}
              className="transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = placeholderImage;
              }}
            />
          </div>
        </div>
      </section>

      {/* All Books */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Books by the Author</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="group overflow-hidden">
                <Image
                  src={book.cover || placeholderImage}
                  alt={book.title}
                  width={400}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = placeholderImage;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{book.title}</h3>
                <p className="text-gray-400 mb-4">{book.description}</p>
                <button className="bg-white text-[#171717] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What Readers Are Saying</h2>
          <div className="relative h-28">
            <p className="text-lg italic text-gray-300 transition-opacity duration-500 ease-in-out">
              “{testimonials[currentIndex].review}”
            </p>
            <span className="block mt-4 text-sm text-gray-400">
              — {testimonials[currentIndex].name}
            </span>
          </div>
        </div>
      </section>

      {/* Author's Journey */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">The Writing Journey</h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            From late nights at the desk to moments of unexpected inspiration,
            every story is a piece of my heart. My books are more than tales;
            they’re invitations into worlds where passion, danger, and destiny
            collide.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join My Reader’s Circle</h2>
          <p className="text-gray-300 mb-6">
            Get exclusive sneak peeks, behind-the-scenes notes, and special
            offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg text-[#171717] w-full sm:w-80"
            />
            <button className="bg-white text-[#171717] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 hover:scale-105 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
