"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Poppins } from "next/font/google";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { AlertCircle, Check, Upload, BookOpen, Users, Target, MapPin, Briefcase } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MAX_FILE_SIZE = 1024 * 1024; // 1MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword", 
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

const CareerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string({
    required_error: "Please select a position",
  }),
  resume: z
    .any()
    .refine((files) => files?.length > 0, "Resume is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "File size must be less than 1MB"
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      "File must be .doc, .docx, or .pdf"
    ),
  coverLetter: z.string().optional(),
});

const positions = [
  { id: "faculty-design", label: "Faculty - Design" },
  { id: "faculty-animation", label: "Faculty - Animation" },
  { id: "faculty-fashion", label: "Faculty - Fashion" },
  { id: "admin-officer", label: "Administrative Officer" },
  { id: "marketing-manager", label: "Marketing Manager" },
  { id: "student-counselor", label: "Student Counselor" },
  { id: "placement-officer", label: "Placement Officer" },
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Faculty - Interior Design",
    type: "Full-time",
    location: "Chennai",
    description: "We're looking for an experienced interior design faculty member with industry experience to join our team.",
    requirements: ["5+ years experience", "Master's degree", "Industry connections"]
  },
  {
    id: 2,
    title: "Course Coordinator - Fashion Design",
    type: "Full-time",
    location: "Chennai",
    description: "Join our fashion department to coordinate curriculum development and student activities.",
    requirements: ["3+ years experience", "Curriculum development", "Student mentorship"]
  },
  {
    id: 3,
    title: "Student Counselor",
    type: "Full-time",
    location: "Chennai",
    description: "Help prospective students understand our programs and guide them through the admission process.",
    requirements: ["Excellent communication skills", "Understanding of design education", "Sales experience"]
  }
];

export default function CareersPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof CareerFormSchema>>({
    resolver: zodResolver(CareerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof CareerFormSchema>) => {
    setIsSubmitting(true);
    try {
      // Create FormData object for file upload
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position", data.position);
      
      // Add the file with the correct field name expected by Formspree
      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0], data.resume[0].name);
      }
      
      if (data.coverLetter) {
        formData.append("coverLetter", data.coverLetter);
      }

      // Make sure we're not including any headers that would conflict with FormData's multipart/form-data
      const response = await fetch("https://formspree.io/f/mqaerebq", {
        method: "POST",
        body: formData,
        // Do not set Content-Type header, it will be set automatically with the boundary
      });

      if (response.ok) {
        setFormStatus({
          success: true,
          message: "Your application has been submitted successfully! We will be in touch soon.",
        });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error("Form submission error:", errorText);
        
        setFormStatus({
          success: false,
          message: "There was an error submitting your application. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      setFormStatus({
        success: false,
        message: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="relative h-[80vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
          <Image
            src="/images/gallery/1717485479751.jpg"
            alt="Campus Life Hero Image"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-12 bg-yellow-400" />
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Join Our Team
                  </h1>
                </div>
                <p className="text-xl text-white max-w-2xl">
                Join our team and build a career where creativity thrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="openings" className="w-full">
          <TabsList className="grid w-full md:w-[400px] gap-3 grid-cols-2 mb-8 mx-auto">
            <TabsTrigger 
              value="openings" 
              className="data-[state=active]:bg-yellow-500 border py-2 data-[state=active]:text-black"
            >
              Current Openings
            </TabsTrigger>
            <TabsTrigger 
              value="application" 
              className="data-[state=active]:bg-yellow-500 border py-2 data-[state=active]:text-black"
            >
              Apply Now
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="openings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredJobs.map(job => (
                <Card key={job.id} className="overflow-hidden border border-gray-200 transition-all hover:shadow-md">
                  <CardHeader className="bg-gray-50 pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-black">{job.title}</CardTitle>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        {job.type}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center mt-1 text-gray-600">
                      <MapPin size={14} className="mr-1" /> {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Requirements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check size={16} className="text-yellow-500 mr-2 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button 
                        onClick={() => {
                          const applicationTab = document.querySelector('[data-value="application"]');
                          if (applicationTab) {
                            (applicationTab as HTMLElement).click();
                          }
                        }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black w-full"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="application">
            <Card className="max-w-3xl mx-auto border border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl text-black">Application Form</CardTitle>
                <CardDescription>
                  Complete the form below to apply for a position at Inframe
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                {formStatus && (
                  <Alert className={`mb-6 ${formStatus.success ? "bg-green-50 text-green-800 border-green-200" : "bg-red-50 text-red-800 border-red-200"}`}>
                    <AlertCircle className={formStatus.success ? "text-green-600" : "text-red-600"} />
                    <AlertTitle>{formStatus.success ? "Success!" : "Error"}</AlertTitle>
                    <AlertDescription>{formStatus.message}</AlertDescription>
                  </Alert>
                )}
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                                className="focus-visible:ring-yellow-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                                className="focus-visible:ring-yellow-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 9876543210" 
                                {...field} 
                                className="focus-visible:ring-yellow-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Position</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="focus-visible:ring-yellow-500">
                                  <SelectValue placeholder="Select a position" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {positions.map((position) => (
                                  <SelectItem
                                    key={position.id}
                                    value={position.id}
                                  >
                                    {position.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="resume"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume</FormLabel>
                          <FormControl>
                            <div className="flex flex-col items-center justify-center w-full">
                              <label
                                htmlFor="resume-upload"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-8 h-8 mb-3 text-yellow-500" />
                                  <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500">DOC, DOCX or PDF (MAX. 1MB)</p>
                                </div>
                                <input
                                  id="resume-upload"
                                  type="file"
                                  className="hidden"
                                  accept=".doc,.docx,.pdf"
                                  onChange={(e) => {
                                    const files = e.target.files;
                                    if (files?.length) {
                                      field.onChange(files);
                                    }
                                  }}
                                />
                              </label>
                              {field.value && field.value[0] && (
                                <p className="mt-2 text-sm text-gray-700">
                                  <span className="font-semibold">Uploaded:</span> {field.value[0].name}
                                </p>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="coverLetter"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Letter (Optional)</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Tell us why you're interested in this position"
                              className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Why Join Us Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">Why Join Inframe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-md transition-all">
              <div className="h-1 bg-yellow-500"></div>
              <CardHeader className="text-center">
                <BookOpen className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <CardTitle className="text-xl text-black">Creative Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Work alongside creative professionals and help shape the next generation of designers in a stimulating environment.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-all">
              <div className="h-1 bg-yellow-500"></div>
              <CardHeader className="text-center">
                <Users className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <CardTitle className="text-xl text-black">Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Opportunities for continuous learning, industry connections, and career advancement in design education.</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 hover:shadow-md transition-all">
              <div className="h-1 bg-yellow-500"></div>
              <CardHeader className="text-center">
                <Target className="w-10 h-10 mx-auto mb-4 text-yellow-500" />
                <CardTitle className="text-xl text-black">Make an Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Directly influence and inspire the next generation of creative professionals who will shape our visual world.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Current Openings CTA Section */}
        <div className="mt-16 bg-black text-white p-8 rounded-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to Join Our Team?</h3>
              <p className="text-gray-300">Explore our current opportunities and apply today.</p>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-3 text-yellow-500" />
              <Button 
                onClick={() => {
                  const applicationTab = document.querySelector('[data-value="application"]');
                  if (applicationTab) {
                    (applicationTab as HTMLElement).click();
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                View Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}