'use client'

import React from "react";
import Link from "next/link";
import TestimonyForm from "@/components/TestimonyForm"; 
import BookLaunch from "@/components/BookLaunch";
import HeroPage from "./HeroPage/page";
import HomeAbout from '@/components/HomeAbout'






export default function Home() {
  return (
   <>
      <HeroPage/>
<div> <section className="max-w-4xl mx-auto text-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-4">Honoring a Life of Dedication</h2>
      <p className="text-lg mb-6">
        Join us in celebrating our beloved father&apos;s impactful career and legacy.
        Share your heartfelt messages, watch inspiring tributes, and support his next chapter.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/SubmitTestimony" className=" border-gray-100 border-1  text-white px-6 py-3 rounded font-semibold">Share a Testimony</Link>
        <Link href="/Gift" className="bg-gray-100  text-gray-950 px-6 py-3 rounded font-semibold">Send a Gift</Link>
      </div>
    </section></div>
     <HomeAbout />
     <
    <TestimonyForm />

    <BookLaunch />
    

   </>
  );
}
