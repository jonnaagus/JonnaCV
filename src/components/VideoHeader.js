import React from 'react';
import './video-header.css'; 

const VideoHeader = () => {
  return (
    <header>
      <video autoPlay muted loop className="video-background">
        <source src="VideoHeaderJonna.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}

export default VideoHeader;