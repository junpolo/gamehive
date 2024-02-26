import { Grid, Stack } from "@mui/material";

import { FeatureGames, Leaderboard } from "@components";
import GameListScene from "./components/scenes/game-list-scene";

const DashboardScene = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Stack spacing={4}>
          <FeatureGames />
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
