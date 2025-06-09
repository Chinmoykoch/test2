import { Metadata } from "next"
import DynamicBlogPage from "@/components/DynamicBlogPage"

// Enhanced metadata with more keywords and structured data
export const metadata: Metadata = {
  title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
  description: 'Explore expert insights on design education, career guidance, placement opportunities, and industry trends at Inframe School - the top arts & design institute in Rajasthan, India.',
  keywords: 'design school, best design college in Rajasthan, arts education, creative curriculum, design career, design placement, Inframe alumni, design facilities, student life',
  openGraph: {
    title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
    description: 'Explore expert insights on design education, career guidance, placement opportunities, and industry trends at Inframe School.',
    images: ['/images/gallery/DSC04232.JPG'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Insights, Career Tips & Design Inspiration | Inframe School Blog',
    description: 'Explore expert insights on design education, career guidance, and industry trends at Inframe School.',
    images: ['/images/gallery/DSC04232.JPG'],
  },
};

// This page now uses the DynamicBlogPage component which fetches blogs from the backend API

export default function Home() {
  return <DynamicBlogPage />;
}