"use client";
import React, { useEffect,} from "react";
import { Card, CardContent } from "../components/ui/card";
import { experienceCamputLife, highlights, LOGOS, studentImages, values } from "../utils/constant";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import Image from "next/image";
import "aos/dist/aos.css"; // Import the CSS for animations
import CampusLife from "./CampusLife";
import Aos from "aos";
// import ApplyNowForm from "./ApplyNowForm";
// import { Button } from "./ui/button";
// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const AboutPage = () => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  //   const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //     e.preventDefault();
  //     setIsFormOpen(true);
  //   };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  // const { user, loginWithRedirect, logout, isAuthenticated,isLoading } = useAuth0();

  // useEffect(()=>{
  //   if(!isLoading && !isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // },[isAuthenticated,isLoading]);

  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  // if(!isAuthenticated) {
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-white text-justify">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-white py-32">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8"
            data-aos="fade-up"
          >
            {studentImages.map((imgUrl, i) => (
              <div key={i} className="aspect-square">
                <Image
                  src={imgUrl}
                  alt={`University Life ${i + 1}`}
                  width={200} // Adjust as needed
                  height={200} // Adjust as needed
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <h1
            className={`text-4xl md:text-5xl text-black font-bold mb-4 ${poppins.className}`}
          >
            WHO WE ARE?
          </h1>
          <p className="text-lg  md:text-xl text-black font-sans">
            Inframe is an innovative platform that blends creativity with
            business, offering a dynamic space where art and design
            professionals come together to shape the future. With a vibrant and
            inclusive community, Inframe empowers creators to transform their
            passion into a successful career while fostering a collaborative
            environment where ideas thrive.
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/1719304885452_1.jpg"}
                alt={"Cultural Event"}
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left">
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                About Us
              </h2>
              <p className="text-lg font-sans leading-relaxed text-justify">
                Inframe school of art, design & business is established by the
                Inframe Educational Society under Rajasthan Societies Act 1958.
                Inframe school of art, design and business will be one of a kind
                design institute in Jodhpur which will commence it&apos;s curriculum
                with the aim to expand the design and business field in Jodhpur
                and it&apos;s surrounding regions by being the first design and
                business school of Jodhpur to offer degree, diploma and
                professional courses in various fields of interior design,
                graphic design, fine arts and digital marketing .
                <br />
                <br />
                To pursue a design course the candidate need it have to qualify
                in specific subject .The candidate from any educational
                background can pursue or take admission to a design course and
                fulfill their dreams of becoming designer with inframe design
                school .In school will not only help the students to learn more
                effectively and have a great future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-yellow-50" data-aos="fade-down">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400} // Adjust as needed
                  height={400} // Adjust as needed
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-bold text-yellow-400 mb-2">
                    {item.count}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          {/* Left side: Text */}
          <div
            className="grid md:grid-cols-2 gap-16 items-center"
            data-aos="fade-left"
          >
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                VISION
              </h2>
              <p className="text-lg font-sans leading-relaxed">
                Inframe school of art, design and business aspires to be a
                nationally and internationally recognized institution for
                education in various fields of design, art and business. We want
                the students of our city/state to flourish in their life and at
                the same time help the design industry grow in this region. Our
                learning will consist of some basic theoretical knowledge about,
                developing a creative thinking and then turning towards the
                practical aspects which would be taken care of by our industry
                partners and hand on leadership opportunities delivered by our
                distinguished and experienced faculties. Our learning will not
                only be limited to the curriculum but we will also be preparing
                the students to perform well in real life conditions and excel
                in their career ahead of them.
              </p>
            </div>

            {/* Right side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/IMG_20240605_124215.jpg"}
                alt={"Cultural Event"}
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        className="py-20 bg-white text-black font-sans"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold mb-16 text-center text-black ${poppins.className}`}
          >
            OUR CORE VALUES
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg bg-zinc-100 "
              >
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={400} // Adjust as needed
                      height={300} // Adjust as needed
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-3 text-yellow-400 ${poppins.className}`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-black">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/1721366668571.jpg"}
                alt="Cultural Event"
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left">
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                MISSION
              </h2>
              <p className="text-lg font-sans leading-relaxed">
                Inframe school of art, design and business believes in
                innovative and effective way of learning rather than just
                sticking to the curriculum. We want to prepare our students to
                get into the industry of their choice and outperform everyone
                else with the perk of having learned every aspect of the
                industry. The main mission of our school is to prepare the
                students in becoming the designers, artists and entrepreneurs of
                tomorrow so that they can take on the world by storm and mark
                their presence in the world. Our school is collaborating with
                the various industries and leading designers of Jodhpur to
                conduct workshops, have work experience, real world problem
                solving and have various business opportunities which will help
                the students in developing design thinking with relation to the
                market requirements and desires
                <br />
                <br />
                To pursue a design course the candidate need it have to qualify
                in specific subject .The candidate from any educational
                background can pursue or take admission to a design course and
                fulfill their dreams of becoming designer with inframe design
                school .In school will not only help the students to learn more
                effectively and have a great future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation and Tie Ups Section */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold mb-12 text-center ${poppins.className}`}>
            AFFILIATION AND TIE UPS
          </h2>
          
          {/* CPISD Affiliation Description */}
          <div className="mb-12 p-8 bg-gray-50 rounded-lg">
            <p className="text-lg font-sans leading-relaxed text-justify">
              Inframe School of Art, Design & Business is a proud affiliated Skill Development Training Centre under the Career Point Institute of Skill Development (CPISD). We are officially recognized and authorized to deliver skill-based training programs aligned with the Skilling India Mission, an initiative aimed at empowering individuals with industry-relevant skills.
            </p>
            <p className="text-lg font-sans leading-relaxed text-justify mt-4">
              Our institution has been assigned the ASC Code: <span className="font-semibold text-yellow-600">TC388922</span>, and we operate under the jurisdiction of Jodhpur, Rajasthan. This affiliation ensures that our training methodologies, curriculum, and certifications adhere to national standards set by the National Skill Development Corporation (NSDC).
            </p>
            <p className="text-lg font-sans leading-relaxed text-justify mt-4">
              With the support of CPISD&mdash;registered under the Companies Act 2013 and a trusted training partner of NSDC&mdash;we continue to drive our mission of transforming education through skill enhancement and career-focused learning.
            </p>
            <p className="text-lg font-sans leading-relaxed text-justify mt-4">
              For more details, visit <a href="https://www.cpisd.in" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline font-semibold">www.cpisd.in</a> or contact us at <a href="mailto:skillzone@cpil.in" className="text-yellow-600 hover:text-yellow-700 underline font-semibold">skillzone@cpil.in</a>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* College Affiliation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">College Affiliation</h3>
                <p className="text-sm text-gray-600 mb-4">Official College Recognition</p>
              </div>
              <a 
                href="/affiliations/WhatsApp Image 2025-06-15 at 11.49.29 AM.jpeg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Affiliation
              </a>
            </div>

            {/* Society Certificate Registration */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Society Certificate Registration</h3>
                <p className="text-sm text-gray-600 mb-4">Registered under Rajasthan Societies Act 1958</p>
              </div>
              <a 
                href="/affiliations/society certificate registration.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Certificate
              </a>
            </div>

            {/* UGC Inspection */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">UGC Inspection</h3>
                <p className="text-sm text-gray-600 mb-4">University Grants Commission Approved</p>
              </div>
              <a 
                href="/affiliations/12b ugc inspection.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Certificate
              </a>
            </div>

            {/* AIU Membership */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AIU Membership</h3>
                <p className="text-sm text-gray-600 mb-4">Association of Indian Universities</p>
              </div>
              <a 
                href="/affiliations/aiu membership.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Certificate
              </a>
            </div>

            {/* C Skill Program */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">C Skill Program</h3>
                <p className="text-sm text-gray-600 mb-4">Skill Development Initiative</p>
              </div>
              <a 
                href="/affiliations/INFRAME COLLEGE OF ART, DESIGN & BUSINESS C SKILL.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Certificate
              </a>
            </div>

            {/* BVOC Program */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">BVOC Program</h3>
                <p className="text-sm text-gray-600 mb-4">Bachelor of Vocation</p>
              </div>
              <a 
                href="/affiliations/INFRAME COLLEGE OF ART, DESIGN & BUSINESS C BVOC.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-black text-center py-3 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Inframe School of Art, Design & Business is proud to be affiliated with prestigious institutions 
              and recognized by various educational bodies, ensuring quality education and industry-relevant 
              curriculum for our students.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Life Grid */}
      <CampusLife  experienceCamputLife={experienceCamputLife}/>
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left side: Images */}
            <div data-aos="fade-right">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
                <div className="flex-1">
                  <Image
                    src={"/images/gallery/1719575193328.jpg"}
                    alt={"Cultural Event"}
                    height={480}
                    width={364}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="flex-1">
                  <Image
                    src={"/images/gallery/1719748180116.jpg"}
                    alt={"Cultural Event"}
                    height={480}
                    width={364}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left" className="mt-8 lg:mt-0">
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>
                CORE VALUES
              </h2>
              <p className="text-base md:text-lg font-sans leading-relaxed">
                Inframe school of art, design and business inculcates design
                thinking in students which enables them to think from a
                different perspective and understand the needs and wants of the
                user. Our institute has developed a curriculum which not only
                focuses on the theoretical knowledge but also focuses on the
                practical learning and innovation. The school organises various
                workshops and internship opportunities for the students with the
                help of industry experts and glorified designers. With the main
                aim of &ldquo;developing sustainable design for the people of
                tomorrow&rdquo; our institute leads the students in the direction to
                the future of design and business. ICADB helps the students in
                learning design and business with the help of various practical
                projects so that students can actually understand how are such
                projects done in the real world and how to work in a team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" bg-yellow-400">
        <div className="relative overflow-hidden py-8">
          <h2
            className={`text-center text-2xl md:text-5xl font-bold text-gray-800 mb-4 ${poppins.className}`}
          >
            INDUSTRY & PLACEMENT PARTNER
          </h2>
          <p
            className={`text-center text-lg text-gray-600 mb-8 ${poppins.className}`}
          >
            Inframe&apos;s strong industry partnerships provide students with
            unparalleled career opportunities and real-world experience to excel
            in design and business.
          </p>
          <div className="flex animate-[scroll_20s_linear_infinite] space-x-12">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-md border bg-white border-gray-200 rounded-md flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt="not loaded"
                    width={192} // Set width dynamically based on container size (adjust as needed)
                    height={192}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span
                  className={`mt-2 text-center text-sm md:text-base text-gray-700 ${poppins.className}`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="flex justify-center">
  <Button
    onClick={handleApplyClick}
    className="bg-black text-white hover:bg-gray-700 mb-10 hover:text-white px-6 py-3 rounded-md transition duration-300"
  >
    Apply Now
  </Button>
</div> */}


              {/* <ApplyNowForm
                  isFormOpen={isFormOpen}
                  setIsFormOpen={setIsFormOpen}
                  isScrolled={false}
              /> */}

      </section>
    </div>
  );
};

export default AboutPage;

