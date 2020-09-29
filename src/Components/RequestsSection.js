import React from "react";

import Row from "@mui-treasury/components/flex/Row";

import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

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
              <Row alignItems="center" gap={2}>
                <Avatar
                  src={require("../images/profile.jpg")}
                  style={{ marginRight: 10 }}
                />
                <Typography>George Fields</Typography>
                <Row grow justifyContent="flex-end">
                  <Button
                    color="secondary"
                    style={{ height: 30, width: 80, marginRight: 10 }}
                    variant="contained"
                  >
                    Reject
                  </Button>
                  <Button
                    style={{
                      background: "#2ED47A",
                      color: "white",
                      height: 30,
                      width: 80,
                    }}
                    variant="contained"
                  >
                    Sign
                  </Button>
                </Row>
              </Row>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
