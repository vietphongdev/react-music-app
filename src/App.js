import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Mylove",
      artist: "Weslife",
      img_src: "./images/wl1.jpg",
      src: "./music/mylove.mp3",
    },
    {
      title: "Soledad",
      artist: "Weslife",
      img_src: "./images/wl2.jpg",
      src: "./music/soledad.mp3",
    },
    {
      title: "Season In The Sun",
      artist: "Weslife",
      img_src: "./images/wl3.jpg",
      src: "./music/seasons.mp3",
    },
    {
      title: "Nothing gonna my love for you",
      artist: "Weslife",
      img_src: "./images/wl4.jpg",
      src: "./music/nothing.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
}

export default App;
