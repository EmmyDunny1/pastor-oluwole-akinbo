"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  subtitle?: string;
  description: any;
  cover: string;
  link: string;
  prelaunch?: boolean;
};

const BOOKS: Book[] = [
  {
    id: 1,
    title: "The Book Of Nehemiah",
    subtitle: "Book By Pastor Akinbo",
    description:
      "A breathtaking tale of betrayal, romance, and redemption that pulls you into the streets of Paris and refuses to let go.",
    cover: "/books/Book_Of_Neh.png",
    link: "/Books",
  },
  {
    id: 2,
    title: "The Secret Of A Happy Home",
    subtitle: "",
    description:
      "A family saga of hidden truths, legacy, and the fight to protect what matters most.",
    cover: "/books/Secrets_Of__HM.png",
    link: "/Books",
  },
  {
    id: 99,
    title: "OLD TESTAMENT SAINTS",
    subtitle: "Exclusive Prelaunch — Pastor Akinbo",
    description: ""This book is the first part of the Systematic and Expository Teachings on the Old Testament Saints, beginning from Abraham the Father of  Faith and God’s Friend. It is always a good confession to sing: Abraham’s blessings are mine (2x). I am blessed in the morning, in the noon, and in the evening.  Abraham’s blessings are mine without actually knowing what it means.",
    
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
  const [imgSrc, setImgSrc] = React.useState(src);
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

export default function BookLaunch(): React.ReactNode {
  const prelaunch = BOOKS.find((b) => b.prelaunch);
  const nonPre = BOOKS.filter((b) => !b.prelaunch);

  if (!prelaunch) return null;

  return (
    <section className="mb-12 bg-gradient-to-b from-[#171717] to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Prelaunch Section */}
        <article
          className="relative overflow-visible flex flex-col lg:flex-row items-stretch gap-6 p-8 rounded-3xl border border-white/10 bg-[#171717]/40 hover:translate-y-[-6px] transition-transform duration-500"
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
          {/* Text Content */}
          <div className="w-full lg:w-2/3 z-10 px-3 lg:px-8 py-4 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-sm md:text-2xl font-semibold text-white/95 bg-gradient-to-r from-pink-500 to-violet-500 shadow-sm">
                BOOK LAUNCH - 30TH AUG
              </span>
            </div>
            <h2
              id={`pre-${prelaunch.id}`}
              className="mt-2 text-3xl lg:text-4xl font-extrabold leading-tight"
            >
              {prelaunch.title}
            </h2>
            {prelaunch.subtitle && (
              <div className="mt-2 text-md text-white/85">
                {prelaunch.subtitle}
              </div>
            )}
            <p className="mt-4 text-white/85 max-w-xl">
              {prelaunch.description}
            </p>
            <div className="mt-6">
              <div className="text-sm text-white/80">Author</div>
              <div className="font-semibold">
                Pastor Samuel Oluwole Akinbo
              </div>
            </div>
          </div>

          {/* Book Cover + CTA */}
          <div className="w-full lg:w-1/3 z-10 flex flex-col items-center justify-center px-3 py-6">
            <div className="w-full overflow-visible">
              <div className="relative w-full transform transition duration-700 hover:scale-[1.04] hover:rotate-[-2deg] hover:translate-y-[-6px]">
                <FallbackImage
                  src={prelaunch.cover}
                  alt={prelaunch.title}
                  width={920}
                  height={760}
                  className="object-cover w-full h-[520px] shadow-2xl rounded-xl"
                />
                {/* Neon Halo */}
                <div className="absolute -inset-2 rounded-xl -z-10 bg-gradient-to-r from-pink-500/30 via-violet-500/30 to-orange-500/30 blur-2xl opacity-70 animate-pulse" />
              </div>
            </div>
            {/* Neon Button */}
            <Link
              href={prelaunch.link}
              className="mt-6 relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-white shadow-[0_0_25px_rgba(236,72,153,0.6)] bg-gradient-to-r from-pink-600 via-violet-600 to-orange-500 hover:scale-105 transition-transform"
            >
              <span className="relative z-10">Preorder Now</span>
              <svg
                className="w-5 h-5 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </article>

        {/* Other Books Cards */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">More by the Author</h3>
            <Link
              href="/Books"
              className="text-white/90 font-semibold hover:text-white transition-colors"
            >
              View All Books
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonPre.map((b) => (
              <div
                key={`card-${b.id}`}
                className="min-w-[260px] bg-[#171717]/60 rounded-2xl p-4 shadow-lg"
              >
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
                  <div className="text-sm text-white/80 mt-1">
                    {b.subtitle ?? "By Emmex Fason"}
                  </div>
                  <Link
                    href={b.link}
                    className="mt-3 inline-flex items-center gap-2 bg-white text-[#171717] px-3 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    View
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="#171717"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
