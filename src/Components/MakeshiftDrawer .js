import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Slide from "@material-ui/core/Slide";

import { Avatar, Paper, Typography } from "@material-ui/core";
import { Row, Item } from "@mui-treasury/components/flex";

const useStyles = makeStyles((theme) => ({}));

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

export default function MakeshiftDrawer({ open, items }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <Slide direction="right" in={open} mountOnEnter unmountOnExit>
      <Paper elevation={3}>
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
        <List
          component="nav"
          aria-label="main mailbox folders"
          style={{ height: "calc(100vh - 129px)", overflowY: "scroll" }}
        >
          {items.map((item, index) => (
            <ListItem
              button
              selected={false}
              onClick={(event) => handleListItemClick(event, 0)}
              key={index}
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
      </Paper>
    </Slide>
  );
}
