import React, { useState } from "react";
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
  description?: string;
  [key: string]: unknown;
}

const yearToDefaultSemester: Record<string, string> = {
  "1st Year": "Semester 1",
  "2nd Year": "Semester 3",
  "3rd Year": "Semester 5",
};

const CurriculumSection = ({ curriculum }: { curriculum: Record<string, CurriculumData> }) => {
  const yearKeys = Object.keys(curriculum);
  const [selectedYear, setSelectedYear] = useState<string>(yearKeys[0] || "1st Year");
  const getDefaultSemester = (year: string) => {
    // Find the first semester key if mapping not found
    const yearData = curriculum[year];
    const semesterKeys = Object.keys(yearData).filter((key) => key.toLowerCase().includes("semester"));
    return yearToDefaultSemester[year] && semesterKeys.includes(yearToDefaultSemester[year])
      ? yearToDefaultSemester[year]
      : semesterKeys[0] || "Semester 1";
  };
  const [selectedSemester, setSelectedSemester] = useState<string>(getDefaultSemester(selectedYear));

  // When year changes, update semester
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedSemester(getDefaultSemester(year));
  };

  if (!curriculum || Object.keys(curriculum).length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-yellow-400">
        Course Curriculum
      </h2>

      {/* Tabs for Year selection */}
      <Tabs value={selectedYear} onValueChange={handleYearChange} className="w-full">
        <TabsList className="md:w-full flex flex-wrap h-10 mb-16 bg-zinc-200 rounded-lg p-1 gap-2">
          {yearKeys.map((year) => (
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
        {yearKeys.map((year) => {
          const data = curriculum[year];
          const semesterKeys = Object.keys(data).filter((key) => key.toLowerCase().includes("semester"));
          return (
            <TabsContent key={year} value={year}>
              <div className="mb-8">
                {/* Year image */}
                <div className="relative w-full h-64 mb-8 overflow-hidden rounded-lg">
                  <Image
                    src={data.image as string}
                    alt={data.imageAlt as string}
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
                <Tabs
                  value={selectedYear === year ? selectedSemester : getDefaultSemester(year)}
                  onValueChange={setSelectedSemester}
                  className="w-full"
                >
                  <TabsList className="md:w-full flex flex-wrap mb-16 rounded-lg bg-zinc-200 p-1 gap-2">
                    {semesterKeys.map((semester) => (
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
                  {semesterKeys.map((semester) => (
                    <TabsContent key={semester} value={semester}>
                      <Card className="bg-zinc-white border-none">
                        <CardContent className="p-6">
                          <div className="grid gap-4">
                            {(data[semester] as string[]).length === 0 ? (
                              <div className="text-gray-500">No subjects available for this semester.</div>
                            ) : (
                              (data[semester] as string[]).map((subject, index) => (
                                <div
                                  key={index}
                                  className="p-4 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-colors"
                                >
                                  <p className="text-black font-bold">
                                    {subject}
                                  </p>
                                </div>
                              ))
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default CurriculumSection;
