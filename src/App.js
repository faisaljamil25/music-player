import React from "react";
// components
import Song from "./components/Song";
import Player from "./components/Player";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid className="App">
      <Song />
      <Player />
    </Grid>
  );
}

export default App;
