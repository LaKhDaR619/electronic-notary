import React, { useState } from "react";
import MakeshiftDrawer from "./MakeshiftDrawer ";

import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import { Divider } from "@material-ui/core";

export default function SideBar({ open }) {
  return (
    <MakeshiftDrawer
      open={open}
      items={[
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
      ]}
    />
  );
}
