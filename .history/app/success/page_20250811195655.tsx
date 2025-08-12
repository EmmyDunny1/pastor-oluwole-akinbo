"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { db } from "@/lib/firebase"; // your firebase.ts file
import { doc, setDoc } from "firebase/firestore";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const transactionRef = searchParams.get("transaction_ref");
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");

  useEffect(() => {
    if (!transactionRef) return;

    async function verifyPayment() {
      try {
        // Verify payment with BudPay API
        const res = await fetch(`https://api.budpay.com/api/v2/transaction/verify/${transactionRef}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BUDPAY_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        console.log("Verification response:", data);

        if (data.status === true && data.data.status === "success") {
          // Store payment details in Firestore
          await setDoc(doc(db, "payments", transactionRef), {
            reference: data.data.reference,
            amount: data.data.amount,
            currency: data.data.currency,
            status: data.data.status,
            customer_name: data.data.customer.name || "",
            customer_email: data.data.customer.email || "",
            paid_at: data.data.paid_at,
            created_at: new Date().toISOString(),
          });

          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        setStatus("failed");
      }
    }

    verifyPayment();
  }, [transactionRef]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-xl font-bold text-gray-700">Verifying your payment...</h1>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
        <h1 className="text-2xl font-bold text-red-700">Payment Failed</h1>
        <p className="mt-2 text-gray-600">Please try again or contact support.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-700">Payment Successful 🎉</h1>
      <p className="mt-2 text-gray-600">Your transaction has been completed successfully.</p>
    </div>
  );
}
