import React, { useState, useRef, useEffect } from "react";

// Utility function to convert Google Drive view URL to direct download URL
const getDirectVideoUrl = (viewUrl) => {
  const fileIdMatch = viewUrl.match(/\/d\/(.*?)\//);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
  }
  return null;
};

const VideoPreview = ({ videoUrl, thumbnailUrl }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const directVideoUrl = getDirectVideoUrl(videoUrl);
  console.log(directVideoUrl, "dirwct"); // Convert to direct URL

  useEffect(() => {
    const handlePlay = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Ensure video starts from the beginning
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      }
    };

    const handlePause = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    if (isHovered) {
      handlePlay();
    } else {
      handlePause();
    }

    return () => {
      handlePause(); // Ensure video is paused if component unmounts
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-48 h-28 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <video
          ref={videoRef}
          src={directVideoUrl} // Use direct download URL
          muted
          className="w-full h-full object-cover"
          onCanPlay={() => console.log("Video can play")}
        />
      ) : (
        <img
          src={thumbnailUrl}
          alt="video thumbnail"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default VideoPreview;
