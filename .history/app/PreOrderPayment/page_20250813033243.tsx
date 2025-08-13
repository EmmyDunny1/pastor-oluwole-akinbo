"use client";
import React, { useState } from "react";
import { BudPayButton } from "@budpay/react";
import { db } from "@/lib/firebase"; // your existing firebase config
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface PaymentResponse {
  reference: string;
  [key: string]: any;
}

export default function PreOrderPayment() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    amount: "",
    description: "Preorder of Old Testament Saints",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Generate a unique reference for each payment
  const generateReference = () => `BUD_${Date.now()}`;

  const handlePaymentComplete = async (data: PaymentResponse) => {
    console.log("✅ Payment completed", data);

    try {
      await addDoc(collection(db, "payments"), {
        ...form,
        amount: Number(form.amount),
        paymentRef: data.reference,
        status: "success",
        createdAt: Timestamp.now(),
      });

      console.log("💾 Payment stored in Firestore");
      router.push("/success"); // ✅ Redirect to success page
    } catch (error) {
      console.error("❌ Error saving payment:", error);
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
      description: form.description,
    },
    callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // optional server-side verification
    onComplete: handlePaymentComplete,
    onCancel: (data: PaymentResponse) => {
      console.warn("❌ Payment cancelled", data);
      alert("Payment cancelled.");
    },
    debug: true,
    text: "Proceed to Pay",
    className:
      "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60",
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300">
          PURCHASE 
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
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-md dark:bg-gray-700 dark:text-white"
          />

          {/* BudPay Payment Button */}
          <BudPayButton {...buttonConfig} />
          <div className="mt-[-8px] border-[0.5px] p-2 border-blue-200">
            <span className="text-center text-blue-200 leading-0.5 text-[11px] bg-gray font-bold justify-center">
              Note: If you are using bank transfer, account number generated for you is temporary and cannot be used after 30mins.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
