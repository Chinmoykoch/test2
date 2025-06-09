
import { Metadata } from "next";
import AboutPage from "../../../components/About"






export const metadata: Metadata = {
  title: 'About Us | Inframe School of Art & Design | Jodhpur',
  description: 'Learn more about Inframe School of Art & Design in Jodhpur. With 15+ years of excellence, we offer top-quality education in art, design, business, and more.',
};


const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
