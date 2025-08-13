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
      <section className="relative bg-gray-900 text-white py-16">
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
              EARLY LIFE
            </h2>
            <p className="text-lg leading-relaxed text-justify">
            Pastor Samuel Oluwole Okanlawon Akinbo was born in Itoku (Kenta Itabada), Abeokuta, Ogun State, Nigeria, on July 27, 1955, to Mr. Timothy Idowu Akinbo and Mrs. Beatrice Fehintola Akinbo, both natives of Abeokuta, Ogun State, Nigeria. He was raised in the Anglican faith, attending St. John Church Igbein Abeokuta with his parents from childhood. <br /><br />

He began his primary education in 1962 at St. Peter Primary School, Ake Abeokuta, and later attended First Baptist Day School, Ijaiye, Abeokuta, where he obtained his Primary School Leaving Certificate in 1968. In 1969, he prepared to enter secondary school at Saint Michael Catholic School, Itoko Abeokuta. However, on April 1, 1969, his father, Mr. Timothy Idowu Akinbo, passed away, interrupting his pursuit of secondary education. He then moved to Lagos in 1970 to stay with his father's cousin, Mr. Akanbi, on Post Office Road, Mushin, Lagos State. He began an apprenticeship at a Printing Press but only stayed for a year and a half before joining his mother in Ifo, Ogun State, with the intention of furthering his education, though this did not materialize. He was recognized as a brilliant student during his primary school years. In 1973, he returned to Abeokuta to study printing technology, joining Christ Apostolic Evangelical Printing Press, Isale Ake Abeokuta.

            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`${quicksand.className} text-3xl text font-bold text-[#003366]`}>
              CONVERSION EXPERIENCE
            </h2>
            <p className="text-lg text-justify leading-relaxed">
            Driven by a desire to know more about Christ, Pastor Oluwole attended a City Wide Crusade organized by Christ Crusader Evangelical Ministry at Shapon, Abeokuta, in April 1974, where he accepted Jesus and was converted. He joined the Evangelical Group and left the Anglican Church, Igbein Abeokuta, which he had attended prior to his conversion. During this period, he participated in a Bible study on the book of Daniel every week at Ansar-Ur-Deen Primary School, Isabo Abeokuta and later the leader of the group told all the converts that they are a group and that they do not have a church. They were therefore freed to go and join any Pentecostal Church, leading him to join his master, Mr. Adenekan, at Christ Apostolic Church, Isale Oniyanrin, Isale-Ake, Abeokuta, the headquarters of Christ Apostolic Church. He became a chorister from 1974-1975, during which time he graduated from his Printing Press apprenticeship and moved to Ibadan in May 1975. He remained a member of Christ Apostolic Church, Idi Odo, Challenge, Ibadan. A friend, Deacon Amos Taiwo Oluwadare from Onibonje Publishers Press, invited him to a Crusade led by Late Rev. Dr. Samson Bayo Ogundeji of His Coming Evangelical Church, Ibadan. During this crusade, he rededicated his life to Jesus. He responded to the altar call on December 5, 1979 (Wednesday). Subsequently, he joined His Coming Evangelical Church and was baptized with the Holy Spirit. He served as a Prayer Warrior, Chorister, and Sunday School Teacher before he received the "Call of God" for the Ministry.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={`${quicksand.className} text-3xl font-bold text-justify text-[#003366]`}>
              SECULAR EXPERIENCE
            </h2>
            <p className="text-lg text-justify leading-relaxed">
             Pastor Oluwole Akinbo worked with Onibonje Publishers from 1975 to 1978. Despite his educational background, his zeal for education led him to self-educate through reading. God blessed him with the ability to be brilliant in all his endeavors. <br />
He served in the Mission as: <br />

1.	Chairman Ministers’ Executive (Assistant for two years, then Chairman for four years). <br />
2.	National Marriage Committee Chairman. <br />
3.	Principal and Lecturer at Voice of His Coming Theological Bible College, Lagos Satellite. <br />
4.	Provost and Lecturer for the Voice of His Coming Theological Bible College. <br />

Summarily, Pastor Akinbo is a Printer by profession and a Web offset operator. He worked with Onibonoje Publishers at Felele Ibadan from 1975-1978, and with African Newspaper of Nigeria, "Publisher of Nigerian Tribune" at Imalenfalafia Oke-Ado Ibadan from 1978-1984, before resigning to become a full-time Pastor.

            </p>
          </div>

           <div className="space-y-4">
             <h2 className={`${quicksand.className} text-3xl text-justify font-bold text-[#003366]`}>
              MINISTERIAL/EDUCATIONAL BACKGROUND
            </h2>
            <p className="text-lg leading-relaxed">
            He received his divine calling in 1980 and began informal training in 1982. He later attended Voice of His Coming Theological Bible College, Ibadan, in 1985 and graduated in 1987 with an Advanced Diploma in Theology. He also attended The Way of Peace Bible College, Akure, affiliated with Vision International University, C.A.U.S.A., from 2006-2008, graduating with a B.Th. in February 2009.
            </p>
          </div>

                <div className="space-y-4">
             
            
                 <div className="space-y-4">
             <h2 className={`${quicksand.className} text-3xl font-bold text-gray-950`}>
              MINISTERIAL WORK EXPERIENCE
            </h2>
            <p className="text-lg text-justify leading-relaxed">
           Pastor Samuel Oluwole Akinbo has served as a Full-Time Pastor in many Assemblies of His Coming Evangelical Church Int'l Inc. He worked in Odo-Oba, Ibadan, from 1983-1984; Ago-Are Assembly, Oyo State, from 1984-1986; and Ondo Assembly from 1986-1991. <br />

He was promoted to District Pastor in 1991 and transferred to Ikere Ekiti, serving as the District Overseer for Assemblies under the Ikere District (now Ikere/Ado Ekiti Districts) from 1991 to 2000. Subsequently, he was promoted to State Pastor of Ondo State and later became Zonal Pastor of Ondo/Ekiti States in 1995. <br />

Pastor Akinbo also served at His Coming Evangelical Church, Owo District, from 2000-2003. He was then transferred to Akure District of the Church from 2003-2009, after which he was posted to Lagos District as District Overseer and Lagos Zonal Pastor between 2009 -2019. He was later posted to Ibadan as the District/Zonal Overseer between 2019 until his retirement in 2025. <br />

Pastor Akinbo married Evang. Mrs. Elizabeth Oluwasola Akinbo on December 1, 1990, and they are blessed with wonderful children.

            </p>
          </div>

           <div className="space-y-4">
             <h2 className={`${quicksand.className} text-3xl font-bold text-gray-950`}>
              AUTHORSHIP
            </h2>
            <p className="text-lg text-justify leading-relaxed">
           Pastor Oluwole is an author of four (4) Christian books, including: <br />

•	Systematic and Expository Teaching on the Book of Nehemiah (first edition 2005, reprinted 2010, and reprinted in 2024 as an E-book). <br />
•	Asiri Idile Alayo (Yoruba book on marital life). <br />
•	The Secret of Happy Home (English Version of Asiri Idile Alayo). <br />
•	The Old Testament Saint - Part One. <br />
o	He also undertook computer training in 2014 and obtained a Certificate in Desktop Publishing. <br />
<button> iew Books</button>


            </p>
          </div>
          
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
