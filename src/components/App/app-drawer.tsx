import {
  useTheme,
  ListItemButton,
  ListItemIcon,
  ListItem,
  List,
  Drawer,
  Avatar,
  Grid,
  Tooltip,
  useMediaQuery,
  Toolbar,
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
    <Drawer
      variant={isScreenLarge ? "permanent" : "temporary"}
      anchor={"left"}
      sx={{
        width: 230,
      }}
      PaperProps={{
        sx: {
          overflow: "visible",
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
      <Toolbar
        className="img"
        sx={{
          display: "flex",
          position: "absolute",
          top: -110,
          left: -20,
          paddingLeft: 5,
          paddingTop: 5,
        }}
      >
        <Logo />
      </Toolbar>
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
            <Tooltip title="Dashboard" placement="right">
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Home sx={{ fontSize: 30, color: "#ffc100" }} />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ padding: 0.2 }}
            onClick={() => navigate(APP_PATH.analytics)}
          >
            <Tooltip title="Analytics" placement="right">
              <ListItemButton sx={{ borderRadius: 5, padding: 1 }}>
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Leaderboard sx={{ fontSize: 30, color: "#ffc100" }} />
                </ListItemIcon>
              </ListItemButton>
            </Tooltip>
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
  );
};
