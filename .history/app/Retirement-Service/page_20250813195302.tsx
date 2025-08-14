"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetirementServicePage() {
  return (
    <div className="bg-gray-50 text-gray-900 font-serif">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#001F54] to-[#003366] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Celebrating the Retirement Service of Pastor Oluwole Akinbo
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Join us in honoring decades of unwavering faith, leadership, and service to
              God and humanity. This is more than a retirement — it’s a legacy of love and
              impact that will echo for generations.
            </p>
            <Link
              href="#celebrate"
              className="bg-[#00A676] hover:bg-[#00915f] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Share in Our Celebration
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/celebrant.jpg"
              alt="Pastor Oluwole Akinbo"
              width={500}
              height={700}
              className="rounded-2xl shadow-2xl object-cover h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-[#003366]">Event Details</h2>
          <p className="text-lg">📅 <strong>Date:</strong> 21st September 2025</p>
          <p className="text-lg">📍 <strong>Venue:</strong> Grace Cathedral, Lagos</p>
          {/* Add to Calendar Link */}
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Retirement+Service+of+Pastor+Oluwole+Akinbo&dates=20250921T090000Z/20250921T120000Z&details=Join+us+for+the+retirement+service+celebration!&location=Grace+Cathedral,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-[#003366] px-5 py-2 rounded-lg font-medium hover:bg-yellow-400 transition"
          >
            Add to Google Calendar
          </a>
          {/* Google Map */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.984258233046!2d3.379205315333125!3d6.524379324150353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4a23e13f5db%3A0x8a57b4d0ee6a5e7!2sLagos!5e0!3m2!1sen!2sng!4v1678901234567!5m2!1sen!2sng"
              width="100%"
              height="350"
              loading="lazy"
              className="rounded-xl shadow-lg border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Participate */}
      <section
        id="celebrate"
        className="bg-gradient-to-r from-[#001F54] to-[#003366] text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-bold">Be Part of This Historic Moment</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Whether you can join us in person or not, your words and gifts will mean the
            world to Pastor Akinbo. Share your heartfelt message or give a gift to honor his
            remarkable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/testimony-form"
              className="bg-[#00A676] hover:bg-[#00915f] px-6 py-3 rounded-lg shadow-lg text-lg font-semibold"
            >
              Share Your Testimony
            </Link>
            <Link
              href="/Gift"
              className="bg-[#FFD700] hover:bg-yellow-400 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold text-[#003366]"
            >
              Give a Gift
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
