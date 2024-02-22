import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { FeatureGames } from "@components/dashboard-featured-games";
import { Leaderboard } from "@/components/dashboard-leaderboard";

export const AuthLayout = () => {
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Outlet />
      <AppBar position="static" variant="outlined">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container display={"flex"} justifyContent={"center"}>
        <Grid
          item
          justifyContent={"center"}
          padding={3}
          alignItems={"center"}
          width={650}
        >
          <FeatureGames />
        </Grid>
        <Grid padding={3} width={450}>
          <Leaderboard />
        </Grid>
      </Grid>
    </Grid>
  );
};
