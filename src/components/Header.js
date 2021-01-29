import React from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <Typography variant="h4" className={classes.title}>
          Music
        </Typography>
        <Button variant="outlined" onClick={toggleLibrary(true)}>
          Library
        </Button>
      </Box>
    </Box>
  );
};

export default Header;