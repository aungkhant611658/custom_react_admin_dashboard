import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { sidebarMenu } from "../../data/dummy";
import "./SidebarMenu.scss";

const SidebarMenu = ({ open }) => {
  return (
    <>
      {sidebarMenu.map((item) => (
        <div key={item.title} className="sidebarMenu">
          <p className="title">{item.title}</p>
          {item.links.map((link) => (
            <ListItem key={link.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider className="menuDivider" />
        </div>
      ))}
    </>
  );
};

export default SidebarMenu;
