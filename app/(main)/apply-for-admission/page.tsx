// "use client"
// import { useState } from 'react';
// import AdmissionSidebar from '../../../components/Navbar/AdmissionSidebar';

// export default function Application() {
//   const [activePage, setActivePage] = useState('personal');

//   const pages = [ 
//     { id: 'personal', name: 'Personal Details', number: 1 },
//     { id: 'family', name: 'Family Details', number: 2 },
//     { id: 'address', name: 'Address Details', number: 3 },
//     { id: 'educational', name: 'Educational Details', number: 4 },
//     { id: 'program', name: 'Program Selection', number: 5 },
//     { id: 'payment', name: 'Payment', number: 6 },
//     { id: 'complete', name: 'Complete', number: 7 }
//   ];

//   const handleNextPage = (currentPage: string) => {
//     const currentIndex = pages.findIndex(page => page.id === currentPage);
//     if (currentIndex < pages.length - 1) {
//       setActivePage(pages[currentIndex + 1].id);
//     }
//   };

//   const handlePreviousPage = (currentPage: string) => {
//     const currentIndex = pages.findIndex(page => page.id === currentPage);
//     if (currentIndex > 0) {
//       setActivePage(pages[currentIndex - 1].id);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100 mt-24 overflow-hidden">
//       {/* Sidebar */}
//       <AdmissionSidebar/>
      
//       {/* Main Content */}
//       <div className="flex-1 p-8 bg-gray-50 text-black overflow-y-auto">
//         {activePage === 'personal' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">First Name *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter first name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Last Name *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter last name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Date of Birth *</label>
//                 <input type="date" className="w-full p-2 border rounded" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Age *</label>
//                 <input type="number" className="w-full p-2 border rounded" placeholder="Enter your age" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email ID *</label>
//                 <input type="email" className="w-full p-2 border rounded" placeholder="Enter email address" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mobile Number *</label>
//                 <input type="tel" className="w-full p-2 border rounded" placeholder="Enter mobile number" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Alternative Mobile Number</label>
//                 <input type="tel" className="w-full p-2 border rounded" placeholder="Enter alternative mobile number" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Aadhar Card Number *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter 12-digit Aadhar number" />
//               </div>
//               <div className="col-span-2">
//                 <label className="block text-sm font-medium mb-1">Gender *</label>
//                 <div className="flex space-x-4 mt-2">
//                   <label className="flex items-center">
//                     <input type="radio" name="gender" className="mr-2" />
//                     <span>Male</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="gender" className="mr-2" />
//                     <span>Female</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="gender" className="mr-2" />
//                     <span>Other</span>
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Blood Group</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select blood group</option>
//                   <option>A+</option>
//                   <option>A-</option>
//                   <option>B+</option>
//                   <option>B-</option>
//                   <option>AB+</option>
//                   <option>AB-</option>
//                   <option>O+</option>
//                   <option>O-</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Nationality *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter nationality" />
//               </div>
//             </div>
//             <div className="mt-8 flex justify-end">
//               <button 
//                 className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
//                 onClick={() => handleNextPage('personal')}
//               >
//                 Next Step
//               </button>
//             </div>
//           </div>
//         )}

//         {activePage === 'family' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Family Details</h2>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Father's Name *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter father's name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Father's Occupation *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter father's occupation" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Father's Mobile Number *</label>
//                 <input type="tel" className="w-full p-2 border rounded" placeholder="Enter father's mobile number" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Father's Email ID</label>
//                 <input type="email" className="w-full p-2 border rounded" placeholder="Enter father's email address" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mother's Name *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter mother's name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mother's Occupation *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter mother's occupation" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mother's Mobile Number *</label>
//                 <input type="tel" className="w-full p-2 border rounded" placeholder="Enter mother's mobile number" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mother's Email ID</label>
//                 <input type="email" className="w-full p-2 border rounded" placeholder="Enter mother's email address" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Annual Family Income *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter annual family income" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Number of Siblings</label>
//                 <input type="number" className="w-full p-2 border rounded" placeholder="Enter number of siblings" />
//               </div>
//             </div>
//             <div className="mt-8 flex justify-between">
//               <button 
//                 className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
//                 onClick={() => handlePreviousPage('family')}
//               >
//                 Previous
//               </button>
//               <button 
//                 className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
//                 onClick={() => handleNextPage('family')}
//               >
//                 Next Step
//               </button>
//             </div>
//           </div>
//         )}

