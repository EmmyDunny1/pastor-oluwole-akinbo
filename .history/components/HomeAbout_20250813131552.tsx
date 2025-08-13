'use client'

import Link from "next/link";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001F54]">
            About Pastor Oluwole Akinbo
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A man of faith, love, and purpose whose life has been dedicated to serving God and humanity.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-0 pb-[66%] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/others/Bio.jpg"
                alt="Pastor Oluwole Akinbo"
                fill
                className="o"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001F54] mb-4">
              A Life Devoted to God & Humanity
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Pastor Oluwole Akinbo’s journey is one of faith, love, and leadership. 
              His ministry has touched countless lives, spreading the gospel and hope 
              across nations. With decades of dedication, he continues to inspire 
              people to walk in the truth and love of Christ.
            </p>
            <Link
              href="/Biography"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
            >
              Read Full Biography →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
