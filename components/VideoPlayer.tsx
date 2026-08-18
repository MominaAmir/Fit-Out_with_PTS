"use client";

import Image from "next/image";
import { useState } from "react";

interface VideoPlayerProps {
  videoId?: string;
  thumbnail: string;
  title?: string;
}

export default function VideoPlayer({ 
  videoId = "your-video-id", 
  thumbnail, 
  title = "PTS Introduction Video" 
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Open video in new tab or modal
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      <div className="relative aspect-video bg-indigo/10">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300 hover:bg-black/40">
          <button 
            onClick={handlePlay}
            className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-orange shadow-2xl shadow-orange/30 transition-all duration-300 hover:scale-110 hover:shadow-orange/50"
            aria-label="Play video"
          >
            <div className="absolute inset-0 rounded-full bg-orange/20 animate-ping" />
            <svg className="relative h-8 w-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}