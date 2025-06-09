import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ShippingPolicy = () => {
  return (
    <div
      className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${poppins.className} my-20`}
    >
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Delivery & Shipping Policy
            </h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Shipping Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We provide shipping services to across and outside India and we
                ship for 5 days a week.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Processing
              </h2>
              <p className="text-gray-600 mb-4">
                Orders placed after 10 AM IST on any day will be processed next
                working day. We do not process orders on Saturday, Sundays and
                on National Holidays.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Delivery or Shipping Charges
              </h2>
              <p className="text-gray-600 mb-4">
                We charge for package Courier Charges applicable all over India.
                <em className="block mt-2">
                  We also provide free shipping on some products.
                </em>
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <strong>Across India:</strong> Rs.50-90 for individual
                  books/subjects
                </p>
                <p>
                  <strong>Outside India:</strong> Depends upon the Country and
                  their rules. For more details contact us at{" "}
                  <a
                    href="mailto:hr@inframecollege.org"
                    className="text-blue-600 hover:underline"
                  >
                    hr@inframecollege.org
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Estimated Delivery Time
              </h2>
              <p className="text-gray-600 mb-4">
                Our standard shipping time is about 5-7 days. For shipping to a
                remote location, the possibility of delivery may depend on the
                area or the location where the order is to be delivered. In case
                none of our shipping partner delivers to your area, then we can
                send your order through Speed Post/Registered Post/Parcel by
                India Post. The orders sent through India Post can be tracked
                and it may take up to 5-10 days for the order to reach you, in
                extreme cases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Tracking Your Order
              </h2>
              <p className="text-gray-600 mb-4">
                {`You can track your order using the tracking number provided in your order confirmation email by visiting our delivery partner's website. It may take upto 12-24 hours to update your tracking number on our website.`}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Shipping Partners
              </h2>
              <p className="text-gray-600 mb-4">
                We use the best shipping partners in India. They provide Fast,
                Secure and Reliable delivery service. To track your orders you
                can visit the site of the relevant shipper.
              </p>
              <p className="text-gray-600">
                We use the services of India Post Speed Post, FEDEX, Blue dart,
                DHL Etc
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShippingPolicy;
