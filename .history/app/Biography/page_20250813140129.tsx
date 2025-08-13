"use client";

import Image from "next/image";
import { Quicksand, Inter } from "next/font/google";

// Google Fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function AboutPage() {
  return (
    <div className={`${inter.className} bg-gray-50 text-gray-900`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#001F54] to-[#003366] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left md:flex md:items-center md:gap-8">
          {/* Image beside heading */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <Image
              src="/others/Bio.jpg" // same image used in HomeAbout
              alt="Pastor Oluwole Akinbo"
              width={250}
              height={250}
              className="rounded-full shadow-lg border-4 border-white"
            />
          </div>

          {/* Heading and subtext */}
          <div>
            <h1
              className={`${quicksand.className} text-4xl md:text-6xl font-extrabold mb-4`}
            >
              Biography of Pastor Oluwole Akinbo
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Celebrating a life of faith, dedication, and unwavering service to
              God and humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Biography & Gallery Side-by-Side on lg+ */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Biography Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2
              className={`${quicksand.className} text-3xl font-bold text-[#003366]`}
            >
              Early Life & Calling
            </h2>
           F
          </div>

          <div className="space-y-4">
            <h2
              className={`${quicksand.className} text-3xl font-bold text-[#003366]`}
            >
              Ministry & Impact
            </h2>
            <p className="text-lg leading-relaxed">
              Over the decades, Pastor Akinbo has led countless crusades,
              founded ministries, and mentored emerging leaders. His teachings
              inspire transformation, while his humanitarian projects have
              brought hope to thousands.
            </p>
          </div>

          <div className="space-y-4">
            <h2
              className={`${quicksand.className} text-3xl font-bold text-[#003366]`}
            >
              Legacy
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond the pulpit, his life’s work stands as a testament to
              steadfast faith, integrity, and love. This celebration is not just
              about his achievements, but the countless lives that bear the mark
              of his ministry.
            </p>
          </div>
        </div>

        {/* Gallery beside biography */}
        <div className="mt-10 lg:mt-0">
          <h2
            className={`${quicksand.className} text-3xl font-bold text-[#003366] mb-6 text-center lg:text-left`}
          >
            Moments in Service
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <Image
                  src={`/gallery/${img}.jpg`}
                  alt={`Gallery ${img}`}
                  width={500}
                  height={350}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
