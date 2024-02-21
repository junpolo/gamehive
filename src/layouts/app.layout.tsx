import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <main>
      <Typography variant="h3">App Layout</Typography>
      <Outlet />
    </main>
  );
};
