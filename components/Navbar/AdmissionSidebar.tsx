"use client"

import React from 'react'

interface AdmissionSidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function AdmissionSidebar({ activePage, setActivePage }: AdmissionSidebarProps) {
  const pages = [
    { id: 'personal', name: 'Personal Details', number: 1 },
    { id: 'family', name: 'Family Details', number: 2 },
    { id: 'address', name: 'Address Details', number: 3 },
    { id: 'educational', name: 'Educational Details', number: 4 },
    { id: 'program', name: 'Program Selection', number: 5 },
    { id: 'payment', name: 'Payment', number: 6 },
    { id: 'complete', name: 'Complete', number: 7 }
  ];

  return (
    <div className="w-64 bg-black text-white">
      <div className="p-4 font-bold text-lg">
        Application Steps
      </div>
      <ul>
        {pages.map((page) => (
          <li 
            key={page.id}
            className={`flex items-center p-4 cursor-pointer hover:bg-gray-800 ${activePage === page.id ? 'bg-gray-700' : ''}`}
            onClick={() => setActivePage(page.id)}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${activePage === page.id ? 'bg-blue-500' : 'bg-gray-600'}`}>
              {page.number}
            </div>
            <span>{page.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
