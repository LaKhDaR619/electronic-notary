import React from "react";

import { Avatar, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Row } from "@mui-treasury/components/flex";

export default function RequestPaper() {
  return (
    <Paper elevation={1} style={{ padding: 10 }}>
      <Typography style={{ fontWeight: "bold" }}>
        Send benefit review by Sunday
      </Typography>
      <Row alignItems="center">
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{ paddingRight: 5 }}
        >
          Due date:
        </Typography>
        <Typography>December 23, 2018</Typography>
      </Row>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Row alignItems="center">
            <Avatar
              src={require("../images/profile.jpg")}
              style={{ marginRight: 10 }}
            />
            <Typography>George Fields</Typography>
          </Row>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Row justifyContent="flex-end">
            <Button
              color="secondary"
              style={{ width: 100, marginRight: 10 }}
              variant="contained"
            >
              Reject
            </Button>
            <Button
              style={{
                background: "#2ED47A",
                color: "white",
                width: 100,
              }}
              variant="contained"
            >
              Sign
            </Button>
          </Row>
        </Grid>
      </Grid>
    </Paper>
  );
}
