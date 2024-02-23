import { Outlet } from "react-router-dom";
import { AppDrawer } from "@/components/App/app-drawer";
import { Grid } from "@mui/material";

export const AppLayout = () => {
  return (
    <main>
      <Grid>
        <AppDrawer />
      </Grid>

      <Outlet />
    </main>
  );
};
