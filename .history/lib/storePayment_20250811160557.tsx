import { db } from "@/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

interface PaymentData {
  name: string;
  email: string;
  amount: number;
  paymentRef: string;
  status: string;
}

export const storePaymentData = async (payment: PaymentData) => {
  try {
    await addDoc(collection(db, "payments"), {
      ...payment,
      createdAt: Timestamp.now(),
    });
    console.log("Payment stored successfully!");
  } catch (error) {
    console.error("Error storing payment:", error);
  }
};
