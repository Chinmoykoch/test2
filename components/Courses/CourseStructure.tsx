import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ChevronRight } from "lucide-react";

const CourseStructure = () => (
  <Card className="bg-zinc-900 border-none mb-12">
    <CardHeader>
      <CardTitle className="text-3xl text-yellow-400">
        Course Structure
      </CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4 text-white">Foundation Year</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Design Fundamentals & Theory
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Color Psychology & Application
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Technical Drawing & CAD Basics
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-white">Advanced Modules</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Sustainable Design Practices
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Commercial Space Planning
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-5 h-5 mr-2 text-yellow-400" />
            Digital Visualization & 3D Modeling
          </li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default CourseStructure;
