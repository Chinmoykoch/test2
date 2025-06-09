// app/page.tsx

import HeroSection from "../../components/HeroSection";
import DreamsSection from "../../components/DreamSection";
import InfiniteSlider from "../../components/LogoCarousel";
import CounselingForm from "../../components/CounselingForm";
import LifeAtInframe from "../../components/LifeAtInframe";
import CTABanner from "../../components/CTABanner";
import FeaturesSection from "../../components/WhyInframe";
import TestimonialCarousel from "../../components/TestimonialSection ";
import MembershipPartnership from "../../components/MemberShipSection";
import CourseCatalog from "../../components/CourseCarousel";
import { Metadata } from "next";
import WhatsAppFloat from "../../components/WhatsappWidgets";

export const metadata: Metadata = {
  title: 'Inframe School: Best Art, Design & Business School in Jodhpur | Top College for Creative Education',
  description: 'Inframe School of Art, Design & Business is a Leading Institution in Jodhpur with Over 15 Years of Excellence. We are the Trusted Choice for Creative Education in Jodhpur.',
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CourseCatalog />
      <DreamsSection />
      <InfiniteSlider />
      <CounselingForm />
      <LifeAtInframe />
      <MembershipPartnership />
      <CTABanner />
      <FeaturesSection />
      <TestimonialCarousel />
      <WhatsAppFloat /> 
    </div>
  );
}
