import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import { Grid, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    minHeight: "50vh",
    flexFlow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  songImg: {
    borderRadius: "50%",
  },
  typography: {
    color: "#323232",
  },
});

const Song = ({ currentSong }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box mt={10} mb={5}>
            <img
              src={currentSong.cover}
              alt={currentSong.name}
              className={classes.songImg}
              width="250px"
            />
          </Box>
          <Box mb={2}>
            {" "}
            <Typography variant="h5" className={classes.typography}>
              {currentSong.name}
            </Typography>
          </Box>
          <Box mb={5}>
            {" "}
            <Typography variant="subtitle1" className={classes.typography}>
              {currentSong.artist}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Song;
