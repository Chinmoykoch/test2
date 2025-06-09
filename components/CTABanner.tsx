import { ArrowRight } from "lucide-react"; // Lucide icons
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import { Button } from "./ui/button";
import Link from "next/link";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const CoursesCTABanner = () => {
  return (
    <div className={`max-w-7xl mx-auto mt-10 mb-10 px-4 ${poppins.className}`}>
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 rounded-xl shadow-xl p-6 lg:p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-6">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-3 flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold flex items-center justify-center lg:justify-start gap-2">
            <span>🚀</span> {`Not sure what you're interested in?`}
          </h2>
          <p className="text-sm lg:text-lg opacity-90">
            Explore a wide range of courses tailored to help you achieve your
            goals <ArrowRight size={20} className="inline ml-2 text-gray-900" />
          </p>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-right">
          <Link href={"/courses"}>
          <Button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-gray-900 text-yellow-300 font-semibold text-sm lg:text-base px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
            <span>Explore Courses</span>
            <ArrowRight size={20} />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesCTABanner;
