"use client";
import React, { useEffect, useState } from "react";
import styles from "./VideoDisplay.module.css";

const VideoDisplay = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that the component only renders the video on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render the video on the server
  }

  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        src="/assets/videos/reeha-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoDisplay;
