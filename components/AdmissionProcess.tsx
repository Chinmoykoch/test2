"use client";
import { useState, } from "react";
import { country } from "../utils/constant";
import Script from "next/script";

export default function Application() {
  const [activePage, setActivePage] = useState("personal");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  // const handleClick = () => {
  //   // Registration logic would go here
  //   console.log("Registration button clicked");
  //   // You could add a form submission or modal here
  // };

  // Define the disclaimer text that was missing
  const disclaimerText =
    "All programs listed here are subject to approval. Inframe School reserves the right to " +
    "discontinue/modify any program or specialization at its sole discretion, students will have the " +
    "opportunity to transfer to another campus where the program or specialization is available, subject to " +
    "seat availability and academic administrative considerations.";

  const pages = [
    { id: "personal", name: "Application Details", number: 1 },
    { id: "program", name: "Course Details", number: 2 },
    { id: "payment", name: "Payment", number: 3 },
    // { id: "complete", name: "Complete", number: 4 },
  ];

  const handleNextPage = (currentPage: string) => {
    const currentIndex = pages.findIndex((page) => page.id === currentPage);
    if (currentIndex < pages.length - 1) {
      setActivePage(pages[currentIndex + 1].id);
    }
  };

  const handlePreviousPage = (currentPage: string) => {
    const currentIndex = pages.findIndex((page) => page.id === currentPage);
    if (currentIndex > 0) {
      setActivePage(pages[currentIndex - 1].id);
    }
  };

  interface Degree {
    name: string;
  }

  interface Specialization {
    title: string;
    degree: Degree[];
  }

  const courseCategories = [
    { id: 1, name: "Interior Design" },
    { id: 2, name: "Fashion Design" },
    { id: 3, name: "Graphic Design" },
    { id: 4, name: "UIUX Design" },
    { id: 5, name: "animation-vfx" },
    { id: 6, name: "Digital Marketing" },
    { id: 7, name: "Jewellery Design" },
    { id: 8, name: "Entrepreneurship Skill" },
    { id: 9, name: "Media-Entertainment" },
    { id: 10, name: "Fine Arts" },
    { id: 11, name: "Advertising-Marketing" },
  ];
  const courseSpecialization: Specialization[] = [
    {
      title: "Interior Design",
      degree: [
        { name: "B.Des In Interior Design" },
        { name: "B.VOC in Interior Design" },
        { name: "B.SC in Interior Design" },
        { name: "One Year Diploma in Interior Design" },
        { name: "Three Year Diploma in Interior Design" },
      ],
    },
    {
      title: "Fashion Design",
      degree: [
        { name: "B.Des In Fashion Design" },
        { name: "B.VOC in Fashion Design" },
        { name: "B.SC in Fashion Design" },
        { name: "One Year Diploma in Fashion Design" },
        { name: "Three Year Diploma in Fashion Design" },
      ],
    },
    {
      title: "Graphic Design",
      degree: [
        { name: "B.Des In Graphic Design" },
        { name: "B.VOC in Graphic Design" },
        { name: "B.SC in Graphic Design" },
        { name: "One Year Diploma in Graphic Design" },
        { name: "Three Year Diploma in Graphic Design" },
      ],
    },
    {
      title: "UIUX Design",
      degree: [
        { name: "B.Des In UI UX Design" },
        { name: "One Year Diploma in UI UX Design" },
      ],
    },
    {
      title: "Animation-VFX",
      degree: [
        { name: "B.Des in Animation and VFX" },
        { name: "B.VOC in Animation and VFX" },
        { name: "B.SC in Animation and VFX" },
        { name: "One Year Diploma in Animation and VFX" },
        { name: "Two Year Diploma in Animation and VFX" },
        { name: "Three Year Diploma in Animation and VFX" },
      ],
    },
    {
      title: "Jewellery Design",
      degree: [
        { name: "B.VOC in Jewellery Design" },
        { name: "One Year Diploma in Jewellery Design" },
        { name: "One Year Diploma in CAD Jewellery" },
        { name: "Six Month Certificate Course in Jewellery Design" },
        { name: "Six Month Certificate Course in CAD Jewellery" },
      ],
    },
    {
      title: "Digital Marketing",
      degree: [
        { name: "B.VOC in Digital Marketing" },
        { name: "One Year Diploma in Digital Marketing" },
        { name: "Six Month Certificate Course in Digital Marketing" },
      ],
    },
    {
      title: "Entrepreneurship Skill",
      degree: [
        { name: "B.VOC in Entrepreneurship Skill" },
        { name: "One Year Diploma in Entrepreneurship Skill" },
      ],
    },
    {
      title: "Media-Entertainment",
      degree: [
        { name: "B.VOC in Media and Entertainment" },
        { name: "One Year Diploma in Media and Entertainment" },
      ],
    },
    {
      title: "Advertising-Marketing",
      degree: [{ name: "Learn advanced advertising and marketing strategies" }],
    },
    {
      title: "Fine Arts",
      degree: [
        { name: "B. Des in Fine Arts" },
        { name: "B.VOC in Fine Arts" },
        { name: "B.SC in Fine Arts" },
        { name: "One Year Diploma in Fine Arts" },
        { name: "Three Year Diploma in Fine Arts" },
      ],
    },
  ];


  
  // Helper function
  // const toKebabCase = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  // Component logic
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<Specialization | null>(null);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    // Find the matching specialization using case-insensitive comparison
    const matchedSpecialization = courseSpecialization.find(
      (specialization) =>
        specialization.title.toLowerCase() === selectedValue.toLowerCase()
    );

    setSelectedSpecialization(matchedSpecialization || null);
    console.log(selectedValue)
    console.log(selectedCategory)
    console.log(matchedSpecialization)
  };

  const disabled = !isChecked;

  return (
    <div className="mt-20 flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white">
        <div className="p-4 font-bold text-lg">Application Steps</div>
        <div className="p-4 font-semibold text-md">How to Apply</div>
        <ul>
          {pages.map((page) => (
            <li
              key={page.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-800 ${activePage === page.id ? "bg-gray-700" : ""}`}
              onClick={() => setActivePage(page.id)}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${activePage === page.id ? "bg-yellow-500" : "bg-gray-600"}`}
              >
                {page.number}
              </div>
              <span>{page.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50 text-black overflow-y-auto">
        {activePage === "personal" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Application Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Date of Birth *
                </label>
                <input type="date" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email ID *
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number *
                </label>
                <div className="flex gap-2">
                  {/* Country Code Dropdown */}
                  <select
                    className="w-32 border-gray-300 rounded-md shadow-sm p-2"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {country.map((c) => (
                      <option key={c.name} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>

                  {/* Mobile Number Input */}
                  <input
                    type="tel"
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Gender *
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" className="mr-2" />
                    <span>Other</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Parent`s Mobile Number *
                </label>
                <div className="flex gap-2">
                  {/* Country Code Dropdown */}
                  <select
                    className="w-32 border-gray-300 rounded-md shadow-sm p-2"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Select Country</option>
                    {country.map((c) => (
                      <option key={c.name} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>

                  {/* Mobile Number Input */}
                  <input
                    type="tel"
                    className="flex-1 p-2 border rounded-md"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nationality *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter nationality"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                className="bg-yellow-600 text-white py-2 px-6 rounded font-medium"
                onClick={() => handleNextPage("personal")}
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {activePage === "program" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Course Selection</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Program Type *
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Select program type</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                  <option>Diploma</option>
                </select>
              </div>
              <div className="space-y-4">
                {/* Course Category Select */}
                <div className="space-y-4">
                  {/* Course Category */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Course Categories *
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Select course category</option>
                      {courseCategories.map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name
                            .replace(/-/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Specialization
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      // disabled={!selectedSpecialization}
                    >
                      <option>
                        {selectedSpecialization
                          ? "Select specialization"
                          : "No specialization available"}
                      </option>
                      {selectedSpecialization?.degree.map((deg, index) => (
                        <option key={index} value={deg.name}>
                          {deg.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Campus Preference
                </label>
                <select className="w-full p-2 border rounded">
                  <option>Select campus</option>
                  <option>Jodhpur Campus</option>
                  {/* <option>City Campus</option>
                  <option>South Campus</option> */}
                </select>
              </div>
              <div className="bg-white border border-gray-200 p-5 mb-6 rounded-lg text-sm md:text-base leading-relaxed">
                {disclaimerText}
              </div>

              <div className="mb-6 flex items-start">
                <input
                  type="checkbox"
                  id="consent-checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label
                  htmlFor="consent-checkbox"
                  className="text-sm md:text-base"
                >
                  I grant permission to Inframe School to contact me and accept
                  the{" "}
                  <a href="#" className="text-yellow-500 hover:underline">
                    T&Cs
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-yellow-500 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  as stated on the Website
                </label>
              </div>

              
            </div>
            <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
  <button
    className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium min-w-[120px]"
    onClick={() => handlePreviousPage("program")}
  >
    Previous
  </button>

  {/* <button
    className={`
      bg-yellow-400 text-white font-bold py-3 px-6 rounded-full
      transition-all duration-300 transform hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
      min-w-[150px]
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    `}
    onClick={() => (handleClick ? handleClick() : handleNextPage("program"))}
    disabled={disabled}
  >
    Next Step
  </button> */}
  <button
    className={`
      bg-yellow-400 text-white font-bold py-3 px-6 rounded-full
      transition-all duration-300 transform hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
      min-w-[150px]
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    `}
    onClick={() => (handleNextPage("program"))}
    // disabled={disabled}
  >
    Next Step
  </button>
</div>

          </div>
        )}

        {activePage === "payment" && (
          <div>
            <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
            <PaymentSection
              amount="2000"
              payUrl="/quick-payment"
              rules={[
                "Refer to the site for more info on exams and course details.",
                "Ensure all form details are correct before submitting.",
              ]}
            />

            {/* <div className="mt-8 flex justify-between">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
                onClick={() => handlePreviousPage("payment")}
              >
                Previous
              </button>
            </div> */}
          </div>
        )}

        {activePage === "complete" && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted</h2>
            <p className="text-gray-600 mb-6">
              Thank you for submitting your application. We will review it
              shortly.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 max-w-md mx-auto text-left mb-8">
              <p className="font-medium text-blue-800">
                Application Reference Number
              </p>
              <p className="text-2xl font-bold">APP-2025-78945</p>
            </div>
            <div className="space-y-4 max-w-md mx-auto mb-8">
              <p className="text-gray-600">
                An email confirmation has been sent to your registered email
                address.
              </p>
              <p className="text-gray-600">
                You can track your application status using your reference
                number.
              </p>
            </div>
            <button className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-6 rounded-md font-medium">
              Print Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface PaymentSectionProps {
  amount: string;
  payUrl: string;
  rules: string[];
}

const PaymentSection: React.FC<PaymentSectionProps> = ({
  amount,
  // payUrl,
  rules,
}) => {
  const [agreed, setAgreed] = useState(false);

  const createOrderId = async () => {
    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  const processPayment = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const orderId = await createOrderId();
      if (!orderId) {
        alert("Failed to create order. Please try again.");
        return;
      }
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: parseFloat(amount) * 100,
        currency: "INR",
        name: name,
        description: 'description',
        order_id: orderId,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          const res = await result.json();
          if (res.isOk) alert("payment succeed");
          else {
            alert(res.message);
          }
        },
        prefill: {
          name: name,
        },
        theme: {
          color: '#3399cc',
        },
      };
      const paymentObject = new window.Razorpay(options);

      paymentObject.on('payment.failed', function (response: { error: { description: string; }; }) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Payment Summary */}
        <div className="flex-1 border rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-3">Application Summary</h2>
          <p className="text-lg mb-4">
            <span className="font-medium">Charges:</span> Rs. {amount}
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Payment Gateway Options */}
        <div className="flex-1 border rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">
            Payment Gateway Options
          </h2>
          <div className="flex gap-4 mb-6">
            {/* <a
              href={agreed ? payUrl : processPayment}
              target="_blank"
              onClick={(e) => !agreed && e.preventDefault()}
            > */}
              <button
              onClick={processPayment}
                className={`px-4 py-2 rounded-md text-white ${
                  agreed
                    ? "bg-yellow-400 hover:bg-yellow-500"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={!agreed}
                
              >
                Pay Amount
              </button>
            {/* </a> */}
          </div>

          <div className="text-sm text-gray-600">
            <p className="mb-2 font-semibold">Disclaimer</p>
            <p className="mb-2">
              The fee submitted is <strong>non-refundable</strong>. The Academy
              reserves the right to cancel any booking and refund the amount.
            </p>
            <p>
              Ensure that all details are correct before proceeding. We are not
              liable for incorrect information.
            </p>
            
          </div>
        </div>
      </div>

      {/* Agreement & Pay Button */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
          className="w-4 h-4"
        />
        <label className="text-sm text-gray-800">
          I understand that the fee I submit with this application is
          non-refundable and agree to the terms above.
        </label>
      </div>
    </div>
  );
};


// export function PayNowPage() {
//   useEffect(() => {
//     openRazorpay({
//       amount: 50000, // ₹500
//       name: 'John Doe',
//       email: 'john@example.com',
//     });
//   }, []);

//   return <p className="text-center mt-20">Redirecting to payment gateway...</p>;
// }





