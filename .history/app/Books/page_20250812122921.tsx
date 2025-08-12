// components/PrelaunchHero.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type Book = {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  cover: string; // path under /public
  link: string;
  prelaunch?: boolean;
};

const placeholder = "/books/placeholder.jpg";

const books: Book[] = [
  // author/main books come first
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
    title: "The Last Heir",
    subtitle: "A novel by Emmex Fason",
    description:
      "A family saga of hidden truths, legacy, and the fight to protect what matters most.",
    cover: "/books/last-heir.jpg",
    link: "/order/the-last-heir",
  },

  // prelaunch - distinctive and larger
  {
    id: 99,
    title: "Vengeful Vow (PRELAUNCH)",
    subtitle: "Exclusive Prelaunch — Emmex Fason",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Prelaunch copies include exclusive bonus content, author notes and signed inserts. Limited quantities.",
    cover: "/books/vengeful-vow.jpg",
    link: "/preorder/vengeful-vow",
    prelaunch: true,
  },
];

function FallbackImg({
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
    // unoptimized used to avoid remote loader issues in dev; remove if you use Next image optimization
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 520}
      height={height ?? 720}
      className={className}
      onError={() => setImgSrc(placeholder)}
      unoptimized
    />
  );
}

export default function PrelaunchHero(): TSX.Element {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(90deg,#171717_0%,#2a0b44_30%,#7b1fa2_60%,#ff6a00_100%)] text-white">
      {/* Particles (CSS-only) */}
      <div className="absolute inset-0 -z-10">
        {/* subtle animated streak behind everything */}
        <div className="absolute inset-0 opacity-30 animate-gradient-slow"></div>

        {/* particle layer */}
        <div className="absolute inset-0 pointer-events-none">
          {/* generate a handful of particles */}
          {Array.from({ length: 30 }).map((_, i) => {
            const size = Math.random() * 6 + 4;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 8;
            const duration = 8 + Math.random() * 12;
            const hue = Math.random() * 360;
            return (
              <span
                key={i}
                style={
                  {
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    boxShadow: `0 0 ${2 + size / 2}px hsla(${hue},90%,60%,0.9)`,
                    background: `hsla(${hue},90%,60%,0.85)`,
                  } as React.CSSProperties
                }
                className="absolute rounded-full opacity-70 animate-particle"
                aria-hidden
              />
            );
          })}
        </div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Author / Hero top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Text (left) */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              My Books
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              Welcome to my collection — stories of love, power, and the choices
              that change lives. Browse the catalog below and secure your copy —
              the prelaunch edition is waiting for early readers.
            </p>

            {/* Author info block overlapping image when on large screens */}
            <div className="mt-8 inline-flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg">
                <FallbackImg
                  src="/author.jpg"
                  alt="Author - Emmex Fason"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold">Emmex Fason</div>
                <div className="text-sm text-white/80">
                  Author • Storyteller • Curator of heart-stopping tales
                </div>
              </div>
            </div>
          </div>

          {/* Large author photo on right (behind the text overlap effect) */}
          <div className="relative z-0 flex justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg transform transition-all duration-700 hover:-translate-y-3">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
                <FallbackImg
                  src="/author-hero.jpg"
                  alt="Author large"
                  width={520}
                  height={520}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* overlapping small card */}
              <div className="absolute -left-10 -bottom-8 hidden lg:block">
                <div className="bg-white/6 backdrop-blur-md border border-white/6 rounded-2xl p-4 w-72 shadow-lg transform -translate-y-6">
                  <div className="text-sm text-white/90 font-semibold">
                    New Release
                  </div>
                  <div className="mt-1 text-lg font-bold">Vengeful Vow</div>
                  <div className="mt-2 text-sm text-white/80">
                    Prelaunch — limited signed copies. Be first in line.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Books list: text-left, image-right, order button below image */}
        <div className="space-y-12">
          {/* Non-prelaunch books first (filter) */}
          {books
            .filter((b) => !b.prelaunch)
            .map((book) => (
              <article
                key={book.id}
                className="group relative flex flex-col lg:flex-row items-center gap-6 p-6 rounded-2xl border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] hover:-translate-y-3 transition-transform duration-500"
              >
                {/* LEFT: text */}
                <div className="w-full lg:w-2/3 text-left z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold">{book.title}</h3>
                  {book.subtitle && (
                    <div className="mt-1 text-sm text-white/80">{book.subtitle}</div>
                  )}
                  <p className="mt-4 text-white/85 max-w-2xl">{book.description}</p>

                  {/* small author info duplicated here for clarity */}
                  <div className="mt-6 text-sm text-white/80">
                    <span className="font-semibold">Author: </span>Emmex Fason
                  </div>
                </div>

                {/* RIGHT: image + order below */}
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                  <div className="w-full">
                    <div className="overflow-hidden rounded-xl transform transition duration-500 group-hover:scale-105 group-hover:translate-y-[-4px]">
                      <FallbackImg
                        src={book.cover}
                        alt={book.title}
                        width={420}
                        height={600}
                        className="object-cover w-full h-80"
                      />
                    </div>
                  </div>

                  <a
                    href={book.link}
                    className="mt-4 inline-flex items-center gap-3 bg-white text-[#171717] font-semibold px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Order ${book.title}`}
                  >
                    Order Now
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </article>
            ))}

          {/* PRELAUNCH - BIG & DISTINCTIVE */}
          {books
            .filter((b) => b.prelaunch)
            .map((book) => (
              <article
                key={book.id}
                className="relative overflow-visible flex flex-col lg:flex-row items-stretch gap-6 p-8 rounded-3xl border-2 border-transparent bg-[linear-gradient(90deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] hover:-translate-y-4 transition-transform duration-500"
                aria-labelledby={`pre-${book.id}`}
              >
                {/* neon outer glow (faint) */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none"
                     aria-hidden>
                  <div className="absolute -inset-1 rounded-3xl blur-[18px] opacity-65"
                       style={{ background:
                         "linear-gradient(90deg, rgba(255,90,255,0.25), rgba(120,60,255,0.18), rgba(255,100,50,0.18))" }}
                  />
                </div>

                {/* LEFT: BIG TEXT content */}
                <div className="w-full lg:w-2/3 z-10 px-3 lg:px-8 py-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold text-white/95 bg-gradient-to-r from-pink-500 to-violet-500 shadow-sm">
                      PRELAUNCH
                    </span>
                    <span className="text-sm text-white/80">Exclusive • Limited</span>
                  </div>

                  <h2 id={`pre-${book.id}`} className="mt-4 text-3xl lg:text-4xl font-extrabold leading-tight">
                    {book.title}
                  </h2>

                  {book.subtitle && (
                    <div className="mt-2 text-lg text-white/85">{book.subtitle}</div>
                  )}

                  <p className="mt-4 text-white/85 max-w-2xl">{book.description}</p>

                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <div className="text-sm text-white/80">Author</div>
                      <div className="font-semibold">Emmex Fason</div>
                    </div>

                    {/* glowing small CTA inline */}
                    <a
                      href={book.link}
                      className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white"
                      aria-label="Preorder Now"
                    >
                      {/* neon button background */}
                      <span className="absolute inset-0 rounded-full -z-10 neon-preorder"></span>
                      <span className="relative z-10">Preorder Now</span>
                      <FaArrowRight className="relative z-10" />
                    </a>
                  </div>
                </div>

                {/* RIGHT: BIG IMAGE + preorder button below */}
                <div className="w-full lg:w-1/3 z-10 flex flex-col items-center justify-center px-3 py-6">
                  <div className="w-full overflow-visible">
                    <div className="relative w-full rounded-xl transform transition duration-700 hover:scale-[1.045] hover:rotate-[-2deg] hover:translate-y-[-6px]">
                      <FallbackImg
                        src={book.cover}
                        alt={book.title}
                        width={520}
                        height={760}
                        className="object-cover w-full h-[520px] rounded-xl shadow-2xl"
                      />
                      {/* neon halo behind the cover */}
                      <div className="absolute -inset-2 rounded-xl -z-10 neon-halo" />
                    </div>
                  </div>

                  {/* big continuous neon Preorder button below image */}
                  <a
                    href={book.link}
                    className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-white shadow-xl preorder-neon"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Preorder"
                  >
                    Preorder Now
                    <FaArrowRight />
                  </a>
                </div>
              </article>
            ))}
        </div>
      </div>

      {/* Styles - scoped with styled-jsx so it's self-contained */}
      <style jsx>{`
        /* slow animated gradient overlay for section */
        .animate-gradient-slow {
          background: linear-gradient(
            90deg,
            rgba(255, 90, 255, 0.06),
            rgba(120, 60, 255, 0.04),
            rgba(255, 106, 0, 0.04)
          );
          background-size: 300% 300%;
          animation: gradientShift 20s ease-in-out infinite;
          mix-blend-mode: overlay;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* particle animation */
        .animate-particle {
          animation-name: floatParticle;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-30px) translateX(10px) scale(1.1);
            opacity: 0.95;
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.85;
          }
        }

        /* neon halo behind book cover */
        .neon-halo {
          box-shadow: 0 0 40px 10px rgba(255, 80, 255, 0.08),
            0 0 80px 20px rgba(120, 60, 255, 0.06),
            0 0 160px 30px rgba(255, 110, 60, 0.04);
        }

        /* PREORDER neon pulsing button */
        .preorder-neon {
          position: relative;
          overflow: visible;
          z-index: 20;
        }
        .preorder-neon::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            rgba(255, 90, 255, 0.4),
            rgba(120, 60, 255, 0.35),
            rgba(255, 110, 60, 0.35)
          );
          filter: blur(12px);
          opacity: 0.9;
          transform: scale(1);
          z-index: -2;
          transition: transform 0.3s ease;
          animation: neonPulse 1.8s ease-in-out infinite;
        }
        @keyframes neonPulse {
          0% {
            transform: scale(0.98);
            filter: blur(8px);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.06);
            filter: blur(18px);
            opacity: 1;
          }
          100% {
            transform: scale(0.98);
            filter: blur(8px);
            opacity: 0.8;
          }
        }

        /* small neon accent behind the inline "Preorder" button */
        .neon-preorder {
          display: block;
          inset: 0;
          border-radius: 9999px;
          filter: blur(6px);
          animation: neonPulseSlow 2.8s ease-in-out infinite;
        }
        @keyframes neonPulseSlow {
          0% {
            transform: scale(0.98);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
          100% {
            transform: scale(0.98);
            opacity: 0.7;
          }
        }

        /* assist for responsive text overlapping the author photo */
        @media (min-width: 1024px) {
          /* make the overlapping small card pop a bit more on large screens */
        }
      `}</style>
    </section>
  );
}
