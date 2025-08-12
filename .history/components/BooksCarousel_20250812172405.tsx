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
    title: "The Last Heir",
    subtitle: "A novel by Emmex Fason",
    description:
      "A family saga of hidden truths, legacy, and the fight to protect what matters most.",
    cover: "/books/last-heir.jpg",
    link: "/order/the-last-heir",
  },
  {
    id: 99,
    title: "Vengeful Vow (PRELAUNCH)",
    subtitle: "Exclusive Prelaunch — Emmex Fason",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Prelaunch copies include bonus content and signed inserts. Limited quantities.",
    cover: "/books/vengeful-vow.jpg",
    link: "/preorder/vengeful-vow",
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
  return React.createElement(Image, {
    src: imgSrc,
    alt,
    width: width ?? 600,
    height: height ?? 900,
    className,
    onError: () => setImgSrc(placeholder),
  });
}

export default function BooksPage() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    let scrollAmount = 0;
    const step = 1;
    const max = el.scrollWidth - el.clientWidth;
    const interval = window.setInterval(() => {
      if (!el) return;
      scrollAmount += step;
      if (scrollAmount >= max) {
        el.scrollTo({ left: 0, behavior: "smooth" });
        scrollAmount = 0;
      } else {
        el.scrollLeft = scrollAmount;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const prelaunch = BOOKS.find((b) => b.prelaunch);
  const nonPre = BOOKS.filter((b) => !b.prelaunch);

  return React.createElement(
    "main",
    { className: "min-h-screen bg-gradient-to-b from-[#171717] to-gray-800 text-white" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-6 py-20" },
      React.createElement(
        "section",
        { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12" },
        React.createElement(
          "div",
          { className: "relative z-10" },
          React.createElement(
            "h1",
            { className: "text-4xl md:text-5xl font-extrabold leading-tight mb-4" },
            "My Books"
          ),
          React.createElement(
            "p",
            { className: "text-lg text-white/90 max-w-xl" },
            "Welcome — a curated collection of stories that explore love, power, and sacrifice. Scroll down to see the catalog and secure the exclusive prelaunch edition."
          ),
          React.createElement(
            "div",
            { className: "mt-6 flex items-center gap-4" },
            React.createElement(
              "div",
              { className: "w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 shadow" },
              React.createElement(FallbackImage, {
                src: "/author-hero.jpg",
                alt: "Author - Emmex Fason",
                width: 56,
                height: 56,
                className: "object-cover",
              })
            ),
            React.createElement(
              "div",
              null,
              React.createElement("div", { className: "font-semibold" }, "Emmex Fason"),
              React.createElement("div", { className: "text-sm text-white/80" }, "Author • Storyteller")
            )
          )
        ),
        React.createElement(
          "div",
          { className: "flex justify-end" },
          React.createElement(
            "div",
            { className: "relative w-full max-w-md lg:max-w-xl transform transition-all duration-500 hover:-translate-y-3" },
            React.createElement(
              "div",
              { className: "rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5" },
              React.createElement(FallbackImage, {
                src: "/author-hero.jpg",
                alt: "Author large",
                width: 640,
                height: 640,
                className: "object-cover w-full h-full",
              })
            ),
            React.createElement(
              "div",
              { className: "absolute -left-8 -bottom-10 hidden lg:block" },
              React.createElement(
                "div",
                { className: "bg-[#171717]/70 backdrop-blur-md border border-white/6 rounded-2xl p-4 w-72 shadow-lg -translate-y-6" },
                React.createElement("div", { className: "text-sm text-white/90 font-semibold" }, "New Release"),
                React.createElement("div", { className: "mt-1 text-lg font-bold" }, "Vengeful Vow"),
                React.createElement(
                  "div",
                  { className: "mt-2 text-sm text-white/80" },
                  "Prelaunch — limited signed copies. Be first in line."
                )
              )
            )
          )
        )
      )
      // ... Additional sections (prelaunch, non-prelaunch, carousel) would follow similarly
    )
  );
}