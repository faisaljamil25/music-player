import React from "react";
import { Grid, Typography, Slider, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import PauseIcon from "@material-ui/icons/Pause";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles({
  root: {
    // minHeight: "60vh",
  },
});

const Player = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>
          <Typography>Start</Typography>
        </Grid>
        <Grid item xs={4}>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <Typography>End</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item>
          <IconButton color="inherit">
            <SkipPreviousIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <PlayCircleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <SkipNextIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Player;
