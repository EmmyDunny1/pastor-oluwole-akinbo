// pages/payment-success.tsx


export default function PaymentSuccess() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-green-600 dark:text-green-400">
        Payment Successful 🎉
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Thank you! Your payment has been processed successfully.
      </p>
    </div>
  );
}
