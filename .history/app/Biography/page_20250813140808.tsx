"use client";

import Image from "next/image";
import { Quicksand, Inter } from "next/font/google";

// Google Fonts
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "600", "700"] });
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
            <h1 className={`${quicksand.className} text-4xl md:text-6xl font-extrabold mb-4`}>
              Biography of Pastor Oluwole Akinbo
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Celebrating a life of faith, dedication, and unwavering service to God and humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Biography & Gallery Side-by-Side on lg+ */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-12">
        {/* Biography Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className={`${quicksand.className} text-3xl font-bold text-[#003366]`}>
              Early Life & Calling
            </h2>
            <p className="text-lg leading-relaxed text-justify">
             About Pastor Samuel Oluwole Akinbo
Pastor Samuel Oluwole Okanlawon Akinbo is a seasoned minister of the gospel, teacher of the Word, and a respected leader within His Coming Evangelical Church International Inc. With a ministry spanning over four decades, he has faithfully served in various leadership capacities across Nigeria, including as District Overseer and Zonal Pastor in Oyo, Ekiti, Ondo, Lagos, and Ibadan. <br />

Born on July 27, 1955, in Abeokuta, Ogun State, Pastor Akinbo had a humble beginning and a strong Anglican upbringing. He encountered Christ in 1974 and fully rededicated his life to God in 1979, answering the divine call into ministry in 1980. He pursued theological training at Voice of His Coming Theological Bible College and The Way of Peace Bible College, earning an Advanced Diploma and a B.Th. in Theology, respectively. He also underwent leadership development through the John C. Maxwell Million Leader Mandate and other pastoral programs. <br />

Known for his integrity, discipline, and passion for sound teaching, Pastor Akinbo has been instrumental in nurturing leaders, planting churches, and strengthening believers through in-depth Bible exposition and prayer. He has served as a lecturer, Bible college provost, and chairman of several ministerial committees within the church. <br />

Pastor Akinbo is the author of four Christian books, including Systematic and Expository Teaching on the Book of Nehemiah, Asiri Idile Alayo (Yoruba), The Secret of a Happy Home, and The Old Testament Saint. His new book will be launched during his retirement service on August 30, 2025. <br />

He is married to Evangelist Elizabeth Oluwasola Akinbo, and together they are blessed with wonderful children. <br />


As he retires from active pastoral ministry, Pastor Akinbo continues to inspire many through his writings, testimonies of faith, and a life devoted to God&s service.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`${quicksand.className} text-3xl font-bold text-[#003366]`}>
              Ministry & Impact
            </h2>
            <p className="text-lg leading-relaxed">
              Over the decades, Pastor Akinbo has led countless crusades, founded ministries,
              and mentored emerging leaders. His teachings inspire transformation, while his
              humanitarian projects have brought hope to thousands.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`${quicksand.className} text-3xl font-bold text-[#003366]`}>
              Legacy
            </h2>
            <p className="text-lg leading-relaxed">
              Beyond the pulpit, his life’s work stands as a testament to steadfast faith,
              integrity, and love. This celebration is not just about his achievements, but
              the countless lives that bear the mark of his ministry.
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
