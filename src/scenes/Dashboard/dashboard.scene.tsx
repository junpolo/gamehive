import { Grid, Stack } from "@mui/material";

import { FeatureGames, Leaderboard } from "@components";
import GameListScene from "./components/scenes/game-list-scene";
import { SummaryScene } from "./components/scenes/summary.scene";

const DashboardScene = () => {
  return (
    <Grid container spacing={{ xs: 4, md: 5 }}>
      <Grid item lg={8} xs={12}>
        <Stack spacing={3}>
          <FeatureGames />
          <SummaryScene />
          <GameListScene />
        </Stack>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Stack spacing={3}>
          <Leaderboard />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default DashboardScene;
