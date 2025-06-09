"use client";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Advisor {
  name: string;
  title: string;
  description: string;
  image: string;
}

const AdvisorsPage = () => {
  const advisors: Advisor[] = [
    {
      name: "R.B. BHASKARAN",
      title: "EX-CHAIRMAN OF LALIT KALA AKADEMI DELHI",
      description:
        "R.B. Bhaskaran, a distinguished figure in Modern Indian art, stands as a luminary in the realm of Modern Indian art, influenced by his uncle, Nambiamayar Pillai. Bhaskaran began his artistic journey, mastering french techniques at Namagiri Art Institution. His artwork is renowned for its unique blend of art, social context and time, reflecting a blend of tradition and imagination. Bhaskaran's works are characterized by sculptural concepts, metaphorical imagination, and regional flavors, with six exhibitions in India, the UK and the Netherlands.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    },
    {
      name: "B. LENIN",
      title: "FILM EDITOR AND NATIONAL AWARD DIRECTOR",
      description:
        "B. Lenin, a celebrated film editor and recipient of national awards, has always had a profound passion for music and cinema. Starting as an assistant director alongside his father, he later honed his skills as an editor, drawing inspiration from his stint as an assistant sound engineer under Mumbai-based Mangesh Desai. His debut as an independent editor came with the movie Ezhavathu Manithan. Stalin took the reins of editing for B. Lenin's directorial venture 'Kaadhal Meipada', sparking a creative process.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
    },
    {
      name: "TROTSKY MARUDU",
      title: "INTERNATIONALLY ACCLAIMED ARTIST",
      description:
        "Trotsky Marudu, a distinguished contemporary artist and art director, showcases his exceptional talent through both digital and traditional mediums. His unique approach seamlessly merges traditional elements with modern technology, resulting in figurative concepts depicted in a captivating semi-abstract form. Having earned his diploma and post-diploma from the esteemed Madras College of Arts & Crafts, Marudu's artwork has garnered international acclaim.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    },
    {
      name: "KALYANI PRAMOD",
      title: "TEXTILE DESIGNER AND ARTIST",
      description:
        "Kalyani Pramod, an accomplished textile designer and artist, graduated from NID with a passion for traditional crafts. Her dedication to infusing these crafts with innovative design is evident throughout her impressive body of work, culminating with the 'Toka Tales of the Night', showcasing their craftsmanship at the esteemed Victoria and Albert Museum.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    },
    {
      name: "SATHYASEELAN",
      title: "DESIGN HEAD AND PRACTITIONER",
      description:
        "Sathyaseelan Gangadharan, the esteemed Design Leader and Art Practitioner, currently holds the position of Design Head at JUROA UX/UX. With an M.Des from IIT Delhi, his career path has been illuminated by a passion for achievement and excellence. Having lent his expertise to renowned entities like Tata ELXSi and General Motors, Sathyaseelan brings a wealth of experience in automotive styling to his role.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop",
    },
    {
      name: "AMUDHAN",
      title: "FILMMAKER",
      description:
        "Amudhan, a filmmaker and curator, developed his passion for cinema in rural Tamil Nadu. watching films in makeshift theaters. After completing his studies in Development Communication, he co-founded MARUPAKKAM in 1995, as their producer and filmmaker. During the 1990s, he has made 20 films on social, political, and economic issues.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    },
    {
      name: "ARVIND NEELAKANTAN",
      title: "HEAD OF TECHNOLOGY-UNREAL ENGINE|UNITY TECHNOLOGIES",
      description:
        "Arvind Neelakantan, an esteemed game engineer with over 12 years of industry expertise, embarked on his career journey at GMEA Inc under the mentorship of industry luminary Hiroki Kushihara. Progressing to a senior software engineer role at NeoMotion Games in Glendale, California, Arvind honed his craft in developing PC, mobile, and web-based MMOs on the Unity platform.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&h=500&fit=crop",
    },
  ];

  return (
    <div className={`w-full min-h-screen bg-zinc-100 ${poppins.className}`}>
      {/* Header Section with Industrial Elements */}
      <div className="relative text-white py-32">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.png')] bg-repeat" />
        <div className="absolute left-0 right-0 h-1 bottom-0 bg-amber-500" />
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-amber-500 opacity-50" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-500 opacity-50" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-amber-500 text-amber-500 text-sm font-medium tracking-wider mb-4">
              LEADERSHIP
            </span>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Our Advisors</h1>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-xl text-zinc-300 max-w-2xl">
              Meet the exceptional individuals who guide our institution with
              their expertise and vision, shaping the future of creative education.
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="relative h-24 bg-zinc-100">
        <div className="absolute top-0 left-0 w-full h-24 bg-zinc-900 skew-y-3 transform origin-top-right z-0"></div>
      </div>

      {/* Advisors Grid with Industrial Design - All images on left side */}
      <div className="container mx-auto px-6 py-16 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-b border-l border-zinc-200"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              
              <div className="flex flex-col md:flex-row">
                {/* Image consistently positioned on the left */}
                <div className="md:w-40 h-56 md:h-auto flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 160px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-6 h-px bg-amber-500 mr-3"></div>
                      <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                        Advisor
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {advisor.name}
                    </h2>
                    <h3 className="text-xs font-semibold text-zinc-600 mb-5 uppercase tracking-wider">
                      {advisor.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {advisor.description}
                    </p>
                  </div>
                  
                  {/* View Profile button removed as requested */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default AdvisorsPage;