import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Avatar, Paper, SwipeableDrawer } from "@material-ui/core";
import { Item, Row } from "@mui-treasury/components/flex";
import Main from "./Main";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const { items, mobileOpen, handleDrawerToggle } = props;

  const PersonItem = ({ src, name, email }) => {
    return (
      <Row gap={2} alignItems="center">
        <Item>
          <Avatar src={src} style={{ width: "46px", height: "46px" }} />
        </Item>
        <Item alignItems="center">
          <Typography style={{ lineHeight: 1, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            style={{ lineHeight: 1.6 }}
          >
            {email}
          </Typography>
        </Item>
      </Row>
    );
  };

  const drawer = (
    <>
      <Row gap={2} alignItems="center" height="50px">
        <Item>
          <img
            src={require("../images/profile.jpg")}
            style={{ height: "30px" }}
          ></img>
        </Item>
        <Item>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            Electronic Notary
          </Typography>
        </Item>
      </Row>
      <Divider />
      <PersonItem
        name="Khalloufi Amar"
        email="s.ferguson@gmail.com"
        src={require("../images/profile.jpg")}
      />
      <List style={{ height: "100%", overflowY: "scroll" }}>
        {items.map((item, index) => (
          <ListItem button selected={false} key={index}>
            <ListItemIcon style={{ minWidth: "40px" }}>
              {item.icon ? item.icon : null}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                style: { fontSize: "13px", fontWeight: "bold" },
              }}
            />
          </ListItem>
        ))}
      </List>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Main handleDrawerToggle={handleDrawerToggle} />
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
