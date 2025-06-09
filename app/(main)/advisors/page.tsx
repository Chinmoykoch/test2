import React from "react";
import AdvisorsPage from "../../../components/AdvisorsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Meet Our Expert Mentors | Inframe School | Learn from Industry Leaders',
  description: 'Meet Inframe School’s expert mentors – industry leaders with years of experience, offering valuable guidance for your academic and professional success.',
};



const page = () => {
  return (
    <div>
      <AdvisorsPage />
    </div>
  );
};

export default page;
