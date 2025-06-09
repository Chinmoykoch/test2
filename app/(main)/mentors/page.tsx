import React from "react";
import { Metadata } from "next";
import MentorsPage from "../../../components/Mentors";

export const metadata: Metadata = {
  title: 'Meet Our Expert Mentors | Inframe School | Learn from Industry Leaders',
  description: 'Meet Inframe School’s expert mentors – industry leaders with years of experience, offering valuable guidance for your academic and professional success.',
};



const page = () => {
  return (
    <div>
      <MentorsPage />
    </div>
  );
};

export default page;
