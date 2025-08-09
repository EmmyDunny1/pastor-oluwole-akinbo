"use client";
import React, { useState, useEffect } from "react";
import { BudPayButton } from "@budpay/react";
import { db } from "@/lib/firebase"; // We'll create this config file
import { collection, addDoc } from "firebase/firestore";

interface PaymentResponse {
  reference: string;
  [key: string]: any;
}

export default function Payment() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateReference = () => `BUD_${Date.now()}`;

  const saveToFirebase = async () => {
    try {
      await addDoc(collection(db, "payments"), {
        ...form,
        amount: Number(form.amount),
        timestamp: new Date(),
      });
      console.log("✅ Payment info stored in Firestore");
    } catch (error) {
      console.error("❌ Error saving payment to Firestore:", error);
    }
  };

  const buttonConfig = {
    api_key: process.env.NEXT_PUBLIC_BUDPAY_PUBLIC_KEY || "",
    amount: Number(form.amount),
    currency: "NGN",
    reference: generateReference(),
    customer: {
      email: form.email,
      first_name: form.first_name,
      last_name: form.last_name,
      phone: form.phone,
    },
    callback_url: `${window.location.origin}/gift?success=true`, // Redirect back to page
    onComplete: async (data: PaymentResponse) => {
      console.log("✅ Payment completed", data);
      await saveToFirebase();
      setShowPopup(true); // Show popup immediately in same session
    },
    onCancel: (data: PaymentResponse) => {
      console.warn("❌ Payment cancelled", data);
      alert("Payment cancelled.");
    },
    debug: true,
    text: "Proceed to Pay",
    className:
      "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60",
  };

  useEffect(() => {
    // Check if redirected back from BudPay with success param
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("success") === "true") {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 px-4 relative">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300">
          Gift the Celebrant
        </h2>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={form.first_name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount (NGN)"
            value={form.amount}
            onChange={handleChange}
            required
            min="100"
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />

          {/* BudPay Payment Button */}
          <BudPayButton {...buttonConfig} />
          <div className="mt-[-8px] border-[0.5px] p-2 border-blue-200">
            <span className="text-center text-blue-200 leading-0.5 text-[11px] bg-gray font-bold justify-center">
              Note: If you are using bank transfer, account number generated for you is
              temporary and cannot be used after 30mins.
            </span>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
              Thank you and God bless you!
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Transaction successful.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
