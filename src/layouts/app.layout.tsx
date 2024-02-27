import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { AppNavBar, AppDrawer, AppBar } from "@components";

export const AppLayout = () => {
  return (
    <Box display="flex" flexDirection="row">
      {/* <AppBar /> */}
      <AppDrawer />
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        flexGrow={1}
        paddingX="16px"
        maxWidth="-webkit-fill-available"
        sx={{
          paddingBottom: { xs: "80px", md: "50px" },
          paddingTop: { xs: "50px", sm: "80px", lg: "50px" },
        }}
      >
        <Container>
          <Outlet />
        </Container>
      </Box>
      <AppNavBar />
    </Box>
  );
};
