'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function RetirementService() {
  return (
    <section className="bg-[#F5F5F5] min-h-screen font-[Poppins]">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/others/retirement-hero.jpg"
          alt="Retirement Celebration"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-[Merriweather] font-bold drop-shadow-lg">
            Celebrating a Lifetime of Service
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Join us as we honor Pastor Oluwole Akinbo for his unwavering faith, dedication,
            and impact on countless lives.
          </p>
        </div>
      </div>

      {/* About the Event */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-[Merriweather] text-[#001F54] mb-6">
            A Remarkable Journey
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            For decades, Pastor Oluwole Akinbo has served with passion, humility, and love —
            guiding many in faith and leading with wisdom. His legacy is one of devotion,
            compassion, and steadfast leadership.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This retirement celebration is a moment for us all to come together in joy, to
            reflect on the years of faithful service, and to wish him a fulfilling new
            chapter ahead.
          </p>
        </div>
        <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/others/Bio.jpg"
            alt="Pastor Oluwole Akinbo"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Program Details */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-[Merriweather] text-[#001F54] text-center mb-12">
            Celebration Program
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-lg shadow-md bg-[#F5F5F5]">
              <h4 className="text-xl font-semibold mb-2">Thanksgiving Service</h4>
              <p className="text-gray-700">Sunday, 15th September 2025 – 10:00 AM</p>
              <p className="text-gray-600">First Baptist Church, Lagos</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-[#F5F5F5]">
              <h4 className="text-xl font-semibold mb-2">Tributes & Speeches</h4>
              <p className="text-gray-700">Friends, Family & Colleagues share memories</p>
            </div>
            <div className="p-6 border rounded-lg shadow-md bg-[#F5F5F5]">
              <h4 className="text-xl font-semibold mb-2">Reception</h4>
              <p className="text-gray-700">Light refreshments & entertainment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#001F54] py-16 text-center text-white">
        <h3 className="text-3xl font-[Merriweather] mb-6">
          Join the Celebration
        </h3>
        <p className="mb-8 max-w-2xl mx-auto">
          Share your love, prayers, and good wishes for Pastor Oluwole Akinbo as we mark
          this incredible milestone together.
        </p>
        <Link
          href="/share-tribute"
          className="bg-[#28A745] hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
        >
          Share Your Tribute →
        </Link>
      </div>
    </section>
  );
}
