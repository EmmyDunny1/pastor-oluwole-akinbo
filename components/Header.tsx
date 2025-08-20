"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Biography", label: "Biography" },
  { href: "/SubmitTestimony", label: "Share Testimony" },
  { href: "/Books", label: "Books" },
  { href: "/Gift", label: "Gift" },
  { href: "/Retirement-Service", label: "Retirement Service" },
  { href: "/Gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#171717] dark:bg-gray-800 text-[#171717] dark:text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="text-md md:text-lg font-bold border p-2 text-white rounded-3xl hover:text-green-400 hover:border-green-500 ">Pastor Akinbo</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-md  items-center font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href
                  ? "text-green-600 border-b-2 decoration-0  border-green-600"
                  : "hover:text-white transition"
              } ${
                label === "Gift"
                  ? "bg-gray-100 text-gray-950 px-4 py-2 rounded-md hover:bg-green-500  hover:text-green-100 transition"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
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
            className="md:hidden bg- min-h-screen border-t border-green-50 px-4 py-4 space-y-4 text-base font-medium text-left"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block w-full ${
                  pathname === href
                    ? " text-green-400 font-semibold"
                    : "hover:text-green-400 transition"
                } ${
                  label === "Gift"
                    ? "bg-gray-100 text-gray-900 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white  transition"
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
