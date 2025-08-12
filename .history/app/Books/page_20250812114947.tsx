export default function BooksPage() {
  const books = [
    { title: "Book One", author: "John Doe", img: "/book1.jpg" },
    { title: "Book Two", author: "Jane Smith", img: "/book2.jpg" },
    { title: "Book Three", author: "Mark Lee", img: "/book3.jpg" },
  ];

  return (
    <section className="relative min-h-screen px-6 py-16 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 animate-gradient">
      {/* Gradient animation styles */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>

      <div className="grid md:grid-cols-3 gap-8">
        {books.map((book, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-3
            bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-gradient"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold">{book.title}</h3>
              <p className="mt-2 text-lg opacity-90">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
