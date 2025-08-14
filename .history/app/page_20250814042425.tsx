'use client'

import React from "react";
import Link from "next/link";
import TestimonyForm from "@/components/TestimonyForm"; 
import BookLaunch from "@/components/BookLaunch";
import HeroPage from "./HeroPage/page";
import HomeAbout from '@/components/HomeAbout'
import HomeRetirement from "@/components/HomeRetirement";
import HomeGallery from "@/components/HomeGallery";






export default function Home() {
  return (
   <>
      <HeroPage/>
<div> 
      </div>
    </section></div>
     <HomeAbout />
     <HomeRetirement />
    <TestimonyForm />

    <BookLaunch />
    <HomeGallery />

   </>
  );
}
