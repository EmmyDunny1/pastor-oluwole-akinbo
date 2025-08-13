'use  client'

import Link from "next/link";
import Image from "next/image";

export default function Ho() {
  return (
    <section className="bg-gradient-to-r from-[#001F54] to-[#003366] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 relative">
          <Image
            src="/pastor-portrait.jpg"
            alt="Pastor Oluwole Akinbo"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            A Life Devoted to God & Humanity
          </h2>
          <p className="text-lg opacity-90">
            Pastor Oluwole Akinbo’s journey is one of faith, love, and leadership. 
            His ministry has touched countless lives, spreading the gospel and hope 
            across nations.
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Read Full Biography →
          </Link>
        </div>
      </div>
    </section>
  );
}
