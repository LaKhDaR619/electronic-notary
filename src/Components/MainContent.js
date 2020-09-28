import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Item, Row } from "@mui-treasury/components/flex";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  requestsList: {
    //height: "calc(100vh - 185px)",
    [theme.breakpoints.up("sm")]: {
      overflowY: "scroll",
      height: "calc(100vh - 188px)",
    },
    [theme.breakpoints.down("sm")]: {
      overflowY: "visible",
      height: "100%",
    },
  },
}));

export default function MainContent() {
  const classes = useStyles();

  const requests = [1, 2, 3, 4, 5, 6];
  //const requests = [1, 2];

  return (
    <div style={{ padding: 32, background: "lightgrey" }}>
      <Grid container justify="center" spacing={4}>
        <Grid item md={8} xs={12}>
          <Paper
            style={{
              width: "100%",
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
            <Grid
              container
              spacing={2}
              alignContent="flex-start"
              className={classes.requestsList}
            >
              {requests.map((request) => (
                <Grid item xs={12}>
                  <Paper elevation={3} style={{ padding: 10 }}>
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
        </Grid>
        <Grid container direction="row" spacing={2} item md={4} xs={12}>
          <Grid item xs={12}>
            <Paper style={{ width: "100%", height: "100%" }}>Stats</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ width: "100%", height: "100%" }}>Calender</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
