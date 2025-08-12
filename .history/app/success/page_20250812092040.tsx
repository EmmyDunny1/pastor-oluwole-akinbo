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

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">{status}</h1>

      {details && (
        <div className="mt-4 text-left inline-block bg-gray-100 p-4 rounded-lg text-black">
          <p><strong>Reference:</strong> {details.reference}</p>
          <p><strong>Amount:</strong> {details.amount } {details.currency}</p>
          <p><strong>Date:</strong> {new Date(details.created_at).toLocaleString()}</p>
          </div>
      )}

      {details && (
        <><div className="mt-5"><Link className="text-white p-1 hover:underline bg-gray-800 " href="/">Go back to home</Link></div></>
      )}
    </div>
  );
}
