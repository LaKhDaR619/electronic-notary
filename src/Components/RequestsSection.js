import React from "react";

import { Divider, Grid, Paper, Typography } from "@material-ui/core";
import RequestPaper from "./RequestPaper";

export default function RequestsSection() {
  const requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const requests = [1, 2];

  const isSmall = false;

  return (
    <Paper
      style={{
        padding: 20,
        background: "white",
      }}
    >
      <Typography>05 requests / 03 waiting</Typography>
      <Divider
        variant="fullWidth"
        style={{
          background: "grey",
          marginTop: 10,
          marginBottom: 10,
          height: 5,
        }}
      />
      <Grid container spacing={isSmall ? 1 : 2} alignContent="flex-start">
        {requests.map((request) => (
          <Grid item xs={12} key={request}>
            <RequestPaper />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
