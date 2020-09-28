import React from "react";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Row } from "@mui-treasury/components/flex";

import { makeStyles } from "@material-ui/core/styles";
import Calendar from "react-calendar";
import "../Styles/Calender.css";

import DonutChart from "react-donut-chart";

const useStyles = makeStyles((theme) => ({
  requestsList: {},
}));

export default function MainContent() {
  const classes = useStyles();

  const requests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //const requests = [1, 2];

  return (
    <div style={{ padding: 32 }}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} md={12} lg={8}>
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
        </Grid>
        <Grid
          container
          spacing={2}
          alignContent="flex-start"
          item
          xs={12}
          md={12}
          lg={4}
        >
          <Grid item xs={12}>
            <Paper style={{ height: "400px" }}>
              <Typography
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginLeft: 20,
                  paddingTop: 15,
                  marginBottom: 15,
                }}
              >
                Statistics
              </Typography>
              <Divider />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <DonutChart
                  data={[
                    {
                      label: "Pending",
                      value: 25,
                      color: "green",
                    },
                    {
                      label: "Completed",
                      value: 60,
                    },
                    {
                      label: "Rejected",
                      value: 15,
                    },
                  ]}
                  colors={["orange", "#2ED47A", "red"]}
                  innerRadius={1}
                  clickToggle={false}
                  height="400"
                  width="400"
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Calendar />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
