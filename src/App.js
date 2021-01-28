import React from "react";
// components
import Song from "./components/Song";
import Player from "./components/Player";
import { Grid } from "@material-ui/core";
// util
import data from "./util";

function App() {
  const [songs, setSongs] = React.useState(data());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  return (
    <Grid className="App">
      <Song />
      <Player />
    </Grid>
  );
}

export default App;
