import React from "react";
// components
import Song from "./components/Song";
import Player from "./components/Player";
import { CssBaseline, Grid } from "@material-ui/core";
// util
import data from "./util";

function App() {
  const [songs, setSongs] = React.useState(data());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="App">
      <CssBaseline />
      <Grid>
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Grid>
    </div>
  );
}

export default App;
