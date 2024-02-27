import {
  useTheme,
  ListItemButton,
  ListItemIcon,
  ListItem,
  List,
  CssBaseline,
  Box,
  Drawer,
  Avatar,
  Grid,
  Tooltip,
  useMediaQuery,
  Toolbar,
  AppBar as MUIAppBar,
  useScrollTrigger,
} from "@mui/material";
import { Home, Leaderboard, Logout } from "@mui/icons-material";

import { Logo } from "../Logo";
import React from "react";

const BackdropScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    sx: {
      boxShadow: "none",
      backdropFilter: trigger ? "blur(3px)" : "none",
      backgroundColor: trigger ? "#f4f6f8cc" : "none",
      borderRadius: 0,
      transition: "background-color 0.3s",
    },
  });
};

export const AppBar = () => {
  const theme = useTheme();

  return (
    <BackdropScroll>
      <MUIAppBar
        component="header"
        sx={{
          backgroundColor: "red",
          boxShadow: "none",
          display: "block",
        }}
      >
        <Toolbar className="img">
          <Logo />
        </Toolbar>
      </MUIAppBar>
    </BackdropScroll>
  );
};
