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

  return (
    <div className="App">
      <CssBaseline />
      <Header setOpen={setOpen} />
      <Grid>
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Grid>
      <LibraryDrawer songs={songs} open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
