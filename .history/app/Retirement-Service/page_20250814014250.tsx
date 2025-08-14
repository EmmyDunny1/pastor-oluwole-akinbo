// app/Retirement-Service/page.tsx
"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// =====================
// 1) UPDATE THESE FIELDS ONLY
// =====================
const EVENT = {
  title: "Retirement & Thanksgiving Service",
  // Local time in Africa/Lagos (+01:00 or +01:00/+01:00 depending on DST; Nigeria does not observe DST)
  // Example: September 14, 2025 at 10:00 AM local time
  startLocalISO: "2025-09-14T10:00:00+01:00", // <-- PUT YOUR REAL START
  endLocalISO:   "2025-09-14T13:00:00+01:00", // <-- PUT YOUR REAL END
  venueName: "CHURCH / HALL NAME HERE",       // <-- FROM FLIER
  addressLine: "Complete Street, Area, City, State, Country", // <-- FROM FLIER
  // Optional extra line for directions or landmark
  addressExtra: "Landmark / Notes (optional)",
  details:
    "Join family, friends and the church as we celebrate a life of faith, love and impact.",
};

// =====================
// 2) HELPERS
// =====================
function toGoogleDates(startLocalISO: string, endLocalISO: string) {
  // Google Calendar wants UTC compact format: YYYYMMDDTHHMMSSZ/...
  const toCompactUTC = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const start = toCompactUTC(new Date(startLocalISO));
  const end = toCompactUTC(new Date(endLocalISO));
  return `${start}/${end}`;
}

function buildGoogleCalendarUrl({
  title,
  details,
  location,
  startLocalISO,
  endLocalISO,
}: {
  title: string;
  details: string;
  location: string;
  startLocalISO: string;
  endLocalISO: string;
}) {
  const action = "TEMPLATE";
  const text = encodeURIComponent(title);
  const dates = toGoogleDates(startLocalISO, endLocalISO);
  const ctz = "Africa/Lagos";
  const loc = encodeURIComponent(location);
  const det = encodeURIComponent(details);

  return `https://calendar.google.com/calendar/render?action=${action}&text=${text}&dates=${dates}&ctz=${ctz}&location=${loc}&details=${det}`;
}

function formatLocalDateTime(localISO: string) {
  const d = new Date(localISO);
  try {
    return new Intl.DateTimeFormat("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "Africa/Lagos",
    }).format(d);
  } catch {
    // Fallback
    return d.toLocaleString();
  }
}

export default function RetirementServicePage() {
  const calendarUrl = useMemo(
    () =>
      buildGoogleCalendarUrl({
        title: EVENT.title,
        details: EVENT.details,
        location: `${EVENT.venueName}, ${EVENT.addressLine}`,
        startLocalISO: EVENT.startLocalISO,
        endLocalISO: EVENT.endLocalISO,
      }),
    []
  );

  const mapsLink = useMemo(
    () =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${EVENT.venueName}, ${EVENT.addressLine}`
      )}`,
    []
  );

  return (
    <main className="bg-white text-[#171717] font-serif">
      {/* HERO */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Tall flier with subtle decorative glows */}
          <div className="w-full relative flex justify-center">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-40" />
            <div className="absolute -bottom-10 -right-12 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40" />

            <div className="p-4 bg-white rounded-3xl shadow-2xl border-4 border-[#003366] relative z-10 w-full max-w-[560px]">
              <div className="relative w-full h-[720px] sm:h-[780px]">
                {/* Put your flier at: /public/retirement-flier.png */}
                <Image
                  src="/retirement-flier.png"
                  alt="Retirement Thanksgiving Flier"
                  fill
                  priority
                  className="object-contain object-top rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Event text + actions */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#003366]">
              {EVENT.title}
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              {EVENT.details}
            </p>

            <div className="space-y-2">
              <div className="text-xl font-bold text-[#003366]">
                {formatLocalDateTime(EVENT.startLocalISO)}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">{EVENT.venueName}</span>
                <br />
                {EVENT.addressLine}
                {EVENT.addressExtra ? (
                  <>
                    <br />
                    <span className="text-gray-600">{EVENT.addressExtra}</span>
                  </>
                ) : null}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-[1.02]"
                aria-label="Add to Google Calendar"
              >
                📅 Add to Google Calendar
              </a>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#003366] hover:bg-[#002244] text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-[1.02]"
                aria-label="Open in Google Maps"
              >
                📍 Get Directions
              </a>
            </div>

            {/* Quick links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/SubmitTestimony"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
              >
                ✍ Share Your Testimony
              </Link>

              <Link
                href="/Gift"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-[1.02]"
              >
                🎁 Send a Gift
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS + MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order / Program highlights */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366] mb-6">
              Celebration Highlights
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Praise & Worship</span> — lifting
                our hearts in thanksgiving.
              </li>
              <li>
                <span className="font-semibold">Tributes & Testimonies</span> —
                stories of impact and love.
              </li>
              <li>
                <span className="font-semibold">Word & Prayers</span> — blessings
                and impartation.
              </li>
              <li>
                <span className="font-semibold">Presentation & Celebration</span> —
                honoring a lasting legacy.
              </li>
            </ul>

            <p className="mt-6 italic text-gray-600">
              “This is the Lord’s doing; it is marvelous in our eyes.” — Psalm 118:23
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#003366] mb-4 px-4 pt-4">
              Venue Map
            </h2>
            <div className="relative w-full rounded-xl overflow-hidden shadow-md">
              {/* Aspect ratio container */}
              <div className="relative w-full h-0 pb-[62.5%]">
                <iframe
                  title="Google Map"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${EVENT.venueName}, ${EVENT.addressLine}`
                  )}&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 flex justify-end">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#003366] hover:underline font-semibold"
                >
                  Open larger map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
