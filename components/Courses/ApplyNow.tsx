import React from "react";
import { Button } from "../../components/ui/button";

const ApplyNowForm = () => (
  <div className="bg-zinc-100  p-8 mx-3 md:mx-0 rounded-xl">
    <h3 className="text-2xl font-bold text-black mb-6">
      Begin Your Application
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Full Name"
        className="bg-zinc-200 border border-zinc-700 rounded-lg p-3 text-white"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="bg-zinc-200 border border-zinc-700 rounded-lg p-3 text-white"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        className="bg-zinc-200 border border-zinc-700 rounded-lg p-3 text-white"
      />
      <select className="bg-zinc-200 border border-zinc-700 rounded-lg p-3 text-white">
        <option value="">Select Course</option>
        <option value="bdes">B.Des in Interior Design</option>
        <option value="bvoc">B.VOC in Interior Design</option>
        <option value="bsc">B.SC in Interior Design</option>
        <option value="diploma1">1 Year Diploma</option>
        <option value="diploma3">3 Year Diploma</option>
      </select>
      <textarea
        placeholder="Your Message"
        className="bg-zinc-200 border border-zinc-700 rounded-lg p-3 text-white md:col-span-2"
        rows={4}
      />
      <Button className="bg-yellow-400 text-black hover:bg-yellow-500 md:col-span-2">
        Submit Application
      </Button>
    </div>
  </div>
);

export default ApplyNowForm;
