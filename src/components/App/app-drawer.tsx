import { useTheme } from "@mui/material/styles";
import { Avatar, Grid, Tooltip, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LogoutIcon from "@mui/icons-material/Logout";

import { Logo } from "../Logo";

export const AppDrawer = () => {
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: 0,
          left: 0,
          paddingLeft: 5,
          paddingTop: 5,
        }}
      >
        <Logo />
      </Box>
      <Drawer
        variant={isScreenLarge ? "permanent" : "temporary"}
        anchor={"left"}
        PaperProps={{
          sx: {
            borderWidth: 0,
            borderRadius: 7,
            marginLeft: 5,
            height: "85%",
            marginTop: 13,
            padding: 1,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          },
        }}
      >
        <List
          sx={{
            height: "100%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid>
            <ListItem disablePadding sx={{ padding: 0.2 }}>
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Dashboard">
                    <HomeIcon sx={{ fontSize: 30, color: "#ffc100" }} />
                  </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ padding: 0.2 }}>
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Analytics">
                    <LeaderboardIcon sx={{ fontSize: 30, color: "#ffc100" }} />
                  </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Grid>
          <Grid>
            <ListItem disablePadding sx={{ padding: 0.2 }}>
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Avatar sx={{ bgcolor: "orange" }}>C</Avatar>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ padding: 0.2 }}>
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Logout">
                    <LogoutIcon sx={{ fontSize: 30, color: "#ffc100" }} />
                  </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Grid>
        </List>
      </Drawer>
    </Box>
  );
};
