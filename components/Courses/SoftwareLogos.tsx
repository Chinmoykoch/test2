import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Software {
  name: string;
  src: string;
}

interface SoftwareLogosProps {
  software: Software[];
}

const SoftwareLogos = ({ software }: SoftwareLogosProps) => {
  return (
    <div>
      <h2
        className={`text-3xl font-bold py-3 mx-6 md:mx-0 ${poppins.className}`}
      >
        SOFTWARE YOU WILL LEARN
      </h2>
      <div className=" hidden md:block md:w-96  h-1 mb-5 bg-yellow-400"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {software.map((software) => (
          <div key={software.name} className="flex flex-col items-center">
            <div className=" flex items-center justify-center mb-4">
              <Image
                src={software.src}
                alt={software.name}
                width={160} // Adjust based on your design
                height={160}
                objectFit="contain"
                priority
              />
            </div>
            <p className="text-center text-black">{software.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareLogos;
