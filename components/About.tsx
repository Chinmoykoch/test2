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
                design institute in Jodhpur which will commence it’s curriculum
                with the aim to expand the design and business field in Jodhpur
                and it’s surrounding regions by being the first design and
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

      {/* Campus Life Grid */}
      <CampusLife  experienceCamputLife={experienceCamputLife}/>
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-36 items-center">
            {/* Left side: Heading and Image */}
            <div data-aos="fade-right">
              <div className="flex gap-10">
                <Image
                  src={"/images/gallery/1719575193328.jpg"}
                  alt={"Cultural Event"}
                  height={480}
                  width={364}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src={"/images/gallery/1719748180116.jpg"}
                  alt={"Cultural Event"}
                  height={480}
                  width={364}
                  className="rounded-lg  shadow-lg"
                />
              </div>
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left">
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                CORE VALUES
              </h2>
              <p className="text-lg font-sans leading-relaxed">
                Inframe school of art, design and business inculcates design
                thinking in students which enables them to think from a
                different perspective and understand the needs and wants of the
                user. Our institute has developed a curriculum which not only
                focuses on the theoretical knowledge but also focuses on the
                practical learning and innovation. The school organises various
                workshops and internship opportunities for the students with the
                help of industry experts and glorified designers. With the main
                aim of “developing sustainable design for the people of
                tomorrow” our institute leads the students in the direction to
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
            Inframe’s strong industry partnerships provide students with
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

