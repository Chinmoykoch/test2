import React from 'react'
import CareersPage from '../../../components/CareersPage'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Careers at Inframe School | Join Our Team of Professionals',
  description: 'Explore career opportunities at Inframe School. Join our team of skilled professionals and help shape the future of education with growth and innovation.',
};

const page = () => {
  return (
    <div>
        <CareersPage/>
    </div>
  )
}

export default page