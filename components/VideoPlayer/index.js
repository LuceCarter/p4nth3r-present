import React from "react";

const VideoPlayer = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title={`${embedId}-p4nth3r`}
      allowFullScreen
    />
  </div>
);

export default VideoPlayer;