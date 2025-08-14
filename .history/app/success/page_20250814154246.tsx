"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
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
          setStatus("❌ Payment Failed or Pending");
        }
      } catch (err) {
        setStatus("⚠️ Error verifying payment");
      }
    };

    verifyPayment();
  }, [reference]);

  // Helper function to safely convert Firestore timestamp to JS Date
  const formatDate = (timestamp: any) => {
    if (!timestamp) return " ";

    // If timestamp is a Firestore Timestamp object
    if (timestamp.seconds) {
      return new Date(timestamp.seconds * 1000).toLocaleString();
    }

    // If timestamp is already a string or number
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="p-6 text-center min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">{status}</h1>

      {details && (
        <div className="mt-4 text-left inline-block bg-white p-6 rounded-lg shadow-md text-black max-w-md w-full">
          <p><strong>Reference:</strong> {details.reference}</p>
          <p><strong>Amount:</strong> {details.amount} {details.currency}</p>
          <p><strong>Date:</strong> {formatDate(details.created_at)}</p>
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
