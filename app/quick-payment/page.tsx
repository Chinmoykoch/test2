// app/quick-payment/page.tsx
import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import Payment from "../../components/QuickPayment";

export const metadata: Metadata = {
  title: 'Create Payment Link | Inframe School',
  description: 'Generate shareable payment links for Inframe School services using Razorpay.',
};

const PaymentLinkPage = () => {
  return (
    <div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <Payment />
    </div>
  );
};

export default PaymentLinkPage;
