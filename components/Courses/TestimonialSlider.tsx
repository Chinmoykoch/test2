import React from "react";
import { ThumbsUp, Share2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../../components/ui/tooltip";
import { VideosType } from "../../utils/courseTypes";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const VideoCard = ({
  videoUrl,
  index,
}: {
  videoUrl: string;
  index: number;
}) => (
  <Card className="h-full border-0 bg-transparent shadow-2xl">
    <CardContent className="p-0 h-full relative">
      <div className="h-full rounded-xl overflow-hidden bg-zinc-900">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={`Testimonial Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Interaction Buttons */}
      <div className="absolute right-4 bottom-24 flex flex-col gap-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-lg"
            >
              <ThumbsUp className="w-5 h-5 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Like</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-lg"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Comment</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-700/50 backdrop-blur-lg"
            >
              <Share2 className="w-5 h-5 text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
      </div>
    </CardContent>
  </Card>
);

const TestimonialShorts = ({ videos }: { videos: VideosType[] }) => {
  return (
    <TooltipProvider>
      <div className="min-h-screen  py-10">
        <div className="container mx-auto px-4">
          <h2
            className={`text-3xl font-bold py-3 text-black ${poppins.className}`}
          >
            TESTIMONIALS
          </h2>
          <div className="w-60 h-1 mb-7 bg-yellow-400"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos?.length > 0 ? (
  videos.map((videoUrl, index) => (
    <div key={index} className="h-[80vh]">
      <VideoCard videoUrl={videoUrl.url} index={index} />
    </div>
  ))
) : (
  <p>No videos available</p>
)}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TestimonialShorts;
