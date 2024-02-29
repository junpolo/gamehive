import { Grid, Stack } from "@mui/material";

import { FeatureGames, Leaderboard, Summary } from "@components";
import GameListScene from "./components/scenes/game-list-scene";

const DashboardScene = () => {
  return (
    <Grid container spacing={{ xs: 4, md: 5 }}>
      <Grid item lg={8} xs={12}>
        <Stack spacing={3}>
          <FeatureGames />
          <Summary />
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
