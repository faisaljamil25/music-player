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

const Library = ({ songs }) => {
  const classes = useStyles();

  return (
    <Box className={classes.library}>
      <Typography align="center" variant="h4" className={classes.title}>
        Library
      </Typography>
      <Box>
        {songs.map((song) => (
          <LibrarySong song={song} key={song.id} />
        ))}
      </Box>
    </Box>
  );
};

export default Library;
