import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const TermsAndConditions = () => {
  return (
    <div
      className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${poppins.className} my-20`}
    >
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Terms and Conditions
            </h1>

            <section className="mb-8">
              <p className="text-gray-600 mb-4">
                {`Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern 'INFRAME SCHOOL OF ART DESIGN & BUSINESS' relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.`}
              </p>
              <p className="text-gray-600 mb-4">
                {`The term 'INFRAME SCHOOL OF ART DESIGN & BUSINESS' or 'us' or 'we' refers to the owner of the website whose registered office is B-09 Behind Kamla Nagar Hospital Pal Link Road Jodhpur Rajasthan. The term 'you' refers to the user or viewer of our website.`}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Terms of Use
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice and you agree to use the site for lawful purposes.
                </li>
                <li>
                  Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                </li>
                <li>
                  Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                </li>
                <li>
                  This website contains material which is owned by or licensed
                  to us. Reproduction is prohibited other than in accordance
                  with the copyright notice.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Student Programs Terms
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  All prices, unless indicated specially are in Indian Rupees.
                </li>
                <li>
                  All prices and availability of products are subject to change
                  without prior notice at the sole discretion of IDI Online
                  Service.
                </li>
                <li>
                  IDI reserves the right to refuse or cancel any order placed
                  for a product, which is listed at an incorrect price.
                </li>
                <li>
                  Any student enrolled with IDI will have to regularly work
                  hard. In case of indiscipline or irregular attendance, the
                  student may be expelled from the institute.
                </li>
                <li>
                  If any student absents himself/herself for more than 10 days
                  continuously without any prior written application, they may
                  be deemed to be expelled from the Institute.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment and Refund Policy
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>{`After depositing money towards 'Registration & Admission', if a student becomes disinterested, the Institute will not refund the Registration fee/Admission fee.`}</li>
                <li>
                  If the tuition fee is not paid in lump sum, submission of post
                  dated cheques is mandatory.
                </li>
                <li>
                  If the cheque is bounced for any reason, a fine of ₹200 will
                  be charged separately.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Liability and Jurisdiction
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  IDI will not be responsible for any damage suffered by users
                  from use of the services on this site.
                </li>
                <li>
                  The Courts at Jodhpur shall have exclusive jurisdiction over
                  any disputes.
                </li>
                <li>
                  IDI may also contact the user through SMS, email and call to
                  give notifications on various important updates.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Warranties and Disclaimers
              </h2>
              <p className="text-gray-600 mb-4">
                {`We provide our Services using a commercially reasonable level of skill and care. Other than as expressly set out in these terms or additional terms, IDI does not make any specific promises about the Services. We provide the Services "as is".`}
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;
