import React from "react";
import ExamPapersSection from "../../../components/DownloadSection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Download Important Resources | Inframe School',
  description: 'Download essential resources and documents from Inframe School to support your academic and administrative needs easily and conveniently.',
};


const page = () => {
  return (
    <div>
      <ExamPapersSection />
    </div>
  );
};

export default page;