//         {activePage === 'address' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Address Details</h2>
//             <div className="mb-8">
//               <h3 className="text-lg font-medium mb-4">Permanent Address</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Address Line 1 *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="House/Flat No., Building Name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Address Line 2</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Street, Locality" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">City *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter city name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">State/Province *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter state/province" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Postal/ZIP Code *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter postal/ZIP code" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Country *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter country" />
//                 </div>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <span className="text-sm">Current address is same as permanent address</span>
//               </label>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-lg font-medium mb-4">Current Address</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Address Line 1 *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="House/Flat No., Building Name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Address Line 2</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Street, Locality" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">City *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter city name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">State/Province *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter state/province" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Postal/ZIP Code *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter postal/ZIP code" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Country *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter country" />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-between">
//               <button 
//                 className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
//                 onClick={() => handlePreviousPage('address')}
//               >
//                 Previous
//               </button>
//               <button 
//                 className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
//                 onClick={() => handleNextPage('address')}
//               >
//                 Next Step
//               </button>
//             </div>
//           </div>
//         )}
        
//         {activePage === 'educational' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Educational Details</h2>
//             <div className="mb-8">
//               <h3 className="text-lg font-medium mb-4">Class 10th Details</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">School Name *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter school name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Board *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter board name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Year of Passing *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="YYYY" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Percentage/CGPA *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter percentage or CGPA" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium mb-1">Upload Marksheet *</label>
//                   <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
//                     <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
//                     <p className="text-xs text-gray-500">PDF, JPG up to 5MB</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-lg font-medium mb-4">Class 12th Details</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">School Name *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter school name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Board *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter board name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Year of Passing *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="YYYY" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Percentage/CGPA *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter percentage or CGPA" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium mb-1">Upload Marksheet *</label>
//                   <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
//                     <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
//                     <p className="text-xs text-gray-500">PDF, JPG up to 5MB</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-lg font-medium mb-4">Highest Qualification</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Qualification Level *</label>
//                   <select className="w-full p-2 border rounded">
//                     <option>Select qualification</option>
//                     <option>High School (12th)</option>
//                     <option>Diploma</option>
//                     <option>Bachelor's Degree</option>
//                     <option>Master's Degree</option>
//                     <option>Ph.D.</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Institute/University *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter institute name" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Year of Passing *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="YYYY" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-1">Percentage/CGPA *</label>
//                   <input type="text" className="w-full p-2 border rounded" placeholder="Enter percentage or CGPA" />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-medium mb-1">Upload Marksheet/Degree *</label>
//                   <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
//                     <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
//                     <p className="text-xs text-gray-500">PDF, JPG up to 5MB</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-between">
//               <button 
//                 className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
//                 onClick={() => handlePreviousPage('educational')}
//               >
//                 Previous
//               </button>
//               <button 
//                 className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
//                 onClick={() => handleNextPage('educational')}
//               >
//                 Next Step
//               </button>
//             </div>
//           </div>
//         )}
        
//         {activePage === 'program' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Program Selection</h2>
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Program Type *</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select program type</option>
//                   <option>Undergraduate</option>
//                   <option>Postgraduate</option>
//                   <option>Doctorate</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Faculty/School *</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select faculty/school</option>
//                   <option>School of Engineering</option>
//                   <option>School of Management</option>
//                   <option>School of Sciences</option>
//                   <option>School of Humanities</option>
//                   <option>School of Medicine</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Course *</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select course</option>
//                   <option>Computer Science</option>
//                   <option>Business Administration</option>
//                   <option>Engineering</option>
//                   <option>Mathematics</option>
//                   <option>Physics</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Specialization</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select specialization</option>
//                   <option>Data Science</option>
//                   <option>Artificial Intelligence</option>
//                   <option>Software Engineering</option>
//                   <option>Marketing</option>
//                   <option>Finance</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Campus Preference</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select campus</option>
//                   <option>Main Campus</option>
//                   <option>City Campus</option>
//                   <option>South Campus</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mode of Study *</label>
//                 <div className="flex space-x-4 mt-2">
//                   <label className="flex items-center">
//                     <input type="radio" name="studyMode" className="mr-2" />
//                     <span>Full-time</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="studyMode" className="mr-2" />
//                     <span>Part-time</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="studyMode" className="mr-2" />
//                     <span>Distance Learning</span>
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Accommodation Required</label>
//                 <div className="flex space-x-4 mt-2">
//                   <label className="flex items-center">
//                     <input type="radio" name="accommodation" className="mr-2" />
//                     <span>Yes</span>
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="accommodation" className="mr-2" />
//                     <span>No</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-between">
//               <button 
//                 className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
//                 onClick={() => handlePreviousPage('program')}
//               >
//                 Previous
//               </button>
//               <button 
//                 className="bg-blue-600 text-white py-2 px-6 rounded font-medium"
//                 onClick={() => handleNextPage('program')}
//               >
//                 Next Step
//               </button>
//             </div>
//           </div>
//         )}
        
