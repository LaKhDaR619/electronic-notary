import React, { useState } from "react";

import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Main from "./Components/Main";
import ResponsiveDrawer from "./Components/ResponsiveDrawer";

function App() {
  const items = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { text: "Documents", icon: <DescriptionOutlinedIcon /> },
    { text: "Request" },
    { text: "Sent" },
    { text: "Waiting" },
    { text: "Rejected" },
    { text: "Completed" },
    { text: "Settings", icon: <MailOutlineOutlinedIcon /> },
    { text: "Profile" },
    { text: "Full name" },
    { text: "Initials" },
    { text: "Stamp" },
    { text: "Public key" },
    { text: "Signature" },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Responsive Drawer + Content
  return (
    <ResponsiveDrawer
      items={items}
      mobileOpen={mobileOpen}
      handleDrawerToggle={handleDrawerToggle}
    />
  );
}

export default App;
