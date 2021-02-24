import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "10vh",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "auto",
    flexWrap: "wrap",
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
    },
  },
  libraryBtn: {
    border: "3px solid #38393b",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#38393b",
      color: "white",
    },
  },
}));

const Header = ({ setOpen }) => {
  const classes = useStyles();

  const toggleLibrary = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography variant="h4" className={classes.title} color="inherit">
          Waves
        </Typography>
        <Button
          variant="outlined"
          onClick={toggleLibrary(true)}
          startIcon={<LibraryMusicIcon />}
          size="large"
          className={classes.libraryBtn}
        >
          Library
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
