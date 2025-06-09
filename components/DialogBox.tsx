import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { programs } from "../utils/constant";
import { ChevronDown } from "lucide-react";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-32 px-3 py-1 rounded-md text-white bg-black cursor-pointer">
          <Button className="font-bold font-sans text-lg bg-transparent shadow-none hover:bg-transparent focus:ring-0">
            Learn
          </Button>
          <ChevronDown className="ml-2 text-white" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-sans font-bold">
            Self-Paced Programs
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm font-sans text-gray-600">
            Programs to give you a perfect overview at your own speed.
          </p>
          <ul className="space-y-2">
            {programs.map((program, index) => (
              <li key={index} className="border-b pb-2">
                <h3 className="text-lg font-sans font-semibold">
                  {program.title}
                </h3>
                <p className="text-sm font-sans text-gray-500">
                  by {program.by}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
