import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/messages/firebase"; // Import Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";

// POST: Save a new message
export async function POST(req: NextRequest) {
  try {
    const { text, user } = await req.json();

    if (!text || !user) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db1, "messages"), {
      text,
      user,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ id: docRef.id, text, user });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}

// GET: Fetch all messages
export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db1, "messages"));
    const messages: any[] = [];

    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
