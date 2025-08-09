"use client";
import React, { useRef } from "react";

export default function Payment() {
  const formRef = useRef<HTMLFormElement>(null);

  // Budpay inline script loader
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.BudPayPop) {
      // @ts-ignore
      window.BudPayPop({
        key: process.env.NEXT_PUBLIC_BUDPAY_PUBLIC_KEY, // Set this in your .env.local
        email: formRef.current?.email.value,
        amount: Number(formRef.current?.amount.value) * 100, // Budpay expects kobo
        currency: "NGN",
        first_name: formRef.current?.name.value,
        onClose: () => {},
        callback: (response: any) => {
          alert("Payment successful! Transaction reference: " + response.reference);
        },
      });
    } else {
      alert("Payment widget failed to load. Please refresh the page.");
    }
  };

  React.useEffect(() => {
    if (!document.getElementById("budpay-script")) {
      const script = document.createElement("script");
      script.id = "budpay-script";
      script.src = "https://checkout.budpay.com/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-10 px-4">
      <div className="w-full max-w-md bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300">Gift the Celebrant</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Support the celebrant with a monetary gift. Fill in your details and proceed to payment securely.</p>
        <form ref={formRef} onSubmit={handlePayment} className="space-y-5">
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-blue-200 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-blue-200 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Amount (NGN)</label>
            <input
              type="number"
              name="amount"
              min="100"
              required
              className="w-full border border-blue-200 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
              placeholder="Enter amount"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60"
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
}
