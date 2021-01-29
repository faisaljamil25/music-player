import React from "react";
import { Grid, Typography, Slider, IconButton, Box } from "@material-ui/core";
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
  slider: {
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
}));

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [songInfo, setSongInfo] = React.useState({
    currentTime: 0,
    duration: 0,
  });
  const audioRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    audioRef.current.currentTime = newValue;
    // setSongInfo({ ...songInfo, currentTime: newValue });
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration });
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
        <Box ml={3} mr={3} className={classes.slider}>
          <Slider
            min={0}
            max={songInfo.duration}
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
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
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
