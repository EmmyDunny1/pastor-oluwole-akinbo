import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Celebration Title */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-green-500">
            Celebration of Dad
          </h2>
          <p className="text-gray-400 mt-1 text-sm">
            Honoring the life and legacy of Pastor Oluwole Akinbo.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-green-400">
            Home
          </Link>
          <Link href="/Books" className="hover:text-green-400">
            Books
          </Link>
          <Link href="/Gift" className="hover:text-green-400">
            Gift
          </Link>
          <Link href="/Share " className="hover:text-green-400">
            Testimonies
          </Link>
          <Link href="/DirectTransfer" className="hover:text-green-400">
            Direct Transfer
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 text-xl">
          <a
            href="mailto:oluwolleakinbo@gmail.com"
            className="hover:text-green-400"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://web.facebook.com/oluwole.akinbo.50"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaFacebook />
          </a>
        
          <a
            href="https://wa.me/2349165750991"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-3 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Celebration of Dad. All rights reserved.
      </div>
    </footer>
  );
}
