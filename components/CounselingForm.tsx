"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const CounselingFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone number is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  city: z.string().nonempty("City is required"),
  course: z.string().nonempty("Please select a course"),
});

const CounselingForm = () => {
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(CounselingFormSchema),
  });

  interface FormData {
    name: string;
    phone: string;
    email: string;
    city: string;
    course: string;
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mvgzgpwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionMessage(
          "Thanks for submitting! We will contact you soon."
        );
      } else {
        setSubmissionMessage(
          "Failed to submit the form. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="signup-section py-10 bg-yellow-50 font-sans">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-md relative rounded-md overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Section */}
            <div className="container mx-auto px-4">
              <div className="bg-white  relative rounded-md overflow-hidden">
                <div className="p-10">
                  <h2
                    className={`text-3xl text-black font-bold mb-5 ${poppins.className}`}
                  >
                    Schedule a Free Session
                  </h2>
                  {/* Show the submission message */}
                  {submissionMessage ? (
                    <div className="text-center p-5 bg-green-100 text-green-700 rounded-md">
                      {submissionMessage}
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="form-group">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter Name"
                          {...register("name")}
                          className="w-full"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {typeof errors.name?.message === "string" &&
                              errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="text"
                          placeholder="Enter your number (+91)"
                          {...register("phone")}
                          className="w-full"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {typeof errors.phone?.message === "string" &&
                              errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter Email"
                          {...register("email")}
                          className="w-full"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {typeof errors.email?.message === "string" &&
                              errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="Enter City"
                          {...register("city")}
                          className="w-full"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {typeof errors.city?.message === "string" &&
                              errors.city.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group">
                        <Label htmlFor="course">Choose a Course *</Label>
                        <Select
                          onValueChange={(value) => setValue("course", value)}
                          defaultValue=""
                        >
                          <SelectTrigger
                            id="course"
                            className="w-full font-sans"
                          >
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="interior-design">
                              Interior Design
                            </SelectItem>
                            <SelectItem value="fashion-design">
                              Fashion Design
                            </SelectItem>
                            <SelectItem value="graphic-design">
                              Graphic Design
                            </SelectItem>
                            <SelectItem value="ui-ux-design">
                              UI & UX Design
                            </SelectItem>
                            <SelectItem value="animation-vfx">
                              Animation and VFX
                            </SelectItem>
                            <SelectItem value="jewellery-design">
                              Jewellery Design
                            </SelectItem>
                            <SelectItem value="fine-arts">Fine Arts</SelectItem>
                            <SelectItem value="digital-marketing">
                              Digital Marketing
                            </SelectItem>
                            <SelectItem value="entrepreneurship-skill">
                              Entrepreneurship Skill
                            </SelectItem>
                            <SelectItem value="media-entertainment">
                              Media and Entertainment
                            </SelectItem>
                            <SelectItem value="advertising-marketing">
                              Advertising and Marketing
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.course && (
                          <p className="text-red-500 text-sm mt-1">
                            {typeof errors.course?.message === "string" &&
                              errors.course.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className={`w-full text-lg font-extrabold text-black bg-yellow-400 hover:bg-yellow-500 py-4 rounded shadow transition-all ${poppins.className}`}
                        >
                          Schedule a Free Session
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative p-10 hidden lg:block">
              <div className="absolute inset-0">
                <Image
                  src={"/1717492615506 - Copy (2) (1).jpg"}
                  alt="Counseling Background"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="relative z-10 text-white">
                <h2
                  className={`text-3xl font-extrabold mb-5 ${poppins.className}`}
                >
                  Welcome to Counseling
                </h2>
                <p className={`text-lg ${poppins.className}`}>
                  We are here to help you through your journey. Fill out the
                  form to get started today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounselingForm;
