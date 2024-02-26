import { Outlet } from "react-router-dom";
import { AppDrawer } from "@components/App/app-drawer";
import { Grid } from "@mui/material";
import { AppNavBar } from "@components/App/app-bottom-nav";

export const AppLayout = () => {
  return (
    <Grid>
      <AppDrawer />
      <AppNavBar />
      <Outlet />
    </Grid>
  );
};
