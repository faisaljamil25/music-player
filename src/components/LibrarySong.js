import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    boxSizing: "border-box",
    display: "flex",
    padding: theme.spacing(2, 3),
    "&:hover": {
      backgroundColor: "#F5E9DB",
      cursor: "pointer",
    },
  },
  songDesc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: theme.spacing(1),
  },
  songCover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  songImg: {
    // borderRadius: "50%",
  },
  typography: {
    color: "#323232",
  },
  activeSong: {
    backgroundColor: "#F5E9DB",
  },
}));

const LibrarySong = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
}) => {
  const classes = useStyles();
  const handleSong = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      className={`${classes.root} ${
        song.id === currentSong.id ? classes.activeSong : ""
      }`}
      onClick={handleSong}
    >
      <Box className={classes.songCover}>
        <img
          src={song.cover}
          alt={song.name}
          className={classes.songImg}
          width="75px"
        />
      </Box>
      <Box className={classes.songDesc}>
        <Box>
          {" "}
          <Typography variant="subtitle1" className={classes.typography}>
            {song.name}
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography variant="caption" className={classes.typography}>
            {song.artist}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default LibrarySong;