//         {activePage === 'payment' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Payment</h2>
//             <div className="space-y-6">
//               <div className="p-4 bg-white border rounded shadow-sm">
//                 <h3 className="text-lg font-medium mb-2">Application Fee</h3>
//                 <p className="text-2xl font-bold text-blue-600 mb-4">$50.00</p>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Payment Method *</label>
//                     <div className="grid grid-cols-4 gap-4 mb-4">
//                       <div className="border p-4 rounded flex items-center justify-center cursor-pointer hover:border-blue-500">
//                         <span>Credit Card</span>
//                       </div>
//                       <div className="border p-4 rounded flex items-center justify-center cursor-pointer hover:border-blue-500">
//                         <span>Debit Card</span>
//                       </div>
//                       <div className="border p-4 rounded flex items-center justify-center cursor-pointer hover:border-blue-500">
//                         <span>Net Banking</span>
//                       </div>
//                       <div className="border p-4 rounded flex items-center justify-center cursor-pointer hover:border-blue-500">
//                         <span>UPI</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Cardholder Name *</label>
//                     <input type="text" className="w-full p-2 border rounded" placeholder="Enter cardholder name" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Card Number *</label>
//                     <input type="text" className="w-full p-2 border rounded" placeholder="XXXX XXXX XXXX XXXX" />
//                   </div>
//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Expiry Month *</label>
//                       <input type="text" className="w-full p-2 border rounded" placeholder="MM" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Expiry Year *</label>
//                       <input type="text" className="w-full p-2 border rounded" placeholder="YY" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">CVV *</label>
//                       <input type="text" className="w-full p-2 border rounded" placeholder="XXX" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="flex items-center">
//                       <input type="checkbox" className="mr-2" />
//                       <span className="text-sm">I agree to the terms and conditions.</span>
//                     </label>
//                   </div>
//                   <button
//                     className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-2 rounded font-medium"
//                     onClick={() => handleNextPage('payment')}
//                   >
//                     Pay Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-8 flex justify-between">
//               <button 
//                 className="bg-gray-300 text-gray-800 py-2 px-6 rounded font-medium"
//                 onClick={() => handlePreviousPage('payment')}
//               >
//                 Previous
//               </button>
//             </div>
//           </div>
//         )}
        
//         {activePage === 'complete' && (
//           <div className="text-center py-12">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//               <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//             </div>
//             <h2 className="text-2xl font-bold mb-2">Application Submitted</h2>
//             <p className="text-gray-600 mb-6">Thank you for submitting your application. We will review it shortly.</p>
//             <div className="bg-blue-50 border border-blue-200 rounded p-4 max-w-md mx-auto text-left mb-8">
//               <p className="font-medium text-blue-800">Application Reference Number</p>
//               <p className="text-2xl font-bold">APP-2025-78945</p>
//             </div>
//             <div className="space-y-4 max-w-md mx-auto mb-8">
//               <p className="text-gray-600">An email confirmation has been sent to your registered email address.</p>
//               <p className="text-gray-600">You can track your application status using your reference number.</p>
//             </div>
//             <button 
//               className="bg-yellow-400 text-black hover:bg-yellow-500 py-2 px-6 rounded-md font-medium"
//             >
//               Print Application
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page