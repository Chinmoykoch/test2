// "use client"
// import { useState } from 'react';

// export default function AdmissionPage() {
//   const [activePage, setActivePage] = useState('personal');

//   const pages = [
//     { id: 'personal', name: 'Personal Details', number: 1 },
//     { id: 'educational', name: 'Educational Details', number: 2 },
//     { id: 'program', name: 'Program Selection', number: 3 },
//     { id: 'payment', name: 'Payment', number: 4 },
//     { id: 'complete', name: 'Complete', number: 5 }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-black text-white">
//         <div className="p-4 font-bold text-lg">
//           Application Steps
//         </div>
//         <ul>
//           {pages.map((page) => (
//             <li 
//               key={page.id}
//               className={`flex items-center p-4 cursor-pointer hover:bg-gray-800 ${activePage === page.id ? 'bg-gray-700' : ''}`}
//               onClick={() => setActivePage(page.id)}
//             >
//               <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${activePage === page.id ? 'bg-blue-500' : 'bg-gray-600'}`}>
//                 {page.number}
//               </div>
//               <span>{page.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 p-8 bg-gray-50">
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
//                 <label className="block text-sm font-medium mb-1">Father`s Name </label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter father's name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mother`s Name *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter mother's name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email ID *</label>
//                 <input type="email" className="w-full p-2 border rounded" placeholder="Enter email address" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Mobile Number *</label>
//                 <input type="tel" className="w-full p-2 border rounded" placeholder="Enter mobile number" />
//               </div>
//             </div>
//           </div>
//         )}
        
//         {activePage === 'educational' && (
//           <div>
//             <h2 className="text-2xl font-bold mb-6">Educational Details</h2>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Highest Qualification *</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select qualification</option>
//                   <option>High School</option>
//                   <option>Bachelor`s Degree</option>
//                   <option>Master`s Degree</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Year of Passing *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="YYYY" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Institute/University *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter institute name" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Percentage/CGPA *</label>
//                 <input type="text" className="w-full p-2 border rounded" placeholder="Enter percentage or CGPA" />
//               </div>
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
//                 <label className="block text-sm font-medium mb-1">Course *</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select course</option>
//                   <option>Computer Science</option>
//                   <option>Business Administration</option>
//                   <option>Engineering</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Specialization</label>
//                 <select className="w-full p-2 border rounded">
//                   <option>Select specialization</option>
//                   <option>Data Science</option>
//                   <option>Artificial Intelligence</option>
//                   <option>Software Engineering</option>
//                 </select>
//               </div>
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
//                   <button className="w-full bg-blue-600 text-white py-2 rounded font-medium">Pay Now</button>
//                 </div>
//               </div>
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
//             <div className="bg-blue-50 border border-blue-200 rounded p-4 max-w-md mx-auto text-left">
//               <p className="font-medium text-blue-800">Application Reference Number</p>
//               <p className="text-2xl font-bold">APP-2025-78945</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }