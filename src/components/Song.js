import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

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
});

const Song = () => {
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
          <Grid item>Image</Grid>
          <Grid item>Song Name</Grid>
          <Grid item>Artist</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Song;
