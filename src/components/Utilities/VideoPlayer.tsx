"use client";

import Youtube from "react-youtube";

import React from "react";
import { MonitorPlay } from "@phosphor-icons/react";

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const option = {
    width: "400",
    height: "250",
  };
  const handleVideoPlayer = () => {
    setIsOpen((prev) => !prev);
  };
  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0">
        <div className="flex justify-end ">
          <button
            onClick={handleVideoPlayer}
            className="text-2xl font-bold px-2 bg-accent-300 hover:bg-accent-100"
          >
            X
          </button>
        </div>
        <Youtube
          videoId={youtubeId}
          onReady={(e: any) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };
  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="flex gap-2 items-center p-4 rounded-xl bg-accent-300 hover:bg-accent-100"
    >
      <MonitorPlay size={32} />
      <p>Open Preview Video</p>
    </button>
  );
};

export default VideoPlayer;
