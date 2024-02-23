import { FeatureGames, Leaderboard } from "@/components";
import { Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const DashboardScene = () => {
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      padding={3}
    >
      <Typography variant="h3">App Layout</Typography>
      <Outlet />
      <Grid
        display={"flex"}
        padding={3}
        gap={8}
        alignItems={"flex-start"}
        justifyContent={"center"}
      >
        <Grid container width={650}>
          <FeatureGames />
        </Grid>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          width={450}
        >
          <Leaderboard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardScene;
