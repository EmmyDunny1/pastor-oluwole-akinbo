// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          A Book That Changes Everything
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Discover timeless truths, inspiring stories, and a message that will leave you transformed.
          Perfect for yourself or as a heartfelt gift.
        </p>
        <div className="flex gap-4">
          <Link
            href="/buy"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Buy Now
          </Link>
          <Link
            href="/gift"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Gift to Someone
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16">
        {[
          { title: "Powerful Message", desc: "Deep insights that speak to the heart." },
          { title: "Premium Quality", desc: "Designed with elegance and printed to last." },
          { title: "Perfect for Gifting", desc: "A timeless treasure for loved ones." },
        ].map((feature, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Get Your Copy Today</h2>
        <p className="mb-6">Transform your life or touch someone else's with this inspiring book.</p>
        <Link
          href="/contact"
          className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
