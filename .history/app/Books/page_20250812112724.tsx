import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";


const books = [
  {
    title: "Vengeful Vow",
    description:
      "An electrifying billionaire romance full of betrayal, suspense, and a vow that changes everything. This special pre-launch edition is for the earliest supporters—secure your copy now before official release.",
    cover: "/books/vengeful-vow.jpg",
    link: "/order/vengeful-vow",
    prelaunch: true,
  },
  {
    title: "Shadows of Paris",
    description:
      "A gripping tale of love, mystery, and the hidden secrets of Paris. A journey that will make your heart race and your soul ache.",
    cover: "/books/shadows-of-paris.jpg",
    link: "/order/shadows-of-paris",
    prelaunch: false,
  },
  {
    title: "The Last Heir",
    description:
      "A power struggle for an empire. Love collides with ambition in this explosive family saga.",
    cover: "/books/last-heir.jpg",
    link: "/order/the-last-heir",
    prelaunch: false,
  },
];

export default function BooksPage() {
  return (
    <div className="bg-gray-800 text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">My Books</h1>
          <p className="text-gray-300 leading-relaxed">
            Welcome to my literary world, where stories breathe life into dreams.
            Each book I’ve written is a journey—crafted with passion, suspense, and
            a deep dive into the human heart. Explore the tales below and let them
            take you somewhere unforgettable.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/author.jpg"
            alt="Author"
            width={350}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Books Section */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-12">
        {books.map((book) => (
          <div
            key={book.title}
            className={`bg-[#171717] rounded-xl shadow-lg p-6 transform transition hover:-translate-y-1 hover:shadow-2xl`}
          >
            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={book.cover}
                alt={book.title}
                width={400}
                height={500}
                className="rounded-lg transform transition duration-500 hover:scale-105 hover:brightness-110"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{book.title}</h2>
            <p className="text-gray-300 mb-4">{book.description}</p>
            <a
              href={book.link}
              className={`group inline-flex items-center gap-2 px-6 py-3 font-medium rounded-md transition-all duration-300 ${
                book.prelaunch
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
            >
              {book.prelaunch ? "Pre-Order Now" : "Order Now"}
              < className="w-5 h-5 transform transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
