import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CareerProspects = () => (
  <div>
    <h1 className={`text-3xl font-bold ${poppins.className}`}>
      Career Prospects{" "}
    </h1>

    <div className="w-72 h-1 my-3 bg-yellow-400" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {[
        {
          title: "Interior Designer",
          roles: ["Residential", "Commercial", "Hospitality"],
        },
        {
          title: "Design Consultant",
          roles: [
            "Freelance Designer",
            "Design Firm Partner",
            "Project Manager",
          ],
        },
        {
          title: "Specialized Roles",
          roles: [
            "3D Visualization Expert",
            "Sustainable Design Specialist",
            "Lighting Designer",
          ],
        },
      ].map((career, index) => (
        <Card key={index} className="bg-zinc-100 border-yellow-400/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-black mb-4">
              {career.title}
            </h3>
            <ul className="space-y-2">
              {career.roles.map((role, idx) => (
                <li key={idx} className="flex items-center text-black">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-yellow-400" />
                  {role}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default CareerProspects;
