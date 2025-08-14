import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { reference } = await req.json();

    if (!reference) {
      return NextResponse.json(
        { error: "Missing transaction reference" },
        { status: 400 }
      );
    }

    const secretKey = process.env.BUDPAY_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Secret key not configured" },
        { status: 500 }
      );
    }

    // Call BudPay verify endpoint
    const res = await fetch(
      `https://api.budpay.com/api/v2/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    // ✅ Fix: Ensure created_at is always a valid ISO string
    if (data?.data?.created_at) {
      const parsedDate = new Date(data.data.created_at);
      if (!isNaN(parsedDate.getTime())) {
        data.data.created_at = parsedDate.toISOString();
      }
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Server error verifying payment" },
      { status: 500 }
    );
  }
}
