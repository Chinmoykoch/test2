

import React from "react";
import { Metadata } from "next";
import NewsAndEventsPage from "../../../components/NewsEvents";

export const metadata: Metadata = {
  title: 'Meet Our Expert Mentors | Inframe School | Learn from Industry Leaders',
  description: 'Meet Inframe School’s expert mentors – industry leaders with years of experience, offering valuable guidance for your academic and professional success.',
};



const page = () => {
  return (
    <div>
      <NewsAndEventsPage />
    </div>
  );
};

export default page;