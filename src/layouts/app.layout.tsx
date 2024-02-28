import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { AppNavBar, AppBar } from "@components";

export const AppLayout = () => {
  return (
    <Box display="flex" flexDirection="row">
      <AppBar />
      <Box
        component="main"
        display="flex"
        flexDirection="column"
        flexGrow={1}
        paddingX="16px"
        maxWidth="-webkit-fill-available"
        sx={{
          paddingBottom: { xs: "80px", md: "50px" },
          paddingTop: { xs: "90px", sm: "100px", lg: "100px" },
        }}
      >
        <Container maxWidth={"xl"}>
          <Outlet />
        </Container>
      </Box>
      <AppNavBar />
    </Box>
  );
};
