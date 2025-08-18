'use client';
import React, { useState } from "react";
import { BudPayButton } from "@budpay/react";
import { db } from "@/lib/firebase"; // existing firebase config
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PaymentResponse {
  reference: string;
  [key: string]: unknown;
}


export default function Payment() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    amount: "",
    description: "Gift for the Celebrant",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

      console.log(" Payment stored in Firestore");
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
    callback_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    onComplete: handlePaymentComplete,
    onCancel: (data: PaymentResponse) => {
      console.warn("❌ Payment cancelled", data);
      alert("Payment cancelled.");
    },
    debug: true,
    text: "Proceed to Pay",
    className:
      "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60",
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-10 px-4">
      {/* Welcome Intro */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-500  mb-4">
          Show Your Appreciation
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Thank you for choosing to honor Pastor Samuel Oluwole Akinbo. Your thoughtful gift 
          will celebrate his incredible journey and support him as he begins a new chapter. 
          Fill the form below to contribute with love and gratitude.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400 italic">
          Every contribution is a meaningful tribute to decades of faithful service.
        </p>
      </div>

      {/* Payment Form */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
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
          <div className="mt-[-8px] border-[0.5px] p-2 border-green-200">
            <span className="text-center text-green-200 leading-0.5 text-[11px] font-bold">
              Note: If you are using bank transfer, the account number generated by budpay is temporary and expires after 30 minutes.
            </span>

           
          </div>
  <Link className="block mt-4 text-center text-[12px] uppercase font-bold" 
  href="/DirectTransfer"> For Direct Payment Without Card
    <p className=" mt-1 text-center text-green-950 leading-0.5 text-[11px]  bg-white rounded font-bold p-4 flex-">
               Click To View Account Number
            </p>
            </Link>
          <div>
        
          </div>
        </form>
      </div>
    </div>
  );
}
