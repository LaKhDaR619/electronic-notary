import React, { useState } from "react";

import DonutChart from "react-donut-chart";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

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
              height={400}
              width={400}
            />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
