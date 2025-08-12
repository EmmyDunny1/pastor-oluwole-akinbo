import { ArrowRight } from "react-icons/fa6";

export default function BooksPage() {
  const books = [
    {
      title: "The Billionaire’s Vengeful Vow",
      description:
        "A gripping romance filled with betrayal, redemption, and a love that defies the odds.",
      image: "/images/book1.jpg",
    },
    {
      title: "Shadows of Power",
      description:
        "A thrilling tale of ambition, sacrifice, and the dark side of success.",
      image: "/images/book2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Author Image */}
        <div className="relative group w-full md:w-1/2">
          <img
            src="/images/author.jpg"
            alt="Author"
            className="rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 group-hover:-translate-y-2"
          />
        </div>

        {/* Overlapping Text */}
        <div className="relative md:w-1/2">
          {/* Styled Background Shape */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-30 -z-10"></div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-2">
            <h1 className="text-4xl font-bold mb-4">Meet the Author</h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Dive into the imaginative worlds crafted by our award-winning
              storyteller, where passion meets suspense.
            </p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="container mx-auto px-6 py-12 space-y-16">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center gap-10 bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Book Image */}
            <div className="w-full md:w-1/3">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-xl shadow-lg object-cover w-full h-[350px]"
              />
            </div>

            {/* Book Text */}
            <div className="flex-1 text-left">
              <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
              <p className="text-gray-200 mb-6">{book.description}</p>
              <button className="group flex items-center gap-2 bg-pink-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-pink-700 transition-all">
                Order Now
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
