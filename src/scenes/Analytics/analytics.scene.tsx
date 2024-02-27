import { Grid } from "@mui/material";

import {
  MostPlayed,
  PopularGenres,
  AnnualSales,
  OverallStats,
} from "./components";

const AnalyticsScene = () => {
  return (
    <Grid container spacing={3}>
      <OverallStats />

      <Grid item xs={12} md={6} lg={7}>
        <MostPlayed />
      </Grid>

      <Grid item xs={12} md={6} lg={5}>
        <PopularGenres />
      </Grid>

      <Grid item xs={12}>
        <AnnualSales />
      </Grid>
    </Grid>
  );
};

export default AnalyticsScene;
