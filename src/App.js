import React from "react";
// components
import Header from "./components/Header";
import Song from "./components/Song";
import Player from "./components/Player";
import LibraryDrawer from "./components/LibraryDrawer";
import { CssBaseline, Grid } from "@material-ui/core";
// data
import data from "./data";
// theme
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./styles/index";

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

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header setOpen={setOpen} />
        <Grid>
          <Song currentSong={currentSong} />
          <Player
            audioRef={audioRef}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songs={songs}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </Grid>
        <LibraryDrawer
          songs={songs}
          open={open}
          setOpen={setOpen}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
      </ThemeProvider>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
