import React from "react";

import { Button, Divider, Grid, InputBase } from "@material-ui/core";

import { Item, Row } from "@mui-treasury/components/flex";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MainContent from "./MainContent";

export default function Main() {
  return (
    <div>
      <Row
        height="50px"
        gap={2}
        alignItems="center"
        style={{ background: "white" }}
      >
        <Item grow>
          <Row alignItems="center">
            <Item>
              <SearchIcon />
            </Item>
            <Item grow>
              <InputBase
                placeholder="Global Search"
                inputProps={{ "aria-label": "search" }}
                color="white"
              />
            </Item>
          </Row>
        </Item>
        <Item position="right">
          <NotificationsNoneOutlinedIcon />
        </Item>
      </Row>
      <Divider />
      <MainContent />
    </div>
  );
}
