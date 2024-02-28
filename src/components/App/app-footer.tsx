import { Grid, Typography } from "@mui/material";
import React from "react";

const footerHeight = 300;
const footerEltMarginTop = 15;

export const AppFooter = () => {
  return (
    <Grid
      md={12}
      xs={12}
      sx={{
        width: "100%",
        height: `${footerHeight + footerEltMarginTop}px`,
        marginTop: "30px",
      }}
    >
      <Typography>ahaha</Typography>
    </Grid>
  );
};
