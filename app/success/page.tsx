"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// Extract the actual UI into a separate client component
function SuccessContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const [status, setStatus] = useState("Verifying payment...");
  const [details, setDetails] = useState<any>(null);

  useEffect(() => {
    if (!reference) return;

    const verifyPayment = async () => {
      try {
        const res = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        });

        const data = await res.json();

        if (data && data.data && data.data.status === "success") {
          setStatus("✅ Payment Successful");
          setDetails(data.data);
        } else {
          setStatus("Payment Failed or Pending");
        }
      } catch (err) {
        setStatus("Error verifying payment");
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="p-6 text-center min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl text-green-600 font-bold">{status}</h1>

      {details && (
        <div className="mt-4 text-left inline-block bg-white p-6 rounded-lg shadow-md text-black max-w-md w-full">
          <p><strong>Reference:</strong> {details.reference}</p>
          <p><strong>Amount:</strong> {details.amount} {details.currency}</p>
        </div>
      )}

      {details && (
        <div className="mt-6">
          <Link
            href="/"
            className="text-white px-4 py-2 bg-green-600 rounded-lg shadow hover:bg-green-700 transition"
          >
            Go back to Home
          </Link>
        </div>
      )}
    </div>
  );
}

//Wrap it inside Suspense so Next.js can handle hydration
export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
