'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomeRetirement() {
  return (
    <section className="bg-gradient-to-r from-[#001F54] to-[#003366] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

        {/* Flier Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/retirement-flier.png" // Replace with your uploaded file path in /public
            alt="Pastor Oluwole Akinbo Retirement Celebration"
            width={600}
            height={800}
            className="rounded-2xl shadow-2xl border-4 border-white object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-snug font-serif">
            Celebrating a Life of Service & Impact
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Join us as we honor <span className="font-semibold">Pastor Oluwole Akinbo</span> 
            for decades of faithful service to God and humanity.  
            Come share in the joy, testimonies, and blessings of this special milestone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/retirement-service"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
            >
              View Retirement Service Details
            </Link>
            <Link
              href="/testimony-form"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#003366] px-6 py-3 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
            >
              Share Your Testimony
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
