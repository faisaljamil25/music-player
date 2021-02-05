import React from "react";
import { Grid, Typography, IconButton, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import PauseIcon from "@material-ui/icons/Pause";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
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
  sliderBox: {
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
  slider: {
    width: "100%",
  },
}));

const Player = ({
  audioRef,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
}) => {
  const classes = useStyles();

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Box>
          <Typography>{getTime(songInfo.currentTime)}</Typography>
        </Box>
        <Box ml={3} mr={3} className={classes.sliderBox}>
          <input
            value={songInfo.currentTime}
            type="range"
            max={songInfo.duration || 0}
            min={0}
            onChange={dragHandler}
            className={classes.slider}
          />
        </Box>
        <Box>
          <Typography>{getTime(songInfo.duration)}</Typography>
        </Box>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Box>
          <IconButton color="inherit">
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box className={classes.playBtn}>
          <IconButton color="inherit" onClick={playSongHandler}>
            {isPlaying ? (
              <PauseCircleOutlineIcon fontSize="large" />
            ) : (
              <PlayCircleOutlineIcon fontSize="large" />
            )}
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
