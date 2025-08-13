'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomeRetirement() {
  return (
    <section className="bg-white py-16 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/others/retirement-hero.jpg"
            alt="Retirement Celebration"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-[Merriweather] text-[#001F54] mb-4">
            You're Invited to Celebrate With Us!
          </h2>
          <p className="text-gray-700 mb-6">
            Be part of this once-in-a-lifetime celebration as we honor Pastor Oluwole
            Akinbo’s decades of faithful service. Your presence and support mean the
            world to us.
          </p>
          <Link
            href="/retirement-service"
            className="bg-[#28A745] hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            View Celebration Details →
          </Link>
        </div>
      </div>
    </section>
  );
}
