"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#F9FAFB] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#001F54] to-[#003366] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Biography of Pastor Oluwole Akinbo
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Celebrating a life of faith, dedication, and unwavering service to God and humanity.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#001F54] border-l-4 border-[#FFD700] pl-3">
            Early Life & Calling
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Pastor Oluwole Akinbo’s journey began with an unshakable passion for sharing
            the gospel. From humble beginnings, he grew into a dynamic preacher, touching
            lives across the globe. His early years were marked by deep devotion, mentorship,
            and a hunger for divine wisdom.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#001F54] border-l-4 border-[#FFD700] pl-3">
            Ministry & Impact
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Over the decades, Pastor Akinbo has led countless crusades, founded ministries,
            and mentored emerging leaders. His teachings inspire transformation, while his
            humanitarian projects have brought hope to thousands.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-[#001F54] border-l-4 border-[#FFD700] pl-3">
            Legacy
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Beyond the pulpit, his life’s work stands as a testament to steadfast faith,
            integrity, and love. This celebration is not just about his achievements, but
            the countless lives that bear the mark of his ministry.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#001F54] mb-10">
            Moments in Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="relative overflow-hidden rounded-xl shadow-lg group border border-gray-200"
              >
                <Image
                  src={`/gallery/${img}.jpg`}
                  alt={`Gallery ${img}`}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover object-top transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
