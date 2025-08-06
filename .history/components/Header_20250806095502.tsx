"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { BiMenuAltRight, BiX, BiSun, BiMoon } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/testimonials", label: "" },
  { href: "/submit", label: "Submit Testimony" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gift", label: "Gift" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkPref = localStorage.getItem("theme") === "dark";
      setIsDarkMode(darkPref);
      document.documentElement.classList.toggle("dark", darkPref);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-[#171717] dark:text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold">Dad's Retirement</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "hover:text-blue-600 transition"
              } ${
                label === "Gift"
                  ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-xl hover:text-blue-600 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <BiSun /> : <BiMoon />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-2xl hover:text-blue-600 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <BiSun /> : <BiMoon />}
          </button>
          <div className="text-3xl cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <BiX /> : <BiMenuAltRight />}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-4 space-y-4 text-base font-medium text-left"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block w-full ${
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600 transition"
                } ${
                  label === "Gift"
                    ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
