"use client";
import { useState } from "react";
import { sendMessage } from "@/lib/messages/";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendMessage(name, email, message);
    if (result.success) {
      setStatus("✅ Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("❌ Failed to send");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Send
      </button>
      <p>{status}</p>
    </form>
  );
}
