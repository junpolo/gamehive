import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <main>
      <Typography variant="h3">Home Layout</Typography>
      <Outlet />
    </main>
  );
};
