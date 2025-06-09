import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Image from "next/image";

interface CurriculumData {
  image: string;
  imageAlt: string;
}

interface Curriculum {
  [year: string]: CurriculumData;
}

const CurriculumSection = ({ curriculum }: { curriculum: Curriculum }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">
        Course Curriculum
      </h2>

      {/* Tabs for Year selection */}
      <Tabs defaultValue="1st Year" className="w-full">
        <TabsList className="md:w-full flex flex-wrap h-10 mb-16 bg-zinc-200 rounded-lg p-1 gap-2">
          {Object.keys(curriculum).map((year) => (
            <TabsTrigger
              key={year}
              value={year}
              className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
            >
              {year}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Content for each Year */}
        {Object.entries(curriculum).map(([year, data]) => (
          <TabsContent key={year} value={year}>
            <div className="mb-8">
              {/* Year image */}
              <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {year}
                </h3>
              </div>

              {/* Tabs for Semester selection */}
              <Tabs defaultValue="Semester 1" className="w-full">
                <TabsList className="md:w-full flex flex-wrap mb-16 rounded-lg bg-zinc-200 p-1 gap-2">
                  {Object.keys(data)
                    .filter((key) => key.includes("Semester"))
                    .map((semester) => (
                      <TabsTrigger
                        key={semester}
                        value={semester}
                        className="flex-1 data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                      >
                        {semester}
                      </TabsTrigger>
                    ))}
                </TabsList>

                {/* Content for each Semester */}
                {Object.entries(data)
                  .filter(([key]) => key.includes("Semester"))
                  .map(([semester, subjects]) => (
                    <TabsContent key={semester} value={semester}>
                      <Card className="bg-zinc-white border-none">
                        <CardContent className="p-6">
                          <div className="grid gap-4">
                            {(subjects as string[]).map((subject, index) => (
                              <div
                                key={index}
                                className="p-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors"
                              >
                                <p className="text-black font-bold">
                                  {subject}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
              </Tabs>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CurriculumSection;
