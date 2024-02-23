import * as React from "react";
import { makeStyles, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const AppDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          {/* <TextField sx={{ display: "flex", height: 50 }} /> */}
        </Toolbar>
      </AppBar>
      <Drawer
        // sx={{
        //   width: drawerWidth,
        //   flexShrink: 0,
        //   "& .MuiDrawer-paper": {
        //     width: drawerWidth,
        //     boxSizing: "border-box",
        //   },
        // }}
        variant="permanent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            backgroundImage:
              "linear-gradient(to top, #ffc100 0%, #ff8542 100%)",
            borderWidth: 0,
            borderRadius: 7,
            marginLeft: 5,
            height: "85%",
            marginTop: 10,
            padding: 1,
          },
        }}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader> */}
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
                  <HomeIcon sx={{ fontSize: 30 }} />
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
                  <LeaderboardIcon sx={{ fontSize: 30 }} />
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
                  <LogoutIcon sx={{ fontSize: 30 }} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Grid>
        </List>
      </Drawer>
    </Box>
  );
};
