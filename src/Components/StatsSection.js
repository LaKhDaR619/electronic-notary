import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { Divider, Grid, Paper, Typography } from "@material-ui/core";

import { Doughnut } from "react-chartjs-2";

export default function StatsSection() {
  const [date, changeDate] = useState(new Date());

  const isSmall = false;

  return (
    <>
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
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 30 }}>
              <Doughnut
                data={{
                  labels: ["Completed", "Pending", "Rejected"],
                  datasets: [
                    {
                      data: [60, 25, 15],
                      backgroundColor: ["#2ED47A", "#36A2EB", "#FF6384"],
                    },
                  ],
                }}
                width={350}
                height={300}
                options={{ maintainAspectRatio: false, cutoutPercentage: 80 }}
              />
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <div style={{ maxWidth: isSmall ? "310px" : "100%" }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                autoOk
                variant="static"
                value={date}
                onChange={changeDate}
                variant="static"
              />
            </MuiPickersUtilsProvider>
          </div>
        </Paper>
      </Grid>
    </>
  );
}
