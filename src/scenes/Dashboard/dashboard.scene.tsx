import { Grid, Stack } from "@mui/material";

import { FeatureGames, Leaderboard } from "@components";
import GameListScene from "./components/scenes/game-list-scene";

const DashboardScene = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      spacing={{ xs: 5, md: 10 }}
      p={5}
      pt={{ xs: 13 }}
    >
      <Grid item md={6} xs={12}>
        <Stack spacing={2}>
          <FeatureGames />
          <GameListScene />
          <GameListScene />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Leaderboard />
      </Grid>
    </Grid>
  );
};

export default DashboardScene;
