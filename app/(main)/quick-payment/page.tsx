// app/payment/page.tsx
import React from "react";
import { Metadata } from "next";
// import RazorpayLinkGenerator from "../../../components/RazorpayLinkGenerator";
import Script from "next/script";
import Payment from "../../../components/QuickPayment";
// import dynamic from "next/dynamic";


// // Dynamically import the payment link generator component
// const RazorpayLinkGenerator = dynamic(
//   () => import("../../../components/RazorpayLinkGenerator"),
//   { ssr: false }
// );

export const metadata: Metadata = {
  title: 'Create Payment Link | Inframe School',
  description: 'Generate shareable payment links for Inframe School services using Razorpay.',
};

const PaymentLinkPage = () => {
  return (
    <div className="container mx-auto py-10">

      {/* <RazorpayLinkGenerator /> */}
      <>
    <Script
    id="razorpay-checkout-js"
    src="https://checkout.razorpay.com/v1/checkout.js"
   />
   <Payment/>
  </>
    </div>
  );
};

export default PaymentLinkPage;