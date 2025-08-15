"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Failed to send message.");
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 mb-8 text-center">
          Have a question or special request? Send us a message and we’ll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-green-500 shadow-lg"
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-sm text-gray-300 mt-4">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}
