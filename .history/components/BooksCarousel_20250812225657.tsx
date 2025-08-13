"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./BooksCarousel.module.css";

type Book = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  cover: string;
  link: string;
  prelaunch?: boolean;
};

const BOOKS: Book[] = [
  {
    id: 1,
    title: "Shadows of Paris",
    subtitle: "A novel by Emmex Fason",
    description:
      "A breathtaking tale of betrayal, romance, and redemption that pulls you into the streets of Paris and refuses to let go.",
    cover: "/books/shadows-of-paris.jpg",
    link: "/order/shadows-of-paris",
  },
  {
    id: 2,
    title: "Secrets Of A Happy Home",
    subtitle: "",
    description:
      "A family saga of hidden truths, legacy, and the fight to protect what matters most.",
    cover: "/books/Secrets_Of__HM",
    link: "/Books",
  },
  {
    id: 99,
    title: "OLD TESTAMENT SAINTS (PRELAUNCH)",
    subtitle: "Exclusive Prelaunch — Pastor Akinbo ",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Prelaunch copies include bonus content and signed inserts. Limited quantities.",
    cover: "/books/Old_Test_Saints.png",
    link: "/Books",
    prelaunch: true,
  },
];

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
  const placeholder = "/placeholder.jpg";
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 600}
      height={height ?? 900}
      className={className}
      onError={() => setImgSrc(placeholder)}
    />
  );
}

