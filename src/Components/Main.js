import React from "react";

import {
  makeStyles,
  Divider,
  Grid,
  InputBase,
  IconButton,
} from "@material-ui/core";

import { Item, Row } from "@mui-treasury/components/flex";

import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MainContent from "./MainContent";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  Appbar: {
    position: "fixed",
    top: 0,
    zIndex: "500",
    background: "white",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - 300px)", // 300px = drawerWidth
    },
  },
}));

export default function Main({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <div style={{ flexGrow: 1 }}>
      <div className={classes.Appbar}>
        <Row height="50px" gap={2} alignItems="center">
          <Item grow>
            <Row alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Item>
                <SearchIcon />
              </Item>
              <Item grow>
                <InputBase
                  placeholder="Global Search"
                  inputProps={{ "aria-label": "search" }}
                  color="primary"
                />
              </Item>
            </Row>
          </Item>
          <Item position="right">
            <NotificationsNoneOutlinedIcon />
          </Item>
        </Row>
        <Divider />
      </div>

      <MainContent />
    </div>
  );
}
