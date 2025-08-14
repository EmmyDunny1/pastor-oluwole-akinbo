'use client';

import Image from "next/image";
import Link from "next/link";

export default function HomeRetirement() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Flier with Decorative Frame */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          <div className="p-4 bg-white rounded-3xl shadow-2xl border-4 border-[#003366] relative z-10">
            <Image
              src="/others/Retirement" // Replace with your uploaded file path
              alt="Pastor Oluwole Akinbo Retirement Celebration"
              width={550}
              height={780}
              className="rounded-2xl shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-[#003366] leading-tight font-serif">
            A Celebration of Service,  
            <span className="text-green-600"> Love </span> & Impact
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            It’s more than just a retirement — it’s a moment to honor a lifetime of unwavering
            faith, mentorship, and dedication.  
            Join us as we celebrate the remarkable journey of 
            <span className="font-semibold text-[#003366]"> Pastor Oluwole Akinbo</span>.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <p className="text-gray-800 italic">
              “For decades, he has sown seeds of love, inspired lives,  
              and built a legacy that will stand the test of time.”
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <Link
              href="/retirement-service"
              className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
            >
              📅 View Service Details
            </Link>
            <Link
              href="/testimony-form"
              className="bg-[#003366] hover:bg-[#002244] text-white px-7 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
            >
              ✍ Share Your Testimony
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
