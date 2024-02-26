import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import { AppDrawer, AppNavBar } from "@components";

export const AppLayout = () => {
  return (
    <Grid>
      <AppDrawer />
      <AppNavBar />
      <Outlet />
    </Grid>
  );
};
