import React from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Avatar,
  Tooltip,
  Toolbar,
  AppBar as MUIAppBar,
  useScrollTrigger,
  IconButton,
  TextField,
  MenuItem,
  Typography,
  Menu,
  Chip,
  Divider,
} from "@mui/material";
import { Home, Leaderboard, ManageSearch } from "@mui/icons-material";

import { Logo } from "../Logo";
import { APP_PATH } from "@core/routers";

const BackdropScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    sx: {
      boxShadow: "none",
      backdropFilter: trigger ? "blur(3px)" : "none",
      backgroundColor: trigger ? "#e7e0e015" : "none",
      borderRadius: 0,
      transition: "background-color 0.3s",
    },
  });
};

export const AppBar = () => {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box className="img" onClick={() => navigate(APP_PATH.root)}>
            <Logo />
          </Box>
          <Box gap={1} display={{ md: "flex", xs: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TextField
                size="small"
                sx={{ width: 300 }}
                placeholder="Search...."
              />
            </Box>
            <Tooltip title="Home">
              <IconButton onClick={() => navigate(APP_PATH.dashboard)}>
                <Home sx={{ fontSize: 30, color: "#ffc100" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Leaderboard">
              <IconButton onClick={() => navigate(APP_PATH.analytics)}>
                <Leaderboard sx={{ fontSize: 30, color: "#ffc100" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Catalog">
              <IconButton onClick={() => navigate(APP_PATH.profile)}>
                <ManageSearch sx={{ fontSize: 30, color: "#ffc100" }} />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ height: 35, width: 35, bgcolor: "#ffc100" }}
                  alt="Remy Sharp"
                  src="https://m.media-amazon.com/images/M/MV5BZjIwMzc0MDQtZjg0OC00MjRmLTgwZTItOWViYjdlMTRmYjQwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box
                sx={{
                  padding: 1,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  width: 180,
                }}
              >
                <Typography variant="subtitle2">Taylor Swift</Typography>
                <Chip
                  sx={{ borderRadius: 2 }}
                  size="small"
                  color="primary"
                  label={<Typography variant="caption">Admin</Typography>}
                />
                <Divider />
                <MenuItem
                  sx={{ borderRadius: 3 }}
                  onClick={() => {
                    navigate(APP_PATH.profile);
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem sx={{ borderRadius: 3 }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </MUIAppBar>
    </BackdropScroll>
  );
};
