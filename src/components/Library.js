import React from "react";
import LibrarySong from "./LibrarySong";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  library: {
    width: 300,
  },
  title: {
    padding: theme.spacing(2),
  },
}));

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  const classes = useStyles();

  return (
    <Box className={classes.library}>
      <Typography align="center" variant="h4" className={classes.title}>
        Library
      </Typography>
      <Box>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            key={song.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Library;
