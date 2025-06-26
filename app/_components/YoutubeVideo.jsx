import React from "react";

const YoutubeVideo = () => {
  return (
    <div className="flex items-center px-6 sm:px-24 justify-center w-full h-full py-12 bg-gray-100 dark:bg-gray-900">
      <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        <iframe
          className="w-full h-[80vw] max-h-[600px]"
          src="https://www.youtube.com/embed/gmUHEvrpYoU?si=AM27nsjyCvbyc4gw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: "8px" }}
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
