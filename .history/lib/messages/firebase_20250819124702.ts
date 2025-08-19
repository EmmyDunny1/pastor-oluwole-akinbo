// lib/messages/firebase.ts
import { db1 } from ";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const sendMessage = async (name: string, email: string, message: string) => {
  try {
    await addDoc(collection(db1, "messages"), {
      name,
      email,
      message,
      createdAt: Timestamp.now(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding message: ", error);
    return { success: false };
  }
};
