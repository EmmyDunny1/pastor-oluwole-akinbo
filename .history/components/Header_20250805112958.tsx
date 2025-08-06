import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
       <header className="bg-white shadow p-4 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Celebrating Dad</h1>
        <div className="space-x-4 text-[#171717]">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link cn href="/submit">Share Yours</Link>
          <Link href="/gift">Send Gift</Link>
        </div>
      </nav>
    </header>
    </div>
  )
}
