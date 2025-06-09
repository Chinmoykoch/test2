"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";
import {
  states,
  cities as citiesData,
  programLevels,
  allLevels,
  BFAPrograms,
} from "../utils/constant";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation"; // Changed from 'next/router' to 'next/navigation'
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cities: { [key: string]: string[] } = citiesData;

// Form validation schema remains the same
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
  level: z.string().min(1, "Please select a level"),
  program: z.string().min(1, "Please select a program"),
});

interface ApplyNowFormProps {
  isFormOpen: boolean;
  setIsFormOpen: (value: boolean) => void;
  isScrolled: boolean;
}

const ApplyNowForm = ({
  isFormOpen,
  setIsFormOpen,
  isScrolled,
}: ApplyNowFormProps) => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      level: "",
      program: "",
    },
  });

  const allPrograms = Object.keys(programLevels);

  const getAvailableProgramsForLevel = (level: string) => {
    return allPrograms.filter((program) =>
      Object.keys(programLevels[program]).includes(level)
    );
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mvgzrnyl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setSubmissionMessage(
          "Failed to submit the form. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmissionMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" className="h-12" {...field} />
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
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-12"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedState(value);
                  form.setValue("city", "");
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!selectedState}
              >
                <FormControl>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {selectedState &&
                    cities[selectedState]?.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedLevel(value);

                  form.setValue("program", "");
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {allLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedLevel === "BFA" ? (
          <FormField
            control={form.control}
            name="program"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select BFA Program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {BFAPrograms.map((program) => (
                      <SelectItem key={program} value={program}>
                        {program}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          // Original program and specialization fields for non-BFA levels
          <>
            <FormField
              control={form.control}
              name="program"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    value={field.value}
                    disabled={!selectedLevel}
                  >
                    <FormControl>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectedLevel &&
                        getAvailableProgramsForLevel(selectedLevel).map(
                          (prog) => (
                            <SelectItem key={prog} value={prog}>
                              {prog}
                            </SelectItem>
                          )
                        )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <Button
          type="submit"
          className="w-full h-12 mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
        >
          Apply Now
        </Button>
      </form>
    </Form>
  );

  return (
    <Sheet open={isFormOpen} onOpenChange={setIsFormOpen}>
      {isScrolled && (
        <SheetTrigger asChild>
          <Button
            className="fixed right-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-right z-50 
                     bg-yellow-400 hover:bg-yellow-500 text-black h-12 px-8 font-semibold"
            style={{ transformOrigin: "right bottom" }}
          >
            Apply Now
          </Button>
        </SheetTrigger>
      )}

      <SheetContent
        side="right"
        className="w-[350px] sm:w-[400px] h-[580px] font-sans rounded-l-lg my-16 p-0"
      >
        <SheetHeader>
          <SheetTitle className={`p-6 pb-0 ${poppins.className}`}>
            Apply Now
          </SheetTitle>
        </SheetHeader>
        <div className="p-6 bg-white h-full overflow-y-auto">
          {submissionMessage ? (
            <div className="text-center p-5 bg-green-100 text-green-700 rounded-md">
              {submissionMessage}
            </div>
          ) : (
            renderFormFields()
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApplyNowForm;
