import React, { useEffect, useState } from "react";

function Details({ song, currentSongIndex, isPlaying }) {
  const [isRotate, setRotate] = useState(null);

  useEffect(() => {
    setRotate(false);
    const timer = setTimeout(() => {
      setRotate(true);
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSongIndex]);

  const classRotate = isRotate ? "rotate" : "";
  const classPaused = !isPlaying ? "paused" : "";

  return (
    <div className="c-player--details">
      <div className={`details-img ${classRotate} ${classPaused}`}>
        <img src={song.img_src} alt="" />
      </div>
      <h3 className="details-title">{song.title}</h3>
      <h4 className="details-artist">{song.artist}</h4>
    </div>
  );
}

export default Details;
