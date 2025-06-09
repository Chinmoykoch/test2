"use client";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Poppins } from "next/font/google";

import { Phone, Mail } from "lucide-react"; // Import icons
import { useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Define the Zod validation schema
const contactFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactUsForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/xvgzkown", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsError(false);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setIsError(true);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 mt-20 font-sans bg-yellow-50",
        className
      )}
      {...props}
    >
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4402.294141288112!2d72.98366907607904!3d26.270182887406257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67b93f41c21a1b33%3A0x75c39459005a6414!2sInframe%20School%20of%20Art%2C%20Design%20%26%20Business!5e1!3m2!1sen!2sin!4v1740730217159!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Card */}
      <Card className="overflow-hidden ">
        <h1
          className={`text-center text-5xl w-full py-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
        font-bold border-4 border-yellow-400 transition-all duration-300 ease-in-out
        hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
        hover:text-white ${poppins.className}`}
        >
          Connect With Us
        </h1>
        <CardContent className="grid p-6 md:grid-cols-3 gap-8">
          {/* Column 1: Visit Us */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2
              className={`text-4xl font-semibold ${poppins.className} text-center md:text-left text-gray-800`}
            >
              Visit Us
            </h2>
            <p className="text-muted-foreground mt-3 text-center md:text-left text-lg">
              We are located at:
            </p>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-center md:text-left text-gray-800">
                Contact Information
              </h3>
              <p className="mt-4 text-lg text-center md:text-left text-gray-700">
                Address: 09, Pal Link Rd, Marudhar Nagar, Kamla Nehru Nagar,
                Shyam Nagar, Jodhpur, Rajasthan 342008
              </p>
              <div className="mt-4 space-y-3">
                <p className="text-lg text-center md:text-left text-gray-700">
                  <Phone className="inline mr-2 text-blue-600" />
                  Admissions:{" "}
                  <a
                    href="tel:+919649964937"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9649 9649 37
                  </a>
                </p>
                <p className="text-lg text-center md:text-left text-gray-700">
                  <Phone className="inline mr-2 text-blue-600" />
                  Admin:{" "}
                  <a
                    href="tel:+919649964970"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9649 9649 70
                  </a>
                </p>
                <p className="text-lg text-center md:text-left text-gray-700">
                  <Mail className="inline mr-2 text-blue-600" />
                  Email:{" "}
                  <a
                    href="mailto:info@inframecollege.org"
                    className="text-blue-600 hover:underline"
                  >
                    info@inframeschool.com
                  </a>
                </p>
                <p className="text-lg text-center md:text-left text-gray-700">
                  <Mail className="inline mr-2 text-blue-600" />
                  Careers:{" "}
                  <a
                    href="mailto:hr@inframecollege.org"
                    className="text-blue-600 hover:underline"
                  >
                    hr@inframeschool.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: QR Code */}
          <div className="p-6 bg-white flex flex-col items-center justify-center shadow-lg rounded-lg">
            <h2
              className={`text-3xl font-semibold ${poppins.className} text-center text-gray-800`}
            >
              Scan to Navigate
            </h2>
            <p className="text-muted-foreground mt-2 text-center text-lg">
              Scan the QR code below to get directions on Google Maps:
            </p>
            <div className="mt-6">
              <Image
                src="/qrcode_164435803_146bf5935e9cfa0ac7b362dd16065180.png"
                alt="QR Code"
                width={208} // Equivalent to w-52 (52 * 4)
                height={208} // Equivalent to h-52 (52 * 4)
                className="rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Column 3: Contact Us Form */}
          <div className="p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
            <h2
              className={`text-3xl font-semibold ${poppins.className} text-center text-gray-800`}
            >
              Contact Us
            </h2>
            <p className="text-gray-600 mt-2 text-center text-lg">
              Fill out the form below to get in touch with us.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
              <div className="grid gap-3">
                <div className="flex flex-col">
                  <Label htmlFor="first_name ">First Name</Label>
                  <Controller
                    name="first_name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="first_name"
                        placeholder="Your First Name"
                        className={!!errors.first_name ? "border-red-500" : ""}
                      />
                    )}
                  />
                  {errors.first_name && (
                    <p className="text-red-500 text-sm">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="last_name">Last Name</Label>
                  <Controller
                    name="last_name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="last_name"
                        placeholder="Your Last Name"
                        className={!!errors.last_name ? "border-red-500" : ""}
                      />
                    )}
                  />
                  {errors.last_name && (
                    <p className="text-red-500 text-sm">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="email">Email</Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input {...field} id="email" placeholder="Your Email" />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="message">Message</Label>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Your Message"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </Button>
              {isSuccess && (
                <p className="text-green-500 mt-2 text-center">
                  Message sent successfully!
                </p>
              )}
              {isError && (
                <p className="text-red-500 mt-2 text-center">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
