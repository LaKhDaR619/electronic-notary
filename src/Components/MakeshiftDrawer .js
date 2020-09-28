import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";
import InboxIcon from "@material-ui/icons/Inbox";

import { Avatar, Paper, Typography } from "@material-ui/core";
import { Row, Item } from "@mui-treasury/components/flex";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const PersonItem = ({ src, name, email }) => {
  return (
    <Row gap={2} alignItems="center">
      <Item>
        <Avatar src={src} style={{ width: "46px", height: "46px" }} />
      </Item>
      <Item alignItems="center">
        <Typography variant="h7" style={{ lineHeight: 1, fontWeight: "bold" }}>
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

export default function MakeshiftDrawer({ open, items }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <Slide
      direction="right"
      in={open}
      mountOnEnter
      unmountOnExit
      style={{ width: "100%" }}
    >
      <Paper style={{ height: "100vh" }} elevation={3}>
        <div className={classes.root}>
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
          <List component="nav" aria-label="main mailbox folders">
            {items.map((item) => (
              <ListItem
                button
                selected={false}
                onClick={(event) => handleListItemClick(event, 0)}
              >
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
        </div>
      </Paper>
    </Slide>
  );
}
