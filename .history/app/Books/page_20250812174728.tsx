import { FaShoppingCart } from "react-icons/fa";

const BooksSection = () => {
  const prelaunchBook = {
    title: "The Dawn of Dreams",
    author: "Emmex Fason",
    description:
      "An upcoming masterpiece filled with passion, suspense, and life-changing lessons. Be among the first to experience the journey by securing your copy today!",
    image: "/prelaunch.jpg",
  };

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
    <section className="relative bg-gradient-to-b from-[#171717] via-gray-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-gray-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-20 py-16 space-y-20">
        {/* HERO SECTION */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12">
          {/* Author Image */}
          <div className="relative flex-shrink-0">
            <img
              src="/author.jpg"
              alt="Author"
              className="w-[480px] h-[520px] object-cover rounded-2xl shadow-2xl border-4 border-gray-700"
            />
          </div>

          {/* My Books Content */}
          <div className="relative flex-1">
            {/* Decorative Border */}
            <div className="absolute -left-6 -top-6 w-[380px] h-[450px] border-4 border-gray-500 rounded-xl -z-10"></div>

            <div className="bg-gradient-to-br from-gray-800/90 to-[#171717]/90 p-10 rounded-xl shadow-xl lg:-ml-40 mt-8 lg:mt-0">
              <h2 className="text-5xl font-bold mb-6">My Books</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dive into captivating stories crafted to inspire, challenge, and
                transform. From heart-racing thrillers to emotionally charged
                romances, each book is a unique world waiting for you to explore.
              </p>
            </div>
          </div>
        </div>

        {/* PRELAUNCH BOOK SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl shadow-xl border border-gray-700/50 p-10 min-h-[520px]">
          {/* Left Text */}
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">{prelaunchBook.title}</h3>
            <p className="text-lg font-medium text-gray-400 mb-2">
              by {prelaunchBook.author}
            </p>
            <p className="text-gray-300 mb-6">{prelaunchBook.description}</p>

            <button className="flex items-center gap-3 bg-white text-[#171717] hover:bg-gray-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 group">
              Pre-order Now
              <FaShoppingCart className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src={prelaunchBook.image}
              alt={prelaunchBook.title}
              className="w-[360px] h-[480px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* OTHER BOOKS */}
        <div className="space-y-12">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-gray-700/50 min-h-[500px]"
            >
              {/* Book Image */}
              <div className="w-full md:w-1/2 relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-[500px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 p-10 relative flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{book.title}</h3>
                <p className="text-lg font-medium text-gray-400 mb-2">
                  by {book.author}
                </p>
                <p className="text-gray-300 mb-6">{book.description}</p>

                <button className="flex items-center gap-3 bg-white text-[#171717] hover:bg-gray-300 px-8 py-4 rounded-full font-semibold transition-all duration-300 group">
                  Order Now
                  <FaShoppingCart className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;


















