import React from "react";
import { Grid, Typography, Slider, IconButton, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import PauseIcon from "@material-ui/icons/Pause";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    // minHeight: "60vh",
  },
  playBtn: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      width: "15%",
    },
  },
  slider: {
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
}));

const Player = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Box>
          <Typography>Start</Typography>
        </Box>
        <Box ml={3} mr={3} className={classes.slider}>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Box>
        <Box>
          <Typography>End</Typography>
        </Box>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Box>
          <IconButton color="inherit">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box className={classes.playBtn}>
          <IconButton color="inherit">
            <PlayCircleOutlineIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton color="inherit">
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
    </div>
  );
};

export default Player;
