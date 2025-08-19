import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Default Firebase project
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp(); // default app

export const db = getFirestore(app);

// contact message
const firebaseConfig1 = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY_2,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN_2,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_2,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_2,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_2,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID_2,
};

const app1 = !getApps().some(app => app.name === "secondary")
  ? initializeApp(firebaseConfig1, "secondary")
  : getApp("secondary"); // secondary app

 const db1 = getFirestore(app1);

 ex