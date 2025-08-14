// app/contact/page.tsx
"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col items-center py-12 px-4">
      {/* Hero */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Let’s Talk — We’re Here for You
        </h1>
        <p className="text-gray-600">
          Whether it’s about purchasing the book, gifting it, or partnership opportunities,
          we’d love to hear from you.
        </p>
      </div>

      {/* Contact Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        {submitted ? (
          <p className="text-green-600 font-semibold text-lg text-center">
            ✅ Your message has been sent! We'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        )}

        {/* Direct Contact Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">Or reach out directly:</p>
          <div className="flex justify-center gap-6 text-2xl text-green-600">
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="mailto:youremail@example.com">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
