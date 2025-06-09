 
import React from 'react'
import LifeAtCampus from '../../../components/LifeAtInframePage'
import { Metadata } from 'next';




export const metadata: Metadata = {
  title: 'Life at Inframe School | Vibrant Campus & Student Experience',
  description: 'Experience life at Inframe School. Explore a vibrant campus, dynamic student activities, and a supportive environment fostering growth and success',
};


const page = () => {
  return (
    <div>
      <LifeAtCampus />
    </div>
  );
};

export default page;