export default function BooksPage(): React.ReactNode {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const step = 1;
    const max = el.scrollWidth - el.clientWidth;
    const interval = window.setInterval(() => {
      if (!carouselRef.current) return;
      scrollAmount += step;
      if (scrollAmount >= max) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
      } else {
        carouselRef.current.scrollLeft = scrollAmount;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const prelaunch = BOOKS.find((b) => b.prelaunch);
  const nonPre = BOOKS.filter((b) => !b.prelaunch);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#171717] to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              My Books
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Welcome — a curated collection of stories that explore love, power,
              and sacrifice. Scroll down to see the catalog and secure the
              exclusive prelaunch edition.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 shadow">
                <FallbackImage
                  src="/author-hero.jpg"
                  alt="Author - Emmex Fason"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Emmex Fason</div>
                <div className="text-sm text-white/80">Author • Storyteller</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl transform transition-all duration-500 hover:-translate-y-3">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
                <FallbackImage
                  src="/author-hero.jpg"
                  alt="Author large"
                  width={640}
                  height={640}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -left-8 -bottom-10 hidden lg:block">
                <div className="bg-[#171717]/70 backdrop-blur-md border border-white/6 rounded-2xl p-4 w-72 shadow-lg -translate-y-6">
                  <div className="text-sm text-white/90 font-semibold">New Release</div>
                  <div className="mt-1 text-lg font-bold">Vengeful Vow</div>
                  <div className="mt-2 text-sm text-white/80">
                    Prelaunch — limited signed copies. Be first in line.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {prelaunch && (
          <section className="mb-10">
            <article
              className="relative overflow-visible flex flex-col lg:flex-row items-stretch gap-6 p-8 rounded-3xl border border-white/6 bg-[#171717]/40 hover:translate-y-[-6px] transition-transform duration-500"
              aria-labelledby={`pre-${prelaunch.id}`}
            >
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none -z-10"
                aria-hidden
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,90,255,0.06), rgba(120,60,255,0.04), rgba(255,106,0,0.04))",
                }}
              />
              <div className="w-full lg:w-2/3 z-10 px-3 lg:px-8 py-4 flex flex-col justify-center">
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-sm font-semibold text-white/95 bg-gradient-to-r from-pink-500 to-violet-500 shadow-sm">
                    PRELAUNCH
                  </span>
                  <span className="text-sm text-white/80">Exclusive • Limited</span>
                </div>
                <h2 id={`pre-${prelaunch.id}`} className="mt-2 text-3xl lg:text-4xl font-extrabold leading-tight">
                  {prelaunch.title}
                </h2>
                {prelaunch.subtitle && (
                  <div className="mt-2 text-md text-white/85">{prelaunch.subtitle}</div>
                )}
                <p className="mt-4 text-white/85 max-w-xl">
                  {prelaunch.description}
                </p>
                <div className="mt-6">
                  <div className="text-sm text-white/80">Author</div>
                  <div className="font-semibold">Pastor Samuel Oluwole Akinbo</div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 z-10 flex flex-col items-center justify-center px-3 py-6">
                <div className="w-full overflow-visible">
                  <div className="relative w-full rounded-xl transform transition duration-700 hover:scale-[1.04] hover:rotate-[-2deg] hover:translate-y-[-6px]">
                    <FallbackImage
                      src={prelaunch.cover}
                      alt={prelaunch.title}
                      width={520}
                      height={760}
                      className="object-cover w-full h-[520px] rounded-xl shadow-2xl"
                    />
                    <div className={`${styles.neonHalo} absolute -inset-2 rounded-xl -z-10`} />
                  </div>
                </div>
                <a
                  href={prelaunch.link}
                  className={`${styles.preorderNeon} mt-6 relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-white shadow-xl transition-all duration-300`}
                >
                  <span className="relative z-10">Preorder Now</span>
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          </section>
        )}
        <section className="space-y-10 mb-16">
          {nonPre.map((book) => (
            <article
              key={book.id}
              className="group relative flex flex-col lg:flex-row items-center gap-6 p-6 rounded-2xl border border-white/6 bg-[#171717]/20 hover:-translate-y-2 transition-transform duration-400"
            >
              <div className="w-full lg:w-2/3 text-left z-10">
                <h3 className="text-2xl lg:text-3xl font-bold">{book.title}</h3>
                {book.subtitle && <div className="mt-1 text-sm text-white/80">{book.subtitle}</div>}
                <p className="mt-3 text-white/85 max-w-xl">{book.description}</p>
                <div className="mt-6 text-sm text-white/80">
                  <span className="font-semibold">Author: </span>Emmex Fason
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex flex-col items-center">
                <div className="overflow-hidden rounded-xl transform transition duration-500 group-hover:scale-105">
                  <FallbackImage
                    src={book.cover}
                    alt={book.title}
                    width={420}
                    height={600}
                    className="object-cover w-full h-80 rounded-lg"
                  />
                </div>
                <a
                  href={book.link}
                  className="mt-4 inline-flex items-center gap-3 bg-white text-[#171717] font-semibold px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  Order Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>
        <section aria-label="Other books carousel" className="mb-12">
          <h3 className="text-2xl font-bold mb-6">More by the author</h3>
          <div ref={carouselRef} className="relative w-full overflow-hidden">
            <div className="flex gap-6 w-max py-4 px-2">
              {BOOKS.map((b) => (
                <div key={`card-${b.id}`} className="min-w-[260px] flex-shrink-0 bg-[#171717]/60 rounded-2xl p-4 shadow-lg">
                  <div className="rounded-lg overflow-hidden mb-3">
                    <FallbackImage
                      src={b.cover}
                      alt={b.title}
                      width={260}
                      height={360}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{b.title}</div>
                    <div className="text-sm text-white/80 mt-1">{b.subtitle ?? "By Emmex Fason"}</div>
                    <a
                      href={b.link}
                      className="mt-3 inline-flex items-center gap-2 bg-white text-[#171717] px-3 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                      View
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-2 -translate-y-1/2">
              <button
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  el.scrollBy({ left: -260, behavior: "smooth" });
                }}
                className="bg-white/8 hover:bg-white/12 p-2 rounded-full"
                aria-label="Scroll left"
              >
                ◀
              </button>
            </div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2">
              <button
                onClick={() => {
                  const el = carouselRef.current;
                  if (!el) return;
                  el.scrollBy({ left: 260, behavior: "smooth" });
                }}
                className="bg-white/8 hover:bg-white/12 p-2 rounded-full"
                aria-label="Scroll right"
              >
                ▶
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}