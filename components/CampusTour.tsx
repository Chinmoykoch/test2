"use client";
import React, { useEffect } from "react";

interface YouTubePlayer {
  playVideo(): void;
}

interface YouTubeEvent {
  target: YouTubePlayer;
}

interface PlayerVars {
  autoplay: number;
  loop: number;
  controls: number;
  showinfo: number;
  rel: number;
  enablejsapi: number;
  modestbranding: number;
  mute: number;
  playlist: string;
}

interface PlayerOptions {
  videoId: string;
  playerVars: PlayerVars;
  events: {
    onReady: (event: YouTubeEvent) => void;
  };
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, options: PlayerOptions) => YouTubePlayer;
    };
  }
}

const CampusTour = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      // Store the original function (if it exists)
      const originalOnReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        if (window.YT) {
          new window.YT.Player("youtube-player", {
            videoId: "JW0YxVpnj9o",
            playerVars: {
              autoplay: 1,
              loop: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              enablejsapi: 1,
              modestbranding: 1,
              mute: 1, // Required for autoplay
              playlist: "JW0YxVpnj9o",
            } as PlayerVars,
            events: {
              onReady: (event: YouTubeEvent) => event.target.playVideo(),
            },
          } as PlayerOptions);
        }
      };

      return () => {
        if (typeof window !== "undefined") {
          // Restore original function or set it to a no-op function
          window.onYouTubeIframeAPIReady = originalOnReady || (() => {});
        }
      };
    }
  }, []);
  return (
    <section className="relative md:min-h-screen mt-[10rem] sm:mt-20 w-full">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex items-center p-8 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-5xl font-light text-gray-900 mb-6">
              Inframe Campus Tour
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-light">
              Our virtual tour will take you around our 200-acre
              state-of-the-art residential campus, which features cutting-edge
              infrastructure, international sports facilities, and more.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-rose-500 hover:bg-rose-600 transition-colors rounded-full text-white text-sm font-light gap-2">
              Take our virtual tour
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-video w-full h-full">
            <div
              id="youtube-player"
              className="w-full h-full pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTour;
