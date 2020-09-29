import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import RequestsSection from "./RequestsSection";
import StatsSection from "./StatsSection";

const useStyles = makeStyles((theme) => ({
  requestsList: {},
}));

export default function MainContent() {
  const classes = useStyles();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ padding: 8, marginTop: "50px" }}>
      <Grid container justify="center" spacing={isSmall ? 1 : 2}>
        <Grid item xs={12} md={12} lg={8}>
          <RequestsSection />
        </Grid>
        <Grid container item alignContent="flex-start" xs={12} md={12} lg={4}>
          <StatsSection />
        </Grid>
      </Grid>
    </div>
  );
}
