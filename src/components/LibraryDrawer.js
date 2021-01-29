import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Library from "./Library";

const LibraryDrawer = ({ songs, open, setOpen }) => {
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
          <Library songs={songs} />
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default LibraryDrawer;
