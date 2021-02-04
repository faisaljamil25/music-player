import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Library from "./Library";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/index";

const useStyles = makeStyles(styles);
const LibraryDrawer = ({ songs, open, setOpen, setCurrentSong }) => {
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
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleLibrary(false)}>
          <Library songs={songs} setCurrentSong={setCurrentSong} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default LibraryDrawer;
