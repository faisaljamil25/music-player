import React from "react";
// components
import Header from "./components/Header";
import Song from "./components/Song";
import Player from "./components/Player";
import LibraryDrawer from "./components/LibraryDrawer";
import { CssBaseline, Grid } from "@material-ui/core";
// util
import data from "./util";

function App() {
  const [songs, setSongs] = React.useState(data());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = React.useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration });
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header setOpen={setOpen} />
      <Grid>
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
        />
      </Grid>
      <LibraryDrawer
        songs={songs}
        open={open}
        setOpen={setOpen}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
