import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Celebration Title */}
        <div>
          <h2 className="text-xl font-semibold text-yellow-500">
            Celebration of Dad
          </h2>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
            Honoring the life, impact, and legacy of Pastor Oluwole Akinbo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/Books" className="hover:text-yellow-400">
                Books
              </Link>
            </li>
            <li>
              <Link href="/Gift" className="hover:text-yellow-400">
                Gift
              </Link>
            </li>
            <li>
              <Link href="/Testimonies" className="hover:text-yellow-400">
                Testimonies
              </Link>
            </li>
            <li>
              <Link href="/AccountNumTransfer" className="hover:text-yellow-400">
                Direct Transfer
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            <a
              href="mailto:contact@example.com"
              className="hover:text-yellow-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Celebration of Dad. All rights reserved.
      </div>
    </footer>
  );
}
