// app/api/create-payment-link/route.ts
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {


  
  try {
    const body = await request.json();
    const { amount, name, email, contact, description } = body;

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });


    

    // Create a payment link
    const paymentLink = await razorpay.paymentLink.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      accept_partial: false,
      description: description || 'Inframe School Payment',
      customer: {
        name: name || 'Customer',
        email: email || 'customer@example.com',
        contact: contact || '+919999999999',
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      notes: {
        source: 'Inframe School Website',
      },
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      callback_method: 'get',
    });

    return NextResponse.json({
      success: true,
      paymentLink: paymentLink.short_url, // The shareable payment link
      paymentLinkId: paymentLink.id,
    });
  } catch (error) {
    console.error('Payment link creation error:', error);
    return NextResponse.json({
      success: false,
      message:'Failed to create payment link',
    }, { status: 500 });
  }
}




