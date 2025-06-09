import { Facebook, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white font-sans py-16">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-2xl mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about-us"
                className="hover:text-blue-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/admission-process"
                className="hover:text-blue-500 transition duration-300"
              >
                Admission Process
              </Link>
            </li>
            <li>
              <Link
                href="/lifeatinframe"
                className="hover:text-blue-500 transition duration-300"
              >
                Campus
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-500 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/advisors"
                className="hover:text-blue-500 transition duration-300"
              >
                Advisors
              </Link>
            </li>
            <li>
              <Link
                href="/news-events"
                className="hover:text-blue-500 transition duration-300"
              >
                News & Events
              </Link>
            </li>
            <li>
              <Link
                href="/mentors"
                className="hover:text-blue-500 transition duration-300"
              >
                Mentors
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="hover:text-blue-500 transition duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="hover:text-blue-500 transition duration-300"
              >
                Downloads
              </Link>
            </li>
            <li>
              <Link
                href="/quick-payment"
                className="hover:text-blue-500 transition duration-300"
              >
                Quick Payment
              </Link>
            </li>
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="font-bold text-2xl mb-6">Courses We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="font-bold">Interior Design</li>
              <li>
              <Link
                href="/interior-design/bdes-in-interior-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B. Des in Interior Design
              </Link></li>
              <li><Link
                href="/interior-design/bvoc-in-interior-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.VOC in Interior Design
              </Link></li>
              <li>
              <Link
                href="/interior-design/bsc-in-interior-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.Sc in Interior Design
              </Link></li>
              <li>
              <Link
                href="/interior-design/one-year-diploma-in-interior-design"
                className="hover:text-blue-500 transition duration-300"
              >
                1-Year Diploma in Interior Design
              </Link></li>
              <li>
              <Link
                href="/interior-design/three-year-diploma-in-interior-design"
                className="hover:text-blue-500 transition duration-300"
              >
                3-Year Diploma in Interior Design
              </Link></li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">Fashion Design</li>
              <li>
              <Link
                href="/fashion-design/bdes-in-fashion-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B. Des in Fashion Design
              </Link></li>
              <li>
              <Link
                href="/fashion-design/bvoc-in-fashion-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.VOC in Fashion Design
              </Link></li>
              <li>
              <Link
                href="/fashion-design/bsc-in-fashion-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.Sc in Fashion Design
              </Link></li>
              <li>
              <Link
                href="/fashion-design/one-year-diploma-in-fashion-design"
                className="hover:text-blue-500 transition duration-300"
              >
                1-Year Diploma in Fashion Design
              </Link></li>
              <li>
              <Link
                href="/fashion-design/three-year-diploma-in-fashion-design"
                className="hover:text-blue-500 transition duration-300"
              >
                3-Year Diploma in Fashion Design
              </Link></li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">Graphic Design</li>
              <li>
              <Link
                href="/graphic-design/bdes-in-graphic-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B. Des in Graphic Design
              </Link>
                </li>
              <li>
              <Link
                href="/graphic-design/bvoc-in-graphic-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.VOC in Graphic Design
              </Link></li>
              <li>
              <Link
                href="/graphic-design/bsc-in-graphic-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B.Sc in Graphic Design
              </Link></li>
              <li>
              <Link
                href="/graphic-design/one-year-diploma-in-graphic-design"
                className="hover:text-blue-500 transition duration-300"
              >
                1-Year Diploma in Graphic Design
              </Link></li>
              <li>
              <Link
                href="/graphic-design/three-year-diploma-in-graphic-design"
                className="hover:text-blue-500 transition duration-300"
              >
                3-Year Diploma in Graphic Design
              </Link></li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">UI & UX Design</li>
              <li>
              <Link
                href="/uiux-design/bdes-in-ui-ux-design"
                className="hover:text-blue-500 transition duration-300"
              >
                B. Des in UI & UX Design
              </Link></li>
              <li>
              <Link
                href="/uiux-design/one-year-diploma-in-ui-ux-design"
                className="hover:text-blue-500 transition duration-300"
              >
                1-Year Diploma in UI & UX Design
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Locate Us Section */}

       
        <div>
          <h3 className="font-bold text-2xl mb-6">Locate Us</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4402.294141288112!2d72.98366907607904!3d26.270182887406257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67b93f41c21a1b33%3A0x75c39459005a6414!2sInframe%20School%20of%20Art%2C%20Design%20%26%20Business!5e1!3m2!1sen!2sin!4v1740730217159!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-4 text-sm opacity-80">
            09, Pal Link Road, <br />
            Marudhar Nagar, Kamla Nehru Nagar, <br />
            Shyam Nagar, Jodhpur, Rajasthan 342008
          </p>
          <p className="mt-4 text-sm opacity-80">
            <strong>Admissions:</strong> +91 9649 9649 37
            <br />
            <strong>Admin:</strong> +91 9649 9649 70
            <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@inframecollege.org"
              className="underline text-blue-400"
            >
              info@inframeschool.com
            </a>
            <br />
            <strong>Careers:</strong>{" "}
            <a
              href="mailto:hr@inframecollege.org"
              className="underline text-blue-400"
            >
              hr@inframeschool.com
            </a>
          </p>
          <div className="flex space-x-6 mt-8">
            <Link
              href="#"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <Facebook size={30} />
            </Link>
            <Link
              href="#"
              className="text-red-500 hover:text-red-600 transition duration-300"
            >
              <Youtube size={30} />
            </Link>
            <Link
              href="#"
              className="text-pink-500 hover:text-pink-600 transition duration-300"
            >
              <Instagram size={30} />
            </Link>
            <Link
              href="#"
              className="text-blue-700 hover:text-blue-800 transition duration-300"
            >
              <Linkedin size={30} />
            </Link>
            <Link
              href="#"
              className="text-sky-500 hover:text-sky-600 transition duration-300"
            >
              <Twitter size={30} />
            </Link>
          </div>
        </div>
      </div>

      {/* Free Courses Section */}
      <div className="mt-16 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm">
          <p>
            <span className="font-semibold">Free Courses:</span> Copywriting ·
            Digital Marketing · Graphic Design · Interior Design · Digital
            Software · Facebook Ads · Google Ads · SEO · Digital Painting ·
            Illustrations · Sewing Machine Technique · Furniture Making ·
            Sketching · Drawing · Video Editing · Fashion Styling · Fashion
            Communication · English Communication · Animation · VFX · Jewellery
            Design · CAD Design · Painting · Business Management · Draping ·
            Pattern Making · Carpentry · Entrepreneurship Skills · Advertising ·
            Marketing
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t-2 border-gray-800 pt-6">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm opacity-80">
          <p className="font-bold">
            © 2025 Inframe School of Art, Design & Business is a Unit of Inframe
            Educational Society Registered under the Rajasthan Society Act. All
            rights reserved <br />
            <Link href={"/privacy-policy"} className="hover:underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href={"/cancellation-and-refund"} className="hover:underline">
              Cancellation and Refund
            </Link>{" "}
            ·{" "}
            <Link href={"/terms-and-conditions"} className="hover:underline">
              Terms & Conditions
            </Link>{" "}
            ·{" "}
            <Link href={"/shipping-policy"} className="hover:underline">
              Shipping and Delivery
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
