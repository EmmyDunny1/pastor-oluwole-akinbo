'use client'

import React from "react";
import Link from "next/link";
import TestimonyForm from "@/components/TestimonyForm"; 
import BookLaunch from "@/components/BookLaunch";
import HeroPage from "./HeroPage/page";
import HomeAbout from '@/components/HomeAbout'
import HomeRetirement from "@/components/HomeRetirement";
import HomeGallery from "@/components/HomeGallery";
import ContactPage from "./Contact/page";






export default function Home() {
  return (
   <>
      <HeroPage/>

  
   <section className="max-w-4xl mx-auto text-center py-16 px-4">
  <h2 className="text-4xl font-bold mb-4">Celebrate a Remarkable Legacy</h2>
  <p className="text-lg mb-6 text-gray-200">
    Be part of honoring our beloved father&apos;s extraordinary journey. Share your personal messages, watch inspiring tributes, and help write the next chapter of his legacy.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <Link
      href="/SubmitTestimony"
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
    >
      Share Your Tribute
    </Link>
    <Link
      href="/Gift"
      className="bg-white hover:bg-gray-200 text-gray-950 px-6 py-3 rounded-full font-semibold transition"
    >
      Send a Gift
    </Link>
  </div>
</section>

  
  <HomeAbout />
  <HomeRetirement />
  <TestimonyForm />

    <BookLaunch />
    <HomeGallery />
    <
   </>
  );
}
