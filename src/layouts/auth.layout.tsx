import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main>
      <Typography>Auth Layout</Typography>
      <Outlet />
    </main>
  );
};
