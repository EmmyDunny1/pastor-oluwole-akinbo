import Image from "next/image";
import { Inter, Quicksand } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export default function Biography() {
  return (
    <div className={`px-4 py-8 ${inter.className}`}>
      <h1
        className={`text-3xl font-bold text-center mb-6 ${quicksand.className}`}
      >
        Biography
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Biography Text */}
        <div>
          <p className="mb-4">
            John Doe is an award-winning photographer whose work captures the
            beauty and complexity of the human experience. With a career
            spanning over two decades, John’s lens has brought to life moments
            of joy, sorrow, and everything in between.
          </p>
          <p className="mb-4">
            Born and raised in a small coastal town, John developed a love for
            storytelling early on. His journey began with a simple film camera
            gifted by his grandfather, and over the years, his passion evolved
            into a profession that has taken him to over 50 countries.
          </p>
          <p className="mb-4">
            John’s work has been featured in prestigious publications and
            galleries worldwide. He is known for his distinctive style that
            blends candid realism with artistic composition, creating images
            that resonate deeply with viewers.
          </p>
          <p>
            When he’s not behind the camera, John dedicates his time to
            mentoring aspiring photographers and advocating for environmental
            conservation through visual storytelling.
          </p>
        </div>

        {/* Biography Image */}
        <div className="relative w-full h-80">
          <Image
            src="/others/Bio.jpg"
            alt="John Doe"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Gallery */}
      <h2
        className={`text-2xl font-semibold text-center my-8 ${quicksand.className}`}
      >
        Gallery
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
          <div
            key={img}
            className="relative w-full h-48 overflow-hidden rounded-lg shadow-md group"
          >
            <Image
              src={`/gallery/${img}.jpg`}
              alt={`Gallery ${img}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
