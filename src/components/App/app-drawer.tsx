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
} from "@mui/material";
import { Home, Leaderboard, Logout } from "@mui/icons-material";

import { Logo } from "../Logo";
import { useNavigate } from "react-router";
import { APP_PATH } from "@core/routers";

export const AppDrawer = () => {
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();

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
            <ListItem
              disablePadding
              sx={{ padding: 0.2 }}
              onClick={() => navigate(APP_PATH.dashboard)}
            >
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Dashboard" placement="right">
                    <Home sx={{ fontSize: 30, color: "#ffc100" }} />
                  </Tooltip>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ padding: 0.2 }}
              onClick={() => navigate(APP_PATH.analytics)}
            >
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Tooltip title="Analytics" placement="right">
                    <Leaderboard sx={{ fontSize: 30, color: "#ffc100" }} />
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
                    <Logout sx={{ fontSize: 30, color: "#ffc100" }} />
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
