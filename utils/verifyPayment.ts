    // app/api/verify-payment/route.ts
    import { NextResponse } from 'next/server';
    import crypto from 'crypto';

    export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        } = body;

        // Verify the payment signature
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(sign)
        .digest("hex");

        // Compare signatures
        if (razorpay_signature === expectedSign) {
        // Payment is verified
        // Here you should update your database to mark the payment as successful
        
        return NextResponse.json({
            success: true,
            message: "Payment verified successfully",
        });
        } else {
        // Signature verification failed
        return NextResponse.json({
            success: false,
            message: "Invalid signature",
        }, { status: 400 });
        }
    } catch (error) {
        console.error("Payment verification error:", error);
        return NextResponse.json({
        success: false,
        message: "Payment verification failed",
        }, { status: 500 });
    }
    }