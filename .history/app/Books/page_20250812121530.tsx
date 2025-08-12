import { FaShoppingCart } from "react-icons/fa";

const BooksSection = () => {
  const books = [
    {
      title: "Vengeful Vow",
      author: "Emmex Fason",
      description:
        "A billionaire romance filled with twists, suspense, and an unforgettable vow that changes everything.",
      image: "/book1.jpg",
    },
    {
      title: "Crimson Lies",
      author: "Emmex Fason",
      description:
        "A tale of love, betrayal, and the secrets that can destroy even the strongest hearts.",
      image: "/book2.jpg",
    },
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-br from-purple-900 via-gray-900 to-black overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-white mb-12 text-center">
        Our Featured Books
      </h2>

      <div className="relative z-10 flex flex-col gap-12">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="relative group flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-gray-700/50"
          >
            {/* Book Image */}
            <div className="w-full md:w-1/2 relative">
              <img
                src={book.image}
                alt={book.title}
                className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 p-8 relative flex flex-col justify-center text-white">
              {/* Decorative background div */}
              <div className="absolute -z-10 top-6 left-6 w-3/4 h-3/4 bg-gradient-to-tr from-purple-600/40 to-pink-500/30 rounded-3xl blur-2xl"></div>

              <h3 className="text-3xl font-bold mb-4">{book.title}</h3>
              <p className="text-lg font-medium text-purple-300 mb-2">
                by {book.author}
              </p>
              <p className="text-gray-300 mb-6">{book.description}</p>

              <button className="flex items-center gap-3 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 group">
                Order Now
                <FaShoppingCart className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
