import Razorpay from 'razorpay';
import { NextResponse } from 'next/server';

// Initialize Razorpay only if environment variables are available
let razorpay: Razorpay | null = null;

if (process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

export async function POST(request: Request) {
  // Check if Razorpay is properly configured
  if (!razorpay) {
    return NextResponse.json(
      { message: 'Razorpay is not configured. Please set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.' },
      { status: 500 }
    );
  }

  const { amount } = await request.json() as { amount: string };

  const options = {
    amount: amount,
    currency: 'INR', // Default
    receipt: 'rcp1',
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log(order);
    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Order creation failed' }, { status: 500 });
  }
}
