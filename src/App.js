import React, { useState } from "react";

import { Grid, Hidden } from "@material-ui/core";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";

function App() {
  const [open, toggleOpen] = useState(true);

  const toggleDrawer = () => {
    toggleOpen(!open);
  };

  return (
    <Grid container wrap="nowrap">
      <Hidden smDown>
        <Grid item md={3} xl={2}>
          <SideBar open={open} />
        </Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        md={9}
        xl={10}
        style={{
          height: "100vh",
          overflowY: "scroll",
          background: "lightgrey",
        }}
      >
        <Main toggleDrawer={toggleDrawer} />
      </Grid>
    </Grid>
  );
}

export default App;
