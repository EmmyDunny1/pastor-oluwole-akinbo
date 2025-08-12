"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const books = [
  {
    id: 1,
    title: "Pre-Launch: The Power of Faith",
    description:
      "Be among the first to access this life-changing book that unveils deep spiritual truths. Secure your copy now before official release.",
    img: "/images/book1.jpg",
    link: "https://prelaunch-link.com",
    prelaunch: true,
  },
  {
    id: 2,
    title: "Walking in Divine Purpose",
    description:
      "Discover practical biblical principles to help you live a life of purpose and fulfillment.",
    img: "/images/book2.jpg",
    link: "https://order-link.com",
  },
  {
    id: 3,
    title: "Faith that Moves Mountains",
    description:
      "An inspiring guide to building unshakable faith that overcomes life’s challenges.",
    img: "/images/book3.jpg",
    link: "https://order-link.com",
  },
];

export default function BooksPage() {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">My Books</h1>
          <p className="text-lg text-gray-700">
            Dive into my collection of spiritually enriching books designed to
            inspire, uplift, and transform your walk with God.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/author.jpg"
            alt="Author"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Books List */}
      <div className="space-y-12">
        {books.map((book) => (
          <div
            key={book.id}
            className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] ${
              book.prelaunch ? "bg-yellow-50" : "bg-white"
            }`}
          >
            {/* Book Image */}
            <div className="flex-shrink-0 w-full md:w-1/3 group relative">
              <Image
                src={book.img}
                alt={book.title}
                width={300}
                height={400}
                className="rounded-lg shadow-md transition-all duration-300 group-hover:brightness-90"
              />
            </div>

            {/* Book Details */}
            <div className="flex-1">
              <h2
                className={`text-2xl font-semibold mb-3 ${
                  book.prelaunch ? "text-yellow-700" : "text-gray-800"
                }`}
              >
                {book.title}
              </h2>
              <p className="text-gray-600 mb-6">{book.description}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 text-white font-medium rounded-full transition-all duration-300 ${
                  book.prelaunch
                    ? "bg-yellow-600 hover:bg-yellow-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } group`}
              >
                {book.prelaunch ? "Pre-Order Now" : "Order Now"}
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
