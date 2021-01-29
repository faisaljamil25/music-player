import React from "react";
import LibrarySong from "./LibrarySong";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import { Grid, Box, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    position: "fixed",
    top: 0,
    left: 0,
    width: "20rem",
    height: "100%",
    overflow: "scroll",
    // boxShadow: "2px 2px 50px gray",
  },
  library: {
    // padding: theme.spacing(3, 2),
  },
}));

const Library = ({ songs }) => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.root}>
      <Box className={classes.library}>
        <Typography align="center" variant="h5">
          Library
        </Typography>
        <Box>
          {songs.map((song) => (
            <LibrarySong song={song} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default Library;
