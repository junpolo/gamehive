import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

import { AppNavBar, AppDrawer, AppBar } from "@components";

export const AppLayout = () => {
  return (
    <Grid>
      <AppDrawer />
      <AppNavBar />
      {/* <AppBar /> */}
      <Outlet />
    </Grid>
  );
};
