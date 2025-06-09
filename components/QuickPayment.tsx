'use client';
import { SetStateAction, useState } from 'react';
import Script from 'next/script';

function Payment() {
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [coursename, setCoursename] = useState('');
  const [amount, setAmount] = useState('0');
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle category change
  const handleCategoryChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedCategory(e.target.value);
    setCoursename(e.target.value);
  };

  // Course categories from commented code
  const courseCategories = [
    { id: 1, name: "interior-design" },
    { id: 2, name: "graphics-design" },
    { id: 3, name: "uiux-design" },
    { id: 4, name: "animation-vfx" },
    { id: 5, name: "digital-marketing" },
    { id: 6, name: "fashion-design" },
    { id: 7, name: "jewellery-design" },
    { id: 8, name: "entrepreneurship-skill" },
    { id: 9, name: "media-entertainment" },
    { id: 10, name: "fine-arts" },
    { id: 11, name: "advertising-marketing" },
    // Diploma courses
    { id: 12, name: "diploma-web-development" },
    { id: 13, name: "diploma-photography" },
    { id: 14, name: "diploma-video-editing" },
    { id: 15, name: "diploma-3d-modeling" },
    { id: 16, name: "diploma-mobile-app-development" }
  ];

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
          fathername: fathername,
          coursename: coursename
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
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />

      <div className="relative min-h-screen p-4 sm:p-6 lg:p-10 bg-gray-100">
        {/* Background Banner */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/1721738128651.jpg"
            alt="Inframe School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16 min-h-screen flex flex-col">
          {/* Header Text */}
          <div className="w-full text-white mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 sm:mt-8 mb-4 text-center lg:text-left">ADMISSIONS OPEN 2025</h2>

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row mt-6 gap-6 lg:gap-8">
              {/* Left Column - Programs */}
              <div className="w-full md:w-1/2">
                {/* Programs Grid - Side by side on larger screens, stacked on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
                  {/* Undergraduate Section */}
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                      UNDERGRADUATE
                    </h3>
                    <ul className="space-y-2 lg:space-y-3">
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Interior Design</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Graphics Design</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">UIUX Design</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Animation &vfx</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Digital Marketing</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Fashion Design</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Jewellery Design</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Entrepreneurship Skill</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Media-Entertainment</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Fine Arts</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Advertising-Marketing</span>
                      </li>
                    </ul>
                  </div>

                  {/* Diploma Section */}
                  {/* <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">
                      DIPLOMA
                    </h3>
                    <ul className="space-y-2 lg:space-y-3">
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Web Development</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Photography</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Video Editing</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">3D Modeling</span>
                      </li>
                      <li className="flex items-baseline">
                        <span className="text-yellow-400 mr-2 text-sm">▶</span>
                        <span className="text-sm lg:text-base">Mobile App Development</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="w-full md:w-1/2">
                <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Application Form
                  </h3>
                  <form className="space-y-4" onSubmit={processPayment}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="father"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Father`s Name
                      </label>
                      <input
                        type="text"
                        id="father"
                        className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter father's name"
                        value={fathername}
                        onChange={(e) => setFathername(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="course"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Course Name
                      </label>
                      <select
                        id="course"
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        required
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
                      <label
                        htmlFor="amount"
                        className="block text-gray-700 mb-1 font-medium"
                      >
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min={5}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 px-4 rounded-md transition duration-300"
                    >
                      Pay Amount
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;