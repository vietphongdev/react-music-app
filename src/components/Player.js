import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player({
  songs,
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
}) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const nextSong = () => {
    setCurrentSongIndex(nextSongIndex);
  };
  const prevSong = () => {
    setCurrentSongIndex(Math.max(currentSongIndex - 1, 0));
  };

  return (
    <div className="c-player">
      <h4>Playing now</h4>
      <Details
        song={songs[currentSongIndex]}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
      />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        prevSong={prevSong}
        nextSong={nextSong}
      />
      <audio
        className="c-player--audio"
        src={songs[currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p>
        Next up:{" "}
        <span>
          {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;
