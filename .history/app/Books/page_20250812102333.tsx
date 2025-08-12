// app/books/page.tsx
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  cover: string;
  description: string;
  link: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Vengeful Vow",
    cover: "/books/vengeful-vow.jpg",
    description:
      "A billionaire’s cold-blooded plan for revenge collides with a woman’s fight for freedom. Love wasn’t supposed to be part of the deal.",
    link: "#",
  },
  {
    id: 2,
    title: "Shadows of Paris",
    cover: "/books/shadows-of-paris.jpg",
    description:
      "In the city of lights, secrets run deep. A breathtaking tale of betrayal, romance, and redemption.",
    link: "#",
  },
  {
    id: 3,
    title: "The Last Heir",
    cover: "/books/last-heir.jpg",
    description:
      "A royal scandal, a hidden child, and the race to protect a legacy that could change everything.",
    link: "#",
  },
];

export default function BooksPage() {
  return (
    <main className="bg-[#171717] text-white min-h-screen">
      {/* Featured Book Section */}
      <section className="relative bg-gray-800">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Featured: Vengeful Vow
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              A love story forged in fire and betrayal. Discover the novel that
              readers are calling “absolutely unputdownable.”
            </p>
            <button className="bg-white text-[#171717] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Buy Now
            </button>
          </div>
          <div className="flex-1">
            <Image
              src="/books/vengeful-vow.jpg"
              alt="Vengeful Vow Cover"
              width={400}
              height={600}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* All Books */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10">Books by the Author</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={400}
                height={600}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{book.title}</h3>
                <p className="text-gray-400 mb-4">{book.description}</p>
                <button className="bg-white text-[#171717] font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Author's Journey */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">The Writing Journey</h2>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            From late nights at the desk to moments of unexpected inspiration,
            every story is a piece of my heart. My books are more than tales;
            they’re invitations into worlds where passion, danger, and destiny
            collide.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join My Reader’s Circle</h2>
          <p className="text-gray-300 mb-6">
            Get exclusive sneak peeks, behind-the-scenes notes, and special
            offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg text-[#171717] w-full sm:w-80"
            />
            <button className="bg-white text-[#171717] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
