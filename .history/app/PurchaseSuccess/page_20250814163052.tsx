"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState("Verifying payment...");
  const [details, setDetails] = useState<any>(null);
  const [downloaded, setDownloaded] = useState(false);

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

  const handleDownload = () => {
    // This will trigger the file download
    const link = document.createElement("a");
    link.href = "/book.pdf"; // Put your book's path here (place in /public folder)
    link.download = "MyBook.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show the Go Back button after download
    setDownloaded(true);
  };

  return (
    <div className="p-6 text-center min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl text-green-600 font-bold">{status}</h1>

      {details && (
        <div className="mt-4 text-left inline-block bg-white p-6 rounded-lg shadow-md text-black max-w-md w-full">
          <p><strong>Reference:</strong> {details.reference}</p>
          <p><strong>Amount:</strong> {details.amount} {details.currency}</p>
        </div>
      )}

      {details && !downloaded && (
        <button
          onClick={handleDownload}
          className="mt-6 text-white px-4 py-2 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
        >
          📥 Download Book
        </button>
      )}

      {downloaded && (
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
