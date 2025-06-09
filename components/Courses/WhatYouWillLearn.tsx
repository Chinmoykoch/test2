import { Poppins } from "next/font/google";
import { Book } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface LearningOutcome {
  skill: string;
  description: string;
}

const WhatYouWillLearn = ({
  whatYouWillLearn,
}: {
  whatYouWillLearn: LearningOutcome[];
}) => {
  return (
    <div>
      <h2
        className={`text-3xl font-bold py-3 mx-6 md:mx-0 ${poppins.className}`}
      >
        WHAT YOU WILL LEARN
      </h2>
      <div className="hidden md:block md:w-96 h-1 mb-5 bg-yellow-400"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        {whatYouWillLearn.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-lg border border-gray-200 hover:border-yellow-400 transition-colors"
          >
            <div className="shrink-0">
              <Book className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${poppins.className}`}>
                {item.skill}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouWillLearn;
