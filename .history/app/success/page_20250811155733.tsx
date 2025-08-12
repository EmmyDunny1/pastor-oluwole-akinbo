"use client";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 dark:bg-gray-900 text-center">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
        Payment Successful 🎉
      </h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        Thank you! Your testimony/payment details have been recorded.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Go Back Home
      </a>
    </div>
  );
}
